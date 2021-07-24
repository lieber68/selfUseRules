/************************

巴哈姆特签到脚本
包含主站签到、公会签到、动画疯答题等

脚本兼容: Surge、QuantumultX、Loon、Shadowrocket、Node.js
适配过程: https://nobyda.github.io/2021/07/24/Bahamut_daily_bonus_js_example
BoxJs订阅: https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json

*************************
【 签到脚本注意事项 】:
*************************

1. 该脚本需要进入BoxJs或脚本内填写账号密码后, 方可使用.
2. 不建议在凌晨执行,因需要获取动画疯题目答案; 默认配置将在每天的早上8:00执行.
3. 如需使用Node.js运行该脚本, 则需安装got、tough-cookie模块

*************************
【 Surge & Loon 脚本配置 】:
*************************

[Script]
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js, wake-system=1, timeout=30

*************************
【 QX 1.0.10+ 脚本配置 】 :
*************************

[task_local]
0 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js, tag=巴哈姆特签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/bahamutGame.png

************************/

// 以下全局变量中的持久化接口为BoxJs预留, 以便修改
// 把兼容函数定义到$中, 以便统一调用
const $ = new Env('巴哈姆特');

// 用户名
$.uid = $.getdata('@ND_BAHA.ID') || 'YourUserName';

// 用户密码
$.pwd = $.getdata('@ND_BAHA.PW') || 'YourUserPassword';

// 是否自动签到公会，true/false，默认开启
$.needSignGuild = $.getdata('@ND_BAHA.GUILD') || true;

// 是否自动答题动画疯，true/false，默认开启 (不保证100%答题正确)
$.needAnswer = $.getdata('@ND_BAHA.ANSWER') || true;

// 为通知准备的空数组
$.notifyMsg = [];

(async function() { // 立即运行的匿名异步函数
	await BahamutLogin(); // 登录
	await BahamutGuildSign(); //签到巴哈公会
	await BahamutSign(); //签到巴哈
	await BahamutAnswer(); //动画疯答题
})().catch((e) => $.notifyMsg.push(e.message || e)) //捕获登录函数等抛出的异常, 并把原因添加到全局变量(通知)
	.finally(() => { //finally在catch之后无论有无异常都会执行
		$.msg(`巴哈姆特`, ``, $.notifyMsg.join('\n'), {
			'open-url': 'crazyanime://', //动画疯url scheme
			'media-url': 'https://cdn.jsdelivr.net/gh/NobyDa/mini@master/Color/bahamutClear.png' //通知图片
		}); //带上总结推送通知
		$.done(); //调用Surge、QX内部特有的函数, 用于退出脚本执行
	});

function BahamutLogin() { //登录函数，拿到Set-Cookie

	//登录成功: {"success":true,"userid":"DGIE","nickname":"coco","gold":152769,"gp":0,"avatar":"https:\/\/avatar2.bahamut.com.tw\/avataruserpic\/dgie.png","avatar_s":"https:\/\/avatar2.bahamut.com.tw\/avataruserpic\/dgie_s.png","lv":6}
	//账号错误: {"code":0,"message":"查無此人：SDFOUGB"}
	//密码错误: {"code":0,"message":"帳號、密碼或驗證碼錯誤！"}
	//验证码错误: {"code":0,"message":"驗證碼錯誤"}

	return $.http.post({ //使用post请求查询 (兼容函数实际上返回Promise实例对象,以便后续调用时可以实现顺序执行异步函数)
			url: 'https://api.gamer.com.tw/mobile_app/user/v3/do_login.php', //登录接口
			headers: { //请求头
				'Cookie': 'ckAPP_VCODE=6666' //Cookie中的ckAPP_VCODE为必须
			},
			//请求体放入用户名和密码，并把它uri编码
			body: `uid=${encodeURIComponent($.uid)}&passwd=${encodeURIComponent($.pwd)}&vcode=6666`
		})
		.then((resp) => { //请求成功的处理
			const body = JSON.parse(resp.body); //解析响应体json为对象
			if (body.userid) { //如果成功返回用户信息
				$.log('', `✅巴哈姆特登录成功`); // 打印日志
			} else { //否则登录失败 (例如密码错误)
				const failMsg = body.error ? body.error.message : null; //判断签到失败原因
				throw new Error(`❌登录失败\n❌${body.message||failMsg||'未知'}`); //带上原因抛出异常, 脚本结束
			}
		}) //未写catch，如果登录失败，例如无法联网、密码错误等, 则被调用该函数时的catch捕获，脚本结束
}

