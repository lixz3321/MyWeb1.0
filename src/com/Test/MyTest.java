package com.Test;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.entity.User;
import com.Service.service;
import com.Service.ServiceImpl.SysManageServImpl;

public class MyTest {

//	@Resource(name="service")   //自动将service注入进来
//	static service service;
	
	public static void main(String agrs[]){
		ApplicationContext context=new ClassPathXmlApplicationContext("resource/spring-mybatis.xml");
		SysManageServImpl service=(com.Service.ServiceImpl.SysManageServImpl) context.getBean("SysManageService");	
        
		List<Map> tree=service.findTree();
		System.out.println(tree);
	}
}
