package com.entity;

import java.util.Date;

/**
 * 中间表对象，包含了测点的一部分属性，及指标、电厂、机组的id,主要用于测点配置页面的增删改
 * @author lxz
 *
 */
public class Tage {
  Integer id;
  Integer jz_id;
  Integer dc_id;
  Integer tiu_id;
  Integer index_id;
  Integer type;
  Integer minval;
  Integer maxval;
  String name;
  String code;
  String note;
  String unit;
//  Date createtime;
  
  
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public Integer getJz_id() {
	return jz_id;
}
public void setJz_id(Integer jz_id) {
	this.jz_id = jz_id;
}
public Integer getDc_id() {
	return dc_id;
}
public void setDc_id(Integer dc_id) {
	this.dc_id = dc_id;
}
public Integer getTiu_id() {
	return tiu_id;
}
public void setTiu_id(Integer tiu_id) {
	this.tiu_id = tiu_id;
}
public Integer getType() {
	return type;
}
public void setType(Integer type) {
	this.type = type;
}
public Integer getMinval() {
	return minval;
}
public void setMinval(Integer minval) {
	this.minval = minval;
}
public Integer getMaxval() {
	return maxval;
}
public void setMaxval(Integer maxval) {
	this.maxval = maxval;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getCode() {
	return code;
}
public void setCode(String code) {
	this.code = code;
}
public String getUnit() {
	return unit;
}
public void setUnit(String unit) {
	this.unit = unit;
}
public Integer getIndex_id() {
	return index_id;
}
public void setIndex_id(Integer index_id) {
	this.index_id = index_id;
}
public String getNote() {
	return note;
}
public void setNote(String note) {
	this.note = note;
}
//public Date getCreatetime() {
//	return createtime;
//}
//public void setCreatetime(Date createtime) {
//	this.createtime = createtime;
//}
  
  
}
