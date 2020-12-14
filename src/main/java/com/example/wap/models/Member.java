package com.example.wap.models;

import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="members")
public class Member {


  public Member(int lcid) {
    this.libraryCardId = lcid;
  }

  public Member() {

  }

  @Id
  @Column(name="library_card_id")
  private int libraryCardId;

  private String name;

  @Column(name="DOB")
  private Date dob;

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
