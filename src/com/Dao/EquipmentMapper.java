package com.Dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface EquipmentMapper {
  public List<Map> getEquipmentMsg(Integer unit_id);
  public void save(@Param("unit_id")Integer unit_id,@Param("glgk")String glgk,@Param("qjgk")String qjgk,@Param("kzxt")String kzxt,@Param("qtsb")String qtsb);
}
