/**
 * Created by Administrator on 2017/10/8.
 */
(function () {
    Ext.onReady(function () {
        //var div=Ext.get('id0');
        var div=Ext.fly('id0');
        div.addClsOnOver('divC');

        var txtkey=Ext.get('key');
        txtkey.addKeyMap({
           // target: "my-element",
            binding: [{
                key: [10,13],
                fn: function(){ alert("Return was pressed"); }
            }, {
                key: "abc",
                fn: function(e,v){
                    var str=Ext.get('key').getValue()+e;
                    //alert('a, b or c was pressed');
                    alert(str);
                }
            }, {
                key: "\t",
                ctrl:true,
                shift:true,
                fn: function(){ alert('Control + shift + tab was pressed.'); }
            }]
        });

        var body=Ext.getBody();
        body.addKeyMap({
            binding:[
                {
                    key:'c',
                    fn:function () {
                        alert('您刚按了组合键：Ctrl+C');
                    },
                    ctrl:true
                },
                {
                    key:Ext.EventObject.F1,
                    fn:function () {
                        alert('您刚才按了F1帮助热键！');
                    }
                }
            ]
        });

        function createchild() {
            var el=document.createElement('h5');
            el.appendChild(document.createTextNode('我是被追加的'));
            return el;
        }
        Ext.get('btn').on('click',function () {
            Ext.get('div01').appendChild(createchild());

        });
        //演示Ext.getCmp
        Ext.get('btn1').on('click',function () {
            var mypanel=Ext.create('Ext.panel.Panel',{
                width:400,
                height:300,
                id:'myp',
                html:'<div>这一个html元素</div>',
                title:'这是一个自定义的面板',
                renderTo:Ext.get('div01')
            });
            //下面用Ext.getCmp来获取用Ext来定义的组件ID
            var myp=Ext.getCmp('myp');
            myp.setTitle('这是一个新的标题');




        })









    });


})();