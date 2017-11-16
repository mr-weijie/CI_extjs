/**
 * Created by Administrator on 2017/10/11.
 */
(function () {
    Ext.onReady(function () {
            //newExt.util.ClickRepeater( el, [config] ) : Ext.util.ClickRepeater Creates new ClickRepeater.
            //生成一个单击重复器,第一个参数：el为具体的element,第二个参数为配置项
        //注：最新发现，该组件在firfox55上不能自动执行，也就是interval无效，IE,Chrome上正常

        Ext.get('id0').on('click',function () {
            var crp=new Ext.util.ClickRepeater(Ext.get('id0'),{
                delay:3000,//首次单击时的间隔事件
                interval:4000,//发生首次单击重复事件调用之后第一次事件的间隔时间
                stopDefault: true,//停止这个el上的默认单击事件
                handler:function () {
                    alert('hello world!');
                }
            });
        });
        Ext.get('id1').on('click',function () {
           // new Ext.util.DelayedTask( [fn], [scope], [args], [cancelOnDelay] ) : Ext.util.DelayedTask   The parameters to this constructor serve as defaults and are not required.
           // 延迟执行任务的函数，它的作用就是给定一定的延迟时间会自动执行一个特定的任务,其应用场景之一为，当在搜索框里输入字符时，触发按键事件，但不希望触发就执行，而希望输入几个后再执行搜索查询，这样就可以应用这个函数了
            var dt=new Ext.util.DelayedTask(function () {
                alert('------------');

            });
            dt.delay(5000);

        });





    });
})();
