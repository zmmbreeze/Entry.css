Entry.css
===========

Entry.css是一个可配置的、更适合阅读的中文文章样式库，可以用来快速搭建中文博客主题或是用于项目文档的样式。

支持浏览器：IE 9+,Chrome 14+,Firefox 4+,Safari 5+,Opera 11+,Mobile Safari(iOS 5+)

为什么要有Entry.css？
---
作为一个前端工程师，有时朋友会让你帮忙整一整他们博客文章或是项目文档的样式。有时我们在自己博客使用了一个非常漂亮的主题，应用到自己博客上时却变的很难看（因为原主题针对的是英文）。

虽然我自己对设计也是一窍不通，不过没吃过猪肉但却见过猪跑。于是啃了些文字排版的基础知识，创造了Entry.css为一些不懂CSS的同学提供一个适合阅读的文章样式。如果你对此感兴趣或是有改进意见请在[github](https://github.com/zmmbreeze/Entry.css/issues)上给我提issue，在此表示感谢～

注意：Entry.css仅仅提供对文章的样式，你可以将其嵌入到你自己的主题中。如果你想要找全套主题，那么它不是个好的选择。

快速开始
---
在你的HTML中嵌入Entry.css，如下：

```html
<link rel="stylesheet" href="bin/entry.css" />
<div class="entry">
    <!-- 这里是你的文章 -->
</div>
```

如果你想要自定义CSS选择器或是文章主题，那么请查看下Entry.css的文档。

优势
---

1. 合理的间距，遵循“垂直的旋律”，更适合中文阅读
2. 宽度自适应，兼容手机等小屏幕
3. 专为中文提供的书名号、缩写、着重符、旁注、上下标...
4. 丰富的自定义选项：布局、大小、颜色等等

LOG
---
* 0.1<br/> init
* 0.2<br/> 修改二级及更深层次的pre的四周都为圆角
    <br/> 修改li中第一层第一个p/div的不缩进
    <br/> li之间的上下间距修改为0.25em
* 0.3<br/> 修改中文字体
    <br/> 修改abbr样式
    <br/> 修改li的list-type-position为inside
* 0.4<br/> 增加iframe支持,支持jsfiddle/speaker deck/slide share
    <br/> 支持disqus
    <br/> 修改四级标题样式，增加左边框
    <br/> 去掉header的border-bottom
    <br/> 去掉iframe为block的样式，为了支持github start button这样的外部按钮
* 0.5<br/> 修改hr的width为max-width，确保小屏幕不会显示横向滚动条
    <br/> 增加文章右内边距，优化小屏幕、小宽度下的样式
* 0.6<br/> 增加列表的嵌套样式
* 0.7<br/> 拆分文件
    <br/> 增加可选的mutli-column支持
    <br/> 修改宽度默认值为60px
    <br/> 修改h3-icon默认值为空
    <br/> 修改pre样式，去掉左右边框、圆角等等样式。使其适应性更强一些。并设置背景默认为transparent
    <br/> 添加了两个配置：@pre-back-color 和 @pre-border-color
    <br/> 去掉了四级标题的边框和下边距合并，保证样式普通
    <br/> 修改行内code的上下内边距为0.15em，使其在WIN chrome下更高些
    <br/> 修改a的下划线样式，确保下划线不和中文文字粘在一起
    <br/> 优化字体，增加wenquanyi 微米黑字体，ubuntu linux firefox立马好看不少
    <br/> 修复em下划线的颜色为word-color
    <br/> 修复h1, h2内部的u,em,abbr的下划线颜色
    <br/> 修证h1, h2, h3的padding-left和padding-right值
* 0.8<br/> 增加居中、居右两种布局
    <br/> 删掉三四级标题的配置
    <br/> 删除普通a标签的左右边距
* 0.9<br/> 增加限制图片的宽度
    <br/> 增加section与article标签的支持
    <br/> 使pre标签不会自动换行
    <br/> 移动@font-family到config.less中，使其可配置
    <br/> 增加配置@code-font-family
* 1.0<br/> 增加配置@use-index
    <br/> 重新修改全部样式，支持vertical rhythm，更适合阅读
    <br/> 去掉不必要的配置
    <br/> 直接子元素为img时，默认其为block元素
    <br/> 去掉了border相关的样式
* 1.1<br/> 使用px替换em
    <br/> 改进排版，去掉了些可配置项
    <br/> 基础less选择器修改为ext-entry
* 1.2<br/> 修改布局的实现方式
    <br/> 修复hr的位置
    <br/> 修复无标签文字位置的bug
    <br/> 修改code的默认背景色
    <br/> 默认关闭缩近选项
* 1.3<br/> 增加margin-bottom，使得对无标签文字的支持更好
    <br/> 修复baseline.js的bug
* 1.4<br/> 修复默认字体的注释bug
* 1.5<br/> 修改基础高度为16px，默认字体为16px
    <br/> 修改h1行高为16px + 32px，降低行高优化换行后样式
    <br/> 修改代码块样式为 13px/16px
    <br/> 修改默认字色为：424b50 （鸦青色）
* 1.6<br/> 去掉`h*`标签与其他标签的下边距，使页面更紧凑些
    <br/> 设置所有`table`的display值
