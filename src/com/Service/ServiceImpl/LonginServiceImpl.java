package com.Service.ServiceImpl;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.LoginMapper;
import com.Service.LoginService;
import com.entity.sys_User;



@Service("LoginService")
public class LonginServiceImpl implements LoginService {
	
 @Autowired
 LoginMapper loginMapper;
 
	public Map<String, Object> validate(String name, String pass,
			HttpSession session) {
		
		Map<String,Object> map=new HashMap<String,Object>();
        sys_User user=(sys_User) loginMapper.getUser(name, pass);
        
        if(user!=null){
        	//��ȡ��ɫ
        	Map role=loginMapper.getRole(user.getId());
        	if(role!=null){
            	System.out.println("LoginService: dao:   user:"+user.getName()+"   pass:"+user.getPassword());
            	System.out.println("LoginService: dao:   role:"+role.get("name")+"   leval:"+role.get("leval"));
            	map.put("user", user);
            	map.put("state",1);//��½�ɹ����
            	map.put("role", role);
            	//��½��Ϣ����Ự
            	session.setAttribute("user", user);
            	session.setAttribute("role", role);
            	System.out.println("LonginService:�û��ѽ���Ự=="+user.getName());
            	System.out.println("LonginService:��ɫ�ѽ���Ự=="+role.get("name"));       		
        	}else{
        		map.put("state", 3);
        	}
        }else{
        	map.put("state", 0);
        }
       
		return map;
	}


}
