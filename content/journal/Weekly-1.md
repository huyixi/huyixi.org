---
title: "Weekly 1：启航"
date: 2023-04-24T02:49:00+08:00
lastmod: 2023-04-24T02:49:00+08:00
category: [Weekly]
tags: [weekly]
draft: false
---

## 动态

![wexin](https://cdn.staticaly.com/gh/huyixi/Pic@main/weixin_crash_qr.60f6egqc8igw.jpg)

使用微信扫描上面这张二维码之后，微信APP就会闪退，并报告“三方应用异常分析”。

根据 Github 用户 **[Konano ](https://github.com/Konano)**分析，这一 Bug 出现在了微信的扫码引擎中（微信团队于 2021 年在 OpenCV 开源其[扫码引擎](https://github.com/opencv/opencv)）。

如果攻击者在数据的末尾添加了一段内容为空的数据，程序就会出错。这是因为程序在读取数据时，会读取这段数据的长度（也就是字节数），但是攻击者在末尾添加的这段数据的长度为0，这就导致了程序出错。为了解决这个问题，开发者需要在读取数据的长度后再初始化变量，以确保程序能够正确读取数据。[详细内容](https://github.com/opencv/opencv_contrib/pull/3480)

## 文章

### [Moore's Law for Everything - Sam Altman](https://moores.samaltman.com)

1. This revolution will create phenomenal wealth. The price of many kinds of labor (which drives the costs of goods and services) will fall toward zero once sufficiently powerful AI “joins the workforce.”
2. The world will change so rapidly and drastically that an equally drastic change in policy will be needed to distribute this wealth and enable more people to pursue the life they want.
3. If we get both of these right, we can improve the standard of living for people more than we ever have before.

### [陆奇最新演讲实录：我的大模型世界观](https://new.qq.com/rain/a/20230423A08J7400)

[演讲 PPT](https://u2tocxb6wz.feishu.cn/file/CHvVbp7spoxcBLxE2Lcc3rclnXe)

#### 观点摘录

- 任何改变社会、改变产业的，永远是结构性改变。这个结构性改变往往是一类大型成本，从边际成本变成固定成本。

- 未来，唯一有价值的是你有多大的见解

  这一次大模型拐点会让所有服务经济中的人、蓝领基本都受影响，因为他们是模型，除非有独到见解，否则你今天所从事的服务大模型都有。下一时代典型的职业，我们认为是创业者和科学家。所以，这次变革影响每个人。它影响整个社会。

- 所有动脑筋的工作，可以降低成本、提升产能。我们目前有一个基本假设，码农成本会降低，但对码农的需求会大量增加，码农不用担心。因为对软件的需求会大量增加。

- 整个这个时代在高速地进行，速度越来越快。它是结构上决定的。势不可挡。

- 在现在看来创始人技术能力强，好像很牛、很重要，未来真的不重要。技术ChatGPT以后都能帮你做。作为创始人，越来越重要、越来越值钱的是愿力和心力。

##### 对于个人

- 学习工具，思考和探索机会，长期适当时候培养自己的 prompt engineer（提示工程师）。

#### 名词解释

- **「边际成本」**：生产或消费一个额外单位的商品或服务所需的额外成本。

  例如，假设一家公司正在生产一种产品，已经生产了100个单位，并且花费了1000元的成本。如果他们决定再生产一个单位的产品，而这个单位的成本是10元，那么这个单位的边际成本就是10元。

  **「固定成本」**：在生产或经营过程中不受生产量或销售量变化而保持不变的成本。这些成本在短期内不会因为生产数量的增加或减少而改变，而只有在长期内通过增加或减少生产规模才能被影响。

  固定成本通常是企业的基础性支出，包括租金、设备折旧、利息支出、管理人员的薪水、房租、保险费等等。这些成本与生产量的增加或减少无关，因此在短期内企业必须承担这些固定成本。

  例如，一家公司的租金是每月10000元，而无论它是否生产任何产品，这个固定成本都需要支付。因此，如果该公司在某个月内未生产任何产品，它也需要支付10000元的租金。



### [AI狂飙的时代，人还有价值吗？ - 木遥 ✖️ 不合时宜](https://open.spotify.com/episode/5Qbd81MWV9vtEddXvvBMUz?si=d65832259cab41da)

[不合时宜TheWeirdo 微信公众号上对本次博客内容的亮点摘录](https://mp.weixin.qq.com/s/7H1FrwbQvsh0HD9z90L0wg)

#### 观点摘录

- AI 在人的生活中的渗透是一个**「逐渐」**的过程。百分之百地取代你可能仍然不会发生，可是它也不需要百分之百的取代掉你，只要 50% 的取代掉你的某些工作职能，AI 就会对就业市场形成非常大的冲击。
- 我们这代人的教育重要不重要，是我刚刚所说的那种我们现有的社会结构决定的。我们认为数理化最重要，其次是文科。在我们念书的时候，理科是比文科被大家认为是更好的专业。工业革命让我们觉得文史哲相对没有数理化那么重要。但是在AI介入之后，这个结构会被打破。
- 长远来看，人工智能自己更新自己是一定会发生的（陆奇：ChatGPT 5 正在使用 ChatGPT 4 训练）。
- 人工智能的出现，会极大地放大人和人之间技能差异所带来的资源差异。AI 会让极少数控制 AI、掌握 AI 的人，他们创造价值的能力和调动资源的能力会远远超于普通的一半人。它会让强者更强的马太效应极其显著。
- 你不能做膝跳反射式的决定。什么叫膝跳反射式的决定？你在还没有了解这个事情的本质之前，就凭着**「恐慌」**或者凭着**「焦虑」**来做很容易被时代抛弃的决定，你的决定很可能不是基于完备的事实做的，也不是基于对长远的深刻洞察做的，而是基于你在那一刻的本能反应做的。
- 保持自己的灵活性。你越能够保持自己的选项的flexibility，你就越能够迎接变化。你越早把自己锁死在一个道路上，你就越不容易迎接变化。
- 未来社会结构上，AI 可能最无法取代人类的，是关于人的 interaction 的部分。你怎么样说服一个人，你怎么样领导一个人，你怎么样团结一帮人，你怎么样去塑造共识，怎么样去弥合分歧。而这些东西确确实实在很大程度上是依赖于我们人作为生物上的人的一些特性的。
- 目前来看最重要的事情就是，我得理解它发生了什么事情。努力了解它的潜力，努力了解有什么事情可以自己上手去做。
- 作为一个不是特别有技术背景的人，想比较快的、比较及时的去跟上现在的一些信息：
  - 直接查看技术源头文章或动态
  - 多看一线的资浅的但是活跃的工作人员的讨论
- 其实我们都在面对一个非常大的未知，而这个未知很可能会超越我们之前的未知。
- 避免使用情绪化看待新技术浪潮：很多人仍然在用一种看热闹的方式来理解这件事情。他们可能会借机抒发一些焦虑，甚至借机抒发一些不满。比方，很多人会借机讨论为什么我们中文的语料不如英文的语料好，因为blah blah。
- 如果你今天可以选择你人生的一个purpose，**这个purpose会是什么才最让你觉得，即使你的工作被AI取代了，它也仍然能让你觉得你在这世界上安身立命是有意义的。**



### [智能对话时代来临：GUI 正在向 CUI 演变](https://mp.weixin.qq.com/s/cLz6rcVlrwyys5yorItnTg)

![CUI](https://github.com/huyixi/Pic/raw/main/CUI.xhsnevh6mm.png)

### [深色模式能带来更好的用户体验吗？](https://mp.weixin.qq.com/s/SICfHDKkpeTS8X5s4AUh5Q)

![Dark](https://github.com/huyixi/Pic/raw/main/Dark.1sboy5gpbhog.png)

研究结果：需要专注时，正极性（浅色 / Light 模式）更有利，如阅读。然而，对于使用周边视觉（需要持续、分散注意力的情况）时，负极性（深色 / Dark 模式）则更有利，如驾驶车辆。

### [什么是 Linear 设计风格？](https://sspai.com/post/79347)

指一种在大面积暗色背景下，使用渐变、模糊、动态流光、极细描边、微噪点、外发光以及庄重的无衬线字体，外加流畅克制的微动效来组织和修饰界面元素的网页设计风格。

### [Mid-journey Prompt Engineer](https://www.figma.com/community/file/1229275435001143699)

一张图搞懂 Midjourney 提示词框架

### [Let AI fly an F-16 fighter jet](https://www.theregister.com/2023/02/14/ai_air_force_f16/)

五角大楼的专家们使用人工智能算法控制一辆真实的 F-16 战斗机，并在飞行模拟上击败了一名美国空军教练。

### [文案风格指南：中英混排和标点符号的用法](https://tingtalk.me/style-guide/)

文章中介绍了各种文案排版时的情况，十分值得一读。例如：

- 全角符号和半角符号之间应该有一个空格
- 英文的逗号和接下来的单词之间应该有一个半角空格

### [对抗诱惑 如何训练大脑提升专注力 - shuaisoserious](https://www.youtube.com/watch?v=3Dn8mfbHMZU)

视频中提到了三个提升专注力的做法

![concerned](https://cdn.staticaly.com/gh/huyixi/Pic@main/concentrated.6orlta8ppjls.jpg)

- 工作学习时避免进食等分散注意力的事情
- 将手机或者其他影响注意力的设备放置在自己无法看到的地方
- 使用冥想帮助自己度过疲惫期

### [向 ChatGPT 提问的智慧](https://atlassc.net/2023/04/26/chatgpt-prompt-model)

介绍了两个高质量的 ChatGPT prompt 模型。其实这两个模型的表达是类似的，具体提问时按自己的喜好选择其一即可。

#### 4A 模型

- Aim 明确目的：我想减肥
- Actor 指定角色：假如你是一名专业的健身教练
- Ask 提出请求：请为我制定详细的运动计划和饮食建议
- Addition 附加信息：我现在身高为 179cm，体重为 66 kg

#### 4W 模型

- Will 意图：我想减肥。
- What 情况：我的情况是我身高 179 厘米，体重 66 公斤。
- Who 角色：你是我的专业健身教练。
- Want 需求：我希望你为我制定详细的每周运动计划和饮食计划。

## 工具

### [MUSCLEWIKI](https://musclewiki.com/)

点击身体部位就可以展示适合这个部位的最有效锻炼方法。

![MuscleWiki](https://github.com/huyixi/Pic/raw/main/MuscleWiki.zg0f13wpra8.png)



### [WALLACE](https://www.projectwallace.com/analyze-css)

官方宣称最好用的 CSS 分析工具 - THE BEST CSS ANALYZER OUT THERE.

### [KeepChatGPT](https://github.com/xcanwin/KeepChatGPT/)

更高效、更顺畅地使用 ChatGPT，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。

解决了这几类报错: 

(1) NetworkError when attempting to fetch resource. 

(2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. 

(3) This content may violate our content policy. 

(4) Conversation not found.

### [PicX](https://github.com/XPoet/picx)

一款基于 GitHub API 开发的图床工具，提供图片上传托管、生成图片链接和常用图片工具箱服务。

###  [Immersive Translate](https://immersive-translate.owenyoung.com)

刚上架 Apple Store 的一款浏览器沉浸式翻译插件，支持 iOS 和 MacOS 平台上的 Safari 浏览器。

## 资源

### [Sketchfab](https://sketchfab.com/)

一个收集了各种 3D 模型的网站，部分资源可以免费下载

### [stackshare](https://stackshare.io/stacks)

各个公司在上面分享自己所使用的技术栈，例如 [Facebook 的技术栈](https://stackshare.io/facebook/facebook)

## 言论

- [技术的发展使得谎言和真相的创作成本都降低了 - Douglas Wang](https://twitter.com/wangdouglas/status/1651036061353799680?s=61&t=hpK-4uemYTUBhGVEkV8TXg)
