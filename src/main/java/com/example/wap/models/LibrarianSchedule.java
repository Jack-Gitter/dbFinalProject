package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "librarians_schedules")
@IdClass(LibrarianScheduleId.class)
public class LibrarianSchedule {

  @Id
  @Column(name = "lid")
  private int lid;

  @Id
  @Column(name = "sid")
  private int sid;

  @ManyToOne
  @JsonIgnore
  @PrimaryKeyJoinColumn(name = "lid", referencedColumnName = "librarian")
  private Librarian librarian;

  @Id
  @ManyToOne
  @JsonIgnore
  @PrimaryKeyJoinColumn(name = "sid", referencedColumnName = "schedule")
  private Schedule schedule;

  public int getLibrarianId() {
    return lid;
  }

  public void setLibrarianId(int librarianId) {
    this.lid = librarianId;
  }

  public int getScheduleId() {
    return sid;
  }

  public void setScheduleId(int scheduleId) {
    this.sid = scheduleId;
  }

  public Librarian getLibrarian() {
    return librarian;
  }

  public void setLibrarian(Librarian librarian) {
    this.librarian = librarian;
  }

  public Schedule getSchedule() {
    return schedule;
  }

  public void setSchedule(Schedule schedule) {
    this.schedule = schedule;
  }
}
