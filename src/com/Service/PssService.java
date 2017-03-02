package com.Service;

import java.util.List;
import java.util.Map;

public interface PssService {
  public List<Map> findJtOrJz(Integer id,Integer type);
  public List<Map> getPssData(Integer page,Integer rows,Integer unit_id,String startTime,String endTime,Integer bwzt,Integer psst,Integer lctr);
}
