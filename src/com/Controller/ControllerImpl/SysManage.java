package com.Controller.ControllerImpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.ListModel;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.Service.SysManageService;
import com.entity.Tage;
import com.entity.Unit;

@Controller
@RequestMapping("SysManage")
/**
 * @author lixz
 *
 */
public class SysManage {
	
   @Resource(name="SysManageService")
   SysManageService SysManageService;


@RequestMapping("/findJtDc")
@ResponseBody
public List<Map> findJtDc(String name,Integer id,Integer type,Integer pid){
	List<Map> list=SysManageService.findJtDc(name, id, type, pid);
	return list;
}

@RequestMapping("/findUnits")
@ResponseBody
public List<Map> findUnits(Integer pid){
	List<Map> list=SysManageService.findUnits(pid);
	return list;
}

@RequestMapping("/findIndex")
@ResponseBody
public List<Map> findIndex(String name){
	List<Map> result=SysManageService.findIndex(name);
	return result;
 }

@RequestMapping("/findTags")
@ResponseBody
public List<Map> findTags(String name,Integer unit_id,Integer group_id,Integer type){
	List<Map> result=SysManageService.findTags(name, unit_id,group_id,type);
	return result;
 }

@RequestMapping("/saveJtDc")
@ResponseBody
public void saveJtDc(String name,Integer id,Integer type,Integer pid,String code,String propertise,String tel,String address,String postcode,
		Integer unit_count,Integer sum_valume,String note){
	SysManageService.saveJtDc(name, id, type, pid, code,propertise,tel,address,postcode,unit_count,sum_valume,note);
}
@RequestMapping("/saveIndex")
@ResponseBody
public void saveIndex(Integer id,String name,String code,String unit,String note){
	SysManageService.saveIndex(id,name,code,unit,note);
}

@RequestMapping("/saveUnit")
@ResponseBody
public void saveUnit(Unit unit){
	SysManageService.saveUnit(unit);
}

@RequestMapping("/saveTage")
@ResponseBody
public void saveTage(Tage tage){
	SysManageService.saveTage(tage);
}

@RequestMapping("/delJtDc")
@ResponseBody
public void delJtDc(Integer id, String type) {
	// TODO Auto-generated method stub
	SysManageService.delJtDc(id, type);
}

@RequestMapping("/delUnit")
@ResponseBody
public void delUnit(Integer id) {
	// TODO Auto-generated method stub
	SysManageService.delUnit(id);
}

@RequestMapping("/delIndex")
@ResponseBody
public void delIndex(Integer id, String type) {
	// TODO Auto-generated method stub
	SysManageService.delIndex(id);
}

@RequestMapping("/delTag")
@ResponseBody
public void delTag(Tage tage) {
	// TODO Auto-generated method stub
	SysManageService.delTag(tage);
}


}
