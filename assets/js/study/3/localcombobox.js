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
            {name:'id',type:'string'}
        ]
    });
    //实例化一个部门Store对象
    var deptStore=Ext.create('Ext.data.Store',{
        model:'deptModel',
        data:[
            {deptName:'销售部',id:'001'},
            {deptName:'人事部',id:'002'},
            {deptName:'市场部',id:'003'},
            {deptName:'技术部',id:'004'},
            {deptName:'后勤部',id:'005'},
            {deptName:'生产部',id:'006'},
            {deptName:'维修部',id:'007'},
            {deptName:'法务部',id:'008'},
            {deptName:'财务部',id:'009'}
        ]
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
                    maxHeight:200//列表框最大高度
                },
                fieldLabel:'选择部门',
                name:'dept',
                queryMode:'local',//本地数据查询模式
                store:deptStore,
                valueField:'id',//传送值的字段
                displayField:'deptName',//用于显示值的字段
                forceSelection:true,//强制选择store中的数据，不能随意用手填写其他数据
                value:'003',//默认选项值
                typeAhead:true//当有匹配的数据项时怎么补全
            }
        ]
    });



});
