/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.panel.Panel',{//锚点布局中的组件，根据实际情况进行动态调整，并不是固定位置
        width:500,
        height:500,
        title:'AnchorLaout 锚点布局',
        layout:'anchor',
        renderTo:'myform',
        items:[
            {
                xtype:'panel',
                title:'75%宽，20%高',
                anchor:'75% 20%'
            },
            {
                xtype:'panel',
                title:'偏移量：-300宽，-200高',
                anchor:'-300 -200'

            },
            {
                xtype:'panel',
                title:'综合：-100宽，20%高',
                anchor:'-100 20%'

            }


        ]

    });
});