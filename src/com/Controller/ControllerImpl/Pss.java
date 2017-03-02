package com.Controller.ControllerImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Service.PssService;

@Controller
@RequestMapping("/Pss")
public class Pss {
   
	@Resource(name="PssServiceImpl")
	PssService pssService;
	
	@RequestMapping("/findJtOrJz")
	@ResponseBody
	public List<Map> findJtOrJz(Integer id,Integer type){
		List<Map> list=pssService.findJtOrJz(id, type);
//		for(Map map:list){
//			System.out.print(map.get("name"));
//		}
		return list;
	}
	
	@RequestMapping("/getPssData")
	@ResponseBody
	public Map getPssData(Integer page,Integer rows,Integer unit_id,String startTime,String endTime,Integer bwzt,Integer psst,Integer lctr){
		List<Map> list=pssService.getPssData(page,rows,unit_id, startTime, endTime, bwzt, psst, lctr);
		Map map=new HashMap();
		map.put("total", 100);
		map.put("rows", list);
		map.put("page", 15);
		return map;
	}
}
