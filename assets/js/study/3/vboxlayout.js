/**
 * Created by Administrator on 2017/11/11.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.Panel',{
        width:400,
        height:430,
        renderTo:Ext.getBody(),
        title:'Vbox布局',
        layout:{
            type:'vbox',
            align:'stretch',
            pack:'start'
        },
        items:[
            {html:'panel 1',flex:1},//flex的意思是height取总体height-150后的1/3
            {html:'panel 2',height:150},
            {html:'panel 3',flex:2}//flex的意思是height取总体height-150后的2/3
        ]
    });
});