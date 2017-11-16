/**
 * Created by Administrator on 2017/11/4.
 */
Ext.onReady(function () {
    Ext.define('Person',{
        extend:'Ext.data.Model',
        fields:[
            {name:'name',type:'string'},
            {name:'age',type:'int'},
            {name:'content',type:'string'},
            {name:'sex',type:'string'},
            {name:'pwd',type:'string'},
            {name:'Email',type:'string'}
        ]
    });
    var P=Ext.create('Person',{
       name:'李强',
       age:32,
       content:'腾讯QQ,8亿人在用的即时通讯软件,你不仅可以在各类通讯终端上通过QQ聊天交友,还能进行免费的视频、语音通话,或者随时随地收发重要文件。欢迎访问QQ官方网站,下载体验...',
       sex:'f',
       pwd:'123456',
       Email:'liqiang@126.com'
    });

    var sexTest=/[MF]/i;//正则规定输入的必须是M或F
    Ext.apply(Ext.form.field.VTypes,{
        mySex:function (val,field) {
            return sexTest.test(val);
        },
        mySexText:'性别输入不正确，只能是M或F',
        mySexMask:/[MF]/i  //验证规则掩码，其作用就是除了规定的字符外，其他实际字符无法输入
    });//扩展验证规则
    var FormPanel=Ext.create('Ext.form.Panel',{
        title:'简单的Form窗口实例',
        bodyStyle:'padding:5 5 5 5 ',
        frame:true,
        height:700,
        width :500,
        id:'my_form',
        renderTo:'myform',
        defaultType:'textfield',
        defaults:{
            labelSeparator:':',//标签lable与text字段间的分隔符
            labelWidth:150,
            width:200,//文本字段的宽度
        //    allowBlank:false,//是否允许空输入
            msgTarget:'side',//当出现错误时，提示消息的显示位置
            labelAlign:'right',//水平对齐方式

        },
        items:[
            {
                fieldLabel:'姓名',
                name:'name',
                id:'name',
                selectOnFocus:true,
                allowBlank:false//是否允许空输入

            },
            {
                fieldLabel:'年龄',
                name:'age',
                id:'age',
                xtype:'numberfield'
            },
            {
                fieldLabel:'性别',
                name:'sex',
                maxLength:1,
                id:'sex',
                vtype:'mySex'
            },
            {
                fieldLabel:'密码',
                name:'pwd',
                id:'pwd',
                inputType:'password'

            },
            {
                fieldLabel:'Email',
                name:'Email',
                id:'Email',
                regex:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w)*/,
                width:300

            },
            {
                fieldLabel:'文章内容',
                name:'content',
                id:'content',
                xtype:'textarea',
                width:400
            },
            {
                fieldLabel:'整数微调',
                name:'int0',
                id:'int0',
                xtype:'numberfield',
                allowDecimals:false//不允许小数
            },
            {
                fieldLabel:'整数(隐藏触发按钮)',
                name:'int1',
                id:'int1',
                xtype:'numberfield',
                allowDecimals:false,//不允许小数
                hideTrigger:true//隐藏触发按钮
            },
            {
                fieldLabel:'小数',
                name:'int2',
                id:'int2',
                xtype:'numberfield',
                emptyText:'请输入小数',
                width:300,
                hideTrigger:true//隐藏触发按钮

            },
            {
                fieldLabel:'小数(四舍五入)',
                name:'int3',
                id:'int3',
                xtype:'numberfield',
                emptyText:'请输入小数',
                width:300,
                decimalPrecision:3,//小数点后最大的精度
                hideTrigger:true//隐藏触发按钮
            },
            {
                fieldLabel:'小数(定界)',
                name:'int4',
                id:'int4',
                xtype:'numberfield',
                emptyText:'请输入10-30间的小数',
                width:300,
                minValue:10,//最小值10
                maxValue:30,//最大值30
                hideTrigger:true//隐藏触发按钮
            },
            {
                fieldLabel:'小数(限定步长)',
                name:'int5',
                id:'int5',
                xtype:'numberfield',
                emptyText:'请输入10-30间的小数',
                width:300,
                minValue:10,//最小值10
                maxValue:30,//最大值30
                step:0.5,
                value:12
            },
            {
                fieldLabel:'小数(只读)',
                name:'int6',
                id:'int6',
                xtype:'numberfield',
                emptyText:'请输入10-30间的小数',
                width:300,
                minValue:10,//最小值10
                maxValue:30,//最大值30
                step:0.5,
                value:12,
                // readOnly:true,
                // readOnlyCls:'background:#E6E6E6'
                disabled:true
            },
            {
                xtype:'radiofield',
                boxLabel:'男',
                name:'sex1',
                inputValue:'男',
                checked:true
            },
            {
                xtype:'radiofield',
                boxLabel:'女',
                name:'sex1',
                inputValue:'女',
            },
            {
                xtype:'checkboxfield',
                boxLabel:'看书',
                name:'hobby',
                inputValue:'看书'
            },
            {
                xtype:'checkboxfield',
                boxLabel:'写字',
                name:'hobby',
                inputValue:'写字'
            },
            {
                xtype:'checkboxfield',
                boxLabel:'唱歌',
                name:'hobby',
                inputValue:'唱歌'
            },
            {
                //触发器字段
                xtype:'triggerfield',
                fieldLabel:'触发器字段',
                name:'trigger',
                id:'trigger',
                width:300,
                onTriggerClick:function () {
                    //复写onTriggerClick 方法
                    alert('触发器方法');
                }
            },
            {
              //隐藏字段
                xtype:'hiddenfield',
                name:'id',
                value:123,

            },
            {
                //利用分组来布局
                xtype:'radiogroup',
                fieldLabel:'年级',
                columns:3,
                width:300,
                items:[
                    {
                        xtype:'radiofield',
                        boxLabel:'小学',
                        inputValue:'pupil',
                        checked:true,
                        name:'studentType'
                    },
                    {
                        xtype:'radiofield',
                        boxLabel:'初中',
                        inputValue:'junior',
                        name:'studentType'
                    },
                    {
                        xtype:'radiofield',
                        boxLabel:'高中',
                        inputValue:'senior',
                        name:'studentType'
                    },
                ]
            },
            {
                xtype:'checkboxgroup',
                fieldLabel:'工具',
                columns:5,
                width:400,
                items:[
                    {
                        xtype:'checkboxfield',
                        boxLabel:'铅笔',
                        name:'tools',
                        inputValue:'铅笔'
                    },
                    {
                        xtype:'checkboxfield',
                        boxLabel:'小刀',
                        name:'tools',
                        inputValue:'小刀'
                    },
                    {
                        xtype:'checkboxfield',
                        boxLabel:'橡皮',
                        name:'tools',
                        inputValue:'橡皮'
                    },
                    {
                        xtype:'checkboxfield',
                        boxLabel:'格尺',
                        name:'tools',
                        inputValue:'格尺'
                    },
                    {
                        xtype:'checkboxfield',
                        boxLabel:'圆规',
                        name:'tools',
                        inputValue:'圆规'
                    }
                ]
            }



        ],
        dockedItems:[
            {
                xtype:'toolbar',
                dock:'top',
                items:[
                    {
                        text:'选中所有',
                        iconCls:'managers',
                        handler:function (b) {
                            var formObj=Ext.getCmp('my_form');//先找到formPanel
                            var form=formObj.getForm();//找到表单 form
                            var fields=form.getFields();
                            fields.each(function (field) {
                                if(field.name=='hobby'){
                                    field.setValue(true);
                                }
                            })
                        }
                    },
                    {
                        text:'取消所选',
                        iconCls:'managers',
                        handler:function (b) {
                            var formObj=Ext.getCmp('my_form');//先找到formPanel
                            var form=formObj.getForm();//找到表单 form
                            var fields=form.getFields();
                            fields.each(function (field) {
                                if(field.name=='hobby'){
                                    field.setValue(false);
                                }
                            })
                        }
                    }

                ]
            }
        ],
        buttons:[
            {
                name:'submit',
                text:'提交',
                handler:function (b) {
                    var formObj=Ext.getCmp('my_form');//先找到formPanel
                    var form=formObj.getForm();//找到表单 form
                    var field=form.findField('name');
                    var value=field.getValue();
                    form.action='/index.php/studydata/update';
                    form.submit();
                    alert(value);
                }
            },
            {
                name:'reset',
                text:'重置',
                handler:function () {
                    var formObj=Ext.getCmp('my_form');//先找到formPanel
                    var form=formObj.getForm();//找到表单 form
                    form.reset();

                }
            },
            {
                name:'load',
                text:'加载数据',
                handler:function () {
                    var formObj=Ext.getCmp('my_form');//先找到formPanel
                    var form=formObj.getForm();//找到表单 form
                    form.loadRecord(P);
                }
            }
        ]

    });


});
