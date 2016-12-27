package com.Controller.ControllerImpl;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequestMapping("/Common")
public class common {
	
  @RequestMapping("/addUrl2Session")
  @ResponseBody
  public void addUrl2Session(String url,HttpSession session){
	  session.setAttribute("url",url);
	  System.out.println("controller common: url=="+url);
  }
}
