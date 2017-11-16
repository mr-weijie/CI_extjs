/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.Panel',{
        title:'Absolute(绝对定位)布局',
        width:500,
        height:500,
        layout:'absolute',
        renderTo:'myform',
        items:[
            {
                title:'子面板',
                x:50,
                y:60,
                width:100,
                height:100,
                html:'定位在x=50，Y=50'
            }
        ]
    });
});