function BahamutSign() { //查询巴哈姆特签到Token
	return $.http.get({ //使用get方法 (Promise实例对象) 查询签到Token
			url: 'https://www.gamer.com.tw/ajax/get_csrf_token.php', // 查询Token接口
			headers: {} //请求头, 客户端将自动设置Cookie字段
		}).then(async (resp) => { //网络请求成功的处理, 实例函数带有async关键字, 表示里面有异步操作
			if (resp.body) { //如果签到Token获取成功
				$.log('', '✅获取签到令牌成功'); //打印日志
				const sign = await StartSignBahamut(resp.body); //带上Token开始签到
				$.notifyMsg.push(`主页签到: 成功, 已连续签到${sign}天`); //添加到全局变量备用 (通知)
			} else { //否则抛出异常
				throw new Error('获取签到令牌失败'); //带上原因被下面catch捕获
			}
		})
		.catch(err => {
			$.notifyMsg.push(`主页签到: ${err.message||err}`); //添加到全局变量备用 (通知)
			$.log('', `❌巴哈姆特签到失败`, `❌${err.message||err}`);
		}); // 捕获异常, 打印日志
}

function StartSignBahamut(token) { //巴哈姆特签到

	//签到成功: {"data":{"days":1,"dialog":"","prjSigninDays":0}}
	//已签过: {"error":{"code":0,"message":"今天您已經簽到過了喔","status":"","details":[]}}
	//未登录: {"error":{"code":401,"message":"尚未登入","status":"NO_LOGIN","details":[]}}
	//令牌过期: {"error":{"code":403,"message":"網頁已過期","status":"CSRF_TOKEN_ERROR","details":[]}}

	return $.http.post({ //使用post方法 (Promise实例对象) 进行签到
			url: 'https://www.gamer.com.tw/ajax/signin.php', //巴哈姆特签到接口
			headers: {}, //请求头, 客户端将自动设置Cookie字段
			body: `action=1&token=${token}` //请求体带上查询到的签到Token
		})
		.then(res => { // 网络请求成功的处理
			const body = JSON.parse(res.body); //解析响应体json为对象
			if (body.data) { // 如果签到成功 (判断预期响应格式)
				$.log('', '✅巴哈姆特签到成功', `✅已连续签到${body.data.days}天`); //打印日志
				return body.data.days; //返回签到天数
			} else { //否则签到失败
				const failMsg = body.error ? body.error.message : null; //判断签到失败原因
				throw new Error(failMsg || body.message || '未知'); //带上原因抛出异常
			}
		}); //未写catch，如果签到失败或其他错误，则被调用该函数时的catch捕获
}

function BahamutGuildSign() { //巴哈姆特查询公会列表
	if ($.needSignGuild === false || $.needSignGuild === 'false') { //如果用户选择不签到公会
		return; //退出公会签到函数
	}
	return $.http.get({ //使用get请求查询公会列表 (Promise实例对象)
			url: 'https://api.gamer.com.tw/ajax/common/topBar.php?type=forum', // 查询公会列表接口
			headers: {} //请求头, 客户端将自动设置Cookie字段
		})
		.then(async (resp) => { //网络请求成功的处理, 实例函数带有async关键字, 表示里面有异步操作
			const list = (resp.body.replace(/\n/g, '').match(/guild\.php\?g?sn=\d.+?<\/p>/g) || []) //正则过滤公会列表大致内容
				.map(n => { //使用map遍历每个大致内容
					return { //返回包含公会ID和公会名称的对象
						sn: n.split(/guild\.php\?g?sn=(\d+)/)[1], //正则进一步提取公会ID
						name: n.split(/<p>(.+?)<\/p>/)[1] //正则进一步提取公会名称
					}
				});
			if (list.length) { //过滤后, 如果包含公会列表
				$.log('', `✅获取公会列表成功`); //打印日志
				//按照公会数量进行并发签到, map结合Promise.all后可以实现并发签到并且都完成后才进行下一行操作
				const sign = await Promise.all(list.map(StartSignGuild));
				const sucs = sign.filter(n => n === 1).length; //过滤后得到成功数量
				const fail = sign.filter(n => n === 0).length; //过滤后得到失败数量
				//添加到全局变量备用 (通知)
				$.notifyMsg.push(`公会签到: ${sucs?`成功${sucs}个`:``}${sucs&&fail?`, `:``}${fail?`失败${fail}个`:``}`);
			} else {
				throw new Error('公会列表为空'); //无公会列表则抛出异常
			}
		})
		.catch(err => { //捕获异常, 打印日志
			$.notifyMsg.push(`公会签到: ${err.message || err}`); //添加到全局变量备用 (通知)
			$.log('', `❌巴哈姆特公会签到失败`, `❌${err.message || err}`); //打印日志
		});
}

