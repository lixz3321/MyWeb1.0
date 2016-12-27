package com.Service;

import java.util.Map;

import javax.servlet.http.HttpSession;

public interface LoginService {
  public Map<String,Object> validate(String name,String pass,HttpSession session); 
}
