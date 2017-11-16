/**
 * Created by Administrator on 2017/9/27.
 */
Ext.define('myApp.mywin',{//在这里，一定要注意：define时，一定要加包名+类名，即命名空间名.类名，使用命名空间的好处是可以根据需要，动态加载js,而不必在head头部全部加载
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