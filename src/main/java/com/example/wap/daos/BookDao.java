package com.example.wap.daos;

import com.example.wap.models.Book;
import com.example.wap.models.Member;
import com.example.wap.repositories.BookRepository;
import com.example.wap.repositories.MemberRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookDao {

  @Autowired
  BookRepository bookRepository;

  @GetMapping("/findAllBooks")
  public Iterable<Book> findAllBooks() {
      Iterable<Book> books = bookRepository.findAll();
      return books;
  }

  @GetMapping("/addBook")
  public Book addBook() {
    Book b = new Book();
    return this.bookRepository.save(b);
  }

  @GetMapping("/deleteBook/{bid}")
  public void deleteBook(@PathVariable("bid") int bid) {
    this.bookRepository.deleteById(bid);
  }

  @GetMapping("/updateBook/{bid}/title/{title}")
  public Book updateBookTitle(@PathVariable("bid") int bookId, @PathVariable("title") String title) {
    Book b = bookRepository.findById(bookId).get();
    b.setTitle(title);
    return bookRepository.save(b);

  }

  @GetMapping("/updateBook/{bid}/author/{author}")
  public Book updateBookAuthor(@PathVariable("bid") int bookId, @PathVariable("author") String author) {
    Book b = bookRepository.findById(bookId).get();
    b.setAuthor(author);
    return bookRepository.save(b);
  }

  @GetMapping("findBookById/{bid}")
  public Book findBookById(@PathVariable(name = "bid") int bid) {
    return bookRepository.findById(bid).get();
  }



}
