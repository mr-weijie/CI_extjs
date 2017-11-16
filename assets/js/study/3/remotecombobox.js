/**
 * Created by Administrator on 2017/11/7.
 */
Ext.onReady(function () {
    Ext.QuickTips.init();
    //定义一个部门类
    Ext.define('deptModel',{
        extend:'Ext.data.Model',
        fields:[
            {name:'deptName',type:'string'},
            {name:'id',type:'string'},
            {name:'css',type:'string'}
        ]
    });
    //实例化一个部门Store对象
    var deptStore=Ext.create('Ext.data.Store',{
        model:'deptModel',
        proxy:{
            type:'ajax',
            url:'/index.php/studydata/getdeptname',
            reader:{
                type:'json',
                root:''
            },
            writer:{
                type:'json'
            }
        },
        autoLoad:true

    });
    //生成form表单
    Ext.create('Ext.form.Panel',{
        title:'本地Combox实例',
        renderTo:'myform',
        bodyPadding:'5 5 5 5',
        height:200,
        width:300,
        frame:true,
        defaults:{
            labelSeparator:':',
            labelWidth:70,
            width:200,
            allowBlank:false,
            msgTarget:'side',
            labelAlign:'left'
        },
        items:[
            {
                xtype:'combobox',
                listConfig:{//控制下拉列表的样式
                    emptyText:'没有找到匹配的数据',
                    maxHeight:200,//列表框最大高度
                    getInnerTpl: function() {
                        //样式模板
                        return '<div class="{css}">{deptName}</div>';//{}内的参数是模板中要替换的变量,都是Model字段
                    }
                },
                fieldLabel:'选择部门',
                name:'dept',
                queryMode:'remote',//远程数据查询模式
                store:deptStore,
                valueField:'id',//传送值的字段
                displayField:'deptName',//用于显示值的字段
                minChars:1,//当键入最少为1个字符时，开始后台查询
                queryParam:'queryKey',//后台接收查询关键字的参数名称
                multiSelect:true,//允许多选
                //   forceSelection:true,//强制选择store中的数据，不能随意用手填写其他数据
             //   value:'003',//默认选项值
             //   typeAhead:true//当有匹配的数据项时怎么补全
            }
        ]
    });



});
