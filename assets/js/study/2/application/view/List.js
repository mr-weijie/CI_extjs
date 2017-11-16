/**
 * Created by Administrator on 2017/10/14.
 */
Ext.define('AM.view.List',{
    extend:'Ext.grid.Panel',//定义一个grid.Panel面板
    alias:'widget.userlist',//定义一个alias,给app.js直接调用，这样就不必使用Ext.create('AM.views.list',{}):了，而是直接使用xtype:userlist即可。
    title:'MVC-Demo',
    frame:true,//开启渲染模块，显示效果好（比较饱满），默认为false
    forceFit:true,//强行填充，效果是将剩余的空间填充
    width:800,
    height:400,
    columns:[//列模式
        //Ext.create('Ext.grid.column.RowNumberer',{}),//自动生成行序号
        {text:'序号',xtype:'rownumberer',width:30},
        {text:'id',dataIndex:'id',hidden:true},//隐藏显示
        {text:"姓名",dataIndex:'name',width:50,locked:true},//text:为列标题，dataIndex为对应store中的数据字段，loocked:true锁定该列，该列不会跟随横向滚动条移动
        {text:'年龄',dataIndex:'age',width:40,
            summaryType:'average',//count,sum,min,max,average中的任意一下，但其类型必须在Model定义时是数值型的
            summaryRenderer: function(value, summaryData, dataIndex) {
                return Ext.util.Format.number(value,'0.00');
            }
        },
        {//复杂表头
            text:'相关信息',
            columns:[
                {text:'电子邮箱',dataIndex:'email',width:150,field:{
                    //设置该字段为可编辑字段
                    xtype:'textfield',//定义为文本型编辑字段
                    allowBlank:true //允许为空
                }
                },
                {
                    text:'IT人员',dataIndex:'isIt',width:40,xtype: 'booleancolumn',trueText: '是',falseText: '否',
                    renderer:function (value) {//利用renderer可以减少服务器的负担，把格式转换任务移到客户端来
                        if(value==1){
                            return '是'
                        }else if(value==0) {
                            return '否';
                        }

                    }
                },
            ]
        },
                {
            text:'出生日期',dataIndex:'birthday',width:120,xtype: 'datecolumn',format:'Y-m-d',
            renderer:function (value) {//利用renderer可以减少服务器的负担，把格式转换任务移到客户端来
                var d=Ext.Date.format(new Date(parseInt(value) * 1000),'Y-m-d H:i:s');
                if(d.indexOf('NaN')!=-1){ d='1970-01-01 00:00:00'}
                return d;
            }
        },
        {
            text:'性别',dataIndex:'sex',width:30,
            renderer:function (value) {//如果没有renderer这个配置项，则会直接显示，如果有这个配置性，则按这里的返回值进行显示
               // alert(value);
                if(value==false) return '';
                if(value=='男'){
                    return '<span style="color:red">'+value+'</span>'
                }else {
                    return '<span style="color:green">'+value+'</span>'

                }
            }
        },
        {
            text:'收入',dataIndex:'deposit',width:60,xtype:'numbercolumn'
        },
        {
            //这个字段templatecolunm一般情况下作为多个信息的组合来提供一个特殊的消息
            text:'描述',xtype:'templatecolumn',tpl:'姓名:{name},年龄:{age}'
        },
        {
            text:'排序',dataIndex:'orderId',width:40
        },
        {text:'相关操作',xtype:'actioncolumn',icon:'/assets/images/icon/del.png',width:50,
        //为了严格执行MVC原则，不宜在view里写控制类的码，因此，这类代码最好写到控制器中去
        //     ,handler:function (grid,row,col) {
        //     alert(row+""+col);
        // },
        //     items:[//里面可按钮组
        //         '/assets/images/icon/del.png',
        //         '/assets/images/icon/assessments.png'
        //     ]
        }
    ],
     features: [//{
    //     ftype: 'rowbody',
    //     setupRowData: function(record, rowIndex, rowValues) {
    //         var headerCt = this.view.headerCt,
    //             colspan = headerCt.getColumnCount();
    //         // Usually you would style the my-body-class in CSS file
    //         return {
    //             rowBody: '<div style="padding: 0em">'+record.get("name")+'</div>',
    //             rowBodyCls: "my-body-class",
    //             rowBodyColspan: colspan
    //         };
    //     }
    // },
         {
             ftype: 'summary'
         },
         {//分组有bug:当鼠标滑到第一行时，chrome会出现：Uncaught TypeError: Cannot read property 'addCls' of null,firefox会出现：TypeError: me.getRowStyleTableEl(...) is null
             ftype:'grouping',
             groupByText:"分组",
             groupHeaderTpl:"分组:{name}   共{rows.length}人",
             showGroupsText:"展示分组",
             startCollapsed: false, //分组是否收起
             enableGroupingMenu:true//由此来控制是否显示分组菜单，当startCollapsed为false,enableGroupingMenu为false时，分组就不能用了，因为没有分组菜单项
         }
     ],
    tbar:[
        {xtype:'button',id:'add',text:'新增',iconCls:'students'},
        {xtype:'button',id:'view',text:'查看',iconCls:'teachers'},
        {xtype:'button',id:'delete',text:'删除'},
        {xtype:'button',id:'save',text:'保存修改'},
        {xtype:'button',id:'selection',text:'选择操作'}
    ],//加上工具栏
    dockedItems:[//加上停靠栏
        {
            xtype:'pagingtoolbar',//分页工具栏
            store:'AM.store.Users',//就是前面定义的users类,//这个store和grid中的store一致
            dock:'bottom',//停靠位置
            displayInfo:true//展示信息当前页的条数
        }
    ],
    plugins:[//增加可编辑的插件数组，也可以是单个插件
        Ext.create('Ext.grid.plugin.CellEditing',{
            //   clicksToEdit:1//击鼠标的次数，1为单击，默认是2即双击

        })
    ],
    viewConfig:{
        plugins:[
            Ext.create('Ext.grid.plugin.DragDrop',{
                ddGroup : 'ddTree',//拖放组名称，两个控件只有在同一个拖放组内才可以实现拖放功能
                dragGroup :'userlist',//拖拽组名称
                dropGroup : 'userlist',//释放组名称
                enableDrag : true,//允许拖拽
                enableDrop : true//允许释放
            })
        ],
        listeners:{
            drop:function (node, data, overModel, dropPosition, eOpts ) {
                var st=this.getStore();//获取当前store
                for(i=0;i<st.count();i++){
                    st.getAt(i).set('orderId',i+1);
                }

            }
        }


    },
    selType:'checkboxmodel',//加上选择框模式
    multiSelect:true,//在不是selType:checkboxmodel即选择框的模式下，但如果是选择框模式，则是无效的，即仍可以多行选
    enableKeyNav:false,//启用键盘上的上下键，来选择记录,默认是ture，感觉flase不好用！
 // columnLines:true,//显示竖线
    store:'AM.store.Users',//就是前面定义的Users类
    initComponent:function () {//调用一下父类构造器方法
        this.callParent(arguments);

    }

});//定义一个列表视图类list
