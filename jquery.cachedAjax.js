/*
 * jQuery cachedAjax plugin v0.0.1, 2011-01-27
 * Only tested with jQuery 1.4.4 (early versions - YMMV)
 * 
 *   
 *   http://blog.jdeerhake.com/cachedajax-jquery-plugin
 *   http://plugins.jquery.com/project/cachedAjax
 *
 *
 * Copyright (c) 2011 John Deerhake
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 
/*global jQuery, window */

(function($) {
  var curry = function(fn, sc) {
    var scope = sc || window,
      args = Array.prototype.slice.call(arguments, 2);
    return function() {
      fn.apply(scope, args.concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  
  $.cachedAjax = function(conf) {
    var results = {},
      success = conf.success,
      cacheResult = function(sx) {
        var res = arguments[1];
        results[sx] = res;
        success(res);
      },
      makeRequest = function(dataOutObj) {
        var sx = jQuery.param(dataOutObj);
        if(!results[sx]) {
          conf.success = curry(cacheResult, null, sx);
          conf.data = sx;
          jQuery.ajax(conf);
        } else {
          success(results[sx]);
        }
      };
      
    makeRequest.clearCache = function() {
      results = [];
    }
      
    return makeRequest;
  };
}(jQuery));
