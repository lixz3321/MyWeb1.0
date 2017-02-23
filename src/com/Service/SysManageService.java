package com.Service;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.entity.Unit;

public interface SysManageService {
	public List<Map> findIndex(String name);
	public List<Map> findJtDc(String name,Integer id,Integer type,Integer pid);
	public List<Map> findUnits(Integer pid);
	public List<Map> findTags(String name,Integer unit_id,Integer group_id,Integer type);
	public void saveJtDc(String name,Integer id,Integer type,Integer pid,String code,String propertise,String tel,String address,String postcode,
			Integer unit_count,Integer sun_valume,String note);
	public void saveUnit(Unit unit);
	public void delJtDc(Integer id,String type);
	public void delUnit(Integer id);
	public void saveIndex(Integer id,String name,String code,String unit,String note);
	public void delIndex(Integer id);
	
}
