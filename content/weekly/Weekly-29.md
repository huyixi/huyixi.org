---
title: "Weekly 29: 关于 B 端产品设计"
subtitle: "2023.11.12-2023.11.18"
date: 2023-11-12T23:05:57+08:00
lastmod: 2023-12-04
draft: false
tags: []
category: [Weekly]
---

## 文章

### B 端产品设计

#### B 端产品设计【典型界面】的设计原则和类型

[链接](https://mp.weixin.qq.com/s/gAnwsUYctF608dfQehOSAg)

#### 数据可视化设计体系中的搭建（下） - 关于统计图表的色板设计

[链接](https://zhuanlan.zhihu.com/p/70121039)

#### 数据可视化 AntV 的设计原则

[链接](https://antv.antgroup.com/specification/principles/basic)

数据可视化 AntV 的设计原则是基于 [Ant Design](https://ant.design/docs/spec/introduce-cn) 设计体系衍生的，具有数据可视化特性的指导原则。它在遵循 Ant Design 设计价值观的同时，对数据可视化领域的进一步解读，如色板、字体的指引。

一些改变我认知的关键概念

- 在大数据时代，可视化是面临海量、高维、多源、非结构化数据的挑战。展望未来，不再局限于键鼠、手指点击等交互，甚至还有自然化（肢体、NLP 语言）、虚拟化（AR/VR/MR）等趋势。它们相应的交互模式又是如何？什么样的匹配操作能帮助用户在数据复杂度不断提高的情况下更快的得到结论从而辅助决策呢？想想都兴奋，这是一条很长的路，需要我们共同来探索。

- 标题过长怎么办？

  尽量精简标题内容，当标题过长且超过了卡片宽度时，请省略标题中间的文字，保住首尾，如“我是...标题”。

  若副标题过长时，最多折 2 行，高度不超过卡片的 30%。

##### 图表

图表用法详细：[链接](https://antv-2018.alipay.com/zh-cn/vis/chart)

- 油墨比：油墨比（Data-ink Ratio）是一种在数据可视化领域中常用的概念。它由 Edward Tufte 提出，用于评估图表中信息的有效性。油墨比的核心思想是，一个好的图表应该尽量减少非必要的装饰性元素，使得用于展示数据的“油墨”（或像素）占图表中所有“油墨”（或像素）的比例尽可能高。

  ![image-20231113224929434](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231113224929434.png)

- 图表的作用，是帮助我们更好地看懂数据。选择什么图表，需要回答的首要问题是『**我有什么数据，需要用图表做什么**』，而不是 『**图表长成什么样**』 。

- ![image-20231113230511131](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231113230511131.png)

##### 色板

- ![image-20231113231051225](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231113231051225.png)
- ![image-20231113231203718](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/image-20231113231203718.png)

##### 字体

- 一款好的数据可视化字体应当具备以下三个条件，实践表明， **Roboto** 字体是符合这三个条件的一款不错的数字等宽字体。
  - 数字等宽，即数据可视化需要一款等宽字体，0 与 1 所占字符宽度应当一致；
  - 识别度高，特殊字符 8B1IiLl0oO"'{[( 2zZ 具备良好的区分度；
  - 混排美观，中英文+数字混排时，字体的 X -hieght 高度和谐；
- 在金融、财会领域，建议使用等宽字体且数值默认右对齐，它方便通过数值的长短来比对大小，提高读数效率，而使用非等宽字体会带来歧义。

其他相关：

- [Ant Design 色板生成算法演进之路](https://zhuanlan.zhihu.com/p/32422584)

#### Ant Design 设计原则

[链接](https://ant.design/docs/spec/introduce-cn)

#### 美团王兴的洞察——《九败一胜》读书笔记

[链接](https://www.ftium4.com/meituanwangxin-jiubaiyisheng.html)

跟其他的人不一样的看法，不一样的视角

#### 巨土文化公众号推荐爆款文章标题

[链接](https://www.kdocs.cn/l/ccVFRlrQ8NN1)

#### Talbica. Interactive chemistry

[链接](https://www.talbica.com)

元素周期表的可视化展示，这个做得好的一点会把元素的照片也展示出来，看看稀有元素长什么样子，化学爱好者应该会很喜欢。

#### CSS 的空格处理

[链接](http://www.ruanyifeng.com/blog/2018/07/white-space.html)

html 元素的前后空格会被删除

## 日记

#### Sun Nov 12, 2023

###### Sun Nov 12 23:06, 2023

突然发现在公司里面已经呆了五个月了，这五个月技术上的成长好像没有特别多，需要好好反思一下了。