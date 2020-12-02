package com.example.wap.daos;

import com.example.wap.models.Librarian;
import com.example.wap.repositories.LibrarianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibrarianDao {

  @Autowired
  LibrarianRepository librarianRepository;

  @GetMapping("/findAllBooks")
  public Iterable<Librarian> findAllLibrarians() {
    return librarianRepository.findAll();
  }
}