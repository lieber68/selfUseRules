# 黑名单

## 前言

本项目的黑名单分流规则由爬虫程序自动维护。

定时爬取互联网上开源的黑名单分流规则，将其进行清洗、去重、合并、优化后，形成单一的分流规则文件，旨在解决引用大量外部规则造成规则重复的问题。

**黑名单指被XXX或国内直连非常慢的网址，等同于Proxy，建议直接使用Proxy分流规则，此项因为历史原因保留。**


最后检查时间：2021-01-07 23:38:12。

## 规则统计

总计规则：770 条。

各类型规则统计：

| 类型 | 数量(条) |
| ---- | ---- |
| DOMAIN-SUFFIX | 694 |
| USER-AGENT | 3 |
| DOMAIN | 4 |
| DOMAIN-KEYWORD | 12 |
| IP-CIDR | 57 |
## 配置说明

实时版：爬虫程序定时更新，更新频率高，能尽快同步数据源变化

稳定版：不定时手动更新，更新频率低，稳定性好

### Loon 
实时版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList.list

稳定版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Loon/BlackList/BlackList.list

## 重复统计

黑名单分流规则，与本项目其他分流规则重复情况统计。

点击重复数量可以查看重复规则明细。

| 名称 | 数量 | 重复 | 重合度 |
| ---- | ---- | ---- | ------ |
|  [Adobe](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Adobe)    | 34   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   20.59% |
|  [Advertising](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Advertising)    | 55231   | [23](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   0.04% |
|  [AdvertisingTest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/AdvertisingTest)    | 73052   | [28](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   0.04% |
|  [AdvertisingLite](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/AdvertisingLite)    | 25934   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   0.03% |
|  [Apple](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Apple)    | 50   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   2.0% |
|  [AppleBlock](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/AppleBlock)    | 4   | [4](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   100.0% |
|  [AppleTV](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/AppleTV)    | 7   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   14.29% |
|  [China](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/China)    | 689   | [22](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   3.19% |
|  [ChinaTest](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/ChinaTest)    | 72527   | [22](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   0.03% |
|  [Cloudflare](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Cloudflare)    | 22   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   4.55% |
|  [Facebook](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Facebook)    | 39   | [20](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   51.28% |
|  [Epic](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Epic)    | 2   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   50.0% |
|  [WildRift](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/WildRift)    | 3   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   66.67% |
|  [Game](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Game)    | 64   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   4.69% |
|  [Google](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Google)    | 111   | [41](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   36.94% |
|  [YouTube](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/YouTube)    | 13   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   15.38% |
|  [Microsoft](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Microsoft)    | 99   | [13](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   13.13% |
|  [OneDrive](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/OneDrive)    | 17   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   5.88% |
|  [Niconico](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Niconico)    | 5   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   40.0% |
|  [PotatoChat](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/PotatoChat)    | 3   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   100.0% |
|  [KakaoTalk](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/KakaoTalk)    | 10   | [9](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   90.0% |
|  [Line](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Line)    | 23   | [20](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   86.96% |
|  [Global](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Global)    | 1290   | [675](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   52.33% |
|  [GlobalMedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/GlobalMedia)    | 1145   | [18](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   1.57% |
|  [Github](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Github)    | 6   | [2](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   33.33% |
|  [Spotify](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Spotify)    | 9   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   11.11% |
|  [Spark](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Spark)    | 5   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   60.0% |
|  [Scholar](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Scholar)    | 76   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   1.32% |
|  [TestFlight](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/TestFlight)    | 3   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   33.33% |
|  [Twitter](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Twitter)    | 11   | [7](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   63.64% |
|  [Proxy](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Proxy)    | 28160   | [758](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   2.69% |
|  [Wikipedia](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Wikipedia)    | 12   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   25.0% |
|  [Whatsapp](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Whatsapp)    | 21   | [3](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   14.29% |
|  [TeamViewer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/TeamViewer)    | 10   | [1](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   10.0% |
|  [Amazon](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Amazon)    | 26   | [19](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   73.08% |
|  [Developer](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Loon/Developer)    | 23   | [8](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Loon/BlackList/BlackList_Repeat.list)   |   34.78% |
### 特别说明
程序在实际运算时，会根据DOMAIN、DOMAIN-SUFFIX、IP-CIDR、IP-CIDR6间的包含关系进行去重，而出于运行效率考虑，重复规则只统计纯文本匹配，所以可能与实际效果有所出入，仅供参考。

## 数据来源

本项目的黑名单分流规则的数据来自以下链接，通常已涵盖所有数据来源的分流规则。如果你正在使用这些分流规则，建议不要与本项目的黑名单分流规则混合使用，以免造成规则重复。

- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/AppleBlock/AppleBlock.list
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/BlackList/BlackList.list
- https://raw.githubusercontent.com/lhie1/Rules/master/Surge/Surge%203/Provider/Proxy.list


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

欢迎通过[issues](https://github.com/blackmatrix7/ios_rule_script/issues/new)提交反馈，共同完善本项目的黑名单分流规则。

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