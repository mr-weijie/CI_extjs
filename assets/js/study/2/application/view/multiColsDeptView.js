/**
 * Created by Administrator on 2017/10/26.
 */
/**
 * Created by Administrator on 2017/10/20.
 */
Ext.define('AM.view.multiColsDeptView',{
    extend:'Ext.tree.Panel',
    alias:'widget.deptTree',
    title:'部门树形',
    width:600,
    height:300,
    padding:'5 3 3 10',
    rootVisible:false,//如果此项为true,则不会从服务器请求数据，默认为true,所以，如果要从服务器取数据，此项必须为假!
    config:{
        copyNodes:''//复制节点时，充当剪切板的作用，这里的数据在其他地方可以直接使用setCopyNodes来改变其值
    },
    columns:[
        {
            xtype:'treecolumn',
            text:'text',
            width:150,
            dataIndex:'text'
        },
        {
//            xtype:'treecolumn',
            text:'id',
            width:400,
            dataIndex:'id'
        }

    ],
    viewConfig: {//实现拖放功能
        plugins: {
            ptype: 'treeviewdragdrop',
            //  appendOnly:true//在叶子节点上不能释放
        },

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
    store:'multiColsDeptStore'//树形数据从store中取



});
