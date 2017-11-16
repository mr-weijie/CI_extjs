/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
    Ext.onReady(function () {
        var mywin=Ext.create('mywin',{
            width:300,
            height:400,
            title:'新窗口'

        });
        Ext.get('id0').on('click',function () {
            mywin.show();
        })

    })

})();
