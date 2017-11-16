/**
 * Created by Administrator on 2017/11/8.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();//4.2以后用此名替换以前的Ext.QuickTips
    Ext.create('Ext.panel.Panel',{
        renderTo:'myform',
        height:300,
        width:400,
        frame:true,
        title:'展示字段案例',
        items:[
            {
                xtype:'displayfield',//这个字段内容不被当作真正表单字段提交到后台服务器，仅作为展示之用
                name:'name',
                value:'这是一个展示字段',
                fieldLabel:'展示内容:',
                labelAlign:'right'
            },
            {
                xtype:'label',
                name:'label',
                text:'姓名',
                forId:'name',//通过这个forId就可以实现和下面的inputId关联，实现上下布局
                overCls:'r',//当鼠标滑过时，调用样式:r
            },
            {
                xtype:'textfield',
                name:'name',
                value:'李强',
                inputId:'name'
            },
            {
                xtype:'fieldset',
                title:'组合字段',
                collapsible:true,
                defaultType:'textfield',
                width:200,//字段集框架宽度
                defaults:{
                   // anchor:'95%',//字段点95%
                  //  width:80
                },
                layout:'anchor',//自动布局,
                items:[
                    {
                        fieldLabel:'姓名',
                        name:'name',
                        labelAlign:'right',
                        labelWidth:50,
                        width:100
                    },
                    {
                        fieldLabel:'性别',
                        name:'sex',
                        labelAlign:'right',
                        labelWidth:50,
                        width:80

                    }
                ]
            },
            {
                xtype:'fieldset',
                title:'组合字段2',
                collapsible:true,
                checkboxToggle:true,//以复选框的形式展示
                collapsed:true,//默认收起
                defaultType:'textfield',
                defaults:{
                    // anchor:'95%',//字段点95%
                    //  width:80
                },
                layout:'anchor',//百分比布局,
                items:[
                    {
                        fieldLabel:'姓名',
                        name:'name',
                        labelAlign:'right',
                        labelWidth:50,
                        width:100
                    },
                    {
                        fieldLabel:'性别',
                        name:'sex',
                        labelAlign:'right',
                        labelWidth:50,
                        width:80

                    }
                ]
            }
        ]
    });


});