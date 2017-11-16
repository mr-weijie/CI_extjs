/**
 * Created by Administrator on 2017/10/20.
 */
Ext.define('AM.view.deptView',{
    extend:'Ext.tree.Panel',
    alias:'widget.deptTree',
    title:'部门树形',
    width:250,
    height:300,
    padding:'5 3 3 10',
    rootVisible:false,//如果此项为true,则不会从服务器请求数据，默认为true,所以，如果要从服务器取数据，此项必须为假!
    config:{
        copyNodes:''//复制节点时，充当剪切板的作用，这里的数据在其他地方可以直接使用setCopyNodes来改变其值
    },
    viewConfig: {//实现拖放功能
        plugins: {
            ptype: 'treeviewdragdrop',
          //  appendOnly:true//在叶子节点上不能释放
        },
        // listeners:{
        //     drop:function ( node, data, overModel, dropPosition, eOpts) {
        //         var movedText=data.records[0].get('text');
        //         var movedId=data.records[0].raw.id;//可以获取自开定义的数据，其中rowId就是后台传过来的json数据，用这个这可以操作数据库的外键
        //         var overId=overModel.raw.id;
        //         var overText=overModel.raw.text;
        //         var NewParentId=data.records[0].get('parentId');//新的父节点Id
        //         // var NewParentId=overModel.parentNode.raw.id;//新的父节点Id
        //         var NewParentText=overModel.parentNode.raw.text;
        //         // if(!overModel.get('leaf')){
        //         //     NewParentId=overModel.get('id');//如果此节点为非叶子，则取此节点的id作为父节点
        //         //     NewParentText=overModel.get('text');
        //         // }
        //         var depth=data.records[0].get('depth');
        //         var index=data.records[0].get('index');
        //         //alert('movedId:'+movedId+' overId:'+overId+' overText:'+overText+" NewParentId:"+NewParentId+' 隶属节点:'+NewParentText+'新index:'+index);
        //         Ext.Ajax.request({
        //             url:'/index.php/studydata/updatetree',
        //             method:'POST',
        //             params:{
        //                 treeId:movedId,
        //                 parentId:NewParentId,
        //                 depth:depth,
        //                 index:index
        //             },
        //             timeout:3000,
        //             success:function (response,opts) {
        //                 var resp=Ext.JSON.decode(response.responseText);
        //                 if(resp.status=='ok'){//服务器返回成功状态
        //                 }else {
        //                     Ext.Msg.alert('提示','服务器端更新失败！')
        //                 }
        //             },
        //             failure:function (response, opts) {
        //                 Ext.Msg.alert('提示','服务器端更新失败！')
        //             }
        //
        //         });
        //
        //
        //     }
        // }
    },
    dockedItems:[
        {
            xtype:'toolbar',
            dock:'left',
         //   ui:'footer',//这个属性的样式，可以自己扩展
            items:[
                {xtype:'button',text:'新增',id:'add'},
                {xtype:'button',text:'拷贝',id:'copy'},
                {xtype:'button',text:'粘贴',id:'paste'},
                {xtype:'button',text:'删除',id:'delete'}
            ]
        },
        {
            xtype:'toolbar',
            dock:'bottom',
            items:[
                {xtype:'button',text:'展开全部',id:'openall'},
                {xtype:'button',text:'收缩全部',id:'closeall'}
            ]

        }
    ],
    store:'deptStore'//树形数据从store中取
    // root:{
    //     text:'root',
    //     id:'0',
    //     leaf:false,
    //     children:[
    //         {
    //             text:'技术部门',
    //             checked:false,
    //             id:'01',
    //             leaf:false,
    //             children:[
    //                 {
    //                     text:'研发部',
    //                     checked:false,
    //                     id:'0101',
    //                     leaf:true
    //                 },
    //                 {
    //                     text:'实施部',
    //                     checked:false,
    //                     id:'0102',
    //                     leaf:true
    //                 }
    //             ]
    //         },
    //         {
    //             text:'后勤部门',
    //             checked:false,
    //             id:'02',
    //             leaf:false,
    //             children:[
    //                 {
    //                     text:'人事部',
    //                     checked:false,
    //                     id:'0201',
    //                     leaf:true
    //                 },
    //                 {
    //                     text:'行政部',
    //                     checked:false,
    //                     id:'0202',
    //                     leaf:true
    //                 }
    //             ]
    //         }
    //     ]
    // }





});
