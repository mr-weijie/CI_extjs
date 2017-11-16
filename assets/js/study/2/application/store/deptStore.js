/**
 * Created by Administrator on 2017/10/21.
 */
Ext.define('AM.store.deptStore',{
    extend:'Ext.data.TreeStore',
    defaultRootId:'root',
    proxy:{
        type:'ajax',
        url:'/index.php/studydata/gettree',
        reader:'json',
        autoLoad:true

    }
});