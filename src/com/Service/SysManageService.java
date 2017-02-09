package com.Service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface SysManageService {
	public List<Map> findTree();
	public List<Map> findUnitTree();
	public List<Map> findIndex(String name);
	public List<Map> findChildren(Integer type,Integer id,List<Map> all);
	public List<Map> findJtDc(String name,Integer id,Integer type,Integer pid);
	public List<Map> findJtDcJz(String name,Integer id,Integer type,Integer pid);
	public void  saveJtDcJz(String name,Integer id,Integer type,Integer pid,String code);
	public void delJtDcJz(Integer id,String type);
}
