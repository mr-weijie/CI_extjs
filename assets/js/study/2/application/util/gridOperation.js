/**
 * Created by Administrator on 2017/10/28.
 */
Ext.define('AM.util.gridOperation',{
    doInsert:function (grid,modelObj,treeObj) {//插入操作
        if(!(grid&&modelObj)){
            alert('参数不正确');
            return;
        }
        //先得到表格(grid)的数据集合(store)
        var store=grid.getStore();
        var records=store.getUpdatedRecords();//获取已被更新的记录数组，也就是model数组
        if(records.length>0){
            alert('现有未提交的节点记录，请提交保存后再点新增');
            return;
        }

        //再得到store里的数据个数，即store的长度
        var storeCount=store.getCount();
        //得到编辑插件
        var editing=grid.editing;
        //得到store的数据模型model
        var model=store.model;
        var checkedRecords=grid.getSelectionModel().getSelection();//先得到的被选择数据集合
        var deptObj=new model(modelObj);
        editing.cancelEdit();//取消其他插件的编辑活动
        if (checkedRecords.length==0){//说明是在根节点下插入新节点
            var point=storeCount;//插入位置
            store.insert(point,deptObj);//插入一条新记录
            editing.startEditByPosition({
            row:point,
            column:1//设置默认编辑第一列
            });
        }else if(checkedRecords.length==1){
            var point=store.indexOf(checkedRecords[0])+1;//获取选中记录的行号
            store.insert(point,deptObj);//插入一条新记录
            editing.startEditByPosition({
                row:point,
                column:1//设置默认编辑第一列
            });
        }else {
            alert('必须要选择仅且一个节点才能追加子节点');
            return;
        }


//        if(storeCount==0){//说明store是空，表格没有记录
            //初始化一个模型的类
            // var deptObj=new model(modelObj);
            // editing.cancelEdit();//取消其他插件的编辑活动
            // store.insert(storeCount,deptObj);//插入一条新记录
            // //store.add(deptObj);
            // editing.startEditByPosition({
            //    // row:0,
            //     row:storeCount,
            //     column:1//设置默认编辑第一列
            // });
        // }else{
        //     //先得到被选择的数据集合
        //     var checkedRecords=grid.getSelectionModel().getSelection();
        //     if(checkedRecords.length==1){
        //         var parentNode=checkedRecords[0];
        //         editing.cancelEdit();
        //
        //
        //     }else {
        //         alert('必须要选择仅且一个节点才能追加子节点');
        //     }
        //
        // }
    }

});
