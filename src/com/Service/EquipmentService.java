package com.Service;

import java.util.List;
import java.util.Map;

public interface EquipmentService {
	public List<Map> getEquipmentMsg(Integer unit_id);
	public void save(Integer unit_id,String glgk,String qjgk,String kzxt,String qtsb);
}
