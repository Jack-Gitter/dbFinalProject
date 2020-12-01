package com.example.wap.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name="books")
public class Book {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int book_id;

  private String title;

  private String author;

  @ManyToOne
  @JsonIgnore
  private Member member;

}
