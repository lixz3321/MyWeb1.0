package com.Dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.entity.User;

public interface Mapper {
	/*******  ≤‚ ‘   ********/	
	public List<User> getAllUser();
	/*********************/	
	public User getUser(@Param("id") Integer id);
	public void addUser(@Param("name") String name,@Param("pass") String pass,@Param("state") Integer state);
	
}
