/**
 * Created by Administrator on 2017/11/13.
 */
Ext.onReady(function () {
    var chartStore=Ext.create('Ext.data.Store',{
        fields:[
            'Age','amount'
        ],
         data:[
            {'Age':'0-3','amount':75},
            {'Age':'4-6','amount':80},
            {'Age':'7-10','amount':110},
            {'Age':'11-15','amount':70},
            {'Age':'16-18','amount':90},
            {'Age':'19-25','amount':120}

        ]
    });

    var window=Ext.create('Ext.window.Window',{
        height:500,
        width:800,
        title:'柱状图表Demo',
        minimizable:true,
        maximizable:true,
        //closeAction:'hide',
        closable:false,//没有关闭按钮
        layout:'fit',
        tbar:[
            {
                text:'改变数据',
                handler:function () {
                    chartStore.loadData([
                        {'Age':'0-3','amount':30},
                        {'Age':'4-6','amount':50},
                        {'Age':'7-10','amount':140},
                        {'Age':'11-15','amount':160},
                        {'Age':'16-18','amount':90},
                        {'Age':'19-25','amount':180}
                    ]);
                }
            }
        ],
        items:{
            id:'chartCmp',
            xtype:'chart',
            style:'background:#fff',
            animate:true,
            shadow:true,
            store:chartStore,
            axes:[
                {
                    type: 'Numeric',
                    position:'left',
                    fields:['amount'],
                    title:'人数',
                    grid:true,
                    mininum:0
                },
                {
                    type: 'Category',
                    position:'bottom',
                    fields:['Age'],
                    title:'年龄段'
                }
            ],
            series:[
                {
                    type: 'column',//柱形图
                    axis:'left',//左对齐
                    hightlight:true,//高亮
                    tips:{//提示
                        trackMouse:true,
                        width:140,
                        height:28,
                        renderer:function (charStore,item) {
                            this.setTitle(charStore.get('Age')+'年龄段：'+charStore.get('amount')+'人');
                        }
                    },
                    renderer:function (sprite,record,attr,index,store) {
                      //  var fieldValue = Math.random() * 20 + 10;
                     //   var value = (record.get('amount') >> 2) %3;
                        var value=index%6;//使用记录索引来循环确定相应的颜色值
                     //   console.log(value);
                        var color = [
                            'rgb(213, 70, 121)',
                            'rgb(44, 153, 201)',
                            'rgb(146, 6, 157)',
                            'rgb(49, 149, 0)',
                            'rgb(249, 153, 0)'][value];//取颜色数组中的相应元素作为填充颜色
                        return Ext.apply(attr, {//通过扩展功能，对每一个柱进行样式渲染
                            fill: color
                        });
                    },
                    label:{//控制柱形图的label
                        display:'insideEnd',
                        'text-anchor':'middle',
                        field:'amount',
                        renderer:Ext.util.Format.numberRenderer('0'),
                        orientation:'vertical',
                        color:'#333',
                    },
                    xField:'Age',
                    yField:'amount'
                }
            ]
     }
    });

    window.show();




});