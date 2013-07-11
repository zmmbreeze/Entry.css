(function($, less) {
    var ConfigParser = function(text) {
        text = text.replace(/\r\n/g, '\n');
        var commentReg = /\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g;
        
    };
    var css = '' +
        '.less-config {position:absolute;top:0;right:0;bottom:0;width:200px;margin:0;padding:10px;font-size:16px;line-height:2em;border-left:1px solid #CCC;}' +
        '.less-config div,.less-config p,.less-config input,.less-config h1 {margin:0;padding:0;}' +
        '.less-config h1 {margin:0 0 2em;font-size:2em;}' +
        '.less-config-group {margin-top:2em;}' +
        '.less-config-group h2 {margin-top:1em;font-size:1.5em;}' +
        '.less-config-group-item {margin-top:0.5em;}' +
        '.less-config-group-item label {margin-right:0.5em;}' +
        '.less-config-group-item input {margin-top:0.5em;}';
    var rootTpl = '' +
        '<div class="less-config">' +
            '<h1>Less Config</h1>' +
        '</div>';
    var groupTpl = '' +
        '<div class="less-config-group">' +
            '<h2>{groupTitle}</h2>' +
            '<div>{itemsHtml}</div>' +
        '</div>';
    var itemTpl = '' +
        '<div class="less-config-item">' +
            '<label for="lessConfig{varName}">{itemTitle}</label>' +
            '{inputHtml}' +
        '</div>';
    var inputTpl = {
        '': '<input type="text" id="lessConfig{itemName}" data-type="{itemType}" class="lessConfigItem"></input>',
        'boolean': '<input type="text" id="lessConfig{itemName}" data-type="boolean" class="lessConfigItem"></input>',
        'length': '<input type="text" id="lessConfig{itemName}" data-type="length" class="lessConfigItem"></input>'
    };

    var Util = {
        format: function(tpl, values) {
            if (!values) {
                return tpl;
            }

            if (typeof values !== 'object') {
                return tpl.replace('{v}', ('' + values));
            } else {
                return tpl.replace(/\{([^{}]+)\}/g, function(match, key) {
                    var val = values[key];
                    return (val !== undefined) ? ('' + val) : '';
                });
            }
        }
    };

    /**
     * LessConfiger.
     *
     * @constructor
     * @param {object} config .
     */
    var LessConfiger = function(config) {
        this.config = config;
        this._rend();
        this._bindEvent();
    };

    LessConfiger.prototype._rend = function() {
        this.$root = $(rootTpl);
        $('body').append(this.$root);
        this.$holder = $('<div></div>');
        this.$holder.appendTo(this.$root);
        this.$holder.html(this._rendGroups());
        this.$root[0].appendChild( $('<style>'+css+'</style>')[0] );
    };

    LessConfiger.prototype._bindEvent = function() {
        var self = this;
        $('.lessConfigItem').change(function() {
            var vars = {};
            vars[this.id.slice(10)] = $(this).val();
            less.modifyVars(vars);
        });
    };

    LessConfiger.prototype._rendGroups = function() {
        var config;
        var result = '';
        for(var i = 0, l = this.config.length; i < l; i++) {
            config = this.config[i];
            if (config.groupTitle) {
                result += this._rendGroup(config);
            } else {
                result += this._rendItem(config);
            }
        }
        return result;
    };

    LessConfiger.prototype._rendGroup = function(groupConfig) {
        var result = '';
        var items = groupConfig.items;
        var item;
        var itemHtml = '';
        for (var i = 0, l = items.length; i < l; i++) {
            item = items[i];
            itemHtml += this._rendItem(item);
        }
        groupConfig.itemHtml = itemHtml;

        return Util.format(groupTpl, groupConfig);
    };

    LessConfiger.prototype._rendItem = function(itemConfig) {
        itemConfig.inputHtml = this._rendInput(itemConfig);
        return Util.format(itemTpl, itemConfig);
    };

    LessConfiger.prototype._rendInput = function(itemConfig) {
        var tpl = inputTpl[itemConfig.itemType];
        return Util.format(tpl, itemConfig);
    };

    window.LessConfiger = LessConfiger;
})(jQuery, less);
