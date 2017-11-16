/**
 * Created by Administrator on 2017/10/2.
 */
(function () {
    Ext.onReady(function () {
        //定义一个Model类
        Ext.define('user',{
            extend:'Ext.data.Model',
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ],
            proxy:{
                type:'sessionstorage',//sessionstorage的特征是，关闭浏览器后，所有数据即将丢失，与localstorage有本质的不同，虽然在使用形式和方法上完全相同。
                id:'86fxw'
            }
        });
        //定义一个用于存储model的store
        var mystore=new Ext.data.Store(
            {
                model:user
            }
        );
        //向mystore中添加数据
        mystore.add(
            {name:'李刚',age:45,email:'ligang@126.com'},
            {name:'王强',age:23,email:'wang@15.com'}
            );
        mystore.sync();
        mystore.load();
        var tmparray=[];
        mystore.each(function (x) {
            tmparray.push(x.get('name')+":"+x.get('age')+":"+x.get('email'));
        });
        alert(tmparray.join('\n'));
    });
})();
