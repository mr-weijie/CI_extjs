/**
 * Created by Administrator on 2017/11/13.
 */
Ext.onReady(function () {

    var columnStore5 =  Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: [
            {name:"0~10岁",data:20},
            {name:"11~18岁",data:60},
            {name:"19~24岁",data:30}
        ]
    });
    var window = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        title: '饼图示例',
        layout: 'fit',
        closeAction:'hide',
        tbar: [{
            text: '数据变换',
            handler: function() {
                columnStore5.loadData([
                    {name:"0~10岁",data:40},
                    {name:"11~18岁",data:20},
                    {name:"19~24岁",data:40}
                ]);
            }
        }, {
            enableToggle: true,
            pressed: false,
            text: 'Donut(设置内圆)',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                //设置图标序列的模式
                chart.series.first().donut = pressed ? 35 : false;//内弧度
                chart.refresh();
            }
        }],
        items: {
            xtype: 'chart',
            id: 'chartCmp',
            animate: true,
            store: columnStore5,
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'data',
                showInLegend: true,
                donut: false,//内环状线圈
                tips: {//提示
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function(storeItem, item) {
                        var total = 0;
                        columnStore5.each(function(rec) {
                            total += rec.get('data');
                        });
                        this.setTitle(storeItem.get('name') + ': '
                            + Math.round(storeItem.get('data')/total*100)
                            + '%');
                    }
                },
                highlight: {//高亮
                    segment: {
                        margin: 20
                    }
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                }
            }]
        }
    });

    window.show();
});
