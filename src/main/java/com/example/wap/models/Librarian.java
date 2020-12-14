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
  private int librarianId;

  @Column(name = "name")
  private String name;

  @Column(name = "salary")
  private int salary;

  @OneToMany(mappedBy = "lid")
  List<LibrarianSchedule> librarianSchedules;

  public int getLibrarianId() {
    return librarianId;
  }

  public void setLibrarianId(int librarianId) {
    this.librarianId = librarianId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getSalary() {
    return salary;
  }

  public void setSalary(int salary) {
    this.salary = salary;
  }

  public List<LibrarianSchedule> getLibrarianSchedules() {
    return librarianSchedules;
  }

  public void setLibrarianSchedules(
      List<LibrarianSchedule> librarianSchedules) {
    this.librarianSchedules = librarianSchedules;
  }
}
