package com.Service.ServiceImpl;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.User;
import com.Dao.Mapper;
import com.Service.service;

@Service("service")   //����ͨ��ע������bean,����������xml��������,����������һ����Ϊservice��bean
public class serviceImpl implements service{
	
	//@Resource   //�����ע��Ҳ�ܽ�mapperע�������@Resourceע�����ṩ������ƥ��ġ�bean name��bean���֣�����Spring�������ᱻע�루ӳ��mapper�Ƚ����⣬���Ʋ�Ӱ�죩��
	@Autowired
	private Mapper mapper;
	
	public User getUser(Integer id) {
		if(mapper!=null){
			System.out.println("���mapper");
		}
		User user=mapper.getUser(id);
		return user;
	}

	public void addUser(String name, String pass, Integer state) {
		if(name==null||pass==null){
			System.out.println("�û� Ϊ�գ�");
		}else{
			mapper.addUser(name, pass, state);
			System.out.println("��ӳɹ�");
		}
		
	}

}
