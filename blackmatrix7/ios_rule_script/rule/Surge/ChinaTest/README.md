# ChinaTest

## 前言

本项目的ChinaTest分流规则由爬虫程序自动维护。

定时爬取互联网上开源的ChinaTest分流规则，将其进行清洗、去重、合并、优化后，形成单一的分流规则文件，旨在解决引用大量外部规则造成规则重复的问题。



最后检查时间：2021-02-08 02:42:31.165390。

## 规则统计

总计规则：71495 条。

各类型规则统计：

| 类型 | 数量(条) |
| ---- | ---- |
| DOMAIN-SUFFIX | 71354 |
| USER-AGENT | 33 |
| DOMAIN-KEYWORD | 13 |
| DOMAIN | 86 |
| IP-CIDR | 4 |
| IP-CIDR6 | 4 |
| GEOIP | 1 |
## 配置说明

实时版：爬虫程序定时更新，更新频率高，能尽快同步数据源变化

稳定版：不定时手动更新，更新频率低，稳定性好

### Surge 
实时版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest.list

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Domain.list

稳定版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Surge/ChinaTest/ChinaTest.list

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Surge/ChinaTest/ChinaTest_Domain.list

如果稳定版无法访问 ，可能是尚未从实时版的分支合并，建议您先使用实时版，或等待下次稳定版分支合并。

### 特别说明

ChinaTest.list请使用RULE-SET。

ChinaTest_Domain.list请使用DOMAIN-SET。

## 重复统计

当前分流规则，已包含以下子规则：

- China

除非特殊需求，否则不建议重复引用。


当前分流规则，与本项目其他分流规则重复情况统计(点击重复数量可查看明细)。



