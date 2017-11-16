/**
 * Created by Administrator on 2017/10/9.
 */
(function () {
    Ext.onReady(function () {
        Ext.get('id0').on('click',function () {
            var mypannel=Ext.create('Ext.panel.Panel',{
                width:400,
                height:300,
                html:"<p id='p1'>Hello world</p>",
                title:'My panel',
                id:'myp01',
                renderTo:'paneldiv'
            });

        });





    });
})();
