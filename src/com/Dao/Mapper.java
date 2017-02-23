package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.entity.User;

public interface Mapper {
	/*******  ����   ********/	
	public List<User> getAllUser();
	/*********************/	
	public User getUser(@Param("id") Integer id);
	public User getUser();
	public void addUser(@Param("name") String name,@Param("pass") String pass,@Param("state") Integer state);
	
	//�糧����������all 
	public List<Map> findAllJtDc();
	public List<Map> findAllJtDcJz();
	
}
