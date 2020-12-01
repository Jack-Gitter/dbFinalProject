package com.example.wap.daos;

import com.example.wap.models.Book;
import com.example.wap.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookDao {

  @Autowired
  BookRepository bookRepository;

  @GetMapping("/findAllBooks")
  public Iterable<Book> findAllBooks() {
    return bookRepository.findAll();
  }

}
