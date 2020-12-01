package com.example.wap.models;

import java.util.Date;
import java.util.List;
import javax.persistence.*;


@Entity
@Table(name="members")
public class Member {

  @Id
  @Column(name="library_card_id")
  private int libraryCardId;

  private String name;

  @Column(name="DOB")
  private Date dob;

  @OneToMany(mappedBy = "member")
  private List<Book> books;

  public Member() {
  }
}
