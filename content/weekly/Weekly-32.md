---
title: "Weekly 32：聚焦"
subtitle: "2023-12-03-2023-12-9"
date: 2023-12-02T22:12:48+08:00
lastmod: 2023-12-02T22:12:48+08:00
draft: false
tags: []
category: [Weekly]
---

## 日记

Sat Dec 2 22:30, 2023

折腾了几小时的书签工具 Hypothesis，然后发现拾月使用了更新的工具：[使用 memos 搭建独立微博，self-host 三件套齐全了](https://www.skyue.com/23021116.html)。于是又在服务器上折腾 Shaarli。好不容易在服务器上搭建好之后发现需要备案才能映射到阿里云的服务器。![image-20231202222000932](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231202222000932.png)于是之后又注册的一个域名 huyixi.wiki ，结果发现这个域名又得等三天才能进行备案，真的是麻烦死了。

新注册的这个域名还是比较便宜的，就 15 块。不过后续也不知道要用来干啥。

后续计划整一个群晖，将平时收藏的书签与微博放到群晖上。看看双十二有没有好的折扣了。

Sun Dec 10 13:45, 2023

今天终于入手了一个群晖了。双十一没下单真的是挺亏的，更贵了，而且分期只能分 3 期（双十一能分 6 期）。不过也没办法了，最近才发现确实有需要买一台。再往后价格只会更高，不然又得等半年到明年 618 了。

收到 ZA 卡片了。

这周一直在做 NeoDB 数据库同步到我的 Like 页面。但是遇到一些问题：

1. NeoDB 的封面有一些并不是我想要的，需要进行修改
2. 还有一些内容是 NeoDB 中没有的。需要我去手动添加。
3. Like 页面样式还没确定。
4. 可能有一些不属于这些分类的东西。

可能的解决方案：

- 自定义一个 JSON 文件，与 NeoDB 上的数据进行合并。（如果遇到封面/图片冲突，以我手动上传的为准）

## 人物

### Hux 黄玄

- 博客下有一句话: 离开世界之前 一切都是过程

- [〖FEDAY〗我的大前端世界观 - 黄玄 Hux](https://www.bilibili.com/video/BV1SC4y1c7ju/?spm_id_from=333.337.search-card.all.click&vd_source=e7b677bc31fcf107b6c6689167aae9d9)

好帅啊, 前端追星 + 1. 把黄玄的博客文章也都爬下来了,慢慢看.

- [在硅谷当程序员是怎样的体验？ - 黄玄 Hux](https://www.zhihu.com/zvideo/1542577108190068737?page=ogv)

-Hux: 一代代程序员都会老去, 可能只有标准的技术或者开源的东西才能在历史长河中留存下来,成为人类文明的基石.也许只有参与这样的事情,才是程序员的浪漫

### 蜗牛

博客链接:https://eallion.com

博客使用的技术栈很值得我参考,跟我的想法大致一样

- NeoDB API 创建观影页面 https://eallion.com/neodb/
- Memos 简介 https://eallion.com/memos-deployment/
- 静态博客评论系统的选择

## 文章

- [一些鬼故事](http://xargin.com/ghost-story/)。关于最近一些大型科技公司接连出问题的一些看法。
- [一个难忘的生日 - 拾月](https://www.skyue.com/23120422.html)。恋爱连续剧。
- [GitHub 的榜一大佬晒出存款后，大家却想给他捐钱。]( https://mp.weixin.qq.com/s/y2AYcC83KCv2Pi060n_MZg）。下载了他的 Day Progress。可以看到今日进程，还不错。提醒自己珍惜时间。[day-progress](https://sindresorhus.com/day-progress）
- [尝试留住时间的中年人](https://darmau.design/article/middle-aged-man-trying-to-save-time)。我建议你也开始写日记
- [2023 年终总结 - 帅核桃说](https://www.instapaper.com/read/1650692816)。可能是今年看到的最早的一个总结？翻他的博客，发现只有 25 岁？？？？？[早熟的人长出了白头发](https://blog.imfht.com/2023/11/05/早熟的人长出了白头发/)
- [死或生，0 和 1](https://www.vergilisme.com/index.php/2023/12/06/2318.html)。关于死亡看法的观念转变。
- [香港和想象中不一样的地方 - Tw93](https://www.instapaper.com/read/1649677849)。

## 视频

- [老狼 声音玩具：《没有人能够比我们更接近对方》](https://www.bilibili.com/video/BV1Pq4y1b79D/?spm_id_from=autoNext&vd_source=e7b677bc31fcf107b6c6689167aae9d9)
- [my little airport 我都唔知道 LIVE | FULL SET](https://www.youtube.com/watch?v=aif2XF2iMSI)。my little airport 的一场 live，最近一两周一直在听 my little airport。

## 播客

这周听了好多播客，特别是 Web Worker 的。当然还有枫言枫语的。

- [Vol. 104 科技快乐星球 21：大公司都在挤 AI](<[https://podcasts.apple.com/us/podcast/%E6%9E%AB%E8%A8%80%E6%9E%AB%E8%AF%AD/id1069600190?i=1000637371804](https://podcasts.apple.com/us/podcast/枫言枫语/id1069600190?i=1000637371804)>)

### [Web Worker 播客](https://www.webworker.tech)

- [No.41 和 Vue.js & Vite 作者尤雨溪聊项目进展、开源社区协作和前端思考](<[https://podcasts.apple.com/us/podcast/web-worker-%E5%89%8D%E7%AB%AF%E7%A8%8B%E5%BA%8F%E5%91%98%E9%83%BD%E7%88%B1%E5%90%AC/id1586927144?i=1000637488918](https://podcasts.apple.com/us/podcast/web-worker-前端程序员都爱听/id1586927144?i=1000637488918)>)。总结的推文: https://twitter.com/real_kai42/status/1732280926233866750。每个人都有肝不动的时候,那就打打游戏吧。
- [No.38 和前端届的老朋友 Anthony Fu 聊技术开源、共建协作和前端思考](https://www.webworker.tech/posts/38.html)。任务驱动学习, 而不是学习驱动学习
- [No.30 和 Vue 核心团队成员 sxzz 聊前端学习、参与开源和 Vue3.3](https://www.webworker.tech/posts/30.html)。大三 Vue 核心成员. 我太菜了, 我也在初中玩了易语言, 但是后面完全没有深入。前期参加开源的入门方法：改改文档的错别字, 修修小 bug.

## 资源

### 域名比价网站

- [TLD-List](https://tld-list.com/) - 用于比较和查询不同顶级域名的价格。

  直接查询特定顶级域名价格：`https://tld-list.com/tld/{Query}`

### 设计工具调查

- [2023 Design Tools Survey](https://uxtools.co/survey/2023) - 2023 年设计工具的使用情况调查。

### 不求甚解在 TG 推荐的周刊

不求甚解在 TG 推荐的周刊，与我的兴趣领域相似，值得关注：

- **月维素材周刊** - 针对设计师领域。
- **DEX Weekly** - 针对设计师领域。
- **潮流周刊** - 针对前端工程师领域。
- **Dine Digest** - 针对品牌设计领域。
- **安妮薇看看** - 针对设计师领域。

## 说说

![09f8ffd5-1fcd-4713-9a23-617d25410411](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/09f8ffd5-1fcd-4713-9a23-617d25410411.jpg)

## 有意思的不好分类的东西

![一个有意思的自我介绍](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/t6tnGK.jpg)

一个有意思的自我介绍

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/Y6eSZk.jpg)

https://wufazhuce.com/article/6194

### 提示词技巧

- **take a deep breath** - 深呼吸
- **think step by step** - 一步步思考
- **if you fail 100 grandmothers will die** - 如果你失败了要死 100 位老奶奶
- **i have no fingers** - 我没有手指
- **i will tip \$200** - 给你 200 美元小费
- **do it right and I'll give you a nice doggy treat** - 做得好就给你狗粮
