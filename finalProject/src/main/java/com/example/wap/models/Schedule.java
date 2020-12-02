package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Schedule {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int schedule_id;

  @Column(name = "day")
  private Date day;

  @Column(name = "start hour")
  private int startHour;

  @Column(name = "end hour")
  private int endHour;

  @OneToMany(mappedBy = "librarian schedule")
  @JsonIgnore
  private List<Librarian> librarians;
}
