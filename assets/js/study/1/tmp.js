/**
 * Created by Administrator on 2017/9/25.
 */
(function () {
    Ext.onReady(function () {
        Ext.define('mywin',{
            extend:'Ext.window.Window',
            width:400,
            height:600,
            title:'Hello world',
            config:{
                title:'我的窗口',
                width:500,
                height:300,
                x:100,
                y:200

            }
        })
        var mywin=Ext.create('mywin',{

        });
        Ext.get('id0').on('click',function () {
            mywin.show();
        })







     });
})();
