package com.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author lxz
 *
 */
public class DateUtil {
	
	
	//����long��string�͵ĺ�������ת��Ϊ��ʽ�����ʱ���ַ���
	public static String  valueOfHMS(String dateStr){
		long dateNumb=Long.parseLong(dateStr);
		Date date=new Date(dateNumb);
		return formatDateHMS(date);
	}
	public static String  valueOfHMS(long dateLong){
		Date date=new Date(dateLong);
		return formatDateHMS(date);
	}
	
	public static String  valueOfYMD(String dateStr){
		long dateNumb=Long.parseLong(dateStr);
		Date date=new Date(dateNumb);
		return formatDateYMD(date);
	}
	public static String  valueOfYMD(long dateLong){
		Date date=new Date(dateLong);
		return formatDateYMD(date);
	}
	
	/**
	 * @param date 
	 * @return String ��ʽ����ʱ�� ��ȷ��ʱ����
	 */
	public static String formatDateHMS(Date date){
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String time = format.format(date);
		return time;
	}
	
	/**
	 * @param date 
	 * @return String ��ʽ����ʱ�� ��ȷ��������
	 */
	public static String formatDateYMD(Date date){
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String time = format.format(date);
		return time;
	}
	
	public static void main(String[] args) {

		DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String s = format1.format(new Date());
        System.out.println(s);
	}

}
