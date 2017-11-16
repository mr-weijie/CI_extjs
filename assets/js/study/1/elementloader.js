/**
 * Created by Administrator on 2017/10/7.
 */
(function () {
    Ext.onReady(function () {
        Ext.get('btn').on('click',function () {
            var Time=Ext.get('time');//先找到该按钮
            //再获取该按钮相应的elementLoader

            var loader=Time.getLoader();
            //再加载loader
            loader.load({
                url:'/index.php/studydata/gettime',
                renderer:function (loader,response,request) {
                    var timestr=response.responseText;
                    Ext.getDom('time').value=timestr;

                }

            });
        });

        Ext.get('btn1').on('click',function () {
            var loader=Ext.get('time').getLoader();
            loader.startAutoRefresh(1000,{//每一秒进行一次刷新
                url:'/index.php/studydata/gettime',
                renderer:function (loader,response,request) {
                    var timestr=response.responseText;
                    Ext.getDom('time').value=timestr;

                }

            });
        });



    });

})();
