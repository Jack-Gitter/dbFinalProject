package com.example.wap.models;

import java.sql.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="members")
public class Member {



  public Member(int lcid) {
    this.libraryCardId = lcid;
  }

  public Member() {

  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="library_card_id")
  private int libraryCardId;

  private String name;

  @Column(name="DOB")
  private Date dob;

  @Transient
  private int day;

  public int getDay() {
    return day;
  }

  public void setDay(int day) {
    this.day = day;
    this.setDob(day,this.month,this.year);

  }

  public int getMonth() {
    return month;
  }

  public void setMonth(int month) {
    this.month = month;
    this.setDob(this.day,month,this.year);

  }

  public int getYear() {
    return year;
  }

  public void setYear(int year) {
    this.year = year;
    this.setDob(this.day,this.month,year);

  }
  @Transient
  private int month;
  @Transient
  private int year;


  @Transient
  private int bookId;

  public void setDob(int day, int month, int year) {
    this.dob = new Date(year-1900, month-1, day-1);
  }

  @OneToMany(mappedBy = "member")
  private List<Book> books;

  public int getLibraryCardId() {
    return libraryCardId;
  }

  public void setLibraryCardId(int libraryCardId) {
    this.libraryCardId = libraryCardId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Date getDob() {
    return dob;
  }

  public void setDob(Date dob) {
    this.dob = dob;
  }

  public List<Book> getBooks() {
    return books;
  }

  public void setBooks(List<Book> books) {
    this.books = books;
  }
}
