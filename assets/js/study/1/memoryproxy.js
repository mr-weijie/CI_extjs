/**
 * Created by Administrator on 2017/9/29.
 */
(function () {
    Ext.onReady(function () {
        //先定义一个model类user
        Ext.regModel('user',{
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ]
        });
        //再初始化一个json格式的对象数组，相当于从后台服务器取回的json格式的数据
        var userInfo=[
            {name:'李丽娟',age:48,email:'lijuan@126.com'},
            {name:'王家亮',age:45,email:'jialiang@163.com'},
            {name:'刘春红',age:26,email:'chunhong@tom.com'}
        ];
        //实例化一个model内存代理类变量
        var MemoryProxy=Ext.create('Ext.data.proxy.Memory',{
            data:userInfo,
            model:'user'
        });
        Ext.get('id0').on('click',function () {
            readData();
        });

        Ext.get('id1').on('click',function () {
            //对内存代理类进行更新数据操作
            //为了体现数据更新，现将userInfo数组加入一个新的值
            userInfo.push({name:'李娟',age:49,email:'lijuan@126.com'});

            // MemoryProxy.update(new Ext.data.Operation({
            //     action:'update'
            // }), function (result) {
            //
            // }, this);
            //上面注释的内容有问题，不能通过且无需updata，直接数组.push就可以更新数据

            readData();

        });

        function  readData() {
            //对内存代理类进行读取数据操作

            MemoryProxy.read(new Ext.data.Operation,function (result) {//回调函数必定返回一个结果result
                //为弄清result，可以先alert()一下,然后再断点查看,调试过程可以看出，result对象与数据有关的结构为：resutl->resultSet->records
                //因此，为了简化表达，先定义一个这个结构的变量datas
                var datas=result.resultSet.records;
                // alert(datas);
                //然后再遍历该数组，就可以达到取出相应数据的目的
                Ext.Array.each(datas,function (model) {//因为遍历的每一项都是一个model，所以，回调函数的参数必须是一个model
                    alert(model.get('name')+' '+model.get('age')+' '+model.get('email'));
                })
            },this);

        }
        Ext.get('id2').on('click',function () {

            MemoryProxy.destroy(new Ext.data.Operation() , function (result) {

            }, this);

            readData();

        });








    })
})();