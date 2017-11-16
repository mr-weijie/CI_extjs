/**
 * Created by Administrator on 2017/11/13.
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
    var window=Ext.create('Ext.Window',{
        height:500,
        width:800,
        title:'柱状图表Demo',
        minimizable:true,
        maximizable:true,
        //closeAction:'hide',
        closable:false,//没有关闭按钮
        layout:'fit',
        renderTo:Ext.getBody(),
        tbar:[
            {
                text:'查看另外一个人的成绩',
                handler:function (b) {
                    chartStore.loadData([
                        {name:'一月月考',Chinese:75,Maths:86,English:95,Physical:89,Chemistry:88},
                        {name:'二月月考',Chinese:70,Maths:91,English:82,Physical:97,Chemistry:79},
                        {name:'三月月考',Chinese:65,Maths:89,English:79,Physical:88,Chemistry:93},
                        {name:'四月月考',Chinese:82,Maths:74,English:98,Physical:82,Chemistry:88},
                        {name:'五月月考',Chinese:99,Maths:96,English:86,Physical:86,Chemistry:80},
                        {name:'六月月考',Chinese:93,Maths:91,English:82,Physical:83,Chemistry:88}

                    ]);
                }
            }
        ],
        items:{
            xtype:'chart',
            style:'background:#fff',
            animate:true,
            store:chartStore,
            shadow:true,
            //mask: 'horizontal',//不知为什么，遮罩不起作用？？？？
            // listeners: {
            //     select: {
            //         fn: function(me, selection) {
            //             me.setZoom(selection);
            //             me.mask.hide();
            //         }
            //     }
            // },
            theme:'Category1',//分类模式
            legend:{//图例配置
                position:'right',//位置（放在右边）'
            },
            axes:[//轴配置
                {
                    type:'Numeric',//竖轴为数值轴
                    minimum:0,//最小值为0
                    position:'left',
                    fields:['Chinese','Maths','English','Physical','Chemisty'],//数值字段
                    title:'分数',
                    minorTickSteps:1,//内部小刻度
                    grid:{
                        odd:{
                            opacity:1,
                            fill:'#ddd',
                            stroke:'#bbb',
                            'stroke-width':0.5
                        }
                    }
                },
                {
                    type:'Category',//横轴为分类轴
                    position:'bottom',
                    fields:['name'],//横轴索引字段
                    title:'历次考试'
                }
            ],
            series:[//序列配置
                {//序列1配置
                    type:'line',//折线图表
                    highlight:{//高亮配置
                        size:7,
                        radius:7
                    },
                    axis:'left',//左对齐
                    xField:'name',//x轴字段
                    yField:'Chinese',//序列1y轴字段：语文成绩
                    title:'语文',
                    markerConfig:{//标记配置
                        type:'cross',//交叉标记
                        size:4,
                        radius:4,
                        'stroke-width':0
                    }
                },
                {//序列2配置
                    type:'line',//折线图表
                    highlight:{//高亮配置
                        size:7,
                        radius:7
                    },
                    axis:'left',//左对齐
                    xField:'name',//x轴字段
                    yField:'Maths',//序列2y轴字段：数学成绩
                    title:'数学',
                    markerConfig:{//标记配置
                        type:'cross',//交叉标记
                        size:4,
                        radius:4,
                        'stroke-width':0
                    }
                },
                {//序列3配置
                    type:'line',//折线图表
                    highlight:{//高亮配置
                        size:7,
                        radius:7
                    },
                    axis:'left',//左对齐
                    xField:'name',//x轴字段
                    yField:'English',//序列3y轴字段：英语成绩
                    title:'英语',
                    markerConfig:{//标记配置
                        type:'cross',//交叉标记
                        size:4,
                        radius:4,
                        'stroke-width':0
                    }
                },
                {//序列4配置
                    type:'line',//折线图表
                    highlight:{//高亮配置
                        size:7,
                        radius:7
                    },
                    axis:'left',//左对齐
                    xField:'name',//x轴字段
                    yField:'Physical',//序列4y轴字段：物理成绩
                    title:'物理',
                    markerConfig:{//标记配置
                        type:'cross',//交叉标记
                        size:4,
                        radius:4,
                        'stroke-width':0
                    }
                },
                {//序列5配置
                    type:'line',//折线图表
                    highlight:{//高亮配置
                        size:7,
                        radius:7
                    },
                    axis:'left',//左对齐
                    smooth: true,
                    fill: true,//填充颜色
                    xField:'name',//x轴字段
                    yField:'Chemistry',//序列5y轴字段：化学成绩
                    title:'化学',
                    markerConfig:{//标记配置
                        type:'circle',//圆形标记
                        size:4,
                        radius:4,
                        'stroke-width':0
                    }

                }

            ]


        }
    });
   window.show();
});
