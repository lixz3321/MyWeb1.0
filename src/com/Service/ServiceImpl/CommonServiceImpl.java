package com.Service.ServiceImpl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.CommonMapper;
import com.Service.CommonService;
import com.util.TreeUtil;
@Service("CommonServiceImpl")
public class CommonServiceImpl implements CommonService {

	@Autowired
	CommonMapper commonMapper;
	public List<Map> findJzTree() {
		// TODO Auto-generated method stub
		List<Map> all=commonMapper.findAllJtDcJz();
		return TreeUtil.findTree(all);
	}
	
	public List<Map> findJtDcTree() {
		// TODO Auto-generated method stub
		List<Map> all=commonMapper.findAllJtDc();
		return TreeUtil.findTree(all);
	}
	
	public List<Map> getTags(Integer type,String job_code){
		return commonMapper.getTags(type,job_code);
	}

}
