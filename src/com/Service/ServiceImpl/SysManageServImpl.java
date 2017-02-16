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
//���ŵ糧��
public List<Map> findTree() {
	// TODO Auto-generated method stub
	
	List<Map> all=sysManageMapper.findJtDc();
	
	List<Map> tree=new ArrayList<Map>();
	Map nodeMap=new HashMap();
	List<Map> children=findChildren(0,0,all);
	//���ڵ�
	nodeMap.put("id","0");
	nodeMap.put("text","ȫ���糧");
	nodeMap.put("state", "open");
	nodeMap.put("children", children);
	nodeMap.put("type", "0");
	tree.add(nodeMap);
	return tree;
  }
//���ŵ糧������
public List<Map> findUnitTree() {
	// TODO Auto-generated method stub
	
	List<Map> all=sysManageMapper.findJtDcJz();
	
	List<Map> tree=new ArrayList<Map>();
	Map nodeMap=new HashMap();
	List<Map> children=findChildren(0,0,all);
	//���ڵ�
	nodeMap.put("id","0");
	nodeMap.put("text","ȫ���糧");
	nodeMap.put("state", "open");
	nodeMap.put("children", children);
	nodeMap.put("type", "0");
	tree.add(nodeMap);
	return tree;
  }
     /**
	 * ���ݸ��ڵ��ѯ���ӽڵ�
	 * @Title  findChildren
	 * @Date 2017-01-27
	 * @author LXZ
	 * @Description 
	 * @param ���ڵ�type,���ڵ�id,���нڵ㼯��all
	 * @param 
	 * @return  һ�����ڵ�������ӽڵ㼯��
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
			if(chiledren.size()>=1){   //ע�⣺�����Ҷ�ӽڵ㣬������state��children��easyUI����Ϊ���Ǹ��ڵ㣬�������ж��������Ҷ�ӽڵ���������������
				nodeMap.put("children", chiledren);
				nodeMap.put("state", "closed");
			}
			children.add(nodeMap);
		}
	}
	System.out.println("findChildren():   list==="+children);
	return children;
}
//���ҵ糧
public List<Map> findJtDc(String name, Integer id, Integer type,Integer pid) {
	// TODO Auto-generated method stub
	//System.out.println("SysManageService:  findJtDc():    type=="+type);
	List<Map> list=sysManageMapper.findJtDc(name, id, type,pid);
	return list;
}
//���ҵ糧����
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
