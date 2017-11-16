/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
    Ext.onReady(function () {
        Ext.define('CanSing',{
            sing:function () {
                alert("I can sing!");
            }
        });
        Ext.define('CanDance',{
            dance:function () {
                alert('I can dance');
            }
        });
        Ext.define('Drawing',{
            draw:function () {
                alert('I can draw pictrue!');
            }
        });

        Ext.define('person',{
            cansay:function () {
                alert('I can say!');
            },
            mixins:{
                CanSing:'CanSing',
                CanDance:'CanDance',
                Drawing:'Drawing'
            }
        });

        var man=Ext.create('person',{});
        Ext.get('sing').on('click',function () {
            man.sing();
        });
        Ext.get('cansay').on('click',function () {
            man.cansay();
        });
        Ext.get('dance').on('click',function () {
            man.dance();
        });
        Ext.get('draw').on('click',function () {
            man.draw();
        });





    });
})();
