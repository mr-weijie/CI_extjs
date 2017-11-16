/**
 * Created by Administrator on 2017/11/8.
 */
Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    Ext.create('Ext.form.Panel',{
        title:'Container布局字段案例',
        height:300,
        width:500,
        renderTo:'myform',
        frame:true,
        items:[
            {
                xtype:'fieldcontainer',//使整体在一个fieldcontainer布局之下
          //      height:22,
                width:400,
                layout:{
                    type:'hbox',//水平横排布局
                    align:'top',
                },
              //  combineLabels:true,//4.2以后，没有这个效果也是一样的
                combineErrors:true,//将错误信息合并一起展示
                fieldDefaults:{
                    hideLabel:true,//隐藏字段label
                    allowBlank:false,
                    msgTarget:'side',//当出现错误时，提示消息的显示位置
                },
                defaultType:'textfield',
                items:[
                    {
                        xtype:'label',
                        forId:'name',
                        text:'姓名'
                    },
                    {
                        fieldLabel:'姓名',//虽然已设置隐藏属性，但有这个设置的目的是为了显示错误消息
                        name:'name',
                        inputId:'name'
                    },
                    {
                        xtype:'label',
                        forId:'sex',
                        text:'性别'
                    },
                    {
                        fieldLabel:'性别',//虽然已设置隐藏属性，但有这个设置的目的是为了显示错误消息
                        name:'sex',
                        inputId:'sex'
                    }

                ]
            },
            {
                xtype:'fileuploadfield',//文件上传字段
                name:'upfile',
                fieldLabel:'图片',
                labelAlign:'right',
                labelWidth:30,
                width:400,
                msgTarget:'side',
                allowBlank:false,
                anchor:'98%',
                buttonText:'请选择图片文件'
            }
        ],
        buttons:[
            {
                text:'提交',
                margin:'0 10 25 0',
                handler:function () {
                    this.up('form').getForm().submit({
                        url:'/index.php/studydata/uploadpic',
                        method:'POST',
                        waitMsg:'文件上传中',
                        success:function (form,action) {
                            Ext.Msg.alert('sucess','文件上传成功');
                        }

                    });
                }
            }
        ]




    });
});
