/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
    Ext.onReady(function () {
        //有两两方法定义model类，一个是使用Ext.define()直接继承Ext.data.Model类，另一个是使用Ext.regModel来定义modeld类，好处是省略extend关键字，直接写字段属性
        //方法一，使用Ext.define()定义model
       Ext.define('person',{
           extend:"Ext.data.Model",
           fields:[
               {name:'name',type:'auto'},
               {name:'age',type:'int'},
               {name:'email',type:'auto'}
           ]
       });
       //方法二，使用Ext.regModel来定义model类
        Ext.regModel('user',{
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ]
        });

        /*不管是何种方式定义model，返回的都是model类型，所以，都具有model类型的属性和方法
        * 实例化model类有三种方法：
        * 方法1，使用js原生方法，直接new就可以
        * */
        var p=new person({
            name:'John',
            age:25,
            email:'John@126.com'
        });
        //方法2，使用Ext.create方法实例化model
        var usr=Ext.create('user',{
            name:'John',
            age:25,
            email:'John@126.com'
        })
        Ext.get('id0').on('click',function () {
            alert(p.get('age'));
        })
        Ext.get('id1').on('click',function () {
            alert(usr.get('name'));
        })



    });
})();
