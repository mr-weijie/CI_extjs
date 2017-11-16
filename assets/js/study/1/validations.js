/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
    //为了使错误消息变得对用户友好（将英文提示改为中文提示），可以在这里先对Ext.data.validations类的相应的消息属性进行中文修改
    Ext.data.validations.lengthMessage='字符串长度不符合要求';
    Ext.data.validations.presenceMessage='不能为空';
    Ext.onReady(function () {
        //自定义扩展验证，以达到验证要求
        Ext.apply(Ext.data.validations,{
           age:function (config, value) {
               var min=config.min;
               var max=config.max;
               if(min<=value&&value<=max){
                   return true;
               }else {
                   this.ageMessage='年龄信息出错，正确的年龄范围应该在'+ min+'-'+max+'之间';
                   return false;//只有当返回false时，才能返回下面的错误消息ageMessage提示
               }
           } ,
            ageMessage:'年龄信息出错'
        });
        //创建一个person类
        Ext.regModel('person',{
            fields:[
                {name:'name',type:'auto'},
                {name:'age',type:'int'},
                {name:'email',type:'auto'}
            ],
            validations:[
                {type:'length',field:'name',min:2,max:5},
                {type: 'presence', field: 'email'},
                {type:'age',field:'age',min:0,max:150}//此行验证规则是由上面的扩展来的
            ]
        });
        //实例化一个person对像
        var p=Ext.create('person',{
            name:'John and Jack',
            age:30,
            email:''
        });
        var p1=Ext.create('person',{
            name:'John and Jack',
            age:230,
            email:''
        });


        Ext.get('id0').on('click',function () {
            //执行Model类的数据验证validate(),返回一个错误集合类：Ext.data.Errors
            var errors=p.validate();
            // 查相关的Ext.data.Errors的API得知，有一个each方法，可以遍历出所有错误信息
            //事先准备一个装载错误信息的数组
            var errorInfo=[];
            //开始遍历错误信息
            errors.each(function (v) {
                //参数v为errors中的每一项，可查
                //       alert(v);
                errorInfo.push(v.field+': '+v.message);//这样就收集了每一项错误消息
            });
            alert(errorInfo.join('\n'));

         });
        //下面进行的扩展验证
        Ext.get('id1').on('click',function () {
            var errors=p1.validate();
            var errorInfo=[];
            errors.each(function (v) {
                errorInfo.push(v.field+':'+v.message);
            });
            alert(errorInfo.join('\n'));
        });


    });

})();
