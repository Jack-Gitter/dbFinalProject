package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Time;
import java.sql.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "schedules")
public class Schedule {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int scheduleId;

  @Column(name = "day")
  private Date day;

  @Column(name = "start_hour")
  private Time startHour;

  @Column(name = "end_hour")
  private Time endHour;

  @OneToMany(mappedBy = "sid")
  List<LibrarianSchedule> librarianSchedules;

  public int getScheduleId() {
    return scheduleId;
  }

  public void setScheduleId(int scheduleId) {
    this.scheduleId = scheduleId;
  }

  public Date getDay() {
    return day;
  }

  public void setDay(Date day) {
    this.day = day;
  }

  public Time getStartHour() {
    return startHour;
  }

  public void setStartHour(Time startHour) {
    this.startHour = startHour;
  }

  public Time getEndHour() {
    return endHour;
  }

  public void setEndHour(Time endHour) {
    this.endHour = endHour;
  }

  public List<LibrarianSchedule> getLibrarianSchedules() {
    return librarianSchedules;
  }

  public void setLibrarianSchedules(
      List<LibrarianSchedule> librarianSchedules) {
    this.librarianSchedules = librarianSchedules;
  }
// implement many to many relationship
}
