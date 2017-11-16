/**
 * Created by Administrator on 2017/11/14.
 */
Ext.onReady(function () {

    var s1 =  Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            {name:"0~10岁",data:20}
        ]
    });
    var s2 =  Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            {name:"0~10岁",data:50}
        ]
    });
    var s3 =  Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            {name:"0~10岁",data:30}
        ]
    });
    var window = Ext.create('Ext.Window', {
        width: 800,
        height: 250,
        minWidth: 650,
        minHeight: 225,
        title: 'Gauge Charts',
        tbar: [{
            text: '装载新的数据',
            handler: function() {
                s1.loadData([
                    {name:"0~10岁",data:50}
                ]);
                s2.loadData([
                    {name:"0~10岁",data:20}
                ]);
                s3.loadData([
                    {name:"0~10岁",data:70}
                ]);
            }
        }],
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{//第一个仪表图
            xtype: 'chart',
            style: 'background:#fff',
            animate: {
                easing: 'elasticIn',
                duration: 1000
            },
            store: s1,
            insetPadding: 25,
            flex: 1,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: -10
            }],
            series: [{
                type: 'gauge',
                field: 'data',
                donut: false,
                colorSet: ['#F49D10', '#ddd']
            }]
        }, {//第二个仪表图
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: s2,
            insetPadding: 25,
            flex: 1,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 7
            }],
            series: [{
                type: 'gauge',
                field: 'data',
                donut: 30,
                colorSet: ['#82B525', '#ddd']
            }]
        }, {//第三个仪表图
            xtype: 'chart',
            style: 'background:#fff',
            animate: {
                easing: 'bounceOut',
                duration: 500
            },
            store: s3,
            insetPadding: 25,
            flex: 1,
            axes: [{
                type: 'gauge',
                position: 'gauge',
                minimum: 0,
                maximum: 100,
                steps: 10,
                margin: 7
            }],
            series: [{
                type: 'gauge',
                field: 'data',
                donut: 80,
                colorSet: ['#3AA8CB', '#ddd']
            }]
        }]
    })
    window.show();

});