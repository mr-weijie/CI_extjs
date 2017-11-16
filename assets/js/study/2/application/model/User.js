/**
 * Created by Administrator on 2017/10/14.
 */
Ext.define('AM.model.User',{
    extend:'Ext.data.Model',
    fields:[
        {name:'id',type:'int'},
        {name:'name',type:'auto'},
        {name:'age',type:'int'},
        {name:'email',type:'auto'},
        {name:'birthday',type:'string',sortable:true},
        {name:'deposit',type:'int',sortable:true},
        {name:'isIt',type:'string',sortable:true},
        {name:'sex',type:'string',sortable:true},
        {name:'orderId',type:'int',sortable:true}


    ]
});
