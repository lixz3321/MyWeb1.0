package com.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.SysManageMapper;
import com.Service.SysManageService;
import com.util.DateUtil;

@Service("SysManageService")
public class SysManageServImpl implements SysManageService {
  @Autowired
  SysManageMapper sysManageMapper; 
//集团电厂树
public List<Map> findTree() {
	// TODO Auto-generated method stub
	
	List<Map> all=sysManageMapper.findJtDc();
	
	List<Map> tree=new ArrayList<Map>();
	Map nodeMap=new HashMap();
	List<Map> children=findChildren(0,0,all);
	//根节点
	nodeMap.put("id","0");
	nodeMap.put("text","全部电厂");
	nodeMap.put("state", "open");
	nodeMap.put("children", children);
	nodeMap.put("type", "0");
	tree.add(nodeMap);
	return tree;
  }
//集团电厂机组树
public List<Map> findUnitTree() {
	// TODO Auto-generated method stub
	
	List<Map> all=sysManageMapper.findJtDcJz();
	
	List<Map> tree=new ArrayList<Map>();
	Map nodeMap=new HashMap();
	List<Map> children=findChildren(0,0,all);
	//根节点
	nodeMap.put("id","0");
	nodeMap.put("text","全部电厂");
	nodeMap.put("state", "open");
	nodeMap.put("children", children);
	nodeMap.put("type", "0");
	tree.add(nodeMap);
	return tree;
  }
     /**
	 * 根据父节点查询其子节点
	 * @Title  findChildren
	 * @Date 2017-01-27
	 * @author LXZ
	 * @Description 
	 * @param 父节点type,父节点id,所有节点集合all
	 * @param 
	 * @return  一个父节点的所有子节点集合
	 */
public List<Map> findChildren(Integer type,Integer id,List<Map> all) {
	// TODO Auto-generated method stub
	List<Map> children=new ArrayList<Map>();
	
	for(Map map:all){
		if(map.get("pid")==id && (Integer)map.get("type")==(type+1)){
			Map nodeMap=new HashMap();
			List<Map> chiledren=findChildren((Integer) map.get("type"),(Integer)map.get("id"),all);
			nodeMap.put("id", map.get("id"));
			nodeMap.put("text", map.get("name"));
			nodeMap.put("type", map.get("type"));
			nodeMap.put("pid", map.get("pid"));
			if(chiledren.size()>=1){   //注意：如果是叶子节点，设置了state或children，easyUI会认为这是父节点，所以需判断如果不是叶子节点才添加这两个属性
				nodeMap.put("children", chiledren);
				nodeMap.put("state", "closed");
			}
			children.add(nodeMap);
		}
	}
	System.out.println("findChildren():   list==="+children);
	return children;
}
//查找电厂
public List<Map> findJtDc(String name, Integer id, Integer type,Integer pid) {
	// TODO Auto-generated method stub
	//System.out.println("SysManageService:  findJtDc():    type=="+type);
	List<Map> list=sysManageMapper.findJtDc(name, id, type,pid);
	return list;
}
//查找电厂机组
public List<Map> findJtDcJz(String name, Integer id, Integer type, Integer pid) {
	// TODO Auto-generated method stub
	List<Map> list=sysManageMapper.findJtDcJz(name, id, type, pid);
	return list;
  }
public void saveJtDcJz(String name, Integer id, Integer type, Integer pid,
		String code) {
	// TODO Auto-generated method stub
	sysManageMapper.saveJtDcJz(name, id, type, pid, code);
  }
public void delJtDcJz(Integer id, String type) {
	// TODO Auto-generated method stub
	sysManageMapper.delJtDcJz(id, type);
}
public List<Map> findIndex(String name) {
	// TODO Auto-generated method stub
	List<Map> result=sysManageMapper.findIndex(name);
	for(Map map:result){
		String time=DateUtil.formatDate((Date)map.get("date"));
		map.put("date",time);
	}
	return result;
}
public void saveIndex(Integer id,String name, String code) {
	// TODO Auto-generated method stub
	sysManageMapper.saveIndex(id,name,code);
}
public void delIndex(Integer id) {
	// TODO Auto-generated method stub
	sysManageMapper.delIndex(id);
}

}
