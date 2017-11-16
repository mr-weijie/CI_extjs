/**
 * Created by Administrator on 2017/10/11.
 */
(function () {
    Ext.onReady(function () {
        Ext.get('id0').on('click',function () {
            //createStyleSheet( cssText, id ) : CSSStyleSheet，生成一个带有id的CSS样式表,并自动插入到head标签中，以<style id="hcss" >.txtcss{color:#00ffff;font-size::36px }</style>的形式存在
            Ext.util.CSS.createStyleSheet(' .txtcss{color:#00ffff;font-size:36px; }','hcss');
            Ext.get('htxt').addClsOnOver('txtcss');

        });
        Ext.get('id1').on('click',function () {
            //getRule( selector, refreshCache ) : CSSStyleRule,返回一个CSS规则,应该是一个对像
            //下面先生成一个CSS
            Ext.util.CSS.createStyleSheet('.txtcss{color:red;font-size:36px }','hcss');
            //获取该CSS的Rule
            var rule=Ext.util.CSS.getRule('.txtcss');
            var color=rule.style.color;
            alert(color);
        });

        var i=0;
        Ext.get('id2').on('click',function () {
            //swapStyleSheet( id, url ) Dynamically swaps an existing stylesheet reference for a new one
            //为一个新指定的元素动态交换已经存在的CSS,注意：前面是<link>标签的id,后面是CSS文件的地址(url)
            if(i%2==0){
                Ext.util.CSS.swapStyleSheet('one','/assets/js/study/css/css1.css');
            }else {
                Ext.util.CSS.swapStyleSheet('one','/assets/js/study/css/css2.css');
            }
            Ext.get('htxt').addClsOnOver('c');
            i++;
        });

        //先生成一个CSS样式表
        Ext.util.CSS.createStyleSheet('.txtcss{color:#00ffff;font-size:36px}','hcss');
        Ext.get('htxt').addClsOnOver('txtcss');

        Ext.get('id3').on('click',function () {
           //removeStyleSheet( id )   Removes a style or link tag by id 通过ID来移除指定的CSS
            Ext.util.CSS.removeStyleSheet('hcss');

        });

        Ext.get('id4').on('click',function () {
            //updateRule( selector, property, value ) : Boolean  Updates a rule property
            //更新具体选择器的CSS属性
           Ext.util.CSS.updateRule('.txtcss','color','#FF0000');
        })

    });
})();
