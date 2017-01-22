package com.Controller.ControllerImpl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
   
	/*******  ²âÊÔ   ********/	
@RequestMapping("/test")
@ResponseBody
	public ModelAndView test(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {
	    if(SysManageService!=null){
		  System.out.println("»ñµÃsysManagerServiceImpl");
		  SysManageService.Test();
		  ModelAndView mv=new ModelAndView();
			mv.addObject("message","success!!!");
			mv.setViewName("test");
			return mv;
	    }else{
		  System.out.print("sysManagerServiceImplÎª¿Õ");
		  return null;
	    }
	}
/*******************/	
   
}
