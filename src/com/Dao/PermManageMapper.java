package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.entity.sys_User;

public interface PermManageMapper {
	//ÐÞ¸ÄÃÜÂë
	public void modifyPass(@Param("id") String id,@Param("newPass") String newPass);
	
	public List<sys_User> findUser(@Param("name") String name);
	
	public void saveUser(@Param("user") sys_User user);
	
	public void delUser(@Param("user") sys_User user);
	
	public List<Map> findRole(@Param("name") String name);
	
	public void saveRole(@Param("role") Map role);
	
	public void delRole(@Param("id") Integer id);
	
	public List<Map> findRoleConn(@Param("uName") String uName,@Param("rName") String rName);
	
	public void saveRoleConn(@Param("map") Map map);
	
	public void delRoleConn(@Param("id") Integer id);
	
	
	
	
}
