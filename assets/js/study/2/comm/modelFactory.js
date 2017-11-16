/**
 * Created by Administrator on 2017/11/3.
 * 工厂类
 */
/*Ext.define('AM.model.modelFactory',{
    models:new Ext.util.MixedCollection(),//声明一个集合类，充当缓存的角色
    getModelByName:function (modelName) {
        if(this.models.containsKey(modelName)){
            return modelName;//如果在集合类(缓存)中找到目标model,则直接将缓存中的model返回
        }else {//如果找不到，则需要定义一个model或通过ajax从服务器端读取
            var newModel=Ext.define(modelName,{
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
            this.models.add(modelName,newModel);//将新定义的model追加到集合类中
            return modelName;
        }
    }
});*/
Ext.define('AM.model.modelFactory',{
    models:Ext.create('Ext.util.MixedCollection',{}),//new Ext.util.MixedCollection(),
    fields:Ext.create('Ext.util.MixedCollection',{}),//new Ext.util.MixedCollection(),
    getModelByName:function (modelName) {
        if(this.models.containsKey(modelName)){
            return modelName;
        }else {
            //通过ajax从服务器获取model数据
            var fields=[];//先定义一个字段空数组
            if(this.fields.containsKey(modelName)){//以modelName命名的字段名数组
                fields=this.fields.containsKey(modelName);
            }else {
                Ext.Ajax.request({
                    url:'/index.php/studydata/getusermodel',
                    method:'POST',
                    timeout:3000,
                    async:false,//必须同步请求
                    success:function (response,opts) {
                        fields=eval(response.responseText);//将服务器返回来的字串转化成对象数组
                    }
                });
            }
            var newModel=Ext.define(modelName,{
                extend:'Ext.data.Model',
                fields:fields//上面通过Ajax传过来的数据
            });
            this.models.add(modelName,newModel);
            return modelName;
        }
    }
});
var modelFactory=Ext.create('AM.model.modelFactory',{});