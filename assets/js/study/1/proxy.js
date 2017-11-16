/**
 * Created by Administrator on 2017/9/29.
 */
(function () {
    Ext.onReady(function () {
        Ext.regModel('user',{
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ],//上面定义数据模型字段信息，下面定义数据代理，实现CRUD功能。
            proxy:{
                type: 'ajax',
                url : '/index.php/studydata/getuser'
            }
        });
        //在这里，只要用Ext.ModelManager.getModel()即可得到model类型数据，
        // 以前是使用new或create来创建数据，效果是一样的，都是要得到Model数据，
        // 一个Model数据就是一条记录，多个Model数据就是一个store
        Ext.get('id0').on('click',function () {
            getmodeldata();
        });

        function getmodeldata() {
            var user=Ext.ModelManager.getModel('user');//参数为目标类名，然后再用load方法加载,其中，load第一个参数10就是一个id值，根据实际需要，来传送相应的id值即可。
            user.load(10, {
                scope: this,
                failure: function(record, operation) {
                    //do something if the load failed
                    //record is null
                },
                success: function(record, operation) {
                    alert(record.data.name+"\n"+record.data.age+"\n"+record.data.email);
                    //do something if the load succeeded
                },
                callback: function(record, operation, success) {
                    //do something whether the load succeeded or failed
                    //if operation is unsuccessful, record is null
                }
            });

        }



    });
})();