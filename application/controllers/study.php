<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/25
 * Time: 17:23
 */
class Study extends CI_Controller{
    public function helloworld(){
        $data['js']=base_url('assets/js/study/1/helloworld.js');
        $this->load->view('study/1/helloworld.html',$data);
    }
    public function arr(){
        $data['js']=base_url('assets/js/study/1/array.js');
        $this->load->view('study/1/array.html',$data);

    }
    public function jsextends(){
        $data['js']=base_url('assets/js/study/1/jsextends.js');
        $this->load->view('study/1/helloworld.html',$data);

    }
    public function showwindow(){
        $data['js']=base_url('assets/js/study/1/showwindow.js');
        $this->load->view('study/1/showwindow.html',$data);

    }

    public function alias(){
        $data['js']=base_url('assets/js/study/1/alias.js');
        $this->load->view('study/1/alias.html',$data);

    }
    public function define(){
        $data['js']=base_url('assets/js/study/1/define.js');
        $this->load->view('study/1/define.html',$data);

    }
    public function mywin(){
        $data['mywin']=base_url('assets/js/study/1/ux/mywin.js');
        $data['js']=base_url('assets/js/study/mywindow.js');
        $this->load->view('study/1/mywin.html',$data);

    }
    public function jsnamespace(){
        $data['js']=base_url('assets/js/study/1/jsnamespace.js');
        $this->load->view('study/1/jsnamespace.html',$data);

    }
    public function config(){
        $data['js']=base_url('assets/js/study/1/config.js');
        $this->load->view('study/1/config.html',$data);

    }
    public function mixins(){
        $data['js']=base_url('assets/js/study/1/mixins.js');
        $this->load->view('study/1/mixins.html',$data);

    }
    public function models(){
        $data['js']=base_url('assets/js/study/1/models.js');
        $this->load->view('study/1/models.html',$data);

    }
    public function validations(){
        $data['js']=base_url('assets/js/study/1/validations.js');
        $this->load->view('study/1/validations.html',$data);

    }
    public function proxy(){
        $data['js']=base_url('assets/js/study/1/proxy.js');
        $this->load->view('study/1/proxy.html',$data);

    }
    public function memoryproxy(){
        $data['js']=base_url('assets/js/study/1/memoryproxy.js');
        $this->load->view('study/1/memoryproxy.html',$data);

    }
    public function localstorage(){
        $data['js']=base_url('assets/js/study/1/localstorage.js');
        $this->load->view('study/1/helloworld.html',$data);

    }
    public function sessionstorage(){
        $data['js']=base_url('assets/js/study/1/sessionstorage.js');
        $this->load->view('study/1/helloworld.html',$data);

    }
    public function jsonp(){
        $data['js']=base_url('assets/js/study/1/jsonp.js');
        $this->load->view('study/1/helloworld.html',$data);

    }
    public function store(){
        $data['js']=base_url('assets/js/study/1/stores.js');
        $this->load->view('study/1/stores.html',$data);

    }
    public function eventbinding(){
        $data['js']=base_url('assets/js/study/1/eventbinding.js');
        $this->load->view('study/1/eventbinding.html',$data);

    }
    public function addmanagedlistener(){
        $data['js']=base_url('assets/js/study/1/addManagedListener.js');
        $this->load->view('study/1/helloworld.html',$data);

    }
    public function ajax(){
        $data['js']=base_url('assets/js/study/1/ajax.js');
        $this->load->view('study/1/ajax.html',$data);

    }
    public function elementloader(){
        $data['js']=base_url('assets/js/study/1/elementloader.js');
        $this->load->view('study/1/elementloader.html',$data);

    }
    public function ext(){
        $data['js']=base_url('assets/js/study/ext.js');
        $this->load->view('study/1/ext.html',$data);

    }
    public function element(){
        $data['js']=base_url('assets/js/study/1/element.js');
        $this->load->view('study/1/element.html',$data);

    }
    public function domhelper(){
        $data['js']=base_url('assets/js/study/1/domhelper.js');
        $this->load->view('study/1/domhelper.html',$data);

    }
    public function utilcss(){
        $data['js']=base_url('assets/js/study/1/utilcss.js');
        $this->load->view('study/1/utilcss.html',$data);

    }
    public function clickrepeater(){
        $data['js']=base_url('assets/js/study/1/clickrepeater.js');
        $this->load->view('study/1/clickrepeater.html',$data);

    }
    public function format(){
        $data['js']=base_url('assets/js/study/1/format.js');
        $this->load->view('study/1/format.html',$data);

    }
    public function collection(){
        $data['js']=base_url('assets/js/study/1/collection.js');
        $this->load->view('study/1/collection.html',$data);

    }
    public function taskrunner(){
        $data['js']=base_url('assets/js/study/1/taskrunner.js');
        $this->load->view('study/1/taskrunner.html',$data);

    }
    public function gridpanel(){
        $data['js']=base_url('assets/js/study/2/gridpanel.js');
        $this->load->view('study/2/gridpanel.html',$data);

    }
    public function mvc(){
        $data['js']=base_url('assets/js/study/2/grid.js');
        $this->load->view('study/2/mvc.html',$data);

    }
    public function treepanel(){
        $data['js']=base_url('assets/js/study/2/tree.js');
        $this->load->view('study/2/mvc.html',$data);
    }
    public function multicolstree(){
        $data['js']=base_url('assets/js/study/2/multicolstree.js');
        $this->load->view('study/2/mvc.html',$data);

    }
    public function integration(){
        $data['js']=base_url('assets/js/study/2/integration.js');
        $this->load->view('study/2/mvc.html',$data);

    }
    public function factory(){
        $data['factory']=base_url('assets/js/study/2/comm/modelFactory.js');
        $data['js']=base_url('assets/js/study/2/factory.js');
        $this->load->view('study/2/mvc.html',$data);

    }

