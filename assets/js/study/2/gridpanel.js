/**
 * Created by Administrator on 2017/10/13.
 */
(function () {
    Ext.onReady(function () {
        Ext.QuickTips.init();//快速提示初始化，作用是当鼠标滑过具体组件时，会有相当于html中title提示的效果
        //为了给grid提供数据，先定义一下model和store
        Ext.define('user',{
            extend:'Ext.data.Model',
            fields:[
                {name:'id',type:'int'},
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ]
        });
        //定义一个基于user的store
        Ext.create('Ext.data.Store',{
            model:'user',//就是上面定义的user
            storeId:'userStore',//为了给gridpanel提供数据，必须先指定一个StoreId,相当于数据库连接池
            proxy:{
                type:'ajax',//采用ajax方式
                url:'/index.php/studydata/getusers',
                reader:{
                    type:'json',
                    root:''
                },
                writer:{
                    type:'json'
                }
            },
            autoLoad:true//自动加载数据
        });

        Ext.get('id0').on('click',function () {
            //创建一个grid
            var grid=Ext.create('Ext.grid.Panel',{
                title:'Grid Demo',//grid标题
                frame:true,//开启渲染模块，显示效果好（比较饱满），默认为false
                forceFit:true,//强行填充，效果是将剩余的空间填充
                width:500,
                height:400,
                columns:[//列模式
                    {text:'id',dataIndex:'id',hidden:true},//隐藏显示
                    {text:"姓名",dataIndex:'name'},//text:为列标题，dataIndex为对应store中的数据字段
                    {text:'年龄',dataIndex:'age',width:20},
                    {text:'电子邮箱',dataIndex:'email',field:{
                        //设置该字段为可编辑字段
                        xtype:'textfield',//定义为文本型编辑字段
                        allowBlank:true //允许为空
                    }}
                ],
                tbar:[
                    {xtype:'button',text:'新增',iconCls:'students',handler:function (o) {
                        var grid=o.findParentByType('gridpanel');//通过父层的xtype来找到相应的grid，参数o就是当前的按钮
                        var store=grid.getStore();//通过grid来获取相应的store
                        alert(store.getCount());
                    }},
                    {xtype:'button',text:'查看',iconCls:'teachers',handler:function (o) {
                        var toolbar=o.ownerCt;//找到父集容器Container,该按钮的父集即是toolbar
                        var grid=toolbar.ownerCt;//再接着找toolbar的父集，应该就是grid
                        var store=grid.getStore();//通过grid来获取相应的store
                        alert(store.getCount());

                    }},
                    {xtype:'button',text:'删除',handler:function (o) {
                        var grid=o.ownerCt.ownerCt;//先得到grid
                        var sm=grid.getSelectionModel();//再得到选择模式
                        var data=sm.getSelection();//通过选择模式得到当前选择的modele记录数组
                        if(data.length==0){
                            Ext.Msg.alert('提示','您至少要选择一条记录');
                        }else {
                            //1.先得到被选择的ID
                            var st=grid.getStore();//先拿到grid绑定的store,也就是记录集，用于删除其中数据中
                            var ids=[];
                            Ext.Array.each(data,function (record) {
                                ids.push(record.get('id'));
                            });
                            //alert(ids)
                            //2.后台操作，将必要的参数通过ajax发送给后服务
                            Ext.Ajax.request({
                                url:'/index.php/studydata/deleteusers',
                                method:'POST',
                                params:{ids:ids.join(',')},
                                timeout:3000,
                                success:function (response,opts) {
                                    var resp=Ext.JSON.decode(response.responseText);
                                    if(resp.status=='ok'){//如果服务器返回删除成功状态，则进行本地删除
                                        //本地删除的实质就是在将grid绑定的store中删除特定的记录model即可自动刷新显示的grid内容
                                        Ext.Array.each(data,function (record) {
                                            st.remove(record);//record就是一个model,将其从store中移除即可
                                        });

                                    }else {
                                        Ext.Msg.alert('提示','服务器端删除失败！')
                                    }
                                },
                                failure:function (response, opts) {
                                    Ext.Msg.alert('提示','服务器端删除失败！')
                                }

                            });

                        }

                    }},
                    {xtype:'button',text:'修改'}
                ],//加上工具栏
                dockedItems:[//加上停靠栏
                    {
                        xtype:'pagingtoolbar',//分页工具栏
                        store:Ext.data.StoreManager.lookup('userStore'),//这个store和grid中的store一致
                        dock:'bottom',//停靠位置
                        displayInfo:true//展示信息当前页的条数
                    }
                ],
                plugins:[//增加可编辑的插件数组，也可以是单个插件
                    Ext.create('Ext.grid.plugin.CellEditing',{
                     //   clicksToEdit:1//击鼠标的次数，1为单击，默认是2即双击

                    })
                ],
                selType:'checkboxmodel',//加上选择框模式
                multiSelect:true,//可以多选，但事实上，似乎没起作用，不设置也可是多选的,但如果点到两行中间，会清空选择
                renderTo:'mygridpanel',//渲染到指定的div中
                store:Ext.data.StoreManager.lookup('userStore')//参数就是上面已定义好的storeId
            });

        });






    });
})();
