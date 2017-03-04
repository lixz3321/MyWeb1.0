package com.Service;

import java.util.List;
import java.util.Map;

public interface PollWarnService {
	public List<Map> getChartData(Integer index_id);
	public List<Map> getGrid(Integer jt_id,Integer dc_id,Integer jz_id);
}
