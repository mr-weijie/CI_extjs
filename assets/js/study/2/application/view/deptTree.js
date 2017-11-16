/**
 * Created by Administrator on 2017/10/29.
 */
Ext.define('AM.view.deptTree',{
    extend:'Ext.tree.Panel',
    alias:'widget.deptTree',
    rootVisible:false,
    displayField:'text',
    animate:false,//去掉动画效果
    store:'deptStore'
});
