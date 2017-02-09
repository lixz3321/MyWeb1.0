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

@Controller
@RequestMapping("SysManage")
public class SysManage {
	
   @Resource(name="SysManageService")
   SysManageService SysManageService;
   
//电厂树
@RequestMapping("/findTree")
@ResponseBody
public List<Map> findTree(){
	List<Map> tree=SysManageService.findTree();
	return tree;
  }
//电厂机组树
@RequestMapping("/findUnitTree")
@ResponseBody
public List<Map> findUnitTree(){
	List<Map> tree=SysManageService.findUnitTree();
	return tree;
  }

@RequestMapping("/findJtDcJz")
@ResponseBody
public List<Map> findJtDcJz(String name,Integer id,Integer type,Integer pid){
	List<Map> list=SysManageService.findJtDcJz(name, id, type, pid);
	return list;
}
   

@RequestMapping("/saveJtDcJz")
@ResponseBody
public void saveJtDcJz(String name,Integer id,Integer type,Integer pid,String code){
	SysManageService.saveJtDcJz(name, id, type, pid, code);
}

@RequestMapping("/delJtDcJz")
@ResponseBody
public void delJtDcJz(Integer id, String type) {
	// TODO Auto-generated method stub
	SysManageService.delJtDcJz(id, type);
}

@RequestMapping("/findIndex")
@ResponseBody
public List<Map> findIndex(String name){
	List<Map> result=SysManageService.findIndex(name);
	return result;
 }

}
