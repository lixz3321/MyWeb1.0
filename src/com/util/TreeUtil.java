package com.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TreeUtil {
	
	//返回树
	public static List<Map> findTree(List<Map> all) {
		// TODO Auto-generated method stub
		
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
	public static List<Map> findChildren(Integer type,Integer id,List<Map> all) {
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
				nodeMap.put("code", map.get("code"));
				if(chiledren.size()>=1){   //注意：如果是叶子节点，设置了state或children，easyUI会认为这是父节点，所以需判断如果不是叶子节点才添加这两个属性
					nodeMap.put("children", chiledren);
					nodeMap.put("state", "closed");
				}
				children.add(nodeMap);
			}
		}
		return children;
	}
}
