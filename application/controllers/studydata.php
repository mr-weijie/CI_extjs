<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/29
 * Time: 11:53
 */
class Studydata extends CI_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->model('database_model','database');
    }

    public function getuser(){
        $data=$this->database->getuser(1);
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
    }
    public function getusers(){
        $perpage=$this->input->get('limit');//每页显示条数
        $offset=$this->input->get('start');//每页显示条数
        $this->db->limit($perpage, $offset);
        $data=$this->database->getusers();
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);
    }
    public function gettime(){
        $time=date('Y-m-d H:i:s',time());
        echo $time;
    }
    public function deleteusers(){
        $ids=$this->input->post('ids');
  //      $arr=explode(',',$ids);//将传过来的带逗号的字符串，拆分成数组
        $status=$this->database->deleteusers($ids);
        if($status){
            $data= array('status'=>'ok');
        }else{
            $data= array('status'=>'err');
        }
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    }
    public function updateuser(){
        $param=$this->input->post('param');//得到Json格式的数组字串:param:[{"id":3,"items":"email=wangquan@2126.com"},{"id":4,"items":"email=zhanghe@y2eing.com"},{"id":7,"items":"email=chengen@qq.com2"}]
        $JsonArr=json_decode($param);//得到的是Json格式的数组
        $status=array();//先初始化一个记录更新状态数组
        foreach ($JsonArr as $obj):
            $id=$obj->id;
            $items=$obj->items;
            $data=$this->strToArray($items);
            if($this->database->updateuser($data,$id)){
                $stat=array('id'=>$id,'status'=>'ok');
                array_push($status,$stat);
            }else{
                $stat=array('id'=>$id,'status'=>'err');
                array_push($status,$stat);
            }
        endforeach;
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($status);


    }
    private function strToArray($str){
        $updateStrArr=explode('#*#',$str);//将str拆分成数组
        $data=array();
        foreach ($updateStrArr as $val)://将传过来的参数，转换成键值对数组，为数据库更新做参数用
            $tmp=explode('=',$val);
            if(count($tmp)==2){
                $data[$tmp[0]]=$tmp[1];
            }
        endforeach;
        return $data;

    }
    public function gettree(){
        $data=$this->database->getDeptTree('部门');
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    }
    public function updatetree(){
        $data=array(
            'parentId'=>$this->input->post('parentId'),
            'depth'=>$this->input->post('depth'),
            'index'=>$this->input->post('index')
        );
        $treeId=$this->input->post('treeId');
        $status=$this->database->updatetree($data,$treeId);
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($status);
    }
    public function appendchild(){
        $data=array(
            'parentId'=>$this->input->post('parentId'),
            'depth'=>$this->input->post('depth'),
            'text'=>$this->input->post('text'),
            'leaf'=>$this->input->post('leaf'),
            'manager'=>$this->input->post('manager'),
        );
        $returnData= $this->database->appendchild($data);
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($returnData);
    }
    public function getdeptinfo(){
        $data=$this->database->getDeptInfo('部门');
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    }

    public function createdept(){
        $data=array(
            'treeName'=>'部门',
            'parentId'=>$this->input->post('parentId'),
            'depth'=>$this->input->post('depth'),
            'text'=>$this->input->post('text'),
            'leaf'=>$this->input->post('leaf'),
            'manager'=>$this->input->post('manager'),
            'info'=>$this->input->post('info'),
            'checked'=>false
        );
        $returnData= $this->database->createDept($data);
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($returnData);
    }
    public function deletedept(){
        $ids=$this->input->post('ids');
        $status=$this->database->deleteDept($ids);

        if($status){
            $data= array('status'=>'ok');
        }else{
            $data= array('status'=>'err');
        }
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    }
    public function getusermodel(){
        $data=$this->database->getUserModel();
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo $data;
    }
    public function getdeptname(){
        $queryKey=$this->input->get('queryKey');
        $where=array('text'=>$queryKey);
        $data=$this->database->getDeptName($where);
      //  p($data);
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    }
    public function uploadpic(){
//        $rowid=$this->input->post("rowid");
//        $url=$this->input->post("url");
//        $tablename=$this->input->post("tablename");
        $tablename='table';
        $rowid='21BB9F37DB2BA82DA81AC78597F5BE3A';
        $config['upload_path']='./assets/images/';
        $config['allowed_types']='gif|jpg|png|jpeg|bmp|rar';
        $config['overwrite']=true;//遇到同名的覆盖
        $config['max_size']=1024*1024;//单位为KB
        // $config['file_name']=time().mt_rand(1000,9999);
        $config['file_name']=$tablename.'_'.$rowid;//图片文件名
//载入上传类
        $this->load->library('upload',$config);
        $status=$this->upload->do_upload('upfile');//此处的参数必须与表单中的文件字段名字相同
        if($status){
            $photofile=$this->upload->data('file_name');//返回已保存的文件名
            $data=array(
                'pics'=>$photofile
            );
          //  $status=$this->database->update_record_pic($tablename,$rowid,$data);
            if($status)
            {
                $data= array('status'=>'ok');
            }else{
                $data= array('status'=>'err');
            }
        }else
        {
            $errMsg=$this->upload->display_errors();
            $data= array('status'=>'err','msg'=>$errMsg);
        }
        $this->output->set_header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data);

    }



}