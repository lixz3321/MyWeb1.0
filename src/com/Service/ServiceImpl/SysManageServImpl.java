package com.Service.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.SysManageMapper;
import com.Service.SysManageService;

@Service("SysManageService")
public class SysManageServImpl implements SysManageService {
  @Autowired
  SysManageMapper sysManageMapper;
  
/******  测试   ******/
public void Test() {
	// TODO Auto-generated method stub
	if(sysManageMapper!=null){
		System.out.println("获得sysManageMapper");
	}else{
		System.out.println("未获得sysManageMapper");
	}
}
/*****************/  
  
  
  
}
