package com.example.wap.daos;

import com.example.wap.models.Schedule;
import com.example.wap.repositories.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleDao {

  @Autowired
  ScheduleRepository scheduleRepository;

  @GetMapping("/findAllBooks")
  public Iterable<Schedule> findAllSchedules() {
    return scheduleRepository.findAll();
  }
}
