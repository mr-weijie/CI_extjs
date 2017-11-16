/**
 * Created by Administrator on 2017/10/10.
 */
(function () {
    Ext.onReady(function () {
        Ext.get('btn0').on('click',function () {
           //isEmpty( value, [allowEmptyString] ) : Boolean
            //第一个参数是要检测的对象，第二个参数是“是否允许空串”
           // alert(Ext.isEmpty({}));//返回false,因为空的对象{}也是对象
            var xy;
           // alert(xy);
           // alert(Ext.isEmpty(xy));//返回true,因为没有定义的(undefined)、null、零长度的数组,空串,返回为true,按empty算
          //  alert(Ext.isEmpty(''));//返回true,第二个参数为空，说明不允许有0长度
            alert(Ext.isEmpty('',true));//返回false,第二个参数允许为空，说明即使是0长度，也不能算为empty
        });

        Ext.get('btn1').on('click',function () {
            //namespace( namespaces ) : Object,参数为无限增加，用逗号分隔的命名空间字符串
            //使用命名空间的好处是方便分类管理，同一个名字不同功用的类不致于混淆，便于协同开发
           Ext.namespace('COM.CORE.CLASS','COM.MODE.CLASS');//先定义命名空间，然后就可以直接使用了
            COM.CORE.CLASS.A={
                name:'李强',
                age:35,
                email:'liqing@qq.com'

            };
            COM.MODE.CLASS.A=function () {
                alert('你好，我是李强');
            }
            var nam=COM.CORE.CLASS.A.name;
      //     alert(nam);
      //      COM.MODE.CLASS.A();
            eval(COM.MODE.CLASS.A());//这个效果和上面的直接调用是一样的
        });

        Ext.get('btn2').on('click',function () {
            var arr=[1,2,3,5,33,43,24,23,234,234,242,424,2,42,4];
            Ext.each(arr,function (item) {
                alert(item);
            })
        });

        Ext.get('btn3').on('click',function () {
           //Ext.apply()的作用就是将一个对象的属性和方法进行扩展
            var a={
                name:'李强'
            }
            //下面对a进行扩展
            Ext.apply(a,{
                age:18,
                email:'liqiang@qq.com',
                getName:function () {
                    return this.name;
                }
            });

            alert(a.name+' age:'+a.ge+' Name:'+a.getName());
        });

        Ext.get('btn4').on('click',function () {
            var arr={
                name:'李强',
                age:35,
                email:'liqiang@qq.com',
                getName:function () {
                    return this.name;
                }
            };
            var arr1=[1,2,3,4,'qewqe','etert','学校'];
            alert(Ext.encode(arr));//注意：仅能对对象属性值进行编码，不能对对象方法编码
            alert(arr1);
        });

        Ext.get('btn5').on('click',function () {
            //Ext.HtmlDecode能将html中<,>,空格,;这样的转义符，在html中能正常的显示出本义来
            var tmpstr='<div><h1>Hellow >world!<this is </h1></div>';
            var tmpencodestr=Ext.String.htmlEncode(tmpstr);//为安全起见，先对tmpstr进行编码，防止有混入的script语句或干扰显示的岐义字符
            alert(tmpencodestr);
            alert(Ext.htmlDecode(tmpencodestr));//正常解码显示
            alert(Ext.String.htmlDecode(tmpencodestr));//正常解码显示,上述的Ext.htmlDecode已过时，不再使用
        })

        //select( selector, [unique] ) : Ext.CompositeElement,获取目标选择器的CSS信息，返回类型为：Ext.CompositeElement
        Ext.get('btn6').on('click',function () {
            var css=Ext.select('.divC');//注意：参数必须是CSS中的类名
            var height=css.elements[0].clientHeight;
            var width=css.elements[0].clientWidth;
            alert('Height'+height+' Width:'+width);

        });
        Ext.get('btn7').on('click',function () {
            alert(Ext.typeOf({}));//返回Object
            alert(Ext.typeOf('sfsdf'));//返回atring
            alert(Ext.typeOf(123));//返回number
            alert(Ext.typeOf(function () {
                alert('sfsdf');
            }));//返回fuction


            
        })


    });
})();
