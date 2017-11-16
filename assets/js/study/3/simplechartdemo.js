/**
 * Created by Administrator on 2017/11/12.
 */
Ext.onReady(function () {
    var chartStore=Ext.create('Ext.data.Store',{
        fields:[
            'Age','Height'
        ],
        data:[
            {'Age':'0-3','Height':60},
            {'Age':'4-6','Height':80},
            {'Age':'7-10','Height':110},
            {'Age':'11-15','Height':140},
            {'Age':'16-18','Height':170},
            {'Age':'19-25','Height':175}

        ]
    });
    var window=Ext.create('Ext.window.Window',{
        height:500,
        width:800,
        title:'简单图片Demo',
        minimizable:true,
        maximizable:true,
        layout:'fit',
        items:[
            {
                xtype:'chart',//图表类型
                style:'background:#fff',
                animate:true,//动画效果
                shadow:true,//阴影效果
                theme:'Category1',//横轴为分类轴
                store:chartStore,
                axes:[
                    {
                        type:'numeric',
                        position:'left',//位置在左边（左轴）
                        dashSize:5,//刻度线的长度，默认3
                        title:'身高分布(cm)',
                        fields:['Height'],//引用数据索引
                        majorTickSteps:5,//大刻度
                        minorTickSteps:4,//一个大刻度中分4个小刻度，加上两头的一个，总共分5份
                        grid:{
                            odd:{//奇数行
                                opacity:1,//不透明
                                'stroke-width':1//表格线宽
                            },
                            even:{//偶数行
                                opacity:1,//不透明
                                'stroke-width':1,//表格线宽
                                stroke:'#FDD'
                            }
                        }
                    },
                    {
                        type:'Category',
                        position:'bottom',
                        fields:['Age'],//取年龄字段索引
                        title:'年龄段',
                        grid:true

                    }
                ],
                series:[//序列
                    {
                        type:'line',//类型：折线图
                        axis:'left',//对齐方式
                        xField:'Age',
                        yField:'Height',
                        highlight:true,//当鼠标滑过节点时，高亮显示
                        tips:{//当鼠标滑过节点时，提示数据
                            trackMouse: true,
                            width: 140,
                            height: 28,
                            renderer: function(chartStore, item) {
                                this.setTitle(chartStore.get('Age') + '岁: 平均身高:' + chartStore.get('Height'));
                            }
                        }
                    }
                ]
            }
        ],

    });
    window.show();
});
