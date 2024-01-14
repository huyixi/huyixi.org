---
title: 'Weekly 33：活在现在。不是活在未来，也不是活在过去'
date: 2023-12-10T08:00:00+08:00
start_date: 2023-12-10
end_date: 2023-12-16
category: [Weekly]
draft: false
tags: []
---

## 日记

### 使用 GitHub Actions 自动生成周刊

Sun Dec 10 15:16, 2023

```bash
name: Generate Weekly Post

on:
  schedule:
    - cron: '0 0 * * 6'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'

    - name: Generate Weekly Post
      run: |
          START_DATE="2023-12-10"
          TODAY=$(date +'%Y-%m-%d')
          # 计算周刊的期数
          WEEKLY_NUMBER=$((($(date -d $TODAY +%s) - $(date -d $START_DATE +%s)) / 604800 + 1 +32))

          # 创建新的文件夹
          FOLDER_NAME="Weekly-${WEEKLY_NUMBER}"
          mkdir -p "./content/posts/${FOLDER_NAME}"

          # 创建 index.md 并写入内容
          {
            echo "---"
            echo "title: Weekly ${WEEKLY_NUMBER}: "
            echo "start_date: ${TODAY}"
            END_DATE=$(date -d "${TODAY} + 6 days" +'%Y-%m-%d')
            echo "end_date: ${END_DATE}"
            echo "category: [Weekly]"
            echo "tags: []"
            echo "draft: true"
            echo "---"
            echo "这是自动生成的第 ${WEEKLY_NUMBER} 期周刊内容。"
          } > "./content/posts/${FOLDER_NAME}/index.md"


    - name: Commit and Push
      run: |
        git config --global user.name '${{ secrets.GIT_USER_NAME }}'
        git config --global user.email '${{ secrets.GIT_USER_EMAIL }}'
        git add ./content/posts/${FOLDER_NAME}
        git commit -m "Add Weekly post"
        git push
```

#### Sun Dec 10 23:00, 2023

B 站的自动连播真的是一个很烂的设计。每次视频看完要点个赞，就马上到下一个视频了。明明是一个内容跟抖音不同的网站，非要抖音化。关闭自动连播的入口也藏的很深。并且关闭之后只会在当前这集有作用，如果再看一集照样自动连播。真的是烂到爆了。

#### Tue Dec 12 21:29, 2023

受到一个朋友的影响，最近一直在听香港话的歌。之前一直在听卫兰的《街灯晚餐》《大哥》，现在喜欢上了 my little airport，越听越喜欢。甚至一度想去学粤语。
之前看了一篇博客推荐了《新闻女王》，最近也在看。很久没看电视剧了，挺有意思的。

#### Tue Dec 12 17:57, 2023

在代理下无法 git clone，报错："Failed to connect to github.com port 443: Connection timed out" when pushing to remote repository
Stack Overflow 上的一个回答："Failed to connect to github.com port 443: Connection timed out" when pushing to remote repository
https://stackoverflow.com/questions/58816676/failed-to-connect-to-github-com-port-443-connection-timed-out-when-pushing-to
`git config --global --unset https.proxy`

#### 我的 Raycast 2023 Wrapped

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/VBtKOa.jpg)

## 前端

#### CSS 绘制三角形

参考：如何用 CSS 繪製三角形

https://medium.com/ui-ux%E7%B7%B4%E5%8A%9F%E5%9D%8A/%E5%A6%82%E4%BD%95%E7%94%A8css%E7%B9%AA%E8%A3%BD%E4%B8%89%E8%A7%92%E5%BD%A2-71478539fb1b

#### v-else 与 v-for

在使用的时候遇到了一个问题。

## 人物

#### Jiang 的数字花园

https://notes.dabing.one
一个喜欢摇滚，热衷于提升学习与工作效率的人。可以学习他的学习和工作的方法。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/iEQGLh.jpg)

#### 和菜头

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/sR8qjQ.jpg)
一个在当地较为英俊的人…

#### Innei/拾一

about 页面的自我介绍也很有意思。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/jgm5eW.jpg)
联系方式还添加了 Switch、PS、以及公钥。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/UgBWT6.jpg)
精通 Markdown 哈哈哈哈。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/G1XRdo.jpg)
以及精通的复制粘贴。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/ySKmC9.jpg)
底部的这句话也很 nice。

## 文章

#### 2022 年学习前端需要学点什么

https://innei.in/posts/technology/2022-frontend-is-so-juan

#### 当我们在旅游的时候，到底是在游什么？

