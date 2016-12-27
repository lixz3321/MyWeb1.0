package com.Service.ServiceImpl;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.User;
import com.Dao.Mapper;
import com.Service.service;

@Service("service")   //这是通过注解配置bean,这样不用在xml中配置了,本例配置了一个名为service的bean
public class serviceImpl implements service{
	
	//@Resource   //用这个注解也能将mapper注入过来，@Resource注解所提供名字相匹配的“bean name（bean名字）”的Spring管理对象会被注入（映射mapper比较特殊，名称不影响）。
	@Autowired
	private Mapper mapper;
	
	public User getUser(Integer id) {
		if(mapper!=null){
			System.out.println("获得mapper");
		}
		User user=mapper.getUser(id);
		return user;
	}

	public void addUser(String name, String pass, Integer state) {
		if(name==null||pass==null){
			System.out.println("用户 为空！");
		}else{
			mapper.addUser(name, pass, state);
			System.out.println("添加成功");
		}
		
	}

}
