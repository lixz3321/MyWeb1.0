package com.Service.ServiceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.PermManageMapper;
import com.Service.PermManageService;
import com.entity.sys_User;

@Service("PermManageService")
public class PermManageServImpl implements PermManageService {

	@Autowired
	private PermManageMapper PermManagemapper;

	public void modifyPass(String id,String newPass) {
		PermManagemapper.modifyPass(id, newPass);
		System.out.print(id+"   "+newPass);
	}

	public List<sys_User> findUser(String name) {
		List<sys_User> userList=PermManagemapper.findUser(name);
		return userList;
	}

	public void saveUser(sys_User user) {
		// TODO Auto-generated method stub
		PermManagemapper.saveUser(user);
	}

	public void delUser(sys_User user) {
		// TODO Auto-generated method stub
		PermManagemapper.delUser(user);
	}

	public List<Map> findRole(String name) {
		// TODO Auto-generated method stub
		List<Map> roleList=PermManagemapper.findRole(name);
		return roleList;
	}

	public void saveRole(Map role) {
		// TODO Auto-generated method stub
		PermManagemapper.saveRole(role);
	}

	public void delRole(Integer id) {
		// TODO Auto-generated method stub
		PermManagemapper.delRole(id);
	}

	public List<Map> findRoleConn(String uName, String rName) {
		// TODO Auto-generated method stub
		List<Map> list=PermManagemapper.findRoleConn(uName, rName);
		return list;
	}

	public void saveRoleConn(Map map) {
		// TODO Auto-generated method stub
		PermManagemapper.saveRoleConn(map);
	}

	public void delRoleConn(Integer id) {
		// TODO Auto-generated method stub
		PermManagemapper.delRoleConn(id);
	}

}
