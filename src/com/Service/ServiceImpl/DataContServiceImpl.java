package com.Service.ServiceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.DataContMapper;
import com.Service.DataContService;
@Service("DataContServiceImpl")
public class DataContServiceImpl implements DataContService {

	@Autowired
	DataContMapper dataContMapper;
	
	public List<Map> getChartData(Integer jt_id) {
		// TODO Auto-generated method stub
		return dataContMapper.getChartData(jt_id);
	}

}
