/**
 * Created by Administrator on 2017/10/3.
 */
(function () {
    Ext.onReady(function () {

        //使用内存代理
       Ext.get('id0').on('click',function () {
           //先定义一个Model
           Ext.define('user',{
               extend:'Ext.data.Model',
               fields:[
                   {name:'name',type:'auto'},
                   {name:'age',type:'int'},
                   {name:'email',type:'auto'}
               ],
               proxy:'memory'//设定为内存代理
           });
           //定义一个带数据的Store
           var s=new Ext.data.Store({
               data:[
                   {name:'李刚',age:17,email:'ligang@126.com'},
                   {name:'李丽娟',age:48,email:'lijuan@163.com'},
                   {name:'王百川',age:35,email:'baichuan@tang.com'}
               ],
               model:user,
               autoload:true//自动加载，如果不加载，不会有数据进来
           });

           //定义完上面的带数据的Store后，就可以遍历出这个Store的数据了
           var tmpArray=[];
           s.each(function (model) {
               tmpArray.push(model.get('name')+":"+model.get('age')+":"+model.get('email'));
           });
           alert(tmpArray.join('\n'));

       });
       Ext.get('id1').on('click',function () {
          Ext.define('user',{
              extend:'Ext.data.Model',
              fields:[
                  {name:'name',type:'auto'},
                  {name:'age',type:'int'},
                  {name:'email',type:'auto'}
              ]
          });
          //再定义一个Store
           var s=new Ext.data.Store({
               model:user,
               proxy:{
                   type:'ajax',
                   url:'/index.php/studydata/getusers'
               }
           });
           var tmpArray=[];
           s.load(function(records, operation, success) {
               Ext.Array.each(records,function (model) {
                   tmpArray.push(model.get('name')+':'+model.get('age')+':'+model.get('email'));
               })
               alert(tmpArray.join('\n'));

           });



       });

       //使用Ajax代理来记取Store数据
        //不定义Model，其实，Model的字段属性已内嵌到store的定义中
        Ext.get('id2').on('click',function () {
            var s=new Ext.data.Store({
                fields:[
                    {name:'name',type:'auto'},
                    {name:'age',type:'int'},
                    {name:'email',type:'auto'}
                ],
                proxy:{
                    type:'ajax',
                    url:'/index.php/studydata/getusers'
                }

            });
            var tmpArray=[];
            s.load(function(records, operation, success) {
                Ext.Array.each(records,function (model) {
                    tmpArray.push(model.get('name')+':'+model.get('age')+':'+model.get('email'));
                })
                alert(tmpArray.join('\n'));

            });


        });





    });
})();
