/**
 * Created by Administrator on 2017/10/12.
 */
(function () {
    Ext.onReady(function () {
       Ext.get('id0').on('click',function () {
           //ellipsis( value, length, [word] ) : String
           var str='www.chunteng.net';
           str=Ext.util.Format.ellipsis(str,10);//加上省略号共10个字符
           alert(str);

       });

        Ext.get('id1').on('click',function () {
            //capitalize( string ) : String
            //返回首字母大写的字串
            var str='www.chunteng.net';
            str=Ext.util.Format.capitalize(str);
            alert(str);

        });

        Ext.get('id2').on('click',function () {
            //date( value, [format] ) : String ;Formats the passed date using the specified format pattern.
            //使用特定的格式模板来格式化给定的日期
            var date=new Date();
            var datestr=Ext.util.Format.date(date,'Y年-m月-d日 H时:i分:s秒');
            alert(datestr);

        });
        Ext.get('id3').on('click',function () {
            //substr( value, start, length ) : String            Returns a substring from within an original string.
            //对特定的字串截取字串
            var str='www.chunteng.net';
            str=Ext.util.Format.substr(str,0,6);//返回：www.ch
            alert(str);

        });

        Ext.get('id4').on('click',function () {
            //nl2br( v ) : String      Converts newline characters to the HTML tag <br/>
            //把换行符转化为html标签<br/>
            var str='www.chunt\neng.net';
            str=Ext.util.Format.nl2br(str);//返回：www.chunt<br/>eng.net
            alert(str);

        });


    });
})();
