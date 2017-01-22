package com.Service.ServiceImpl;

import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
//有时jar包有这些类库，但找不到，可能等一会就识别了
import org.springframework.stereotype.Service;//这些注解类放在org.springframework.contextjar包下
import com.entity.User;
import com.Dao.Mapper;
import com.Service.service;

@Service("service")   //这是通过注解配置bean,这样不用在xml中配置了,本例在容器里配置了一个名为service的bean
public class serviceImpl implements service{
	
	//@Resource   //用这个注解也能将mapper注入过来，@Resource注解所提供名字相匹配的“bean name（bean名字）”的Spring管理对象会被注入（映射mapper比较特殊，名称不影响）。
	@Autowired
	private Mapper mapper;
	
	/******  测试   ******/
	public void Test() {
		// TODO Auto-generated method stub
		if(mapper!=null){
			System.out.println("获得sysManagerMapper");
		}else{
			System.out.println("未获得sysManagerMapper");
		}
	}
	/******************/
}
