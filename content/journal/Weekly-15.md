---
title: Weekly 15：VIM 作者逝世
date: 2023-07-31T22:29:00+08:00
lastmod: 2023-07-31T22:29:00+08:00
category: [Weekly]
tags: [weekly]
draft: false
summary: |
 主题：VIM 作者逝世<br>
 时间：20230729 - 20230804
---
## R.I.P.

### VIM 作者 Bram Moolenaar 逝世

![](https://raw.githubusercontent.com/huyixi/Pics/main/VIM.JPG)

## 技巧

### 命令行打开远程仓库

#### Git 命令

使用 Git op（或者其他自定义别名）

```bash
git config --global alias.op '!sh -c "open $(git remote get-url origin)"'
```

OP 可以更换为你所想要的其他任何别名

#### 直接输入 op 打开

1. **打开 shell 配置文件**

   - 对于 **bash**，是 `~/.bashrc` 或 `~/.bash_profile` （macOS）
   - 对于 **zsh**，是 `~/.zshrc`
   - 对于 **fish**，是 `~/.config/fish/config.fish`

2. **添加别名**
   在配置文件的底部添加以下内容（以 bash 或 zsh 为例）：

   ```bash
   alias op="open $(git remote get-url origin)"
   ```

   如果你使用的是 Linux，并且安装了`xdg-open`，你可以这样设置：

   ```bash
   alias op="xdg-open $(git remote get-url origin)"
   ```

   对于 Windows 的 Git Bash 或其他 shell：

   ```bash
   alias op="start \"\" $(git remote get-url origin)"
   ```

3. **保存并关闭配置文件**

4. **使更改生效**
   要使新的别名生效，你需要重新加载配置文件或重启你的 shell。对于 bash 或 zsh，你可以运行：

   ```bash
   source ~/.bashrc  # 或 source ~/.zshrc 或 source ~/.bash_profile
   ```

### Prompt

- Khanmigo: 对于提交的结果，不直接给出答案，而是先判断答案是否正确。如果错误，让学生解释他们的推理过程，纠正概念上的错误。

## 资源

### CSS 转为 SASS 工具

[CONVERT CSS TO SASS / SCSS](http://css2sass.herokuapp.com)

### 中文导航站

[川流](https://chuanliu.org)

川流是一个博客导航站，发起于“**中文博客圈微信群**”。

### AI 学英语

[PrettyPolly](https://www.prettypolly.app/app)

[MyShell](https://myshell.ai)

## 工具

### 苹果免越狱定位修改器

[LocationSimulator](https://github.com/Schlaubischlump/LocationSimulator)
