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
	
	/*******  ����   ********/	
 @RequestMapping("/test")
 @ResponseBody
	public ModelAndView test(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {
	    if(service!=null){
		  System.out.println("���service");
		  ModelAndView mv=new ModelAndView();
			mv.addObject("message","success!!!");
			mv.setViewName("index");
			return mv;
	    }else{
		  System.out.print("serviceΪ��");
		  return null;
	    }
	}
 /*******************/	
 
 
}
