<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/26
 * Time: 16:29
 * 公共类，用于后台身份验证，必须是MY_开头，在config.php中已设置过
 */
class MY_Controller extends CI_Controller{
    public function __construct(){
        //构造函数
        parent::__construct();
        //parent::__construct();//必须先继承父构造函数，这样能继承基类
        $usrid=$this->session->userdata('usrid');//取出session类的中数据
        $usrname=$this->session->userdata('usrname');
        if(!($usrid||$usrname)){
            redirect('login');//直接跳转到登录页面
        }



    }
}