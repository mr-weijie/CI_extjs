/**
 * Created by Administrator on 2017/9/26.
 */
Ext.onReady(function () {
    var mYwin=Ext.create('Ext.window.Window',{
        height:600,
        width:300,
        title:'我的窗口'
    });
    var MyWin=new Ext.window.Window({
        width:300,
        height:600,
        title:'我的窗口'
    });



    Ext.get('id0').on('click',function () {
        MyWin.show();
    })



    Ext.get('id1').on('click',function () {
        mYwin.show();

    });




},this);