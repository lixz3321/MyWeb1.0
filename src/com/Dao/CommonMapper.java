package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface CommonMapper {
	public List<Map> findAllJtDcJz();
	public List<Map> findAllJtDc();
	/**  µ÷¶È  **/
	public List<Map> getTags(@Param("type") Integer type,@Param("job_code") String job_code);
}
