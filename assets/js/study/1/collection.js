/**
 * Created by Administrator on 2017/10/12.
 */
(function () {
    Ext.onReady(function () {
        //newExt.util.MixedCollection( config ) : Ext.util.MixedCollection      Creates new MixedCollection.
        Ext.get('id0').on('click',function () {
            //add( key, [obj] ) : Object  Adds an item to the collection. Fires the add event when complete.向MixedCollection添加单个对象
            var arr=[];
            var mc=new Ext.util.MixedCollection();
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            mc.add(a);
            mc.add(b);
            mc.each(function (item) {
               arr.push(item.name+" "+item.age+" "+item.email);

            });
            alert(arr.join('\n'));

        });

        Ext.get('id1').on('click',function () {
            //addAll( objs )     Adds all elements of an Array or an Object to the collection.向MixedCollection添加数对象数组，也就是成批的添加
            var arr=[];
            var mc=new Ext.util.MixedCollection();
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            arr.push(a);
            arr.push(b);
            mc.addAll(arr);
            var arr1=[];
            mc.each(function (item) {
                arr1.push(item.name+" "+item.age+" "+item.email);

            });
            alert(arr1.join('\n'));

        });

        Ext.get('id2').on('click',function () {
            //clear( )   Removes all items from the collection. Fires the clear event when complete.
            //Collection数据清除方法，当清除完成时，触发clear事件
            var arr=[];
            var mc=new Ext.util.MixedCollection();
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            arr.push(a);
            arr.push(b);
            //先添加数据
            mc.addAll(arr);
            var arr1=[];
            mc.each(function (item) {
                arr1.push(item.name+" "+item.age+" "+item.email);

            });
            alert(arr1.join('\n'));
            //再清除数据
            mc.clear();
            alert(mc.getCount());//返回collection长度，即所包涵的数据对象个数
        });

        Ext.get('id3').on('click',function () {
            //clone( ) : Ext.util.MixedCollection      Creates a shallow copy of this collection
            //对collection生成一个浅拷贝
            var arr=[];
            var mc=new Ext.util.MixedCollection();
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            arr.push(a);
            arr.push(b);
            //先添加数据
            mc.addAll(arr);
            var mc1=new Ext.util.MixedCollection();
            mc1=mc.clone();//对mc 时行克隆
            var arr1=[];
            mc1.each(function (item) {
                arr1.push(item.name+" "+item.age+" "+item.email);

            });
            alert(arr1.join('\n'));
        });


        Ext.get('id4').on('click',function () {
            //contains( o ) : Boolean   Returns true if the collection contains the passed Object as an item.
            //如果collection中包含一个做为子项的对象，则返回真
            var arr=[];
            var mc=new Ext.util.MixedCollection();
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            var c={name:'张三',age:19,email:'lisi@163.com'}
            var d={name:'李强',age:35}
            arr.push(a);
            arr.push(b);
            //先添加数据
            mc.addAll(arr);
            alert(mc.contains(a));//返回真(true)
            alert(mc.contains(c));//返回假(false)
            alert(mc.contains(d));//返回假(false)
        });

        Ext.get('id5').on('click',function () {
            //containsKey( key ) : Boolean   Returns true if the collection contains the passed Object as a key.
            //如果collection中包含一个传参为键(key)的对象，则返回真
            var arr=[];
            var mc=new Ext.util.MixedCollection();
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            var c={name:'张三',age:19,email:'lisi@163.com'}
            var d={name:'李强',age:35}
            mc.add('01',a);//以键值对的形式添加到collection中
            mc.add('02',b);
            alert(mc.containsKey('01'));//返回真(true)
            alert(mc.containsKey('03'));//返回假(false)
            alert(mc.get('01').name);//返回李强
            alert(mc.first().name);//返回李强
        });

        Ext.get('id6').on('click',function () {
            //add( index, o, key, eOpts )     Fires when an item is added to the collection.
            //当向collection新增完毕时，会触发add事件
           var mc=new Ext.util.MixedCollection();
           mc.on('add',function (index, o, key, eOpts ) {
               var name=o.name;
               alert(name);
           });
            var a={name:'李强',age:35,email:'liqiang@126.com'};
            var b={name:'张东',age:25,email:'zhangdong@163.com'};
            var c={name:'张三',age:19,email:'lisi@163.com'}
           mc.add(a);



        });


    });
})();
