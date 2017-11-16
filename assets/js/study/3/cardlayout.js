/**
 * Created by Administrator on 2017/11/10.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    var navigate=function (panel,direction,btn) {
        var layout=panel.getLayout();//获取到外层的布局
        layout[direction]();//相当于layout['prev']=prve()和layout['next']=next()
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());//如果没有前一页，则设置为禁止，反之，设置为false
        Ext.getCmp('move-next').setDisabled(!layout.getNext());//如果没有前一页，则设置为禁止，反之，设置为false

    }
    var navigate0=function (panel,direction) {
        var layout=panel.getLayout();
        if(direction=='prev'){
            prev();
        }else {
            next;
        }
    }
    //上面两个函数的功能是一样的，只是不同的表达方法而已
    Ext.create('Ext.Panel',{
        title:'card(卡片)式布局',
        width:500,
        height:300,
        layout:'card',
        activeItem:0,//默认展示的活动子节点索引
        renderTo:'myform',
        items:[
            {
                id:'card-0',
                xtype:'panel',
                title:'第一个面板',
                html:'第一个面板'
            },
            {
                id:'card-1',
                xtype:'panel',
                title:'第二个面板',
                html:'第二个面板'
            },
            {
                id:'card-2',
                xtype:'panel',
                title:'第三个面板',
                html:'第三个面板'
            },
            {
                id:'card-3',
                xtype:'panel',
                title:'第四个面板',
                html:'第四个面板'
            },
            {
                id:'card-5',
                xtype:'panel',
                title:'第五个面板',
                html:'第五个面板'
            },

        ],
        index:1,//自定义索引
        titleInfo:'当前索引',//这也是自定义的参数变量
        listeners:{
            render:function () {//当开始渲染的时候，开始进行标题初始化
                var panel=this;
                panel.setTitle(panel.titleInfo+'('+(this.activeItem+1)+'/'+panel.items.length+')')
            }

        },
        bbar:[
            {
                id:'move-prev',
                text:'上一页',
                handler:function (btn) {
                    var panel=btn.up('panel');//找到上一层的panel
                    panel.index=panel.index-1;
                    panel.setTitle(panel.titleInfo+'('+panel.index+'/'+panel.items.length+')');
                    //navigate(panel,'prev');
                    navigate(panel,'prev');
                },
                disabled:true//刚开始初始化时，处于禁用状态
            },
            '->',//它的作用就是使两个按钮两头分开
            {
                id:'move-next',
                text:'下一页',
                handler:function (btn) {
                    var panel=btn.up('panel');//找到上一层的panel
                    panel.index=panel.index+1;
                    panel.setTitle(panel.titleInfo+'('+panel.index+'/'+panel.items.length+')');
                    navigate(panel,'next');
                }
            },

        ],

    });
});