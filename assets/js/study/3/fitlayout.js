/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.Panel',{
        width:500,
        height:280,
        title:'fit布局',
        layout:'fit',
        renderTo:'myform',
        items:[
            {
                xtype:'panel',
                title:'第一个面板',
                width:'75%',//理论上该面板点总体宽度的75%，但事实上，由于总体布局为fit，所以，该面板会直接充满整个布局，且只有这个面板会有效果，其他子部件不会有任何效果，因为只有第一个子部件会起作用
                height:90
            },
            {
                xtype:'panel',
                title:'第二个面板',
                width:'75',//由上述原因，不会有任何效果
                height:100
            }
        ]
    });
});
