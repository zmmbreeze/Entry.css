#!/bin/bash

# 纯HTML 选择器为 body
lessc -x `pwd`/src/puretag.config.less > ./bin/puretag.css
# 选择器为 .post
lessc -x `pwd`/src/wordpress.config.less > ./bin/wordpress.css
# 选择器为 .markdown
lessc -x `pwd`/src/blogin.config.less > ./bin/blogin.css
# 选择器为 body
lessc -x `pwd`/src/tblog.config.less > ./bin/tblog.css
# 选择器为 .entry
lessc -x `pwd`/src/default.config.less > ./bin/entry.css

