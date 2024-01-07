---
title: 周刊#12：历史上最热的一天
date: 2023-07-08T03:36:00+08:00
lastmod: 2023-07-08T03:36:00+08:00
category: [Weekly]
tags: [weekly]
draft: false
summary: |
 主题：高温、《我在北京送快递》、Mac文件的默认打开方式<br>
 时间：20230708 - 20230715
---

## 动态

美国缅因大学有一个全球气候模型，根据气象站、卫星数据、计算机模拟的数据，得到全球每个地点的实时气温。

[官网链接](https://climatereanalyzer.org/clim/t2_daily/)

2023 年 7 月 6 日是有纪录以来最热的一天，全球平均气温达到 17.23 摄氏度。更糟糕的是，第二名和第三名，分别是今年 7 月 5 日和 7 月 4 日。

——摘自阮一峰的[博客](https://www.ruanyifeng.com/blog/2023/07/weekly-issue-262.html)

## 阅读

#### 1.《我在北京送快递》- 胡安焉

用了一天时间看完这本《我在北京送快递》。作为一个重度网购爱好者，怎么可以不知道一个快递员的日常工作生活！看完这本书后，对快递员一天的工作生活也有了更好的认识，对快递员的工作也有了更好的理解。有时候也会遇到作者所说的那种情况：两个收货地点明明只隔了几百米，但是如果想要让快递员转送到另外一个地址就需要等上一天，其实是因为每个快递员负责的区域不同，对不同的区域，快递员可能了解的并不多，需要将货分配到之后再进行投递。

在文中的一段经历与王小波的《沉默的大多数》最后一篇文章《饮食卫生与尊严》有一些验证。对饭店卫生问题，如果一个人的尊严受到了践踏，那么他也没法尊重别人。所以才有了文中的放在泔水里的碗（呕）。

作者在文中除了做过几个公司的理货员、快递员之外，其实还做了其他的一些相关的工作，其实每份都不好做，不好挣钱。除了快递员的工作之外，我对作者开店的经历也 很有感触，明明是一个老好人，结果在开店的时候由于经营压力不得不被迫抄袭隔壁的店铺，而在自己做好之后却又被其他店铺抄袭。打工人苦啊。

文中还有一些观点：

- 很少人声称自己是完全为谋生而工作的。惯常的说法有：我对我的工作内容感兴趣，我喜欢我的工作伙伴，工作使我感到生活充实，等等。这些说法就算真实，也很片面 —— 不工作我们也同样可以从事自己感兴趣的事情。

#### 2.《蛙》 - 莫言

上上周看了三章之后搁置了。这周抽空把这本书也看完了。

关注的一位博主恋爱了！哼，生气 😠（开玩笑，我还在评论祝福了，只是有一点点，只有一点点羡慕罢了）。什么时候轮到我！

[周报 #43 - In the Mood for Love - PSEUDOYU](https://www.pseudoyu.com/zh/2023/07/10/weekly_review_20230710/)

### 3.修改 Mac 上所有代码文件的默认打开方式为 VS Code

Mac 上很多代码文件的打开方式是 XCode。Xcode 很重很不方便，修改为常用的代码编辑器 VS Code 能更为合适。当然你也可以修改的下面的代码将它改为你想要打开文件的应用程序。

[batch-modify.sh](https://gist.github.com/rxliuli/00fd29e1c01b9a11c841dead5c3b2e98)

```bash
# https://github.com/moretension/duti
brew install duti
# from https://github.com/vscode-icons/vscode-icons/blob/74220b6f8389ad5c5d9f68b2029d91460de2b374/src/iconsManifest/languages.ts#L319
filetypes=(.as .ada .prw .affect .al .ansible .g4 .any .htaccess .cls .apib .apl .applescript .adoc .asp .asm .ats .ahk .au3 .avcs .azcli .azure-pipelines.yml .bal .bat .bats .bzl .bf .bicep .bib .biml .blade.php .blitzbasic .bolt .bsq .buf.yaml .c .cal .cabal .Caddyfile .casc .cddl .ceylon .cfc .cfm .clojure .clojurescript .yml .cmake .CMakeCache.txt .cbl .ql .coffee .cfml .confluence .ckbk .cpp .h .cr .cs .css .feature .cu .pyx .dal .dart .dhall .html .diff .d .dockerfile .dtx .env .dot .dox .drl .dust .dylan .earthfile .edge .eex .es .ex .elm .erb .erl .yaml .falcon .fql .f .ftl .fs .fthtml .gspec .gml .gcode .gen .git .glsl .glyphs .gp .go .api .gd .gr .gql .gv .groovy .haml .hbs .prg .hs .haxe .hcl .helm.tpl .hjson .hlsl .hosts .http .aff .hy .hypr .icl .imba .4gl .ini .ink .iss .io .janet .java .js .jsx .jekyll .jenkins .jinja .json .jsonc .jsonnet .json5 .jl .id .k .kv .ks .kt ..kusto .tex .lat .less .flex .ly .lisp .lhs .log .lol .lsl .lua .mk .marko .mat .ms .mdx .mediawiki .mel .mmd .meson.build .mjml .pq .ep .mongo .mson .ne .nim .nimble .nix .nsi .nunjucks .m .mm .ml .o3 .w .things .pas .pddl .plan .happenings .pl .pl6 .pgsql .php .pine .requirements.txt .txt .dbgasm .ddl .polymer .pony .pcss .ps1 .prisma .pde .pro .rules .properties .proto .pug .pp .purs .arr .py .pyowo .qvs .qml .qs .r .rkt .cshtml .raml .re .red .res .rst .rex .tag .rmd .robot .rb .rs .san .sas .sbt .scad .scala .sce .scss .sdl .shader .sh .slang .ice .slim .ss .sn .eskip .tpl .snort .sol .rq .sqf .sql .nut .stan .bazel .do .stencil .html.stencil .st.css .styled .styl .svelte .swagger .swift .swig .link .sv .tt .teal .tt3 .tera .tf .sty .textile .JSON-tmLanguage .YAML-tmLanguage .Tiltfile .toit .toml .ttcn3 .tuc .twig .ts .tsx .typoscript .u .vb .wsf .vm .v .vhdl .vim .volt .vue .wai .wasm .wy .wgsl .wt .wl .wurst .wxml .xmake.lua .xml .xquery .xsl .bison .yang .zig)

for filetype in "${filetypes[@]}"
do
   duti -s com.microsoft.VSCode $filetype all
   if [ $? -ne 0 ]; then
      echo "Failed to set default program for $filetype"
   fi
done
```

上述代码删除了 .md 的打开方式

如果遇到

```bash
failed to set com.microsoft.VSCode as handler for public.html (error -54)
Failed to set default program for .html
```

可以手动更改 .html 文件的打开方式。具体为：

1. 右键 .html 文件
2. 点击 get info
3. Open with 修改为 VS Code
4. Change All

相关文档说明：

- [Launch Service API failure with specific UTI ](https://developer.apple.com/forums/thread/50029)

- https://stackoverflow.com/questions/26241689/lssetdefaultrolehandlerforcontenttype-in-yosemite

#### 4.Mac 安装非 App Store 上下载的应用程序提示`"XXX" is damaged and can't be opened. You should move it to the Trash`

命令行输入

```bash
sudo xattr -r -d com.apple.quarantine /YOUR_PATH/XXX.app
```

一般路径是：

```bash
sudo xattr -r -d com.apple.quarantine /Applications/XXX.app
```

### 5.SVG 路径动画详解

[Not a Number](https://www.nan.fyi/svg-paths)

### 6.中国的文化输出

[Chinese Tech Terms Explained In English](https://16x.engineer/2022/10/18/chinese-tech-terms.html?continueFlag=7b4df73c1abf965d61014170a9c7633d)

1. 灰度 (Huidu) - 用于将实验性新功能推出给少量用户进行测试。
2. 轮子 (Lunzi) - 描述被发明或重新发明多次的工具、库或框架。
3. 沉淀 (Chendian) - 整合过去的经验，并提出一种针对重复问题的系统解决方案。
4. 大盘 (Dapan) - 用于描述带有各种图表的仪表板，可实时监视关键系统指标或业务指标。
5. 埋点 (Maidian) - 用于嵌入跟踪代码以监视和分析用户行为。

### 7.一个五年独立创造者踩过的那些坑

[一个独立创造者的五年](https://mp.weixin.qq.com/s/x6PLSIMn_1qcKnXWPT-J-Q)

独立开发者需要避免的：

- 面向国内用户：客单价较低（相对于海外用户）、盗版严重
- 一次性收费
- 内容产品：需要生产新内容（或者提供平台让人/机器生产）

独立开发者要做的：

- 做数据：让朋友帮忙好评，让已经使用的用户帮忙好评
- 给潜在的客户 DM(direct Message)
- 内容营销：
  - 写文章
  - 做视频
  - Affiliate Program

内容营销相关资源：https://backlinko.com/content-marketing-this-year

作者也关注了 Derek Sivers 。他的那本 How To Live 给我很深的感触，其他几本书目前我还没看（想着看英文版，避免中文/双语版，难度还是有点大）。以后抽空去看看。哈哈哈作者看起来也很喜欢王小波，正好最近我也在看王小波。

越来越觉得，在网上发生共鸣的人更多。（这句话也是之前一位博主说的哈哈哈）

## 资源

### 适用于 Hugo、Hexo 的 CMS

[decap-cms](https://decapcms.org)

官方简介：A Git-based CMS for Static Site Generators。

适用于 Hugo，Hexo 等等

### 在线工具网站

[OnlineTools.com](https://onlinetools.com/)

域名很好记：OnlineTools.com。Peter Krumin 和团队创建的。

### Web3

Web 找工作：

- [WEB3 JOBS](https://web3.career)

- [WTF 学院](https://www.wtf.academy)- 中文 Web 3 学习平台

- [Alchemy University](https://university.alchemy.com/home)

- [buildspace](https://buildspace.so) - 通过实践学习

## 说说

- Learn to sell. Learn to build. If you can do both, you will be unstoppable. - Naval

  [Learn to Sell, Learn to Build](https://nav.al/build-sell)

- We rule the world. - Robert C. Martin (Uncle Bob)

  [The Obligation of the Programmer.](https://blog.cleancoder.com/uncle-bob/2014/11/15/WeRuleTheWorld.html)

## 不知道怎么分类的

- [Markdown 转 EPUB](https://products.aspose.app/words/conversion/md-to-epub)

### 学习金字塔

![](https://raw.githubusercontent.com/huyixi/Pics/main/learning_pyramid.png)
