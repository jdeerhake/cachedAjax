cachedAjax
================
v0.0.1  
01/27/2011  
  
About
-----
A jQuery plugin to set up memoized Ajax calls to improve performance when fetching static resources via Ajax.  
  
Call the function via `jQuery.cachedAjax` and supply it with a configuration object that you would normally use with `jQuery.ajax` (save for the data).  It then returns a function that you call with a data object every time you wish to make a request.  
  
Example usage:  
    var search = jQuery.cachedAjax({
      url : '/search',
      type : 'get',
      success : function(data) {
        console.log(data);
      }
    });

When you call  
    search({ q : "test" });
an Ajax request is made.  If it is successful, the result is stored in an array and your success callback is triggered with the data (with only the data).
A repeated call of `search({ q : "test" });` will simply call the success callback with the data stored in the array, no Ajax call is needed.  
  
To clear the cache, simply call `search.clearCache()`  
  
For more visit the [project site](http://blog.jdeerhake.com/cached-jquery-plugin).
