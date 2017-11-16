/**
 * Created by Administrator on 2017/10/26.
 */
Ext.define('AM.model.deptModel',{
    extend:'Ext.data.Model',
    fields:[
        {name:'id',type:'string',sortable:true},
        {name:'text',type:'string',sortable:true},
        {name:'treeId',type:'string',sortable:true},
        {name:'leaf',type:'boolean'},
        {name:'checked',type:'string',sortable:true},
        {name:'index',type:'int'},
        {name:'info',type:'string'},
        {name:'manager',type:'string'}


    ]
});