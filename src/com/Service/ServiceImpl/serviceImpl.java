package com.Service.ServiceImpl;

import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
//��ʱjar������Щ��⣬���Ҳ��������ܵ�һ���ʶ����
import org.springframework.stereotype.Service;//��Щע�������org.springframework.contextjar����
import com.entity.User;
import com.Dao.Mapper;
import com.Service.service;

@Service("service")   //����ͨ��ע������bean,����������xml��������,������������������һ����Ϊservice��bean
public class serviceImpl implements service{
	
	//@Resource   //�����ע��Ҳ�ܽ�mapperע�������@Resourceע�����ṩ������ƥ��ġ�bean name��bean���֣�����Spring�������ᱻע�루ӳ��mapper�Ƚ����⣬���Ʋ�Ӱ�죩��
	@Autowired
	private Mapper mapper;
	
	/******  ����   ******/
	public void Test() {
		// TODO Auto-generated method stub
		if(mapper!=null){
			System.out.println("���sysManagerMapper");
		}else{
			System.out.println("δ���sysManagerMapper");
		}
	}
	/******************/
}
