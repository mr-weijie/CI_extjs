/**
 * Created by Administrator on 2017/11/11.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.tab.Panel',{
        width:800,
        height:300,
        renderTo:Ext.getBody(),
        items:[
            {
                title:'第一个选项卡'
            },
            {
                title:'第二个选项卡'
            }
        ],
        buttons:[
            {
                text:'增加选项卡',
                handler:function (btn) {
                    var panel=btn.up('tabpanel');//其中的tabpanel就是Ext.tab.Panel的xtype
                    var index=panel.items.length+1;//增加的起始点：在总长度的基础上加1
                    var tabPage=panel.add({
                        title:'第'+index+'个选择项卡',
                        html:'我是第'+index+'个选择项卡',
                        closable:true
                    });
                    panel.setActiveTab(tabPage);//启用激活
                }
            }
        ]
    });
});
