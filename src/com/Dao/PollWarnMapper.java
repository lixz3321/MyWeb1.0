package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface PollWarnMapper {
	public List<Map> getChartData(Integer index_id);
	public List<Map> getGrid(@Param("jt_id")Integer jt_id, @Param("dc_id")Integer dc_id, @Param("jz_id")Integer jz_id);
}
