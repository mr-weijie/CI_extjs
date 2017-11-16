<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/10/3
 * Time: 9:10
 */
$callback=$_GET['callback'];
//echo 'Ext.data.jsonP.callback1({name:"李刚",age:17,email:"ligang@126.com"})';
$data[0]=array(
    'name'=>'李刚',
    'age'=>17,
    'email'=>'ligang@126.com'
);
$data[1]=array(
    'name'=>'李丽娟',
    'age'=>19,
    'email'=>'lijuan@126.com'

);
$data=json_encode($data);
//$this->output->set_header('Content-Type: application/json; charset=utf-8');
header("Content-Type: text/html; charset=utf-8");
echo $callback.'('.$data.')';
