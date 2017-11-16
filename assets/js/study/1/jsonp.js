/**
 * Created by Administrator on 2017/10/3.
 */
(function () {
    Ext.onReady(function () {
        //先定义一个Model类
        Ext.define('user',{
            extend:'Ext.data.Model',
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ],
            proxy:{
                type:'jsonp',
                url:'http://www.86fxw.com/extjs-test-jsonp.php'
                //远程的.php内容格式必须是：echo 'Ext.data.jsonP.callback1({name:"李刚",age:17,email:"ligang@126.com"})';
                //前面的Ext.data.jsonP.callback1()是固定的Extjs跨域专用函数，函数内容是json数据。
            }
        });
        //定义一个Model变量来接收远程model数据
        var usrinfo=Ext.ModelManager.getModel('user');
        var temArray=[];//用于装载返回数据
        //加载数据
        usrinfo.load(1,{
            scope:this,
            success:function (model) {//回调函数的参数必是一个model类型，因为返回的就是model数据
                //一个model数据就是一条记录，因此返回再多条，在这里，这个方式仅能收到第一条数据
                alert(model.get('name')+':'+model.get('age')+":"+model.get('email'));
            }

        });


    });
})();
