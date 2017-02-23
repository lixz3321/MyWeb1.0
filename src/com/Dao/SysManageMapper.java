package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.entity.Unit;

public interface SysManageMapper {
	
	
	public List<Map> findIndex(@Param("name") String name);
	public List<Map> findUnits(@Param("pid")Integer pid);
	public List<Map> findUnits(@Param("name") String name,@Param("id") Integer id,@Param("type") Integer type,@Param("pid") Integer pid);
    public List<Map> findJtDc(@Param("name") String name,@Param("id") Integer id,@Param("type") Integer type,@Param("pid") Integer pid);
    public List<Map> findTags(@Param("name")String name,@Param("unit_id")Integer unit_id,@Param("group_id")Integer group_id,@Param("type")Integer type);
    public void saveJtDc(@Param("name") String name,@Param("id")Integer id,@Param("type")Integer type,@Param("pid")Integer pid,@Param("code")String code,@Param("propertise")String propertise,@Param("tel")String tel,@Param("address")String address,@Param("postcode")String postcode,
    		@Param("unit_count")Integer unit_count,@Param("sum_valume")Integer sum_valume,@Param("note")String note);
    public void saveIndex(@Param("id") Integer id,@Param("name") String name, @Param("code") String code,@Param("unit")String unit,@Param("note") String note);
	public void saveUnit(@Param("unit") Unit unit);
	public void delIndex(@Param("id") Integer id);
	public void delUnit(@Param("id")Integer id);
	public void delJtDc(@Param("id") Integer id,@Param("type") String type);
}