function StartSignGuild(v) { //巴哈姆特公会签到

	//签到成功: {"ok":1,"msg":"本日簽到成功！獲得5貢獻度"}
	//已签过: {"error":1,"msg":"您今天已經簽到過了！"}
	//公会ID错误: {"error":1,"msg":"此公會社團不存在。"}
	//未加入公会: {"error":1,"msg":"你還不是成員，歡迎加入！"}
	//未登录: {"error":1,"msg":"請先登入"}

	return $.http.post({ //使用post方法签到公会 (Promise实例对象)
			url: 'https://guild.gamer.com.tw/ajax/guildSign.php', //公会签到接口
			headers: {}, //请求头, 客户端将自动设置Cookie字段
			body: `sn=${v.sn}` //把查询到的公会ID放进请求体
		})
		.then((res) => { //网络请求成功后的处理
			const body = JSON.parse(res.body); //解析响应体json为对象
			$.log('', `🔷<${v.name}>`, `${body.ok?`✅`:`❌`}${body.msg}`); //打印日志, 包含签到结果
			if (body.ok) { //如果签到成功
				return 1; //返回1表示成功
			} else {
				return 0; //返回0表示失败
			}
		})
		.catch(e => { //捕获异常, 打印日志
			$.log('', `🔷<${v.name}>`, `❌签到失败: ${e.message||e}`);
			return 0; //返回0表示失败
		});
}

function BahamutAnswer() { //动画疯答题

	//未答题: {"game":"灌籃高手","question":"流川楓的號碼是下列何者？","a1":"7","a2":"11","a3":"23","a4":"59","userid":"GN32964174","token":"01092fe463ab36ab47cb298e229c4f8fb298e229cc260fa7baf"}
	//已答题: {"error":1,"msg":"今日已經答過題目了，一天僅限一次機會"}
	//未登录: {"error":1,"nologin":1,"msg":"請先登入"}

	if ($.needAnswer === false || $.needAnswer === 'false') { //如果用户关闭动画疯答题
		return; //退出答题函数
	}
	return $.http.get({ //使用get方获取题目 (Promise实例对象)
			url: 'https://ani.gamer.com.tw/ajax/animeGetQuestion.php?t=' + Date.now(), //获取题目接口
			headers: {} //请求头, 客户端将自动设置Cookie字段
		})
		.then(async (res) => { //网络请求成功的处理, 实例函数带有async关键字, 表示里面有异步操作
			const r = JSON.parse(res.body); //解析响应体json为对象
			if (r.token) { //如果有题目
				$.log('', `✅获取动画疯题目成功`, ``, `🔶<${r.game}> ${r.question}`,
					`1️⃣${r.a1}`, `2️⃣${r.a2}`, `3️⃣${r.a3}`, `4️⃣${r.a4}`); //打印日志
				const article = await GetAanswerArticles(); //获取答案文章ID
				const getAnswer = await StartSearchAnswers(article); //传入文章ID, 再从文章内获取答案
				const sendAnswer = await StartBahamutAnswer(getAnswer, r.token); //传入答案和题目令牌, 开始答题
				$.notifyMsg.push(`动画答题: ${sendAnswer}`); //答题后的结果添加到全局变量备用 (通知)
			} else { //未获取到题目
				throw new Error(r.msg || `获取题目失败`); //带上原因抛出异常
			}
		})
		.catch(e => { //捕获异常, 打印日志
			$.notifyMsg.push(`动画答题: ${e.message||e||`失败`}`); //添加到全局变量备用 (通知)
			$.log('', `❌动画疯答题失败`, `❌${e.message||e}`); //打印日志
		});
}

