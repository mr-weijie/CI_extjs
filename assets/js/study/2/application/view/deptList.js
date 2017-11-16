/**
 * Created by Administrator on 2017/10/27.
 */
Ext.define('AM.view.deptList',{
    extend:'Ext.grid.Panel',
    alias:'widget.deptList',
    store:'integrationStore',
    width:500,
    selModel:{
        selType:'checkboxmodel'
    },
    multiSelect:true,//允许多选
    frame:true,//饱满框架
    enableKeyNav:true,//允许键盘操作
    tbar:[//添加toolbar
        {xtype:'button',text:'新增',id:'add',iconCls:'rubrics'},
        {xtype:'button',text:'删除',id:'delete',iconCls:'positions'},
        {xtype:'button',text:'修改',id:'modify',iconCls:'teacher_eportfolios '},
        {xtype:'button',text:'保存',id:'save',iconCls:'assessors'},
    ],
    dockedItems:[
        {
            xtype:'pagingtoolbar',
            store:'integrationStore',
            dock:'bottom',
            displayInfo:true
        }

    ],

    columnLines:true,//显示竖线
    columns:[
        {text:'部门名称',dataIndex:'text',width:100,
            field:{
                xtype:'textfield',//定义文本字段
               // allowBlank:false//禁空
            }
        },
        {text:'部门经理',dataIndex:'manager',width:100,
            field:{
                xtype:'textfield',
              //  allowBlank:false
            }
        },
        {text:'部门排序',dataIndex:'index',width:50,
            field:{
                xtype:'textfield'
            }
        },
        {text:'职能简介',dataIndex:'info',width:100,
            field:{
                xtype:'textfield'
            }

        }

    ],
    initComponent:function () {
        this.editing=Ext.create('Ext.grid.plugin.CellEditing',{});//先初始化一个可编辑的插件
        this.plugins=[this.editing];//这样这个插件就可以在外面调用了
        this.callParent(arguments);
    }

});
