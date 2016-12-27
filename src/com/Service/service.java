package com.Service;

import com.entity.User;

public interface service {
  public User getUser(Integer id);
  public void addUser(String name,String pass,Integer state);
}
