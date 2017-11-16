/**
 * Created by Administrator on 2017/9/26.
 */
(function () {
    Ext.onReady(function () {
       var o= {
           say : function () {
               alert('hello world!');
           }
       }
       var fn=Ext.Function.alias(o,'say');//将上述的say方法定义成别名：fn

       Ext.get('id0').on('click',function () {
           o.say()
       })

        Ext.get('id1').on('click',function () {
            fn();
        })

    });
})();
