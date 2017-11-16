/**
 * Created by Administrator on 2017/9/26.
 */
(function () {
    Ext.onReady(function () {
        //自定义一个类，类名：mywin,继承：Ext.window.Window,自定义类的目的就是扩展目标类
        Ext.define('mywin',{
            extend:'Ext.window.Window',
            width:400,
            height:600,
            title:'Hello world',
            setNewTitle:function (item) {
                this.title=item;
            },
            initComponent:function () {//此步相当于构造器
                this.callParent(arguments);
            }
        });
        //类定义完成后，就可以使用Ext.create方法来创建对象
        var mywindow=Ext.create('mywin',{
            width:500,
            height:300,
            title:'我的窗口'

        });
        Ext.get('id0').on('click',function () {
            mywindow.show();
        })
        Ext.get('id1').on('click',function () {
            mywindow.setNewTitle('我的新窗口');
            mywindow.show();
        })


    });
})();
