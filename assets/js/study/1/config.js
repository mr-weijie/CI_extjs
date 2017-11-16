/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
    Ext.onReady(function () {
        Ext.define('mywin',{
            extend:'Ext.window.Window',
            width:300,//这是默认值
            height:500,
            config:{
                title:'我的窗口',
                width:500,
                height:300,
                x:100,
                y:200

            }
        });
        var mywin=Ext.create('mywin',{

        });

        Ext.get('id0').on('click',function () {
            mywin.setTitle('这是一个新的窗口');
            mywin.setWidth(500);
            mywin.setHeight(400);
            mywin.show();
        });
        Ext.get('id1').on('click',function () {
            var winHeight=mywin.getHeight();
            alert(winHeight);
        })


    })
})();

