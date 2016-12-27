package com.Controller.ControllerImpl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;  //֧��RequestMappingע��
import org.springframework.web.bind.annotation.ResponseBody;   //֧��ResponesBodyע��
import org.springframework.web.servlet.ModelAndView;

import com.Service.service;
import com.entity.User;
import com.entity.sys_User;

@Controller
@RequestMapping("/Controller")
public class controller{
	@Resource
	service service;   //ע��service ����bean����ƥ�䣩

 @RequestMapping("/test1")
 @ResponseBody
	public ModelAndView test(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {
	    if(service!=null){
		  System.out.println("���service");
	    }else{
		  System.out.print("serviceΪ��");
		  return null;
	    }
	    
	    User user=service.getUser(7);//idΪ2��Ϊ��
	    String name=user.getName();
	    
	     if(user==null){
	  	   System.out.print("userΪ�գ�");
	  	 return null;
	     }
	     else{
	  	   System.out.print(user.getName()); 
	     }
	     
	     ModelAndView mv=new ModelAndView();
			mv.addObject("message",name);
			mv.setViewName("login");
		return mv;
	}
 @RequestMapping("/formTest")
 @ResponseBody
 public ModelAndView formTest(String id,String name,String age) throws Exception {
	 System.out.print("name:"+name);
	return null;
 }
 
 @RequestMapping("/addSysUser")
 @ResponseBody
 public ModelAndView addUser(sys_User sys_User) throws Exception {
	 System.out.print("cotroller name:"+sys_User.getName());
	 service.addUser(sys_User.getName(),sys_User.getPassword(), sys_User.getState());
	return null;
 }
}
