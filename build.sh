#!/bin/bash

# 纯HTML 选择器为 body
lessc -x `pwd`/src/puretag.config.less > ./bin/puretag.css
# 选择器为 .post
lessc -x `pwd`/src/wordpress.config.less > ./bin/wordpress.css
# 选择器为 .entry
lessc -x `pwd`/src/default.config.less > ./bin/entry.css
# 选择器为 .entry
lessc -x `pwd`/src/word.config.less > ./bin/word.css

