package com.Service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.entity.sys_User;

public interface PermManageService {
	
	//ÐÞ¸ÄÃÜÂë
	public void modifyPass(String id,String newPass);
	
	public List<sys_User> findUser(String name);
	
	public void saveUser(sys_User user);
	
	public void delUser(sys_User user);
	
	public List<Map> findRole(String name);
	
	public void saveRole(Map role);
	
	public void delRole(Integer id);
	
	public List<Map> findRoleConn(String uName,String rName);
	
	public void saveRoleConn(Map map);
	
	public void delRoleConn(Integer id);
}
