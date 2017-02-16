package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface SysManageMapper {
	
	public List<Map> findJtDc();
	public List<Map> findJtDcJz();
	public List<Map> findIndex(@Param("name") String name);
	public List<Map> findJtDcJz(@Param("name") String name,@Param("id") Integer id,@Param("type") Integer type,@Param("pid") Integer pid);
    public List<Map> findJtDc(@Param("name") String name,@Param("id") Integer id,@Param("type") Integer type,@Param("pid") Integer pid);
    public void  saveJtDcJz(@Param("name") String name,@Param("id") Integer id,@Param("type") Integer type,@Param("pid") Integer pid,@Param("code") String code);
    public void delJtDcJz(@Param("id") Integer id,@Param("type") String type);
	public void saveIndex(@Param("id") Integer id,@Param("name") String name, @Param("code") String code);
	public void delIndex(@Param("id") Integer id);
}
