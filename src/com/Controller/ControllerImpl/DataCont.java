package com.Controller.ControllerImpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Service.DataContService;

/**
 * @author lxz
 *
 */
@Controller
@RequestMapping("/DataCont")
public class DataCont {
	
	@Resource(name="DataContServiceImpl")
	DataContService dataContService;
	
	@RequestMapping("/getChartData")
	@ResponseBody
	public List<Map> getChartData(Integer jt_id){
		return dataContService.getChartData(jt_id);
	}

}
