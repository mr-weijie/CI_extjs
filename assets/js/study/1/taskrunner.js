/**
 * Created by Administrator on 2017/10/12.
 */
(function () {
    Ext.onReady(function () {
        var time=Ext.getDom('time');
        var runner=new Ext.util.TaskRunner();
        var task={
            run:function () {
                time.value=Ext.util.Format.date(new Date(),'Y-m-d H:i:s');
            },
            interval:1000

        }
        Ext.get('id0').on('click',function () {
           runner.start(task);
        });

        Ext.get('id1').on('click',function () {
            runner.stop(task);
        });



    });
})();