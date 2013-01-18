#!/bin/bash

# 纯HTML 选择器为 body
lessc ./src/puretag.config.less > ./bin/puretag.css
# 选择器为 .post
lessc ./src/wordpress.config.less > ./bin/wordpress.css
# 选择器为 .markdown
lessc ./src/blogin.config.less > ./bin/blogin.css
# 选择器为 body
lessc ./src/tblog.config.less > ./bin/tblog.css
# 选择器为 .entry
lessc ./src/default.config.less > ./bin/entry.css

