package com.example.wap.daos;

import com.example.wap.models.Schedule;
import com.example.wap.repositories.ScheduleRepository;
import java.sql.Date;
import java.sql.Time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScheduleDao {

  @Autowired
  ScheduleRepository scheduleRepository;

  @GetMapping("/findAllSchedules")
  public Iterable<Schedule> findAllSchedules() {
    return scheduleRepository.findAll();
  }

  @GetMapping("/findScheduleById/{id}")
  public Schedule findScheduleById(@PathVariable(name = "id") int id) {
    return scheduleRepository.findById(id).get();
  }

  @GetMapping("/deleteSchedule/{id}")
  public void deleteScheduleById(@PathVariable(name = "id") int id) {
    scheduleRepository.deleteById(id);
  }

  @GetMapping("/addSchedule")
  public Schedule addScheduleWithId() {
    Schedule s = new Schedule();
    return scheduleRepository.save(s);
  }

  @GetMapping("/setSchedule/{id}/Year/{year}/Month/{month}/Day/{day}")
  public Schedule setScheduleDay(@PathVariable(name = "id") int id, @PathVariable(name = "year") int year,
      @PathVariable(name = "month") int month, @PathVariable(name = "day") int day) {
      Schedule s = scheduleRepository.findById(id).get();
      year -= 1900;

      Date d = new Date(year, month-1, day);
      s.setDay(d);
      return scheduleRepository.save(s);
  }

  @GetMapping("setSchedule/{id}/StartHour/{hour}")
  public Schedule setScheduleStartTime(@PathVariable(name = "id") int id,
      @PathVariable(name = "hour") int hour) {
    Schedule s = scheduleRepository.findById(id).get();
    Time t = Time.valueOf(""+hour+":00:00");
    s.setStartHour(t);
    return scheduleRepository.save(s);
  }

  @GetMapping("setSchedule/{id}/EndHour/{hour}")
  public Schedule setScheduleEndTime(@PathVariable(name = "id") int id,
      @PathVariable(name = "hour") int hour) {
    Schedule s = scheduleRepository.findById(id).get();
    Time t = Time.valueOf(""+hour+":00:00");
    s.setEndHour(t);
    return scheduleRepository.save(s);
  }



  //create update field mappings

}
