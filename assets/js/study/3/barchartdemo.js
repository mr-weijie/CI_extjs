/**
 * Created by Administrator on 2017/11/14.
 */
Ext.onReady(function () {
    var charStore=Ext.create('Ext.data.JsonStore',{
        fields:['name','data'],
        data:[
            {name:'0~10岁',data:122},
            {name:'1~15岁',data:102},
            {name:'16~18岁',data:89},
            {name:'19~22岁',data:132},
            {name:'23~30岁',data:222},
            {name:'31~35岁',data:321},
            {name:'36~40岁',data:212},
            {name:'41~45岁',data:322},
            {name:'46~50岁',data:312},
            {name:'51~60岁',data:290},
            {name:'61~65岁',data:552},
            {name:'66~70岁',data:422},
        ]
    });
    var window=Ext.create('Ext.Window',{
        width:800,
        height:600,
        hidden:false,
        maximizable:true,
        title:'Bar 条形图表',
        renderTo:Ext.getBody(),
        layout:'fit',
        tbar:[
            {
                text:'更换数据',
                handler:function (b) {
                    charStore.loadData([
                        {name:'0~10岁',data:152},
                        {name:'1~15岁',data:162},
                        {name:'16~18岁',data:189},
                        {name:'19~22岁',data:232},
                        {name:'23~30岁',data:122},
                        {name:'31~35岁',data:421},
                        {name:'36~40岁',data:312},
                        {name:'41~45岁',data:122},
                        {name:'46~50岁',data:212},
                        {name:'51~60岁',data:390},
                        {name:'61~65岁',data:452},
                        {name:'66~70岁',data:322},

                    ]);
                }
            }
        ],
        items:{
            xtype:'chart',
            animate:true,
            style:'background:#fff',
            shadow:false,
            store:charStore,
            axes:[
                {
                    type:'Numeric',
                    position:'bottom',
                    fields:['data'],
                    label:{
                        renderer:Ext.util.Format.numberRenderer('0.0')
                    },
                    title:'人数',
                    mininum:0
                },
                {
                    type:'Category',
                    position:'left',
                    fields:['name'],
                    title:'年龄分布'
                }
            ],
            series:[
                {
                    type:'bar',
                    axis:'bottom',
                    label:{
                        display:'insideEnd',
                        field:'data',
                        renderer:Ext.util.Format.numberRenderer('0'),
                        orientation:'horizontal',
                        color:'#333',
                        'text-anchor':'middle',
                        contrast:true//对照
                    },
                    xField:'name',
                    yField:'data',
                    renderer: function(sprite, record, attr, index, store) {
                      //  var value = (record.get('data') >> 2) % 5;
                        var value=index%6;//使用记录索引来循环确定相应的颜色值
                        var color = [
                            'rgb(213, 70, 121)',
                            'rgb(44, 153, 201)',
                            'rgb(146, 6, 157)',
                            'rgb(49, 149, 0)',
                            'rgb(249, 153, 0)'][value];
                        return Ext.apply(attr, {
                            fill: color
                        });

                    }
                }
            ]
        },
    });
});
