package com.Test;


import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.entity.User;
import com.Service.service;

public class MyTest {

//	@Resource(name="service")   //�Զ���serviceע�����
//	static service service;
	
	public static void main(String agrs[]){
		ApplicationContext context=new ClassPathXmlApplicationContext("resource/spring-mybatis.xml");
		service service=(com.Service.service) context.getBean("service");	
		
       User user=service.getUser(7);//idΪ2��Ϊ��
       if(user==null){
    	   System.out.print("userΪ�գ�");
       }
       else{
    	   System.out.print(user.getName()); 
       }
	}
}
