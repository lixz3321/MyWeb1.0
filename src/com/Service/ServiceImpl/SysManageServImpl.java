package com.Service.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.SysManageMapper;
import com.Service.SysManageService;

@Service("SysManageService")
public class SysManageServImpl implements SysManageService {
  @Autowired
  SysManageMapper sysManageMapper;
  
/******  ����   ******/
public void Test() {
	// TODO Auto-generated method stub
	if(sysManageMapper!=null){
		System.out.println("���sysManageMapper");
	}else{
		System.out.println("δ���sysManageMapper");
	}
}
/*****************/  
  
  
  
}
