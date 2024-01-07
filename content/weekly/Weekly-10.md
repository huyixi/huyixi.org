---
title: 周刊#10：如何活得更久？
date: 2023-06-25T20:00:00+08:00
lastmod: 2023-06-25T20:00:00+08:00
category: [Weekly]
tags: [weekly]
draft: false
summary: |
 主题：live longer, git commit, 智齿<br>
 时间：20230625 - 20230701
---

## 文章

### 1.如何写一个好的 git commit ?

## Type of commit

> feat: The new feature being added to a particular application
> fix: A bug fix (this correlates with PATCH in SemVer)
> style: Feature and updates related to styling
> refactor: Refactoring a specific section of the codebase
> test: Everything related to testing
> docs: Everything related to documentation
> chore: Regular code maintenance

#### 相关命令

- 设置提交消息模板

  在主目录中创建一个名为 `.gitmessage` 的文件，并添加以下内容：

  ```
  [summary]

  [details]
  ```

  运行以下命令告诉 Git 使用此文件作为提交消息的模板：

  ```bash
  git config --global commit.template ~/.gitmessage
  ```

- 只打印主题行

  ```bash
  git log --oneline
  ```

- 按用户提交进行分组

  ```bash
  git shortlog
  ```

#### 相关文章：

[Writing Better Commit Messages - Apurva Jain](https://medium.com/swlh/writing-better-commit-messages-9b0b6ff60c67)

[How to Write Good Commit Messages: A Practical Git Guide - Bolaji Ayodeji](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)

[How to Write a Good Git Commit Message](https://blog.ossph.org/how-to-write-a-good-git-commit-message/)

#### 相关工具：

[commitizen](https://github.com/commitizen/cz-cli)

[git-cz](https://github.com/streamich/git-cz)

文件 git add 后，使用 git-cz 提交

### 2.智齿

最近智齿发炎，去医院检查，医生说需要拔掉。这里是一些跟智齿相关的内容。

- [Wisdom Teeth Removal: Oral and Maxillofacial Surgery ](https://www.healthhub.sg/a-z/diseases-and-conditions/486/oral_maxillofacial_surgery_sdhf)

- [Wisdom tooth removal ](https://www.nhs.uk/conditions/wisdom-tooth-removal/)
- [Wisdom Teeth 101: All You Need To Know About Wisdom Tooth Removal](https://ntuchealth.sg/denticare/resources/wisdom-teeth-101-all-you-need-to-know-about-wisdom-tooth-removal)

拔除的过程还是很迅速的，大概 15 分钟左右就拔掉了。在三甲医院的口腔科，总共花费了约 750 元。

### 3.CSS Flex layout

[A Complete Guide to Flexbox Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties)

[CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/#intro)

### 4.爱上失焦的世界！

[爱上失焦的世界](https://subnooc.com/posts/to-love-the-blur-world)

在语言学习上，一直有个说法是，小孩子学习语言会比成年人快。除开小孩记忆力强等原因，回想自己小时候，学习很多东西都是不能完全理解的，但是也不会太害怕。那个时候不在乎自己有没有完全理解，只会对自己能理解的部分作出反应。

我在想，是不是我这种想要完全理解一个东西的心态，看见一句英语后，必须要完全理解了才会进行下一句，正是阻止了我学习英语脚步的原因。

于是我开始尝试换一种方式学习英语，直接看简单的原著，能看懂多少算多少，不要去在乎那些没太看懂的部分，就当是和这些单词打个照面。

于是打开了《The Wonderful Wizard of OZ》，也就是《绿野仙踪》。第一章就看得似懂非懂，我理解成了，在他们的地下室，可以看到每个人的心情，心情好的人是彩色的，心情不好的人是灰色的。

虽然看到后面，发现书里的设定并非如此，不过我觉得这个设定还挺有趣。所以我发现，这种模糊的、不确定的理解，似乎正是想象力和创造力的来源。

这也可以解释为什么小孩子的想象力和创造力要远远大于成人。在成长中习得了能看清楚一些事物的能力，便开始拒绝去接触所有看不清的东西，于是所有的可能性就被限制在了自己眼前所看到的视角。

失焦（Out of Focus）

### 5.一棵小树的博客

###### [提升信噪比：过滤有价值信息的方法](https://yeshu.cloud/posts/newsletter-69/)

1. 不要听不厉害的人教你怎么变厉害：应该选择那些在特定领域中具有实力和成就的人，从他们那里获取准确和有深度的信息。培养自己批判性思维和信息验证的能力，以辨别真相和谣言之间的差别。
2. 不要听象牙塔里的人感悟人生：事非经过不知难，没有真正下场实践过的感悟大多是纸上谈兵。
3. 不要听评论/翻译家教你怎么去执行：他们更多是信息的传播者，而非实干家。
4. 取关关注列表中只会抱怨的人：我们应该选择与那些积极、理性并能提供有益信息的人保持交流。
5. 取关分不清事实和观点，只会在评论区党同伐异的人：过度暴露于负面的评论和争论中会消耗我们的注意力，而且很少能获取到有建设性的信息。

###### [个人知识管理的困境与改进](https://yeshu.cloud/posts/newsletter-51)

**这就是为什么大家常说不要在毛坯房里雕花。**

因为系统在没有搭建完成之前，对细枝末节的优化未必是好事。

首先要确定基础的框架，建立流程，让这个系统能够按照预想的方式运行起来。

粗糙一点没关系，只要它对我们的工作是有实际价值的。

只有这样，再收集遇到的问题，分析并持续优化，才是有意义的。

### 6. 英语才能发挥 ChatGPT 的能力？

[ChatGPT 将非英语语言排除在 AI 革命之外](https://clip.owenyoung.com/2023/06/04/chat-gpt-is-cutting-non-english-languages-out-of-the-ai-revolution/#chatgpt将非英语语言排除在ai革命之外--wired)

## 资源

### 1. 来读点有意思的东西！

[Read Something Wonderful](https://readsomethingwonderful.com/)

网页设计漂亮，交互优雅，收录了不少优质内容。包括 Altman 的一些博客文章。左侧的文章似乎可以无限滚动查看，右侧则是一些相关的信息，比如作者，出版时间等。

### 2. 神学和网络安全的博客

[Eddy & Emma's Blog](https://eddyemma.com/)

神学和网络安全跨界博客，太猛了。

这是他们的网络安全相关的系列文章：

[网络安全](https://eddyemma.com/scientific-access/)

### 3. 长毛象上的开源豆瓣

官网：[NeoDB](https://neodb.social)

Github 仓库[NeoDB - Github](https://github.com/neodb-social/neodb)

一个类似豆瓣的开源项目。可以收藏你喜欢的东西。footer 里公开的 API ，方便二次开发。账号系统基于 mastodon，也支持从其他平台倒入数据。

### 4. 从阮一峰科技爱好者周刊的 issue 中获取最新的技术趋势

[阮一峰科技爱好者周刊 issue](https://github.com/ruanyf/weekly/issues)

![image-20230628155253906](/Users/huyixi/Library/Application Support/typora-user-images/image-20230628155253906.png)

### 5.乔布斯档案馆

[The Steve Jobs Archive](https://stevejobsarchive.com/)

logo 是一个苹果从苹果树上掉下来。

内容并不多， 只看到了乔布斯的两篇文章。

### 6.用中文浏览国外社交媒体里的热门讨论

[buzzing](https://www.buzzing.cc)

官方对这个网站的介绍：用中文浏览国外社交媒体里的热门讨论，母语快速导读， 感兴趣再进原文深度阅读
