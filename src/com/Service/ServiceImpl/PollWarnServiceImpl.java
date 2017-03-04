package com.Service.ServiceImpl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.PollWarnMapper;
import com.Service.PollWarnService;
import com.util.DateUtil;
@Service("PollWarnServiceImpl")
public class PollWarnServiceImpl implements PollWarnService {

	@Autowired
	PollWarnMapper pollWarnMapper;
	
	public List<Map> getChartData(Integer index_id) {
		// TODO Auto-generated method stub
		return pollWarnMapper.getChartData(index_id);
	}

	public List<Map> getGrid(Integer jt_id, Integer dc_id, Integer jz_id) {
		// TODO Auto-generated method stub
		List<Map> list=pollWarnMapper.getGrid(jt_id, dc_id, jz_id);
		for(Map map:list){
			String timeStr=DateUtil.formatDateHMS((Date)map.get("time"));
			map.put("time", timeStr);
		}
		return list;
	}

}
