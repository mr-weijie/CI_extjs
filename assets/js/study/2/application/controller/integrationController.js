/**
 * Created by Administrator on 2017/10/27.
 */
Ext.define('AM.controller.integrationController',{
    extend:'Ext.app.Controller',
    init:function () {
        this.control({
            'deptList button[id=add]':{
                click:function (b) {
                    var grid=b.ownerCt.ownerCt;
                    var modelObj={//先初始化一个节点model
                        text:'',
                        id:'01',
                        manager:'',
                        index:0,
                        info:'',
                        leaf:true
                    }
                    Ext.create('AM.util.gridOperation').doInsert(grid,modelObj);//实例化一个gridOperation，然后再调用其中的方法doInsert()


                }
            },
            'deptList button[id=save]':{
                click:function (b) {
                    var grid=b.ownerCt.ownerCt;
                    var st=grid.getStore();
                    var records=st.getUpdatedRecords();//获取已被更新的记录数组，也就是model数组
                    if(records.length==0){
                        alert('没有需要更新的记录');
                        return;
                    }
                    var model=records[0];//因为就一个元素，所以只取0号元素即可
                    var text=model.get('text');
                    var manager=model.get('manager');
                    var info=model.get('info');
                    var tree=grid.ownerCt.ownerCt.child('#west-tree').child('#dept-tree');//通过选择器找到tree
                    var nodes=tree.getChecked();//获取被选中的节点
                    if(nodes.length==1){//仅且仅有一个被选中
                        var node=nodes[0];
                        var parentId=node.data['id'];
                        var depth=node.data['depth']+1;
                        var params={
                            text:text,
                            manager:manager,
                            info:info,
                            parentId:parentId,
                            depth:depth,
                            leaf:1
                        }
                    }else{
                        var params={
                            text:text,
                            manager:manager,
                            info:info,
                            parentId:'',
                            depth:0,
                            leaf:1
                        };
                    }
                    Ext.Ajax.request({
                        method:'POST',
                        //url:'/index.php/studydata/createdept',
                        url:st.getProxy().api['create'],//为了解耦，在这里调用store中的api中的相应值
                        params:params,
                        success:function (response,opts) {
                            var responseText=response.responseText;
                            var respArr=Ext.JSON.decode(response.responseText);
                            Ext.Array.each(respArr,function (item) {
                                var data=item.data;
                                var status=item.status;
                                if(status=='ok'){
                                 //   model.commit();//更新model状态
                                    st.load();//重新load store里的数据，只有这样，才能继续添加新编辑记录
                                    var panel=grid.ownerCt.ownerCt;//得到最外运的组件panel,即mainLayout
                                    var tree=panel.child('#west-tree').child('#dept-tree');//通过选择器找到tree
                                    var rootNode=tree.getStore().getRootNode();//获取root根节点
                                    var parentId=item['data'].parentId;
                                    data.id=data.treeId;
                                    if(parentId==''){
                                        rootNode.appendChild(data);//直接在tree上添加数据
                                    }else {
                                        //先查找id=parentId的节点，然后再其上添加子节点
                                        var parentNode=tree.getStore().getById(parentId);
                                        parentNode.appendChild(data);
                                        parentNode.set('leaf',false)
                                        parentNode.expand();//自动展开
                                    }


                                }
                            });
                        }
                    });
                }
            },
            'deptList button[id=delete]':{
                click:function (b) {
                   var grid=b.ownerCt.ownerCt;
                   var data=grid.getSelectionModel().getSelection();
                    if(data.length==0){
                            Ext.Msg.alert('提示','您至少要选择一条记录才能执行删除操作');
                            return;
                    }
                    var deleteIds=[];
                    Ext.Array.each(data,function (record) {
                        deleteIds.push(record.data.treeId);
                    })
                    Ext.Ajax.request({
                        url:grid.getStore().getProxy().api['delete'],
                        method:'POST',
                        params:{
                            ids:deleteIds.join(',')
                        },
                        success:function (response,opts) {
                            var jsonObj=Ext.JSON.decode(response.responseText);
                            if(jsonObj.status=='ok'){
                                //重新加载tree和grid的store，即可完成刷新
                                var st=grid.getStore();
                                st.reload();
                                var panel=grid.ownerCt.ownerCt;//得到最外运的组件panel,即mainLayout
                                var tree=panel.child('#west-tree').child('#dept-tree');//通过选择器找到tree
                                var treeStore=tree.getStore();
                                treeStore.reload({//因为数据加载是异步加载，所以，要想在得到数据后再展开，只能将展开的方法写在load的callback方法中，也就是在保证运行完成后，调用回调函数即可实现同步效果
                                    callback:function () {
                                        tree.expandAll();//展开所有
                                    }
                                });


                            }

                        }
                    });
                }
            },
            'deptList':{
                select:function (rowModel, record, index, eOpts ) {
                    var treeId=record.data.treeId;
                    var grid=rowModel.view.ownerCt
                    var tree=grid.ownerCt.ownerCt.child('#west-tree').child('#dept-tree');//通过选择器找到tree
                    var Node=tree.getStore().getById(treeId);//找到相应的树形节点
                    Node.checked=true;
                    Node.updateInfo(true,{checked:true});
                },
                deselect:function (rowModel, record, index, eOpts ) {
                    var treeId=record.data.treeId;
                    var grid=rowModel.view.ownerCt
                    var tree=grid.ownerCt.ownerCt.child('#west-tree').child('#dept-tree');//通过选择器找到tree
                    var Node=tree.getStore().getById(treeId);//找到相应的树形节点
                    Node.checked=false;
                    Node.updateInfo(true,{checked:false});

                }

                // itemclick:function (grid, record, item, index, e, eOpts) {
                //     var treeId=record.data.treeId;
                //     var sm=grid.getSelectionModel();//再得到选择模式
                //     var data=sm.getSelection();//通过选择模式得到当前选择的modele记录数组
                //     var isSelected=sm.isSelected(index);
                //     alert(isSelected);
                // }
            },
            'deptTree':{//监听tree
                checkchange:function (node, checked, eOpts){
                    var allChild=function(node,checked){//递归处理所有子节点
                        changeGrid(node,checked);//更新grid显示
                        node.eachChild(function(n){
                            n.data.checked = checked;
                            n.updateInfo(true,{checked:checked});
                            changeGrid(n,checked);//更新grid显示

                            if(n.hasChildNodes())//如果有子节点
                            {
                                n.expand();
                                allChild(n,checked);//递归调用
                            }
                        });
                    }
                    var changeGrid=function (node,checked) {
                        var treeId=node.data.id;//先找到id
                        var grid=node.getOwnerTree().ownerCt.ownerCt.child('#center-grid').child('#dept-grid');
                        var record=grid.getStore().findRecord('treeId',treeId);//由findRecord找到具体record
                        var selectRecords=grid.getSelectionModel().getSelection();//获取被选中的Model，目的是保留原来被选中的，免得新的选中后，原来的被取消选中
                        selectRecords.push(record);//将record加入到selectRecords数组
                        var selectionModel=grid.getSelectionModel();
                        if(checked){
                            //selectionModel.select(record);//选中该行,取消的选中的方法是deselect
                            selectionModel.select(selectRecords);
                        }else {
                            selectionModel.deselect(record);//选中该行,取消的选中的方法是deselect
                        }
                    }

                    if(node.data.leaf){//如果是leaf
                        changeGrid(node,checked);

                    }else {//有子节点的情况
                        node.expand();
                        allChild(node,checked);
                    }



                }

            }
        });
    },
    views:[
        'deptTree',//负责显示tree
        'deptList',//负责显示grid
        'mainLayout'
    ],
    stores:[
        'deptStore',//负责给tree提供数据
        'integrationStore'//负责给grid提供数据

    ],
    models:[
    //    'deptModel' //似乎没有用！

    ]

});
