/**
 * Created by Administrator on 2017/10/26.
 */

Ext.define('AM.controller.multiColsDeptCtroller',{
    extend:'Ext.app.Controller',
    init:function () {
        this.control({
            //下面用的都是别名选择器来监听各组件的事件
            'deptTree button[id=openall]':{
                click:function (b,e) {
                    var toolbar=b.ownerCt;
                    var tree=toolbar.ownerCt;
                    tree.expandAll();//展开所有
                }
            },
            'deptTree button[id=closeall]':{
                click:function (b,e) {
                    var tree=b.ownerCt.ownerCt;
                    tree.collapseAll();
                }
            },
            'deptTree button[id=add]':{
                click:function (b,e) {
                    var tree=b.ownerCt.ownerCt;
                    var nodes=tree.getChecked();//先得到被选中的对象
                    if(nodes.length==1){//只有非叶子节点才能增加节点
                        var node=nodes[0];
                        var parentId=node.get('id');//获取新增叶子的父Id,即该节点的id
                        Ext.Ajax.request({
                            url:'/index.php/studydata/appendchild',
                            method:'POST',
                            params:{
                                depth:node.get('depth'),
                                parentId:parentId,
                                text:'研发部',
                                leaf:1
                            },
                            timeout:3000,
                            success:function (response,opts) {
                                var resp=Ext.JSON.decode(response.responseText);
                                if(resp.status=='ok'){//服务器返回成功状态
                                    var treeData=resp.data;
                                    node.appendChild({
                                        text:treeData.text,
                                        checked:false,
                                        id:treeData.treeId,
                                        leaf:(treeData.leaf==1) ?true:false
                                    });
                                    if(node.isLeaf()){
                                        //如果被追加的节点为叶子，则改为 非叶子
                                        node.set('leaf',false)
                                        node.expand();//自动展开
                                    }

                                }else {
                                    Ext.Msg.alert('提示','服务器端更新失败！')
                                }
                            },
                            failure:function (response, opts) {
                                Ext.Msg.alert('提示','服务器端更新失败！')
                            }

                        });

                    }else {
                        alert('请选择一个目标被增的节点');
                    }

                }
            },
            'deptTree button[id=copy]':{
                click:function (b,e) {
                    var toolbar=b.ownerCt;
                    var tree=toolbar.ownerCt;
                    var nodes=tree.getChecked();//获取当前被选中的节点
                    if(nodes.length>0){
                        //当选中的数据复制到tree中的配置参数：copyNodes
                        tree.setCopyNodes(Ext.clone(nodes));
                        //复制到剪切板后，及时取消选择状态
                        for(i=0;i<nodes.length;i++){
                            nodes[i].data.checked=false;
                            //nodes[i].updateInfo(true,nodes[i].get('parentId'));//及时更新数据才能显示出来最新状态
                            //nodes[i].updateInfo(true,nodes[i].get('depth'));//及时更新数据才能显示出来最新状态
                            //nodes[i].updateInfo(true,nodes[i]);
                            nodes[i].updateInfo(true,this);
                        }


                    }

                }
            },
            'deptTree button[id=paste]':{
                click:function (b,e) {
                    var tree=b.ownerCt.ownerCt;
                    var nodes=tree.getChecked();//获取被选中的节点
                    if(nodes.length==1){//仅且仅有一个被选中
                        var node=nodes[0]
                        var pasteNodes=tree.getCopyNodes();//取出要粘贴的节点数据
                        //遍历目标数据，将其中的id,parent等属性
                        for (i=0;i<pasteNodes.length;i++){
                            var n=pasteNodes[i].data;
                            n['id']=n['id']+'1';
                            node.appendChild(n);

                        }
                        // node.appendChild(tree.getCopyNodes());
                    }else{
                        alert('请选择被粘贴的节点');
                    }
                }
            },
            'deptTree button[id=delete]':{
                click:function (b,e) {
                    var tree=b.ownerCt.ownerCt;
                    var nodes=tree.getChecked();
                    for (i=0;i<nodes.length;i++){
                        nodes[i].remove(true);

                    }
                }
            },
            'deptTree':{
                itemclick:function (tree,record,item,index,e,eOpts) {
                    var id=record.get('id');
                    var text=record.get('text');
                    // alert(id+"  "+text);
                },
                itemmove:function (item, oldParent, newParent, index, eOpts) {
                    var newParentId=newParent.get('id');//获取当前父id
                    var treeId=item.get('id');//被移动的id
                    var depth=item.get('depth');//移动后深度
                    Ext.Ajax.request({
                        url:'/index.php/studydata/updatetree',
                        method:'POST',
                        params:{
                            treeId:treeId,
                            parentId:newParentId,
                            depth:depth,
                            index:index//移动后的index
                        },
                        timeout:3000,
                        success:function (response,opts) {
                            var resp=Ext.JSON.decode(response.responseText);
                            if(resp.status=='ok'){//服务器返回成功状态
                            }else {
                                Ext.Msg.alert('提示','服务器端更新失败！')
                            }
                        },
                        failure:function (response, opts) {
                            Ext.Msg.alert('提示','服务器端更新失败！')
                        }
                    });
                }
            }
        })
    },
    views:[
        'multiColsDeptView'
    ],
    models:[
        'deptModel'

    ],
    stores:[
        'multiColsDeptStore'
    ]
});
