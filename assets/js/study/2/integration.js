/**
 * Created by Administrator on 2017/10/27.
 */
Ext.onReady(function () {
    Ext.QuickTips.init();//快速提示初始化
    Ext.Loader.setConfig({//启动Loader,这样才能动态引用MVC中的各种js
        enabled:true//启用Loader

    });
    Ext.application({
        name:'AM',//定义app名字
        appFolder:'/assets/js/study/2/application',//应用的目录
        launch:function () {//当前页面加载完成时执行的函数
            Ext.create('Ext.container.Viewport',{
                layout:'auto',//采用自动布局
                items:{//子项
                    xtype:'mainLayout',
                    width:800,//没有width和height参数，无法运行
                    height:500

                }
            });//初始化一个面板视图
        },
        controllers:[//控制器,这经的作用就是粘合剂，负责关联M和V,如果没有这个controller，不会展示出视图且报错误
            'integrationController'


        ]
    });//初始化app





});
