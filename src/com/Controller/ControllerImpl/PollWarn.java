package com.Controller.ControllerImpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.Service.PollWarnService;

/**
 * @author lixz
 *
 */
@Controller
@RequestMapping("/PollWarn")
public class PollWarn {
	
	@Resource(name="PollWarnServiceImpl")
	PollWarnService pollWarnServiceImpl;
	
	@RequestMapping("/getChartData")
	@ResponseBody
   public List<Map> getChartData(Integer index_id){
	return pollWarnServiceImpl.getChartData(index_id);
   }
	
	
	@RequestMapping("/getGrid")
	@ResponseBody
   public List<Map> getGrid(Integer jt_id,Integer dc_id,Integer jz_id){
	return pollWarnServiceImpl.getGrid(jt_id,dc_id,jz_id);
   }
}
