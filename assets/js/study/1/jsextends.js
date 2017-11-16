/**
 * Created by Administrator on 2017/9/26.
 */
Ext.onReady(function () {
   Object.prototype.getVal=function (key,defV) {
       if(this[key]){
           return this[key];
       }else{
           if(this[defV]){
               return this[defV];
           }else {
               return null;
           }
       }
   }
   //通过上述对原生Object基类的扩展，就可以得到一个新的getVal的方法
    var student={
       name:'李刚',
        age:18,
        sex:'male'
    }

    var studentName=student.getVal('name');
    alert(studentName);
});
