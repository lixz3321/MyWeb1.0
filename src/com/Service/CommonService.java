package com.Service;

import java.util.List;
import java.util.Map;

public interface CommonService {
	public List<Map> findJzTree();
	public List<Map> findJtDcTree();
	//������ ��ȡ�������
	public List<Map> getTags(Integer type,String job_code);
}
