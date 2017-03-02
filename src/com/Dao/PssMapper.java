package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface PssMapper {
  public List<Map> findJtOrJz(@Param("id")Integer id,@Param("type")Integer type);
  public List<Map> getPssData(@Param("page")Integer page,@Param("rows")Integer rows,@Param("unit_id")Integer unit_id,@Param("startTime")String startTime,@Param("endTime")String endTime,@Param("bwzt")Integer bwzt,@Param("psst")Integer psst,@Param("lctr")Integer lctr);
}
