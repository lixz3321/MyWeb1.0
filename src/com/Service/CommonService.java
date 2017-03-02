package com.Service;

import java.util.List;
import java.util.Map;

public interface CommonService {
	public List<Map> findJzTree();
	public List<Map> findJtDcTree();
	//调度用 获取测点数据
	public List<Map> getTags(Integer type,String job_code);
}
