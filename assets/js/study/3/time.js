/**
 * Created by Administrator on 2017/11/7.
 */
Ext.onReady(function () {
    Ext.QuickTips.init();
    //生成form表单
    Ext.create('Ext.form.Panel',{
        title:'Time时间组件实例',
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
                xtype:'timefield',
                fieldLabel:'选择时间',
                name:'time',
                minValue: '6:00',
                maxValue: '18:00',
                minText:'时间要>{0}',//当输入时间小于最小值时的错误提示
                maxText:'时间要<{0}',//当输入时间大于最大值时的错误提示
                increment:30,//以30分钟为增长步长
                format:'H:i:s',
                invalidText:'时间格式错误',//当出现时间格式出错时的提示文本
                pickerMaxHeight:150,//下拉框的最大高度

            },
            {
                xtype:'datefield',
                fieldLabel:'选择日期',
                name:'date',
                minValue: '2017-05-01',
                maxValue: '2018-05-01',//书写格式由format来决定
                format:'Y-m-d',
                disabledDays:[0,6],//周日和周六不允许选择
                disabledDates:['2017-12-12','2017-12-15'],//设置不能选择的日期
                disabledDatesText:'该日期不能选择',//当不能选择时的提示

            }
        ]
    });



});
