/**
 * Created by Administrator on 2017/10/5.
 */
(function () {
    Ext.onReady(function () {
            //使用javascript最传统的dom方式获取元素id,然后再绑定监听事件
            var btn=document.getElementById('id1');
            if(btn){//如果存在该按钮
                if(Ext.isIE){//如果是IE浏览器，则按如下方法绑定监听
                    btn.attachEvent('onclick',function () {
                        alert('hello world');
                    });
                }else{//非IE浏览器
                    btn.addEventListener('click',function () {
                        alert('hello world');
                    });
                }
            }

        //使用Extjs绑定方式监听，在这种情况下，所有控制事件的监听是由ExtJs事件的基类：Ext.util.Observable这个基类来完成。
        //它为所有支持事件机制的extjs组件提供事件的支持，
        // 如果我们自己创建新的组件需要有事件的支持，那么我们必须继承这个事件的基类。
        //下面以孩子喝牛奶为例，建立一个孩子类并实例化
        Ext.define('child',{
            extend:'Ext.util.Observable',//只要新建组件有事件机制，就必须继承或混入(mixins)基类：Ext.util.Observable
            constructor:function () {//编写构造函数
                this.callParent(arguments),//注意，一定要加这个调用父类语句，否则会出现：TypeError: p.hasListeners is undefined的错误
                this.status='hungry',//默认状态为饥饿
                //this.status='full',
                this.setMilk=function (milk) {//定义接收牛奶的方法，接收参数为milk
                    this.fireEvent('hungry',milk);//使用传过来的参数milk来触发‘hungry’事件
                },
                this.addEvents({//在使用前必先注册这个事件名
                    'hungry':true//用事件名作为属性，属性值为 true，到现在为止，还没有hungry事件的方法定义

                }),
                this.addListener('hungry',function (milk) {//给事件增加一个监听方法，用来监听这个事件,参数为当初注册hungry时传过来的参数：milk
                    if(this.status=='hungry'){
                        alert('我喝了一瓶'+milk);
                    }else{
                        alert('我不饿，不想喝牛奶');
                    }

                })
            }

        });
        Ext.get('id2').on('click',function () {
            //下面开始实例化一个child
            var child=Ext.create('child',{});
            //下面是利用Ext.util.Observable.capture的事件捕获功能，将在目标事件触发之前，对其进行捕获，参数为被捕获的类名和触发时启动的函数，触发函数的参数为事件名
            Ext.util.Observable.capture(child,function (eventName) {
                if(eventName=='hungry'){
                    alert('牛奶过敏，不能喝');
                    return false;//如果返回false,则不再触发hungry事件了
                }else {
                    return true;//如果返回true,则正常触发hungry事件
                }
            });

            child.setMilk('三鹿牛奶');

        });

//下面演示的是事件传递功能：事件从一个对象传递到另一个对像上去，应用场景为，当有联系的两个或多个对像，
// 在发生同一个事件时，相继会有不现的反应（动作），比如小孩喝了有毒的牛奶之后，父亲就会送其上医院
        Ext.get('id3').on('click',function () {
            //下面开始实例化一个child
            var child=Ext.create('child',{});
            //先定义一下父亲类,这次使用混入(mixins)来达到继承的效果，而不是直接使用extend来继承
            Ext.define('father',{
                mixins:{
                    observable: 'Ext.util.Observable'
                },
                constructor:function (config) {//构造器
                    this.listeners=config.listeners;
                    this.mixins.observable.constructor.call(this, config);
                }
            });
            //实例化一个父亲对像
            var father=Ext.create('father',{});
            //让对象father具有能接收child事件传播的能力
            father.relayEvents(child,['hungry']);//必须要传准备接收传播的是哪个事件，在这里是hungry事件
            //当father接收到child传递过来的hungry事件时，会有自己的方法
            father.on('hungry',function () {
                alert('送喝了有毒牛奶的孩子上医院');
            });


            child.setMilk('三鹿牛奶');

        });


        //下面演示的是事件对象，每一个事件，也是一个对象，也具有对象的特征，比如属性、方法等
        Ext.get('id4').on('click',function (e) {
            var x=e.getX();//鼠标当前横坐标
            var y=e.getY();//鼠标当前纵坐标
            var xy=e.getXY();//获取当前鼠标的坐标
            alert(xy);
       })

        //下面是通过事件管理器Ext.EventManager来对组件创建监听,其实，Ext.get().on()是其简写的形式
        Ext.EventManager.addListener('id5','click',function () {
            alert('这是通过事件监听管理器来创建的监听');
        })



    });
})();
