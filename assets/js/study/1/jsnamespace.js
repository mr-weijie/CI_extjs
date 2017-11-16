/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
    Ext.Loader.setConfig({
        enabled:true,
        paths:{
            myApp:'/assets/js/study/1/ux'//此处定义了命名空间的绝对路径，命名空间相当于java中的包名，即路径或目录
        }
    });

    Ext.onReady(function () {
        var mywin=Ext.create('myApp.mywin',{


        });

        Ext.get('id0').on('click',function () {
             mywin.show();
        })



    })
})();