#!/bin/bash

# 纯HTML 选择器为 body
/usr/bin/lessc -x `pwd`/src/puretag.config.less > ./bin/puretag.css
# 选择器为 .post
/usr/bin/lessc -x `pwd`/src/wordpress.config.less > ./bin/wordpress.css
# 选择器为 .markdown
/usr/bin/lessc -x `pwd`/src/blogin.config.less > ./bin/blogin.css
# 选择器为 .entry
/usr/bin/lessc -x `pwd`/src/default.config.less > ./bin/entry.css
# 选择器为 .entry
/usr/bin/lessc -x `pwd`/src/word.config.less > ./bin/word.css

