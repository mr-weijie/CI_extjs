/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.Panel',{

        title:'Tabal 表格布局',
        width:500,
        height:500,
        layout:{
            type:'table',
            columns:4,//4列,列数设定后，以后就按每4列一循环，生成一个表格布局
        },
        defaults:{
            width:100,
            height:100,
            frame:true
        },
        renderTo:'myform',
        items:[
            {
                title:'1号',
                width:300,
                colspan:3//跨3列
            },
            {
                title:'2号',
                height:200,
                rowspan:2//跨2行，由于没有写colspan,所以，默认就是占1列，即colspan=1
            },
            {
              //  title:'3号'
            },
            {
             //   title:'4号'
            },
            {
              //  title:'5号'
            }
        ]
    });
});
