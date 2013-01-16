/**
 * A function to overlay a dynamically created baseline grid
 * on a webpage.
 *
 * @version 0.9.8
 * @author John Keyes <john@keyes.ie>
 * @copyright Copyright (c) 2011, John Keyes
 * @link https://github.com/jkeyes/baseline
 * @license http://jkeyes.mit-license.org/
 *
 */

var merge = function(src, dest) {
  for (prop in src) { 
    if (prop in dest) { continue; }
    dest[prop] = src[prop];
  }
}

/* From jQuery: dimensions.js */
function getDimension(elem, name) {
  if (elem === window) {
  	var docElemProp = elem.document.documentElement[ "client" + name ],
  		body = elem.document.body;
  	return elem.document.compatMode === "CSS1Compat" && docElemProp ||
  		body && body[ "client" + name ] || docElemProp;    
  } else {
    return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);
	}
}

/**
 * Baseliner.
 */
var Baseliner = function(options) {
  var defaults = {
    'gridColor': [196, 196, 196],
    'gridHeight': 10,
    'gridOpacity': 100,
    'gridSpace': 1
  }
  if (options == null) {
    options = {};
  } else {
    var optint = parseInt(options);
    if (optint != 0 && !isNaN(optint) ) {
      options = { 'gridHeight': optint };
    }
  }
  merge(defaults, options);
  this.opts = options;
  
  var baseliner = this;
  this.overlay_id = 'baseline-overlay'
  this.overlay = null;
  this.showText = document.createTextNode("Show Baseline");
  this.hideText = document.createTextNode("Hide Baseline");

  this.resize = function() {
    if (!this.overlay) return;

    height = getDimension(document, "Height");
    width = getDimension(window, "Width");
    this.overlay.style.width = width + "px";
    this.overlay.style.height = height + "px";
  }
  this.create = function() {
    var _already_overlaid = document.getElementById(this.overlay_id);
    if (_already_overlaid) return;

    this.overlay = document.createElement('div');
    this.overlay.id = this.overlay_id;
    document.body.appendChild(this.overlay);
    this.overlay.style.background =  'url(http://baselinebg.keyes.ie/?h=' + this.opts.gridHeight + '&r=' + this.opts.gridColor[0] + '&g=' + this.opts.gridColor[1] + '&b=' + this.opts.gridColor[2] + '&s=' + this.opts.gridSpace + ') repeat';
    this.overlay.style.position = 'absolute';
    this.overlay.style.top = '0px';
    this.overlay.style.left = '0px';
    this.overlay.style.zIndex = 9998;
    this.overlay.style.opacity = this.opts.gridOpacity / 100;
    this.resize()
  }
  this.toggle = function(forced) {
    if (forced) {
      var elem = document.getElementById(this.overlay_id);
      if (elem) {
        document.body.removeChild(elem);
      }
    }
    this.create();
    if (forced || this.overlay.style.display != 'block') {
      if (this.showText.parentNode) {
        this.overlay_it.replaceChild(this.hideText, this.showText);
      }
      this.overlay.style.display = 'block';
    } else {
      if (this.hideText.parentNode) {
        this.overlay_it.replaceChild(this.showText, this.hideText);
      }
      this.overlay.style.display = 'none';
    }
  }
  this.refresh = function(value) {
    var value = parseInt(value);
    if (value == 0 || isNaN(value)) {
      this.value = baseliner.opts.gridHeight;
      baseliner.grid_size.style.backgroundColor = "red";
      baseliner.grid_size.style.color = "white";
      return;
    }
    baseliner.grid_size.style.backgroundColor = "white";
    baseliner.grid_size.style.color = "black";
    if (baseliner.overlay) {
      document.body.removeChild(baseliner.overlay);
      baseliner.overlay = null;
    }
    baseliner.opts.gridHeight = value;
    baseliner.toggle(true);
  }

  init = function() {
    switch(baseliner.opts.gridColor) {
      case 'green':
        baseliner.opts.gridColor = [0, 0xFF, 0]; break;
      case 'blue':
        baseliner.opts.gridColor = [0, 0, 0xFF]; break;
      case 'red':
        baseliner.opts.gridColor = [0xFF, 0, 0]; break;
      case 'black':
        baseliner.opts.gridColor = [0, 0, 0]; break;
    }

    var overlay_it = document.createElement('a');
    overlay_it.setAttribute('href', '');
    overlay_it.style.color = '#EEE';
    overlay_it.style.marginRight = '12px';
    overlay_it.appendChild(baseliner.showText);
    
    overlay_it.onclick = function(evt) {
      if (!evt) var evt = window.event;
      baseliner.toggle();
	    evt.cancelBubble = true;
	    if (evt.stopPropagation) {
	      evt.stopPropagation();
	      evt.preventDefault();
	    }
	    return false;
    }
    baseliner.overlay_it = overlay_it;
    
    var grid_size = document.createElement('input');
    grid_size.size = 3;
    grid_size.value = baseliner.opts.gridHeight;
    grid_size.style.textAlign = 'center';
    grid_size.style.border = '1px solid #CCC';
    grid_size.style.padding = '1px';
    baseliner.grid_size = grid_size;

    var parent = document.createElement('div');
    parent.style.position = 'relative';
    parent.style.zIndex = 20000;
    parent.style.marginTop = '20px';
    
    var action = document.createElement('div');
    action.id = 'overlay-it';
    action.style.position = 'fixed';
    action.style.bottom = '0px';
    action.style.left = '10px';
    action.style.display = 'inline';
    action.style.padding = '5px 15px';
    action.style.fontFamily = 'Arial, sans-serif';
    action.style.fontSize = '12px';
    action.style.fontWeight = 'bold';
    action.style.textAlign = 'center';
    action.style.backgroundColor = '#333';
    action.style.color = '#EEE';
    
    action.appendChild(overlay_it);
    action.appendChild(grid_size);
    parent.appendChild(action);
    document.body.appendChild(parent);
    
    var timer;

    var _heightChanged = function() {
      window.clearTimeout(timer);
      timer = window.setTimeout(function() { 
          baseliner.refresh(grid_size.value); 
        }, 400);
    };
    
    grid_size.onchange = grid_size.onkeyup = _heightChanged;

    window.onresize = function() {
      baseliner.resize();
    };
    document.onkeyup = function(event) {
        if (!evt) var evt = window.event;
        var keyCode = evt.keyCode || evt.which;

        if (keyCode == 27) {
          window.clearTimeout(timer);
          timer = window.setTimeout(function() { 
            baseliner.toggle();
          }, 400);
        }
      };
  }
  init();
}

