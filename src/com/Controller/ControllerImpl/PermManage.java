package com.Controller.ControllerImpl;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.Service.PermManageService;
import com.entity.sys_User;

@Controller
@RequestMapping("/PermManage")
/**
 * @author lixz
 *
 */
public class PermManage {
	
	@Resource(name="PermManageService")
	PermManageService PermManageService;   //注入service （按bean名称匹配）
	
	
	@RequestMapping("/modifyPass")
	 @ResponseBody
	 //修改密码
	 public void modifyPass(String id,String newPass){
		PermManageService.modifyPass(id, newPass);
	}
	
	@RequestMapping("/findUser")
	 @ResponseBody
	 public List<sys_User> findUser(String name){
		List<sys_User> userList=PermManageService.findUser(name);
		return userList;
	}
	
		@RequestMapping("/saveUser")
		 @ResponseBody                     //前台传来的id,name,state等四个字符串参数将会自动注入成user对象
		 public String saveUser(sys_User user){
			PermManageService.saveUser(user);
			return "ok";
		}
	
		 @RequestMapping("/delUser")
		 @ResponseBody                     //前台传来的id,name,state等四个字符串参数将会自动注入成user对象
		 public String delUser(sys_User user){
			PermManageService.delUser(user);
			return "ok";
		}
		 
	 
		 @RequestMapping("/findRole")
		 @ResponseBody                     //前台传来的id,name,state等四个字符串参数将会自动注入成user对象
		 public List<Map> findRole(String name){
			 List<Map> roleList=PermManageService.findRole(name);
				return roleList;
		}
	
		 
		 @RequestMapping("/saveRole")
		 @ResponseBody                    
		 public String saveRole(Integer id,String name,int leval){
			 Map map=new HashMap();
			 map.put("id", id);
			 map.put("name", name);
			 map.put("leval", leval);
			PermManageService.saveRole(map);
			return "ok";
		}
	
		 @RequestMapping("/delRole")
		 @ResponseBody                     //前台传来的id,name,state等四个字符串参数将会自动注入成user对象
		 public String delRole(Integer id){
			PermManageService.delRole(id);
			return "ok";
		}	
		 
		 
		 @RequestMapping("/findRoleConn")
		 @ResponseBody
		 public List<Map> findRoleConn(String uName,String rName){
			List<Map> list=PermManageService.findRoleConn(uName, rName);
			return list;
		}
	
		 @RequestMapping("/saveRoleConn")
		 @ResponseBody                    
		 public String saveRoleConn(Integer user_id,Integer rName,Integer id){
			 Map map=new HashMap();
			 map.put("user_id", user_id);
			 map.put("role_id", rName);
			 map.put("id", id);
			PermManageService.saveRoleConn(map);
			return "ok";
		}
		 @RequestMapping("/delRoleConn")
		 @ResponseBody                     //前台传来的id,name,state等四个字符串参数将会自动注入成user对象
		 public String delRoleConn(Integer id){
			PermManageService.delRoleConn(id);
			return "ok";
		}
		 
		 
		 
		 
		 
	/*******  测试   ********/	
 @RequestMapping("/test1")
 @ResponseBody
	public ModelAndView test(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {
	    if(PermManageService!=null){
		  System.out.println("获得PermManageService");
		  ModelAndView mv=new ModelAndView();
			mv.addObject("message","success!!!");
			mv.setViewName("index");
			return mv;
	    }else{
		  System.out.print("service为空");
		  return null;
	    }
	}
 /*******************/	
}
