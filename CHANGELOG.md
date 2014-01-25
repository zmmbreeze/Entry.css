Changelog
==========

* 0.1
    * init
* 0.2
    * 修改二级及更深层次的pre的四周都为圆角
    * 修改li中第一层第一个p/div的不缩进
    * li之间的上下间距修改为0.25em
* 0.3
    * 修改中文字体
    * 修改abbr样式
    * 修改li的list-type-position为inside
* 0.4
    * 增加iframe支持,支持jsfiddle/speaker deck/slide share
    * 支持disqus
    * 修改四级标题样式，增加左边框
    * 去掉header的border-bottom
    * 去掉iframe为block的样式，为了支持github start button这样的外部按钮
* 0.5
    * 修改hr的width为max-width，确保小屏幕不会显示横向滚动条
    * 增加文章右内边距，优化小屏幕、小宽度下的样式
* 0.6
    * 增加列表的嵌套样式
* 0.7
    * 拆分文件
    * 增加可选的mutli-column支持
    * 修改宽度默认值为60px
    * 修改h3-icon默认值为空
    * 修改pre样式，去掉左右边框、圆角等等样式。使其适应性更强一些。并设置背景默认为transparent
    * 添加了两个配置：@pre-back-color 和 @pre-border-color
    * 去掉了四级标题的边框和下边距合并，保证样式普通
    * 修改行内code的上下内边距为0.15em，使其在WIN chrome下更高些
    * 修改a的下划线样式，确保下划线不和中文文字粘在一起
    * 优化字体，增加wenquanyi 微米黑字体，ubuntu linux firefox立马好看不少
    * 修复em下划线的颜色为word-color
    * 修复h1, h2内部的u,em,abbr的下划线颜色
    * 修证h1, h2, h3的padding-left和padding-right值
* 0.8
    * 增加居中、居右两种布局
    * 删掉三四级标题的配置
    * 删除普通a标签的左右边距
* 0.9
    * 增加限制图片的宽度
    * 增加section与article标签的支持
    * 使pre标签不会自动换行
    * 移动@font-family到config.less中，使其可配置
    * 增加配置@code-font-family
* 1.0
    * 增加配置@use-index
    * 重新修改全部样式，支持vertical rhythm，更适合阅读
    * 去掉不必要的配置
    * 直接子元素为img时，默认其为block元素
    * 去掉了border相关的样式
* 1.1
    * 使用px替换em
    * 改进排版，去掉了些可配置项
    * 基础less选择器修改为ext-entry
* 1.2
    * 修改布局的实现方式
    * 修复hr的位置
    * 修复无标签文字位置的bug
    * 修改code的默认背景色
    * 默认关闭缩近选项
* 1.3
    * 增加margin-bottom，使得对无标签文字的支持更好
    * 修复baseline.js的bug
* 1.4
    * 修复默认字体的注释bug
* 1.5
    * 修改基础高度为16px，默认字体为16px
    * 修改h1行高为16px + 32px，降低行高优化换行后样式
    * 修改代码块样式为 13px/16px
    * 修改默认字色为：424b50 （鸦青色）
* 1.6
    * 去掉`h*`标签与其他标签的下边距，使页面更紧凑些
    * 设置所有`table`的display值
* 1.7
    * 支持标题自动编号(@use-title-number)
    * 修改table样式，更紧凑些
    * 简单支持了`header`、`video`、`footer`标签
    * 修复`a`标签在`h3`、`h4`、`h5`、`h6`内部时候的颜色为`word-color`
    * 标题不再加粗显示
    * 段落间距改为16px，`h1`、`h2`标题的上间距增加一倍(32*2)
    * 修改文档页配置，显示标题自动编号，`h2`局左
    * 修改`code`标签样式，去掉上下内边距，字体大小改为16px
    * 去掉code-border-color配置
    * 减小`ul`、`ol`的缩进，优化移动浏览器的显示
    * 增加纯文章的demo，见首页的“散文DEMO”链接
    * bug fix: build脚本配置bug；`use-indent`配置在编译后失效的bug；
* 1.7.1
    * bug fix: #13
* 1.7.2
    * 移除特殊a标签（href是javascript操作或是有onclick属性）的样式
    * 移除tblog配置
    * 修复#15
* 1.8
    * 修改标题字色相关配置
    * 更新一级标题号为中文
    * 更新blockquote的样式：使用楷体作为其字体，加左边框
    * 更新em的样式：改用text-emphasis
    * 更新code样式：更新字体大小、code-font-family配置改为pre-font-family
    * 更新默认字体
    * 更新demo和文档
    * 新增CHANGELOG.md
    * Fixed #16
