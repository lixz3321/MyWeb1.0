package com.Controller.ControllerImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.Service.LoginService;
import com.entity.User;
import com.entity.sys_User;

import net.sf.ezmorph.Morpher;
import net.sf.ezmorph.MorpherRegistry;
import net.sf.ezmorph.bean.BeanMorpher;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.util.JSONUtils;

@Controller
@RequestMapping("/Login")
/**
 * @author lixz
 *
 */
public class login {
	 @Resource
	 LoginService LoginService;
	 
	 //登陆
	 @RequestMapping("/login")
	 @ResponseBody
	 public Map<String,Object> login(String name,String pass,HttpSession session) throws Exception{
		 System.out.println("controller    name:"+name+"  pass:"+pass);
		 Map<String,Object> map=LoginService.validate(name,pass,session);
	return map;	 
 }
	 
	 //退出登陆
	 @RequestMapping("/exit")
	 @ResponseBody
 public sys_User exit(HttpSession session) throws Exception{
		 //退出前，用户回显到登陆页
		 sys_User user=(sys_User) session.getAttribute("user");
		 //清空会话
		 session.removeAttribute("user");
		 session.removeAttribute("crrent_iframe_url");
		 return user;
 }
	 /*********测试部分*********/
	 @RequestMapping("/login3")
	 @ResponseBody
 public JSONObject login3(String name,String pass,HttpSession session) throws Exception{
		
		 System.out.println("controller    name:"+name+"  pass:"+pass);
		 
		 Map<String,Object> map=LoginService.validate(name, pass,session);
		 
		 List list=new ArrayList();
		  list.add(1);
		 Map<String,Object> map1=new HashMap<String,Object>();
		 if(name.equals("lxz")&&pass.equals("123")){
			 map1.put("sys_name", name);
			 map1.put("role", "1");
			 map1.put("state", "1");
			 map1.put("list",list);
		 }else{
			 map1.put("sys_name", name);
			 map1.put("role", "1");
			 map1.put("state", "0");
			 map1.put("list",list);
		 }
		 //如果要将java对象转换成json数据，首先引入这五个jar包：
//		 jakarta commons-lang 2.5
//		 jakarta commons-beanutils 1.8.0
//		 jakarta commons-collections 3.2.1
//		 jakarta commons-logging 1.1.1
//		 ezmorph 1.0.6
		 //转换成json
		 JSONObject json=JSONObject.fromObject(map1);
		 String jsonStr=json.toString();
		 //但以上方式只能转换json，不能向前台传json，也就是控制器返回类型还不能为json，所以还得用以下jar包：
//		 jackson-core-2.4.1.jar
//       jackson-annotations-2.4.1.jar
//       jackson-databind-2.4.1.jar
		 return json;
		 //return jsonStr;
 }	 
	 
	 @RequestMapping("/test4")
	 @ResponseBody
	 public User test4(){
		 User user=new User();
		 user.setName("test4");
		 return user;
	 }
}
