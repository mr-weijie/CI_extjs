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
        style: 'overflow: hidden;',
        title: 'Radar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: '装载数据',
            handler: function() {
                chartStore.loadData( [
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
            text: 'Animate',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.animate = pressed ? { easing: 'ease', duration: 500 } : false;
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            theme: 'Category2',
            animate: true,
            store: chartStore,
            insetPadding: 20,
            legend: {
                position: 'right'//图例
            },
            axes: [{//轴
                type: 'Radial',
                position: 'radial',
                label: {
                    display: true
                }
            }],
            series: [{
                type: 'radar',
                xField: 'name',
                yField: 'Chinese',
                title:'语文',
                showInLegend: true,//展示在图例
                showMarkers: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    //fill: 'yellow'//没有填充
                    fill:'none'
                }
            },{
                type: 'radar',
                xField: 'name',
                yField: 'Maths',
                title:'数学',
                showInLegend: true,
                showMarkers: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    fill: 'none'
                }
            },{
                type: 'radar',
                xField: 'name',
                yField: 'English',
                title:'英语',
                showMarkers: true,
                showInLegend: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    fill: 'none'
                }
            },{
                type: 'radar',
                xField: 'name',
                yField: 'Physical',
                title:'物理',
                showMarkers: true,
                showInLegend: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    fill: 'none'
                }

            },{
                type: 'radar',
                xField: 'name',
                yField: 'Chemistry',
                title:'化学',
                showMarkers: true,
                showInLegend: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    fill: 'none'
                }
            }
            ]
        }
    });
});

