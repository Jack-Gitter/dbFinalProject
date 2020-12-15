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

  @GetMapping("/deleteScheduleById/{id}")
  public void deleteScheduleById(@PathVariable(name = "id") int id) {
    scheduleRepository.deleteById(id);
  }

  @GetMapping("/addSchedule")
  public Schedule addScheduleWithId() {
    Schedule s = new Schedule();
    return scheduleRepository.save(s);
  }

  @GetMapping("setSchedule/{id}/Year/{year}")
  public Schedule setScheduleYear(@PathVariable(name = "id") int id, @PathVariable(name = "year") int year) {
    Schedule s = scheduleRepository.findById(id).get();
    Date d = s.getDay();
    d.setYear(year-1900);
    return scheduleRepository.save(s);
  }

  @GetMapping("setSchedule/{id}/Month/{month}")
  public Schedule setScheduleMonth(@PathVariable(name = "id") int id, @PathVariable(name = "month") int month) {
    Schedule s = scheduleRepository.findById(id).get();
    Date d = s.getDay();
    d.setMonth(month-1);
    return scheduleRepository.save(s);
  }

  @GetMapping("setSchedule/{id}/Day/{day}")
  public Schedule setScheduleDay(@PathVariable(name = "id") int id, @PathVariable(name = "day") int day) {
    Schedule s = scheduleRepository.findById(id).get();
    Date d = s.getDay();
    d.setDate(day);
    return scheduleRepository.save(s);
  }




  @GetMapping("setSchedule/{id}/StartHour/{hour}/Minute/{minute}/Second/{second}")
  public Schedule setScheduleTime(@PathVariable(name = "id") int id,
      @PathVariable(name = "hour") int hour, @PathVariable(name = "minute") int minute, @PathVariable(name = "second") int second) {
    Schedule s = scheduleRepository.findById(id).get();
    Time t = Time.valueOf(""+hour+":"+minute+":"+second);
    s.setStartHour(t);
    return scheduleRepository.save(s);
  }

  @GetMapping("setSchedule/{id}/EndHour/{hour}/Minute/{minute}/Second/{second}")
  public Schedule setScheduleEndTime(@PathVariable(name = "id") int id,
      @PathVariable(name = "hour") int hour, @PathVariable(name = "minute") int minute, @PathVariable(name = "second") int second) {
    Schedule s = scheduleRepository.findById(id).get();
    Time t = Time.valueOf(""+hour+":"+minute+":"+second);
    s.setEndHour(t);
    return scheduleRepository.save(s);
  }



  //create update field mappings

}
