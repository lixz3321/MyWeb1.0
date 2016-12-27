package com.Dao;

import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.entity.sys_User;

public interface LoginMapper {
 public sys_User getUser(@Param(value = "name") String name,@Param("pass") String pass);
 public Map<String,Object> getRole(@Param("user_id") Integer user_id);
}
