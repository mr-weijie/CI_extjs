/**
 * Created by Administrator on 2017/11/11.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.container.Viewport',{
        //border布局一般不实例化Panel,而是实例化container.Viewport，也就是这种布局直接渲染到整个浏览器上而不是浏览器中的具体元素上，比如具体的div上，因此，它会直接充满浏览器而无须指定width和height
        title:'borderLayout布局',
        layout:'border',//该布局主要分上、下、左、右、中五部分,分别代表着north,south,west,east,center
        defaults:{
            collapsible:true,//可以收缩
            split:true,//具有分割条
            bodyStyle:'padding:15px'
        },
        items:[
            {
                title:'上面--north',
                region:'north',
                height:100,
                cmargins:'5 0 0 0'
            },
            {
                title:'下面--south',
                region:'south',
                height:100,
                minSize:75,//最小高度值
                maxSize:150,//最大高度值，因为border布局是可以随着浏览器的尺寸而变化的
                margins:'5 0 0 0'
            },
            {
                title:'左面--west',
                region:'west',
                margins:'5 0 0 0',//上，右，下，左边距分别为：5，0，0 0
                width:175,//因为是在左面，高度已上下两面决定，只剩下宽度了
                minSize:100,
                maxSize:200
            },
            {
                title:'中--center',
                collapsible:false,//禁止收缩
                region:'center',
                margins:'5 0 0 0'
            },
            {
                title:'右面--east',
                region:'east',
                width:150,
                margins:'5 0 0 0'
            }

        ]

    });
});