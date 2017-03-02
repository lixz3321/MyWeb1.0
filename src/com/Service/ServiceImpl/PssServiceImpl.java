package com.Service.ServiceImpl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.PssMapper;
import com.Service.PssService;
import com.util.DateUtil;
@Service("PssServiceImpl")
public class PssServiceImpl implements PssService {

	@Autowired
	PssMapper pssMapper;
	
	public List<Map> findJtOrJz(Integer id,Integer type) {
		// TODO Auto-generated method stub
		List<Map> list=pssMapper.findJtOrJz(id, type);
		return list;
	}

	public List<Map> getPssData(Integer page,Integer rows,Integer unit_id, String startTime,
			String endTime, Integer bwzt, Integer psst, Integer lctr) {
		// TODO Auto-generated method stub
		
		List<Map> list=pssMapper.getPssData(page,rows,unit_id,startTime,endTime,bwzt,psst,lctr);
		for(Map map:list){
			String time=DateUtil.formatDateHMS((Date)map.get("time"));
			map.put("time", time);
		}
		return list;
	}

}
