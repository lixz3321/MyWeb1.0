package com.Service.ServiceImpl;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Dao.EquipmentMapper;
import com.Service.EquipmentService;

@Service("EquipmentServiceImpl")
public class EquipmentServiceImpl implements EquipmentService {
    
	@Autowired
	EquipmentMapper equipmentMapper;
	
	public List<Map> getEquipmentMsg(Integer unit_id) {
		// TODO Auto-generated method stub
		return equipmentMapper.getEquipmentMsg(unit_id);
	}

	public void save(Integer unit_id, String glgk, String qjgk, String kzxt,
			String qtsb) {
		// TODO Auto-generated method stub
		equipmentMapper.save(unit_id, glgk, qjgk, kzxt, qtsb);
	}

}
