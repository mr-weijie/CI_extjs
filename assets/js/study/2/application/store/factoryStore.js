/**
 * Created by Administrator on 2017/10/14.
 */
Ext.define('AM.store.factoryStore',{
    extend:'Ext.data.Store',
    storeId:'store_user',
    model:modelFactory.getModelByName('AM.model.User'),//'AM.model.User',
    pageSize: 100,//每页显示记录条数
    totalProperty:'total',//total为后台传过来的json数据记录总数键名,感觉，好像只能用total这个词，其他无效
    proxy:{
        type:'ajax',
        url:'/index.php/studydata/getusers',
        reader:{
            type:'json',
            root:'results'//显示数据的起始节点
        },
        writer:{
            type:'json'
        }
    },
//    groupField:'sex',//默认展开按性别分组
    autoLoad:true
});
