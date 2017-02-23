package com.Controller.ControllerImpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Service.CommonService;
import com.Service.PermManageService;
@Controller
@RequestMapping("/Common")
public class common {
	
	@Resource(name="CommonServiceImpl")
	CommonService commonService;
	
  //ˢ���ض���ˢ��ǰ�Ŀ��url���浽�Ự
  @RequestMapping("/addUrl2Session")
  @ResponseBody
  public void addUrl2Session(String crrent_iframe_url,HttpSession session){
	  session.setAttribute("crrent_iframe_url",crrent_iframe_url);
	  System.out.println("controller--common--Iframe_url2session: url=="+crrent_iframe_url);
  }
  
  //�糧��
  @RequestMapping("/findJtDcTree")
  @ResponseBody
  public List<Map> findJtDcTree(){
	  List<Map> tree=commonService.findJtDcTree();
		return tree;
  }
  
  @RequestMapping("/findJzTree")
  @ResponseBody
  public List<Map> findJzTree(){
	  List<Map> tree=commonService.findJzTree();
		return tree;
  }
}
