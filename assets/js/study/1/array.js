/**
 * Created by Administrator on 2017/9/25.
 */
Ext.onReady(function () {
    var MyArray=[1,2,3,4,-1,-2,-3,-5];
    var tmp;
    Ext.Array.every(MyArray,function (item) {
        if(item>0){
            return true;
        }else {
            tmp=item;
            return false;
        }
    },this);
    Ext.get('find_less_than_zero').on('click',function () {
        //alert(tmp);
        Ext.MessageBox.alert('找到小于0的值',tmp);
    },this);

    //=============
    var NewArray=Ext.Array.filter(MyArray,function (item) {
        if(item>0){
            return true;
        }else {
            return false;
        }
    },this);
    Ext.get('get_greater_than_zero').on('click',function () {
        Ext.MessageBox.alert('运行结果',NewArray);
    },this)












})();