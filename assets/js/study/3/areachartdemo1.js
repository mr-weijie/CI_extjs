/**
 * Created by Administrator on 2017/11/14.
 */
Ext.onReady(function () {
    var chartStore=Ext.create('Ext.data.JsonStore',{//注意，这里用的是JsonStore，而不是普通的Store!
        fields: ['name', 'Chinese','Maths','English','Physical','Chemistry'],
        data:[
            {name:'一月月考',Chinese:85,Maths:76,English:90,Physical:85,Chemistry:82},
            {name:'二月月考',Chinese:80,Maths:84,English:92,Physical:87,Chemistry:89},
            {name:'三月月考',Chinese:75,Maths:79,English:89,Physical:89,Chemistry:96},
            {name:'四月月考',Chinese:92,Maths:78,English:88,Physical:98,Chemistry:78},
            {name:'五月月考',Chinese:79,Maths:91,English:96,Physical:87,Chemistry:85},
            {name:'六月月考',Chinese:83,Maths:96,English:98,Physical:89,Chemistry:94}

        ]
    });
    var window = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        shadow: false,
        maximizable: true,
        title: 'Area Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: '切换数据',
            handler: function() {
                chartStore.loadData([
                    {name:'一月月考',Chinese:75,Maths:86,English:95,Physical:89,Chemistry:88},
                    {name:'二月月考',Chinese:70,Maths:91,English:82,Physical:97,Chemistry:79},
                    {name:'三月月考',Chinese:65,Maths:89,English:79,Physical:88,Chemistry:93},
                    {name:'四月月考',Chinese:82,Maths:74,English:98,Physical:82,Chemistry:88},
                    {name:'五月月考',Chinese:99,Maths:96,English:86,Physical:86,Chemistry:80},
                    {name:'六月月考',Chinese:93,Maths:91,English:82,Physical:83,Chemistry:88}
                ]);
            }
        }, {
            enableToggle: true,
            pressed: true,
            text: '动画开启|关闭',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.animate = pressed?{easing: 'ease', duration: 500 }:false;
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: chartStore,
            legend: {
                position: 'bottom'
            },
            axes: [{
                type: 'Numeric',
                grid: true,
                position: 'left',//位置
                fields: ['Chinese','Maths','English','Physical','Chemistry'],
                title: '分数分布',
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 1
                    }
                },
                minimum: 0,
                adjustMinimumByMajorUnit: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '每月考试',
                grid: true,
                label: {
                    rotate: {
                        degrees: 315
                    }
                }
            }],
            series: [{
                type: 'area',
                highlight: false,
                axis: 'left',
                xField: 'name',
                yField: ['Chinese','Maths','English','Physical','Chemistry'],
                title:['语文','数学','英语','物理','化学'],//此标题数组和上面的yField数组对应
                style: {
                    opacity: 0.93
                }
            }]
        }
    });
    window.show();

});