function GetAanswerArticles() { // 从blackxblue的小屋查询含答案的文章ID
	$.log('', `🔶开始获取文章`); //打印日志
	return $.http.get({ //使用get方法获取文章ID (Promise实例对象)
			url: 'https://api.gamer.com.tw/mobile_app/bahamut/v1/home.php?owner=blackXblue&page=1', //获取文章ID接口
			headers: {}
		})
		.then((res) => { //网络请求成功后的处理
			const body = JSON.parse(res.body); //解析响应体json为对象
			const tDate = $.time('MM/dd'); //返回今日日期
			const title = (body.creation || []).filter(t => t.title.includes(tDate)); //过滤后返回今日答案文章
			if (title.length && title[0].sn) { //如果有答案文章
				$.log('', `✅获取文章成功 (${title[0].sn})`); //打印日志
				return title[0].sn; //返回文章ID
			} else { //否则带上原因抛出异常, 被调用该函数时的catch捕获
				throw new Error('今日答案未发表');
			}
		})
}

function StartSearchAnswers(id) { //获取文章内答案
	$.log('', `🔶开始获取答案`); //打印日志
	return $.http.get({ //使用get方法获取答案 (Promise实例对象)
			url: 'https://api.gamer.com.tw/mobile_app/bahamut/v1/home_creation_detail.php?sn=' + id, //获取答案接口
			headers: {}
		})
		.then((res) => { //网络请求成功后的处理
			const body = JSON.parse(res.body); //解析响应体json为对象
			const answers = body.content.split(/A:(\d)/)[1]; //正则提取答案
			if (answers) { //如果成功提取答案
				$.log('', `✅获取答案成功 (${answers})`); //打印日志
				return answers; //返回答案
			} else { //否则带上原因抛出异常, 被调用该函数时的catch捕获
				throw new Error('提取答案失败');
			}
		})
}

function StartBahamutAnswer(answer, token) { //动画疯答题

	//答题正确: {"ok":1,"gift":"恭喜您得到：300 巴幣"}
	//答题错误: {"error":1,"msg":"答題錯誤"}
	//令牌过期: {"error":1,"msg":"很抱歉！本題目已超過時效！"}
	//已答题: {"error":1,"msg":"今日已經答過題目了，一天僅限一次機會"}
	//未登录: {"error":1,"nologin":1,"msg":"請先登入"}

	$.log('', `🔶开始答题`); //打印日志
	return $.http.post({ //使用post方法提交答案 (Promise实例对象)
			url: 'https://ani.gamer.com.tw/ajax/animeAnsQuestion.php', //提交答案接口
			headers: {}, //请求头, 客户端将自动设置Cookie字段
			body: `token=${token}&ans=${answer}&t=${Date.now()}`, //请求体带上答案和答案令牌
		})
		.then((res) => { //网络请求成功后的处理
			const body = JSON.parse(res.body); //解析响应体json为对象
			if (body.ok) { //如果答题成功
				$.log('', `✅${body.gift}`); //打印奖励日志
				return body.gift; //返回奖励内容
			} else { //否则答题失败
				const failMsg = body.error ? body.error.message : null; //提取签到失败原因
				throw new Error(body.msg || failMsg || '未知'); //否则带上原因抛出异常, 被调用该函数时的catch捕获
			}
		})
}

//修改自 https://github.com/chavyleung/scripts/blob/master/Env.js 的兼容函数
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.ua="Anime/2.13.9 (tw.com.gamer.anime;build:437;iOS 14.5.0) Alamofire/5.4.1",this.logs=[],this.isMute=!1,this.isNeedRewrite=!0,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http:\/\/${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(t.headers["User-Agent"]=this.ua,delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&(t.headers["User-Agent"]=this.ua,delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:i,...r}=t;this.got[s](i,r).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","================================="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name},\u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name},\u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`${s}\u79d2`,`=================================`),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}