import os
import re

# 定义一个函数来处理标题
def process_title(title):
    # 定义多种可能的标题格式
    patterns = [
        (r'周刊（第 (\d+) 期）', r'Weekly \1'),
        (r'周刊#(\d+)', r'Weekly \1'),
        (r'周刊 (\d+)', r'Weekly \1'),
        (r'Weekly (\d+)', r'Weekly \1'),
    ]
    # 尝试每种格式
    for pattern, replacement in patterns:
        new_title, n = re.subn(pattern, replacement, title)
        if n > 0:
            return new_title
    # 如果没有匹配的格式，返回原标题
    return title

# 遍历所有的 markdown 文件
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r+') as f:
                content = f.readlines()
                # 找到标题行
                for i, line in enumerate(content):
                    if line.startswith('title:'):
                        # 分割标题和后续内容
                        title, _, rest = line[7:].partition('：')
                        # 处理标题
                        new_title = process_title(title.strip())
                        content[i] = 'title: ' + new_title + '：' + rest
                        break
                # 将新内容写回文件
                f.seek(0)
                f.writelines(content)
                f.truncate()
