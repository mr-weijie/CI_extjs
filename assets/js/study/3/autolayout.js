/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.Panel',{
        width:500,
        height:280,
        title:"AutoLayout布局的面板",
        layout:'auto',
        renderTo:'myform',
        items:[
            {
                xtype:'panel',
                title:'第一个面板',
                width:'75%',//占总体宽度的75%
                height:90
            },
            {
                xtype:'panel',
                title:'第二个面板',
                width:'80%',
                height:100
            },
            {
                xtype:'panel',
                title:'第三个面板',
                width:'90%',
                height:100
            }

        ]
    });

});