    public function form(){
        $data['js']=base_url('assets/js/study/3/form.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function localcombobox(){
        $data['js']=base_url('assets/js/study/3/localcombobox.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function remotecombobox(){
        $data['js']=base_url('assets/js/study/3/remotecombobox.js');
        $this->load->view('study/3/form.html',$data);
    }
    public function time(){
        $data['js']=base_url('assets/js/study/3/time.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function htmleditor(){
        $data['js']=base_url('assets/js/study/3/htmleditor.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function fieldset(){
        $data['js']=base_url('assets/js/study/3/fieldset.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function container(){
        $data['js']=base_url('assets/js/study/3/container.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function panel(){
        $data['js']=base_url('assets/js/study/3/panel.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function autolayout(){
        $data['js']=base_url('assets/js/study/3/autolayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function fitlayout(){
        $data['js']=base_url('assets/js/study/3/fitlayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function accordionlayout(){
        $data['js']=base_url('assets/js/study/3/accordionlayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function cardlayout(){
        $data['js']=base_url('assets/js/study/3/cardlayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function anchorlayout(){
        $data['js']=base_url('assets/js/study/3/anchorlayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function absolutelayout(){
        $data['js']=base_url('assets/js/study/3/absolutelayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function columnlayout(){
        $data['js']=base_url('assets/js/study/3/columnlayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function tablelayout(){
        $data['js']=base_url('assets/js/study/3/tablelayout.js');
        $this->load->view('study/3/form.html',$data);

    }
    public function simplechartdemo(){
        $data['js']=base_url('assets/js/study/3/simplechartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function columnchartdemo(){
        $data['js']=base_url('assets/js/study/3/columnchartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function linechartdemo(){
        $data['js']=base_url('assets/js/study/3/linechartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function piechartdemo(){
        $data['js']=base_url('assets/js/study/3/piechartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function barchartdemo(){
        $data['js']=base_url('assets/js/study/3/barchartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function areachartdemo1(){
        $data['js']=base_url('assets/js/study/3/areachartdemo1.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function areachartdemo2(){
        $data['js']=base_url('assets/js/study/3/areachartdemo2.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function gaugechartdemo(){
        $data['js']=base_url('assets/js/study/3/gaugechartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }
    public function radachartdemo(){
        $data['js']=base_url('assets/js/study/3/radachartdemo.js');
        $this->load->view('study/3/chart.html',$data);

    }



}