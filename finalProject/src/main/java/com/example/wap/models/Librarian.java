package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "librarian")
public class Librarian {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int librarian_id;

  @Column(name = "name")
  private String name;

  @Column(name = "salary")
  private int salary;

  @OneToMany(mappedBy = "librarian schedule")
  @JsonIgnore
  private List<Schedule> schedules;

}
