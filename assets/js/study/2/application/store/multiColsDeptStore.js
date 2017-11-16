/**
 * Created by Administrator on 2017/10/26.
 */
Ext.define('AM.store.multiColsDeptStore',{
    extend:'Ext.data.TreeStore',
    defaultRootId:'root',
    model:'AM.model.deptModel',
    proxy:{
        type:'ajax',
        url:'/index.php/studydata/gettree',
        reader:'json',
        autoLoad:true

    }
});