| 名称 | 数量 | 重复 | 重合度 |
| ---- | ---- | ---- | ------ |
|  [DanDanZan](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/DanDanZan)    | 7   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   100.0% |
|  [LanZouYun](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/LanZouYun)    | 6   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   100.0% |
|  [YiChe](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/YiChe)    | 5   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   100.0% |
|  [China](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/China)    | 693   | [690](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   99.57% |
|  [CEB](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/CEB)    | 15   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   93.33% |
|  [XieCheng](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/XieCheng)    | 29   | [25](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   86.21% |
|  [MeiTuan](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/MeiTuan)    | 7   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   85.71% |
|  [OnePlus](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/OnePlus)    | 7   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   85.71% |
|  [Sony](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Sony)    | 6   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   83.33% |
|  [Scholar](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Scholar)    | 76   | [60](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   78.95% |
|  [4399](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/4399)    | 13   | [10](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   76.92% |
|  [Xunlei](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Xunlei)    | 8   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   75.0% |
|  [Dedao](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Dedao)    | 8   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   75.0% |
|  [FengXiaWangLuo](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/FengXiaWangLuo)    | 8   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   75.0% |
|  [TongCheng](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/TongCheng)    | 8   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   75.0% |
|  [Mojitianqi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Mojitianqi)    | 7   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   71.43% |
|  [BOC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/BOC)    | 15   | [10](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   66.67% |
|  [YYeTs](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/YYeTs)    | 21   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   66.67% |
|  [ICBC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ICBC)    | 29   | [19](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   65.52% |
|  [OPPO](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/OPPO)    | 34   | [22](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   64.71% |
|  [ChunYou](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ChunYou)    | 39   | [25](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   64.1% |
|  [DingTalk](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/DingTalk)    | 11   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   63.64% |
|  [FengHuangWang](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/FengHuangWang)    | 8   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   62.5% |
|  [HunanTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/HunanTV)    | 8   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   62.5% |
|  [AliPay](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/AliPay)    | 13   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   61.54% |
|  [LeTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/LeTV)    | 13   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   61.54% |
|  [Teambition](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Teambition)    | 10   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   60.0% |
|  [UPYun](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/UPYun)    | 16   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   56.25% |
|  [115](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/115)    | 9   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   55.56% |
|  [CITIC](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/CITIC)    | 27   | [15](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   55.56% |
|  [GaoDe](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/GaoDe)    | 9   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   55.56% |
|  [FeiZhu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/FeiZhu)    | 20   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   55.0% |
|  [RuanMei](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/RuanMei)    | 22   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   54.55% |
|  [XueQiu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/XueQiu)    | 11   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   54.55% |
|  [TianYaForum](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/TianYaForum)    | 13   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   53.85% |
|  [ChinaMobile](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ChinaMobile)    | 28   | [15](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   53.57% |
|  [DiDi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/DiDi)    | 25   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   52.0% |
|  [AsianMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/AsianMedia)    | 27   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   51.85% |
|  [Tencent](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Tencent)    | 294   | [150](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   51.02% |
|  [TeamViewer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/TeamViewer)    | 10   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [178](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/178)    | 22   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [56](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/56)    | 10   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [HeMa](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/HeMa)    | 12   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [Mogujie](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Mogujie)    | 10   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [QingCloud](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/QingCloud)    | 12   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [YiXiaKeJi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/YiXiaKeJi)    | 14   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   50.0% |
|  [CCB](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/CCB)    | 13   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   46.15% |
|  [Ku6](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Ku6)    | 11   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   45.45% |
|  [HuanJu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/HuanJu)    | 20   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   45.0% |
|  [SFExpress](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/SFExpress)    | 20   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   45.0% |
|  [58TongCheng](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/58TongCheng)    | 49   | [22](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   44.9% |
|  [YunFanJiaSu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/YunFanJiaSu)    | 31   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   38.71% |
|  [Eleme](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Eleme)    | 13   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   38.46% |
|  [NetEase](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/NetEase)    | 97   | [37](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   38.14% |
|  [QiNiuYun](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/QiNiuYun)    | 51   | [19](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   37.25% |
|  [KouDaiShiShang](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/KouDaiShiShang)    | 22   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   36.36% |
|  [WangSuKeJi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/WangSuKeJi)    | 189   | [68](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   35.98% |
|  [SteamCN](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/SteamCN)    | 14   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   35.71% |
|  [JiGuangTuiSong](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/JiGuangTuiSong)    | 17   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   35.29% |
|  [LeJu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/LeJu)    | 23   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   34.78% |
|  [JingDong](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/JingDong)    | 230   | [79](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   34.35% |
|  [Sina](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Sina)    | 101   | [32](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   31.68% |
|  [51Job](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/51Job)    | 19   | [6](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   31.58% |
|  [XianYu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/XianYu)    | 16   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   31.25% |
|  [ZhangYue](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ZhangYue)    | 26   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   30.77% |
|  [ByteDance](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ByteDance)    | 202   | [62](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   30.69% |
|  [BiliBili](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/BiliBili)    | 62   | [19](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   30.65% |
|  [Microsoft](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Microsoft)    | 101   | [30](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   29.7% |
|  [PingAn](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/PingAn)    | 27   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   29.63% |
|  [360](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/360)    | 259   | [76](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   29.34% |
|  [ChinaUnicom](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ChinaUnicom)    | 24   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   29.17% |
|  [Himalaya](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Himalaya)    | 18   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   27.78% |
|  [iQIYI](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/iQIYI)    | 48   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   27.08% |
|  [ChinaMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ChinaMedia)    | 228   | [61](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   26.75% |
|  [Baidu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Baidu)    | 265   | [70](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   26.42% |
|  [PPTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/PPTV)    | 19   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   26.32% |
|  [Hijacking](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Hijacking)    | 219   | [55](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   25.11% |
|  [Steam](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Steam)    | 32   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   25.0% |
|  [EastMoney](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/EastMoney)    | 33   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   24.24% |
|  [Huawei](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Huawei)    | 128   | [31](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   24.22% |
|  [ChinaTelecom](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/ChinaTelecom)    | 83   | [19](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   22.89% |
|  [WiFiMaster](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/WiFiMaster)    | 62   | [14](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   22.58% |
|  [UCloud](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/UCloud)    | 37   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   21.62% |
|  [Alibaba](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Alibaba)    | 1222   | [263](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   21.52% |
|  [17173](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/17173)    | 57   | [12](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   21.05% |
|  [CaiXinChuanMei](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/CaiXinChuanMei)    | 24   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   20.83% |
|  [Sohu](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/Sohu)    | 53   | [11](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   20.75% |
|  [KuangShi](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge/KuangShi)    | 25   | [5](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaTest/ChinaTest_Repeat.list)   |   20.0% |
### 特别说明
程序在实际运算时，会根据DOMAIN、DOMAIN-SUFFIX、IP-CIDR、IP-CIDR6间的包含关系进行去重，而出于运行效率考虑，重复规则只统计纯文本匹配，所以可能与实际效果有所出入，仅供参考。

## 数据来源

本项目的ChinaTest分流规则的数据来自以下链接，通常已涵盖所有数据来源的分流规则。如果你正在使用这些分流规则，建议不要与本项目的ChinaTest分流规则混合使用，以免造成规则重复。

- https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/China.list
- https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/China.list
- https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/China.list
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Mainland.list
- https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Rulesets/Surge/Basic/CN.list
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/direct.txt
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/China/China.list
- https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Domestic.list
- https://raw.githubusercontent.com/lhie1/Rules/master/Surge/Surge%203/Provider/Domestic.list
- https://raw.githubusercontent.com/sve1r/Rules-For-Quantumult-X/develop/Rules/Region/China.list


感谢以上分流规则作者的辛勤付出（排名不分先后）。

如果您有更好的分流规则，欢迎提交给我，我会将它加到数据源中继续完善。

## 程序特点

### 断链处理

对于某些已删除或失效的数据源，继续使用本地缓存的文件，减少因为断链造成的影响。

### 规则过滤

通过关键字、正则、模糊匹配三种方式对规则进行过滤，以移除部分数据源中的错误规则。

### 合并去重

不仅对完全相同的规则进行去重，还会根据DOMAIN、DOMAIN-SUFFIX、IP-CIDR、IP-CIDR6等规则间的包含关系进行合并去重。

### 域名解析

对DOMAIN类型的规则进行DNS解析记录查询，丢弃连续多次无法解析的域名。

### 正则合并

通过程序对相似正则进行合并，不定时手动核验正则合并结果。

### 正则推导

通过程序对含有正则的规则，推导需要MITM的主机名，不定时手动核验推导结果。

### 正则编译

通过程序对正则类型的规则进行编译，去除无法通过编译的正则。

## 最后

### 完善规则

如果您：

1. 有更优的原始规则数据
2. 有更多的黑名单规则数据
3. 有更好的优化建议
4. 在使用分流规则时出现异常
5. 有其他问题

欢迎通过[issues](https://github.com/blackmatrix7/ios_rule_script/issues/new)提交反馈，共同完善本项目的ChinaTest分流规则。

感谢

[@fiiir](https://github.com/fiiir) [@Tartarus2014](https://github.com/Tartarus2014) [@zjcfynn](https://github.com/zjcfynn) [@chenyiping1995](https://github.com/chenyiping1995) 

提供规则数据源及改进建议

### 其他问题

爬虫开发的初衷是为满足自己几方面需求：

1. 去除混用多个去广告规则造成的重复
2. 去除多个去广告规则中某些规则
3. 多个分流规则间重复情况检查
4. 定时同步数据源更新

本项目的分流规则还是以自用为主，请不要对外宣传此分流规则。所以，还是请低调使用吧。