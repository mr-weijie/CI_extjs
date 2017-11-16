/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.Panel',{
        title:'accordion手风琴式布局',
        width:200,
        height:500,
        layout:'accordion',
        defaults:{
            bodyStyle:'padding:15px'
        },
        layoutConfig:{
            titleCollapse:false,
            animate:true,
            activeOnTop:true
        },
        items:[
            {
                title:'Panel 1',
                html:'面板 1',
            },
            {
                title:'Panel 2',
                html:'面板 2',
            },
            {
                title:'Panel 3',
                html:'面板 3',
            },
            {
                title:'Panel 4',
                html:'面板 4',
            },
            {
                title:'Panel 5',
                html:'面板 5',
            },

        ],
        renderTo:'myform'

    });
});
