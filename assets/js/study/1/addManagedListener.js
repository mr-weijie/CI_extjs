/**
 * Created by Administrator on 2017/10/6.
 */
(function () {
    Ext.onReady(function () {
        Ext.create('Ext.toolbar.Toolbar',{
            renderTo:document.body,
            width:500,
            items:[
                {
                    xtype:'button',//默认就是button
                    text:'新增',//在toolbar上显示的文本
                    id:'create',
                    handler:function () {
                        alert('新增按钮');
                    }
                },
                {
                    text:'删除',
                    id:'delete'
                },
                {
                    text:'消毁',
                    id:'destory',
                    handler:function () {
                        var del=Ext.getCmp('delete');//使用Ext.getCmp来获取ExtJs内部定义的组件id，使用Ext.get()来获取html中的id
                        if(del){
                            del.destroy();//如果找到訪按钮，则对其进行销毁
                        }
                    }
                }
            ]
        });
        //下面为'删除'按钮添加一个可管理的另外一个按钮的单击事件，这个例子的效果是，当点击create按钮时，会相继弹出“这是创建按钮”和“新增按钮”两个弹出框，
        // 但其中的一个'这是创建按钮'是已添加到'delete'按钮上的可由delete管理的单击事件，因此，当其管理者“delete”被销毁时，被管理的'这是一个创建按钮也会因其消失，不会有任何反应'
        var deleteB=Ext.getCmp('delete');
        var createB=Ext.getCmp('create');
        deleteB.addManagedListener(createB,'click',function () {
            alert('这是创建按钮');
        });



    });
})();