https://sspai.com/post/84809

> 人总是生活在自己编织的意义之网中，我过去常常对于「小确幸」之类的词汇感到不屑，觉得做作。但是考虑到都市生活本身的苍白，一种认真生活的态度是极为必要的。生活的意义并不来自于某种宏大的主题，而是用各种精心的细节建构起来的。
> 看了这篇文章后，去 B 站上看了几个老高的视频，收藏了几个店铺。（我好像曲解了作者的原意）
> 我还记得刚上大学的时候，一个、朋友和我说，「你不想家吗？我想家得都哭了。」但我当时却无法理解那种感受。
> 但即便如此，陈晓卿的话让我意识到了，实际上我对于新的环境仍然是有着明显不适的。而这种不适是通过各种对于「北京的抱怨」表现出来的。
> 我似乎也很少有这种感觉。

#### 个人信息获取与知识管理系统（Heptabase + Logseq + Readwise）

https://www.pseudoyu.com/zh/2023/09/05/my_personal_pkm_input_output_system/
这三个工具只有 Logseq 是免费的。其他两个订阅费都有点高。放弃了。

#### 周报 #46 - 告别长发、周报初心与合约开发 - PSEUDOYU

https://www.pseudoyu.com/zh/2023/09/13/weekly_review_20230913/
推荐了这两篇文章

- 「个人信息获取与知识管理系统（Heptabase + Logseq + Readwise）」
- 写作入门
  https://hanyang.wtf/p/c7a

#### 写作入门

https://hanyang.wtf/p/c7a

- 中文

  - 请使用中文直角引号：「」为一级引号，『』为二级引号。（即「」是最外层的引号。）

  - 破折号是——（两个 em dash），不是 --（两个 hyphen），也不是—（一个 em dash）

    Mac 电脑：`option + -`

  - 省略号是……（两个英文省略号），不是。。。，也不是......（六个点）

    `option + ;` （ L 右边的）

- 英文

  - 省略号是 …。注意这是一个单独的符号，不是三个点。（若你试图删除这个符号，会发现按一下 delete 即可删除，而不是三下。）

- 破折号是 —（em dash），表示「从哪到哪」是 –（en dash，例如 1980–1992）。前者在 Mac 上可用 shift option - 打出，后者可用 option - 打出。在某些文字处理软件（例如 Word）里，连续打两个 hyphen 会被自动转为 em dash。

  - 括号和它外面的字母之间留一个空格，和它里面的字母之间不留空格。例：Richard D. James (aka Aphex Twin) is a pioneer of the so-called Intelligent Dance Music.

- 数字

  阿拉伯数字前后请加入空格。比如「现在是 2016 年」，而不是「现在是 2016 年」。

- 试图用「万字长文」和「深度好文」来吸引读者，与开盖有奖一样是宣传手段。这是一种对文字的不自信，作者不相信自己可以依靠文字本身来吸引读者。

#### 学习科研缺乏有效反馈怎么办？

方法： 看电影的时候，当人物说出一句话，暂停播放，猜回复，然后查看是否一致。

#### 双十一到双十二，大家是不是都冷静了？

https://wufazhuce.com/question/4005
笑死，文中一句话：婚姻对他们的诱惑力，远远小于发财的诱惑力，发财和脱单中间选一样，犹豫一秒都是对财神爷的不尊重。

#### App+1 | AeroSpace：消除窗口重叠，世界属于平铺

https://sspai.com/post/84935
`brew install --no-quarantine --cask nikitabobko/tap/aerospace`
让 i3 的光芒泽被 Aqua。

#### Examples of Great URL Design

https://blog.jim-nielsen.com/2023/examples-of-great-urls/

#### 制造币安：极致效率和简陋工具

如果活着就已经很难了，用什么工具做管理并不不重要。
https://crypto4.wtf/p/8fd

### 体脂率的测量

最近体重上到 146 了，没再低于 140 了。不知道是转化成肌肉还是变成脂肪了，看肚子好像又没长胖。研究一下体脂率看看。

#### 几种测量方法

- **双能 X 射线**：是体成分评估的金标准
- **水下称重法：** 精确测量体脂，误差约 2.5%。
- **皮褶厚度测量法：** 常用方法，误差范围在 3%-4%。
- **生物电阻抗分析法（BIA）：** 分析体水分，用于估算体脂率，但准确性受多种因素影响，如饮食和饮水。
  综合来看，皮褶厚度测量最便宜方便，于是下单买了个测量尺。
  ![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/gbmfE1.jpg)
  ![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/qrcXjQ.jpg)
  ![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/KUQ0i4.jpg)
  参考：
