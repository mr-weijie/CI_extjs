/**
 * Created by Administrator on 2017/10/27.
 */
Ext.define('AM.view.mainLayout',{
    extend:'Ext.panel.Panel',
    alias:'widget.mainLayout',
    defaults:{
        split:true,
        bodyStyle:'padding: 1px'
    },
    layout:'border',
    items:[
        {
            title:'部门树形',
            region:'west',
            xtype:'panel',
            iconCls:'subjects',//设置图标样式
            margins:'5 2 5 5',
            width:200,//只要有width就可以，height会自动填充布局
            collapsible:true,
            id:'west-tree',
            layout:'fit',//整体填充
            items:[{
                id:'dept-tree',
                xtype:'deptTree'
            }]

        },
        {
            title:'部门数据表格',
            region:'center',
            xtype:'panel',
            iconCls:'managers',
            id:'center-grid',
            margin:'5 5 5 0',
            layout:'fit',
            width:500,
            items:[
                {
                    id:'dept-grid',
                    xtype:'deptList'
                }
            ]
        }
    ]
});
