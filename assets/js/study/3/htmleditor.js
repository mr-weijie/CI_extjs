/**
 * Created by Administrator on 2017/11/8.
 */
Ext.onReady(function () {
    Ext.QuickTips.init();
    //生成form表单
    Ext.create('Ext.form.Panel',{
        title:'htmlEditor组件实例',
        renderTo:'myform',
        bodyPadding:'5 5 5 5',
        height:500,
        width:800,
        frame:true,
        defaults:{
            labelSeparator:':',
            labelWidth:70,
            width:800,
            height:450,
            allowBlank:false,
            msgTarget:'side',
            labelAlign:'left'
        },
        items:[
            {
                xtype:'htmleditor',
                fieldLabel:'Html文本内容',
                name:'Html',
                fontFamilies:['宋体','黑体','楷体','Times New Roman']

            }
        ],
        buttons:[
            {
                text:'提交',
                handler:function (b) {
                    this.up('form').getForm().submit({
                        url:'/',
                        params:{
                            info:'这是htmleditor组件'
                        }
                    });
                }
            }
        ]
    });



});


