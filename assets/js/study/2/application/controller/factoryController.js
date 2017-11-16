/**
 * Created by Administrator on 2017/10/14.
 */
Ext.define('AM.controller.factoryController',{
    extend:'Ext.app.Controller',
    init:function () {
        this.control({
            //利用Componentuery查询功能，对组件进行查询，第一个是组件的别名，后面是下一层的组件名，类似于CSS选择器
            'userlist':{//对grid表格进行相关操作
                itemclick:function (View, record, item, index, e, eOpts) {
                    // var sm=View.getSelectionModel();
                    // alert(sm.getCurrentPosition());
                    // sm.selectByPosition({'row':3,'column':4});
                }

            },
            'userlist button':{
                click:function (o) {
                    //    var grid=o.ownerCt.ownerCt;//先得到grid
                    var toolbar=o.ownerCt;//找到父集容器Container,该按钮的父集即是toolbar
                    var grid=toolbar.ownerCt;//再接着找toolbar的父集，应该就是grid
                    var sm=grid.getSelectionModel();//再得到选择模式
                    var data=sm.getSelection();//通过选择模式得到当前选择的modele记录数组
                    id=o.id;
                    if(data.length==0){
                        if('view,delete'.indexOf(id)!=-1){
                            Ext.Msg.alert('提示','您至少要选择一条记录');
                            return;
                        }

                    }
                    switch(id)
                    {
                        case 'add'://新增

                            break;
                        case 'view'://查看

                            break;
                        case 'delete'://删除
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


                            break;
                        case 'save'://保存修改

                            break;
                        case 'selection'://选择操作
                           // sm.deselect(3);//取消第三条记录的选择
                            var name=sm.getLastSelected().get('name');//获取最后选择行记录的name
                            var isSelect=sm.isSelected(2);//判断第三条记录是否被选择
                             sm.selectRange(2,4,true);//从第三行到第五行，选择,最后一个参数表明是否保留之前已选择的记录，默认是false
                            //alert(isSelect);

                            break;
                        default:

                    }
                }
            },
            'userlist actioncolumn':{//在这里通过xtype，来过滤事件的对象，actioncolumn就是view里的列模式的一个别名，通过单击或双击目标列模式来执行具体操作
                click:function (o,item,rowindex,colindex,el) {
                    alert(rowindex+' '+colindex);
                }
            },
            'userlist':{//注册表格编辑事件
                edit:function (editor, e, eOpts ) {
                    var data=e.record.data;
                    var id=data.id;
                    var email=data.email;
                    var paramArr=[];//初始化一个参数数组
                    var paramJson={//组织成Json对像
                        id:id,
                        items:'email='+email
                    };
                    paramArr.push(paramJson);//将Json对像加入到参数数组中
                    Ext.Ajax.request({
                    //    url:'/index.php/studydata/updateuser',
                        method:'POST',
                        params:{
                            param:Ext.encode(paramArr)//将数组编码成Json格式字串做为参数传出去
                        },
                        timeout:3000,//3秒超时
                        success:function (response,opts) {
                            var respArr=Ext.JSON.decode(response.responseText);
                            if(respArr[0].status=='ok'){
                                var model=e.record;
                                model.commit();//将model中的数据进行提交更新，作用是去掉grid上未更新的红三角标志
                            }else {
                                Ext.Msg.alert('提示','服务器端更新失败！')
                            }
                        },
                        failure:function (response,opts) {
                            alert(response.responseText);
                        }
                    });

                }
            },
            'userlist button[id=save]':{//点击保存按钮，统一批量更新数据
                click:function (o) {//参数o即是被单击的按钮
                    var grid=o.ownerCt.ownerCt;
                    var st=grid.getStore();
                    var records=st.getUpdatedRecords();//获取已被更新的记录数组，也就是model数组
                    var arr=[];
                    Ext.Array.each(records,function (model) {
                        var id=model.get('id');
                        var email=model.get('email');
                        var orderId=model.get('orderId');
                        var paramJson={
                            id:id,
                            items:'email='+email+'#*#'+'orderId='+orderId
                        };
                        arr.push(paramJson);
                    });
                    Ext.Ajax.request({
                        url:'/index.php/studydata/updateuser',
                        method:'POST',
                        params:{
                            param:Ext.encode(arr)//将数组编码成Json格式字串做为参数传出去
                        },
                        timeout:3000,//3秒超时
                        success:function (response,opts) {
                            var responseText=response.responseText;
                            var respArr=Ext.JSON.decode(response.responseText);
                            Ext.Array.each(respArr,function (item) {
                                var id=item.id;
                                var status=item.status;
                                if(status=='ok'){
                                    var model=st.getById(id);//由Id找到对应的model
                                    model.commit();//更新model状态
                                }
                            });
                        },
                        failure:function (response,opts) {
                            alert(response.responseText);
                        }

                    });
                }

            },


        });
    },
    views: [
        'AM.view.factoryList'
    ],
    models:[
      //因为使用了工厂类动态生成Model,所以在此不再使用model引用了
      //  'AM.model.User'
    ],
    stores:[
        'AM.store.factoryStore'
    ]


});
