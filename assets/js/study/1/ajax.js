/**
 * Created by Administrator on 2017/10/7.
 */
(function () {
    Ext.onReady(function () {
        Ext.get('id0').on('click',function () {
            Ext.Ajax.request({
                url:'/index.php/studydata/getusers',
                method:'POST',
                params:{
                    id:1,
                    username:'李强'
                },
                timeout:3000,//3秒超时
                success:function (response,opts) {
                    var str=response.responseText;
                    var tmpArray=Ext.JSON.decode(str);
                    var strArray=[];
                    Ext.Array.each(tmpArray,function (item) {
                        strArray.push(item.name+':'+item.age+":"+item.email);
                    });
                    alert(strArray.join('\n'));
                },
                failure:function (response,opts) {
                    alert(response);
                }
            });
        });

        Ext.get('id1').on('click',function () {
            Ext.Ajax.request({
                url:'/index.php/studydata/getusers',
                method:'POST',
                form:'form1',//通过这个form1，把所有表单的中参数提交到url中，此时可省去params选项，其他的和标准ajax无两样
                timeout:3000,
                success:function (response,opts) {
                    var str=response.responseText;
                    var tmpArray=Ext.JSON.decode(str);
                    var strArray=[];
                    Ext.Array.each(tmpArray,function (item) {
                        strArray.push(item.name+':'+item.age+":"+item.email);
                    });
                    alert(strArray.join('\n'));

                },
                failure:function (response,opts) {

                }
            });
        });




    });
})();
