jQuery(window).load(function() {
    /**
     * 切换模板
     * @param _url
     * @constructor
     */
    var TplToContentpanel=function (_url,_title) {
        var $contentpanel=$("#contentpanel");
        var $titleTag=$("#title-tag");
      $.get(_url,function (tpl) {
          console.log(tpl)
          $titleTag.text(_title)
          $contentpanel.html(tpl)
      })
    };

    var author = function () { alert("author"); },
        books = function () { alert("books"); }

    var routes = {
        '/':function () { alert("首页") },
        '/module1-1': function () { TplToContentpanel('./module1/index.html','./module1/index.html') },
        '/module2-1': function () { TplToContentpanel('./module2/index.html','./module2/index.html') }
    };

    var router = Router(routes);
    router.init();
});
