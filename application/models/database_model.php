<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/28
 * Time: 13:41
 */
class Database_model extends CI_Model{
    public function getuser($id){
        $data=$this->db->where(array('id'=>$id))->get('users')->result_array();
        return $data;

    }
    public function getusers(){
        $data['results']=$this->db->order_by('orderId','asc')->get('users')->result_array();
        $data['total'] = $this->db->count_all_results('users');
        return $data;

    }
    public function deleteusers($data){
        $status=$this->db->where("id in($data)")->delete('users');
        return $status;
    }
    public function updateuser($data,$id){
        $status=$this->db->update('users',$data,array('id'=>$id));
        return $data;
    }
    public function getDeptTree($treeName){
        //先把treeName的Root非重复数据查询出来
       // $data=$this->db->query('select * from study_tree')->result_array();
        $data=array();
        $tmpdata=$this->db->distinct('root')->select('depth,text,treeId,checked,leaf')->where(array('treeName'=>$treeName,'depth'=>0))->order_by('index')->get('dept')->result_array();//
        $data0=$this->getTmpArray($tmpdata);
        //最后为树形加上一个root节点
        $data['text']='root';
        $data['id']='0';
        $data['leaf']=false;
        $data['children']=$data0;
        return $data;
//        p($data);

    }
    private function getTmpArray($tmpdata){
        $i=0;
        $data=array();
        foreach ($tmpdata as $item):
            $text=$item['text'];
            $treeId=$item['treeId'];
            $checked=($item['checked']==1) ?true:false;
            $leaf=($item['leaf']==1) ?true:false;
            if($leaf==false){
                $data[$i]=array('text'=>$text,'id'=>$treeId,'checked'=>$checked,'leaf'=>$leaf);

                $tmp=$this->db->select('depth,text,treeId,checked,leaf')->where(array('parentId'=>$treeId))->order_by('index')->get('dept')->result_array();
                if(count($tmp,1)>0){
                    $tmp=$this->getTmpArray($tmp);
                    $data[$i]['children']=$tmp;
                }

            }else{
                $data[$i]=array('text'=>$text,'id'=>$treeId,'checked'=>$checked,'leaf'=>$leaf);

            }
            $i++;

        endforeach;

    //    p($data);
        return $data;
    }

    public function updatetree($data,$treeId){
        $status=$this->db->update('dept',$data,array('treeId'=>$treeId));
        if($status){
            return array('status'=>'ok');
        }else{
            return array('status'=>'err');
        }

    }
    public function appendchild($data){
        $parentId=$data['parentId'];
        //先检查parentId是否为叶子，如果是叶子，则改为非叶子
        $tmpData=$this->db->select('leaf')->where(array('treeId'=>$parentId))->get('dept')->result_array();
        if(count($tmpData)==0){
            return array('status'=>'err');//该节点已不存在，则不能再追加子节点了
        }
        if($tmpData[0]['leaf']==1){//如果是叶子，则改为非叶子
            $this->db->update('dept',array('leaf'=>0),array('treeId'=>$parentId));
        }
        $max_index=$this->db->select_max('index')->where(array('parentId'=>$parentId))->get('dept')->result_array();
        $data['index']=$max_index[0]['index']+1;
        $data['treeId']=strtoupper(md5($data['text'].date("Y-m-d H:i:s")));//采用系统时间+text的方法
        $status=$this->db->insert('dept',$data);
        if($status){
            return array('status'=>'ok','data'=>$data);
        }else{
            return array('status'=>'err');
        }
    }
    public function getDeptInfo($treeName){
        $data=$this->db->get('dept')->result_array();
        return $data;
    }

    public function createDept($data){
        $data['treeId']=strtoupper(md5($data['text'].date("Y-m-d H:i:s")));//采用系统时间+text的方法
        $status=$this->db->insert('dept',$data);
        if($status){
            if($data['parentId']!=''){
                $this->db->update('dept',array('leaf'=>0),array('treeId'=>$data['parentId']));//及时改变叶子状态
            }
            return array('status'=>'ok','data'=>$data);
        }else{
            return array('status'=>'err');
        }
    }
    public function deleteDept($ids){
        $arr=explode(',',$ids);//将传过来的带逗号的字符串，拆分成数组
        foreach ($arr as $item):
            $treeId=$item;
            $this->deldept($treeId);
        endforeach;
        return true;//返回true
    }
    private function deldept($treeId){
        $data=$this->db->select('treeId')->where(array('parentId'=>$treeId))->get('dept')->result_array();
        //这里少一个判断父节点是否还有子节点的情况
        if(count($data)==0){//说明没有子节点
            $data=$this->db->select('parentId')->where(array('treeId'=>$treeId))->get('dept')->result_array();
            if(count($data)>0){
                $parentId=$data[0]['parentId'];//先得到父结节
            }else{
                $parentId='';
            }
            $this->db->where(array('treeId'=>$treeId))->delete('dept');
            //删除完成后，要检查一下该节点的父结节是否还有子节点，即检查该子节点是否还有兄弟，如果没有，则改其父为叶子节点
            if(strlen($parentId)>0){//说明有父节点
                $data=$this->db->select('treeId')->where(array('parentId'=>$parentId))->get('dept')->result_array();
                if(count($data)==0){//说明该父节点已没有孩子了，也就是该节点没有兄弟了，此时要改其父为叶子
                    $this->db->update('dept',array('leaf'=>1),array('treeId'=>$parentId));
                }
            }

        }else{//说明该节点有子节点，需要先删除其子节点，后再删除该节点
            $dataTmp=$this->db->select('treeId')->where(array('parentId'=>$treeId))->get('dept')->result_array();
            foreach ($dataTmp as $item):
                $this->deldept($item['treeId']);//递归调用，直到删除最后子节点
            endforeach;
            $this->deldept($treeId);
        }

    }

    public function getUserModel(){
        $data="[
        {name:'id',type:'int'},
        {name:'name',type:'auto'},
        {name:'age',type:'int'},
        {name:'email',type:'auto'},
        {name:'birthday',type:'string',sortable:true},
        {name:'deposit',type:'int',sortable:true},
        {name:'isIt',type:'string',sortable:true},
        {name:'sex',type:'string',sortable:true},
        {name:'orderId',type:'int',sortable:true}
        ]";
        return $data;

    }
    public function getDeptName($where){
        $data=$this->db->select('id,text as deptName,css')->like($where,'both')->get('dept')->result_array();
        //$data=$this->db->select('id,text as deptName')->get('dept')->result_array();
        return $data;
    }


}