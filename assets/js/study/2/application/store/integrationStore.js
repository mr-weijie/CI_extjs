/**
 * Created by Administrator on 2017/10/27.
 */
Ext.define('AM.store.integrationStore',{
    extend:'Ext.data.Store',
    model:'AM.model.deptModel',
    proxy:{
        api:{
            create:'/index.php/studydata/createdept',// 为了松耦合，将controller中的url值写到这里，然后再controller里取该值就可以
            delete:'/index.php/studydata/deletedept'
        },
        type:'ajax',
        url:'/index.php/studydata/getdeptinfo',
        reader:{
            type:'json',
            root:''
        },
        writer:{
            type:'json'
        }
    },
    autoLoad:true
});
