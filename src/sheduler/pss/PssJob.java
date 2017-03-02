package sheduler.pss;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.Service.ServiceImpl.SysManageServImpl;

public class PssJob {
	
  public static void main(String args[]){
//	  for(int i=0;i<6;i++){
//		  double temp=Math.floor(Math.random()*10);
//		  if(temp>5){
//			  temp=5;
//		  }
//		  System.out.println(temp);
//	  }
	  ApplicationContext context=new ClassPathXmlApplicationContext("resource/spring-mvc.xml");
	  PssJobService service=(PssJobService) context.getBean("PssJobService");
//	  service.doJob();
  }
}
