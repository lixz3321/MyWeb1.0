package com.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.Mapper;
import com.Dao.SysManageMapper;
import com.Service.SysManageService;
import com.entity.Tage;
import com.entity.Unit;
import com.util.DateUtil;
import com.util.TreeUtil;

@Service("SysManageService")
public class SysManageServImpl implements SysManageService {
  @Autowired
  SysManageMapper sysManageMapper; 
  @Autowired
  Mapper mapper; 

   
//查找电厂
public List<Map> findJtDc(String name, Integer id, Integer type,Integer pid) {
	List<Map> list=sysManageMapper.findJtDc(name, id, type,pid);
	return list;
}

//查找机组
public List<Map> findUnits(Integer pid) {
	// TODO Auto-generated method stub
	List<Map> units=sysManageMapper.findUnits(pid);
	
	return units;
}

public List<Map> findIndex(String name) {
	// TODO Auto-generated method stub
	List<Map> result=sysManageMapper.findIndex(name);
	for(Map map:result){
		String time=DateUtil.formatDateYMD((Date)map.get("date"));
		map.put("date",time);
	}
	return result;
}


public List<Map> findTags(String name, Integer unit_id, Integer group_id,Integer type) {
	// TODO Auto-generated method stub
	List<Map> tags=sysManageMapper.findTags(name,unit_id,group_id,type);
	for(Map map:tags){
		String time=DateUtil.formatDateYMD((Date)map.get("createtime"));
		map.put("createtime",time);
	}
	return tags;
}

public void saveJtDc(String name, Integer id, Integer type, Integer pid,
		String code, String propertise, String tel, String address,
		String postcode, Integer unit_count, Integer sum_valume, String note) {
	sysManageMapper.saveJtDc(name, id, type, pid, code, propertise, tel, address, postcode, unit_count, sum_valume, note);
	
}

public void saveUnit(Unit unit) {
	// TODO Auto-generated method stub
	Date date=new Date();
	long m=date.getTime();
	String dateStr=DateUtil.valueOfYMD(m);
	unit.setPutdate(dateStr);
	sysManageMapper.saveUnit(unit);
}

public void saveIndex(Integer id,String name,String code,String unit,String note) {
	// TODO Auto-generated method stub
	sysManageMapper.saveIndex(id,name,code,unit,note);
}

public void saveTage(Tage tage) {
	// TODO Auto-generated method stub
	sysManageMapper.saveTage(tage);
}

public void delUnit(Integer id) {
	// TODO Auto-generated method stub
	sysManageMapper.delUnit(id);
}

public void delIndex(Integer id) {
	// TODO Auto-generated method stub
	sysManageMapper.delIndex(id);
}

public void delJtDc(Integer id, String type) {
	// TODO Auto-generated method stub
	sysManageMapper.delJtDc(id, type);
}

public void delTag(Tage tage) {
	// TODO Auto-generated method stub
	sysManageMapper.delTag(tage);
}


}
