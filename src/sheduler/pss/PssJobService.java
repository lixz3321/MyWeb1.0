package sheduler.pss;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.CommonMapper;
import com.Dao.PssMapper;
import com.Service.ServiceImpl.CommonServiceImpl;

@Service("PssJobService")
public class PssJobService {
 
	
  @Resource
  CommonServiceImpl commonServiceImpl;
//  @Autowired
//  CommonMapper commonMapper;
  
  public void doJob(){
//	 List<Map> datas = commonMapper.getTags(3, "pss");
	  List<Map> datas =commonServiceImpl.getTags(3,"pss");
	  
	 createValue(datas);
  }
  public void createValue(List<Map> datas){
	  Map resultData=new HashMap();
	  double minval=0,maxval=0;
	  for(Map data:datas){
		  minval=(Double) data.get("minval");
		  maxval=(Double) data.get("maxval");
		  for(int i=0;i<6;i++){
			  double temp=Math.floor(Math.random()*10);
			  System.out.println(temp);
		  }
		  
		  
	  }
  }
}
