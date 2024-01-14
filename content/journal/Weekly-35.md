---
title: "Weekly 35：第一次 CTF"
subtitle: "CTF, huyixi.wiki, huyixi.org, Backup, 极简博客"
date: 2023-12-28T23:40:05+08:00
lastmod: 2023-12-28T23:40:05+08:00
draft: false
tags: []
category: [Weekly]
---

## 记录第一次 CTF

### 第一个 flag

Mon Dec 25 12:37, 2023
起因是刷 Twitter 的时候看到这样一条推文：
![ctf](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/hwAFKy.jpg)
因为我其实并不了解 CTF，所以刚看到也是很无感的，但是最近关注了一些安全方面的推友，说比较简单，而且挺有意思，于是便收藏起来等后续有空来做（不过我很多收藏的东西就是因为这么想，然后吃灰的）。周一刚好吃完饭比较空闲，就打开来玩一玩。
首先是使用 Docker 安装，这个很简单，跳过。
之后进入到服务器，我就一脸懵：
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/aiBZ3E.jpg)
只有命令行？什么提示也没有？要怎么开始？之后尝试输入 `ls`，看看目录中有什么
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/5pI7CJ.jpg)
还好还好，这边有几个文件，于是尝试打开第一个：
`vim 01-flag`
进去就看到了：![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/V0RcpV.jpg)
然后将这个代码输入网址中：![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/0n8DkG.jpg)
原来夺旗赛是这么玩的：只要找到每个 flag 对应的代码就可以。

### 第二题：查看隐藏文件

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/pa15Ol.jpg)
很简单，使用 dotfile 来隐藏。正好最近在研究 zshrc 和各种 dotfile 的配置备份等，很容易就拿到了第二个旗。

### 第三题：找东西

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/TyZ561.jpg)
第一次看到这一题，我是去问了 ChatGPT，但是它根本不知道要干什么。还以为是小学题目要找规律了。看了半天愣是没发现有什么不一样的数字，遂放弃。之后发现每个文件夹中还嵌套了一个文件夹，而这个子文件夹中也有 0 - 99，共 100 个文件夹。于是想起：可能要我们要出 flag 文件在哪里。于是输入命令 `find . --name "flag.txt"`。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/kCtaLG.jpg)

#### 常用的 find 命令

- 按名字搜索当前文件夹下 `abc.txt` 文件： `find . -name "abc.txt"`
- 按名字搜索并忽略大小写：`find . -iname "abc.txt"`
- 按类型搜索 -type：`find . -type f` 查找文件，`find . -type d` 查找目录。
- 按文件大小搜索 -size：`find . -size +50M`

### 第四题：解压

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/tMZ1RO.jpg)

### 第五题：访问权限

这一题是关于获取访问权限的。我先尝试了 `sudo -i`，但是无法获取。之后尝试直接修改文件的访问： `chmod 666 flag.txt`，成功获取到 flag。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/xyu6k9.jpg)

### 第六题：Python

这题简单。直接运行这个 Python 文件就好了。

### 第七题：nginx

第七题是关于 nginx 的。打开 flag.txt 后直接就有端口号 80 了。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/6foHJV.jpg)然后再获取 ip 地址：`ip addr`，之后 `curl 172.17.0.2` 这个 ip 地址就拿到这个 flag 了。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/0uZiYV.jpg)
不过因为 80 端口是 HTTP 端口，只要访问这个 ip 地址就可以了。

至此所有的 flag 就都拿到了。也拿到了作者的红包，感谢。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/OAgnqG.jpg)
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/aZk3ca.jpg)

## 我的 Wiki

Tue Dec 26
手上有一个 huyixi.wiki 的域名，一直没有用。这两天突然想研究 VitePress，于是便想着搭建一个项目来上手，便马上想到了 nikita 的这个 [Everything I Know](https://wiki.nikiv.dev/)。除此之外，还受到[]()于是利用空闲的时间搭了一个，经过一些踩坑之后，网站也顺利上线了。
关于为什么要搭建一个个人笔记。今天恰好看见
ChatGPT 已经越来越不能满足我的需求了：很多的一些内容互联网上的并不够好，所以我需要这个数字花园来帮助我记录一些东西。
我也不清楚这是不是我一时兴起的三分热度。但还是希望我能坚持记录地更久一点。应该能至少记录四年吧，毕竟这个域名续费到了 27 年末。

## 我的英文文档的阅读

Tue Dec 26
最近读了 UnoCSS 和 VitePress 的纯英文文档，发现已经不是很害怕了。当然这也与这两个工具配置较为简单有所关系，并且这两个工具的技术我也稍有了解。UnoCSS 类比于 TailWindCSS，VitePress 类比于 Hugo，后两者我已经使用了一段时间了。当然可能也有文档本身就用词较为简单的原因，不过还是值得鼓励的 🎉。

## 简中的发言

越来越讨厌简中平台上猜字谜似的各种发言了。有时间琢磨作者的意图（当然作者的意图大部分是好的）还不如去外面看看来的有效率。

## dotfile 的备份

Wed Dec 27, 2023
因为最近在研究各种配置文件的备份，目的是为了换电脑或者电脑出问题可以快速恢复。最开始采用 mackup 进行多设备的同步，mackup 其实是一个很好用的工具，一次配置好后就不用再去管理了，很省心。但是因为 git 无法跟踪到 dotfile 文件，在根目录创建一个 git 仓库又不太美观。这两天接触使用了 chezmoi 这个工具，可以很好地管理，但是修改文件过程太过繁琐了。`chezmoi edit`, `chezmoi -v apple`, `chezmoi cd`, `source ~/.zshrc`, `git add .`, `git commit -m`, `git push`。虽然上传到仓库的过程已经被优化了，但是 chezmoi 管理的过程还是很繁琐。昨晚刚好在研究 owen 玩的一些东西，发现了一个脚本 markdownload。于是有了一个灵感，每天定时执行脚本备份到 git 仓库中。

## 极简博客

最近越来越喜欢简单的极简类型的博客了，可能后期也会将自己的博客修改成那种风格，更专注于文字。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/MM6oP1.jpg)
地址链接：https://egoist.dev

## huyixi.org

![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/nGNg54.jpg)
又买了个域名：huyixi.org。
![](https://raw.githubusercontent.com/huyixi/Pics/main/uPic/ZqvjxJ.jpg)
现在手上三个域名了。huyixi.com, huyixi.org, huyixi.wiki。基本上把自己名字的重要的域名都集齐了。就是每年续费费用有点心疼，要 300 多了。
目前的想法是 com 域名慢慢搭建成一个个人品牌宣传网站（可以搞一些比较炫酷的效果）；org 专注博客，发布一些简单的文本内容博客；wiki 就作为我的知识库来使用了。

## 来不及了，年终总结！

明天就要去楠溪江跨年了，今晚紧赶慢赶还只赶出来一点读书的年度总结。2023 整体的年度总结再拖下去不会要到 2024 年了吧！行李还没收拾，这篇周报先安排更新上吧。还有 org 的网站，又高估了自己，没做完。元旦后再回来做吧。
