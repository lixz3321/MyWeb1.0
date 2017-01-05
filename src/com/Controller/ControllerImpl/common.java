package com.Controller.ControllerImpl;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/Common")
public class common {
	
  @RequestMapping("/addUrl2Session")
  @ResponseBody
  public void addUrl2Session(String crrent_iframe_url,HttpSession session){
	  session.setAttribute("crrent_iframe_url",crrent_iframe_url);
	  System.out.println("controller--common--Iframe_url2session: url=="+crrent_iframe_url);
  }
}
