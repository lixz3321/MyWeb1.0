package com.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TreeUtil {
	
	//������
	public static List<Map> findTree(List<Map> all) {
		// TODO Auto-generated method stub
		
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
				if(chiledren.size()>=1){   //ע�⣺�����Ҷ�ӽڵ㣬������state��children��easyUI����Ϊ���Ǹ��ڵ㣬�������ж��������Ҷ�ӽڵ���������������
					nodeMap.put("children", chiledren);
					nodeMap.put("state", "closed");
				}
				children.add(nodeMap);
			}
		}
		return children;
	}
}
