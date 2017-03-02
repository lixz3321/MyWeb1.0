package com.Controller.ControllerImpl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.Service.EquipmentService;

@Controller
@RequestMapping("/Equipment")
public class Equipment {
	
   @Resource(name="EquipmentServiceImpl")
   EquipmentService equipmentService;
	
   @RequestMapping("/uploadFile")
   @ResponseBody
   public ModelAndView uploadFile(MultipartFile file){
	   ModelAndView mv=new ModelAndView();
	   mv.setViewName("equipment");
	   //�ļ��п�
	   if(file==null){
		   mv.addObject("uploadStatus","0");
		   return mv;
	   }
	   //��ȡ�ļ���
	   String o_name=file.getOriginalFilename();
	 //�ٴ��ļ��п�
	   if(o_name==null || o_name.equals("")){
		   mv.addObject("uploadStatus","0");
		   return mv;
	   }
	   //ͨ���ļ����ж��ϴ��ļ�����
	   if(!o_name.substring(o_name.length()-3).equals("xls")){
		   mv.addObject("uploadStatus","-1");
		   return mv; 
	   }
	   try {
		InputStream in=file.getInputStream();
		//�ļ���������ڽ���õ��ϴ��ļ�д�뱾��
		FileOutputStream out=new FileOutputStream("D:\\MyWeb1.0_uploadFile\\"+o_name);
		byte[] b=new byte[1024*1024];
		//�ۼ�ÿ�ζ�ȡ�ֽ���
		int bytesum = 0;   
		//ÿ�ζ�ȡ�ֽ���
        int byteread = 0;  
        //��ȡ�ֽڲ����ļ��������д�뱾��
        while ((byteread=in.read(b))!=-1)   
        {   
           bytesum+=byteread;   
           out.write(b,0,byteread);   
           out.flush();   
        } 
        in.close();
        out.close();
	} catch (IOException e) {
		   System.out.println("io�쳣");
		   mv.addObject("uploadStatus","-1");
		   return mv;
	}
	   mv.addObject("uploadStatus","1");
	return mv;
   }
   
   @RequestMapping("downloadFile") 
   @ResponseBody
   public ResponseEntity<byte[]> download() throws IOException {  
       HttpHeaders headers = new HttpHeaders();  
       headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);  
       headers.setContentDispositionFormData("attachment", "Model.xlsx");
       
       File f=new File("D:\\MyWeb1.0_dowloadFile\\Model.xlsx");
       
       return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(f),  
                                         headers, HttpStatus.CREATED);  
   } 
   //save
   @RequestMapping("save") 
   @ResponseBody
   public void save(Integer unit_id, String glgk, String qjgk, String kzxt,
			String qtsb){  
	   equipmentService.save(unit_id, glgk, qjgk, kzxt, qtsb);
   }
   //get
   @RequestMapping("getEquipmentMsg") 
   @ResponseBody
   public List<Map> getEquipmentMsg(Integer unit_id){  
	   return equipmentService.getEquipmentMsg(unit_id);
   }
}
