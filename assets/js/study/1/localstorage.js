/**
 * Created by Administrator on 2017/10/2.
 */
(function () {
    Ext.onReady(function () {
        //先定义一个本地代理存储类
        Ext.define("user",{
            extend: 'Ext.data.Model',
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'}
            ],
            proxy:{
                type:'localstorage',//基于localstorage的存储是本地的，只要浏览器不换，就可以读出来，应用场景为本地设置经常用的值，减少服务器的压力
                id:'86fxw'
            }

        });
       //定义一个用于存储的Store
       var Mystore=new Ext.data.Store({
           model:user

       });
       //向store中添加数据
       Mystore.add(
           {name:'李刚',age:15},
           {name:'刘丽',age:18},
           {name:'张太森',age:17},
           {name:'王丽荣',age:15}
       );
       //store异步存储
       Mystore.sync();
       //再将store中的数据读出来
       Mystore.load();
       //定义一个用于存储数据的空数组
        var Mydata=[];
        //遍历已读取的store，将其中每项加到数组中
        Mystore.each(function (v) {
            Mydata.push(v.get('name')+":"+v.get('age'));

        });
        alert(Mydata.join('\n'));


    });
})();