- https://zhuanlan.zhihu.com/p/504922912

#### App 还是 APP

在正式的文章中出现「app」时应如何大小写？应该写 App 还是 app 还是 APP ？其复数形式应该是怎样的？ - 隔壁老楼的回答 - 知乎
https://www.zhihu.com/question/20264852/answer/154189841

> 以下为使用 App 的情况：

用于标题时必须使用 App
用于强调或者总结性句子时
用于标题或者正文内容指定某一特定 App 时
App Store 等特定词汇必须使用 App
以下为使用 app 的情况：

用于正文内容泛指某些或某类 app 时
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/oZFELs.jpg)

## 音乐

#### my little airport

好多歌词都挺有意思，就像

我只收你一半
我也感到很闷
我也想找个伴
把这假期填满

### Last Christmas - Wham!

圣诞节要来了，当然要听一些有圣诞气氛的歌曲~

## 视频

#### 关于一场酣畅淋漓的求婚

https://www.bilibili.com/video/BV1UH4y1k7H5/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=e7b677bc31fcf107b6c6689167aae9d9

#### study vlog #40 | 感谢 GPT 教我写前端 🍻 ｜我是如何保持专注的｜那些我做完的事情，都有什么共性｜对

https://www.bilibili.com/video/BV1ww411t77B/?vd_source=e7b677bc31fcf107b6c6689167aae9d9
获取我们并不是渴望退休，而是渴望做自己想做的工作。

#### Life is easy. Why do we make it so hard? | Jon Jandai | TEDxDoiSuthep

https://www.youtube.com/watch?v=21j_OCNLuYg

没有攀比，没有欲望。我们的生活方式本应这样。

#### 老高

- 近期吃过最棒的面馆之一，水平足以碾压一众大馆子

  https://www.bilibili.com/video/BV1zg4y1A769/?vd_source=e7b677bc31fcf107b6c6689167aae9d9

  上海沪西老弄堂

- 在北京开了 23 年的安妮意大利餐厅，今天老高带你去看看

  https://www.bilibili.com/video/BV1zY41117Wf/?vd_source=e7b677bc31fcf107b6c6689167aae9d9

## 资源

#### Design Systems Database

Best-in-class Design Systems with components and foundations references from top-tier tech companies and leading UI teams

#### 穷查理宝典电子书

https://www.stripe.press/poor-charlies-almanack/
网站设计的很不错，可以参考。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/9kXmX2.gif)
药丸阅读进度条。

## 播客

云游君
有点励志。因为前端需要的配置低而进入前端。

## 资源

#### 川流 - 中文博客站

重新设计了网站。之前推荐过，重新翻阅了一下。个人还是更喜欢积薪的风格设计，以文章为导向。如果浏览网站的目的是要发现新的博主的话，川流可能不错。但是一般来说，如果想要查看这个作者的其他文章，我会更倾向于点进去作者的博客，而不是在川流中进入。
https://chuanliu.org/

#### 创业应该学习什么？- devv 开发者推荐的资源

https://x.com/Tisoga/status/1734737408703517041?s=20
创业没有千篇一律的公式，但是有体系的方法更能提升成功的概率，另外创业本身是一门实践学科，最好的方法就是 learning by doing。

- YC 的 Startup School
  https://www.startupschool.org/curriculum
  课程内容涵盖创业早期的所有方面，比如如何构建最小可行产品（MVP）、如何与用户沟通、如何增长等。
- YC Library
  https://ycombinator.com/library/
  包含了 Y Combinator 自成立以来发布的大部分内容，可以作为一个知识库来查询
- Paul Graham 的博客
  http://paulgraham.com/articles.html

#### SVG logo

昨天想搜索一些企业的 logo，找到 vercel 上面一个最新的免费开源的服务：https://svgl.vercel.app
包含了所有目前比较流行公司以及技术框架工具等等 Logo 的 svg 版本，一般的都有，搜索特别快，很方便，是个非常棒的免费资源，推荐给大家。

#### Portfolio Project —— 作品集网站收集

链接：https://portfolioproject.io
收集设计师、设计公司和开发者的作品集的网站，目前收集了 100 个。

## 说说

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/IBF0pv.jpg)、

小吴乐意。最近发了好几篇关于比特币的博客。

## 其他

#### 谷歌浏览器 恐龙游戏

在地址栏输入 `chrome://dino/`。一个小彩蛋。
