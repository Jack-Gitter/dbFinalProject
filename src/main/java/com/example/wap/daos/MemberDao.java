package com.example.wap.daos;


import com.example.wap.models.Book;
import com.example.wap.models.LibrarianSchedule;
import com.example.wap.models.Member;
import com.example.wap.repositories.BookRepository;
import com.example.wap.repositories.MemberRepository;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberDao {


  @Autowired
  MemberRepository memberRepository;

  @Autowired
  BookRepository bookRepository;

  @GetMapping("/findAllMembers")
  public Iterable<Member> findAllMembers() {
    return memberRepository.findAll();
  }

  @GetMapping("/addMember")
  public Member addMember() {
    Member m = new Member();
    return this.memberRepository.save(m);
  }

  @GetMapping("/updateMember/{lcid}/Name/{name}")
  public Member updateMemberName(@PathVariable("lcid") int lcid, @PathVariable("name") String name) {
    Member m = memberRepository.findById(lcid).get();
    m.setName(name);
    return memberRepository.save(m);
  }

  @GetMapping("/updateMember/{lcid}/dob/{dob}")
  public Member updateMemberDob(@PathVariable("lcid") int lcid, @PathVariable("dob") Date dob) {
    Member m = memberRepository.findById(lcid).get();
    m.setDob(dob);
    return memberRepository.save(m);
  }

  @GetMapping("/addBook/{bid}/ToMember/{lcid}")
  public Member addBookToMember(@PathVariable("bid") int bid, @PathVariable("lcid") int lcid) {
    Member m = memberRepository.findById(lcid).get();
    Book b = bookRepository.findById(bid).get();
    List<Book> books = m.getBooks();
    books.add(b);
    b.setMember(m);
    m.setBooks(books);
    bookRepository.save(b);
    return memberRepository.save(m);
  }

  @GetMapping("/returnBook/{bid}/FromMember/{lcid}")
  public Member returnBookFromMember(@PathVariable("bid") int bid, @PathVariable("lcid") int lcid) {
    Member m = memberRepository.findById(lcid).get();
    List<Book> books = m.getBooks();
    books.remove(bookRepository.findById(bid).get());
    m.setBooks(books);
    Book b = bookRepository.findById(bid).get();
    b.setMember(null);
    return memberRepository.save(m);
  }

  @GetMapping("/findMemberById/{mid}")
  public Member findMemberById(@PathVariable(name = "mid") int mid) {
    return memberRepository.findById(mid).get();
  }


  @GetMapping("removeMember/{id}")
  public void deleteMember(@PathVariable("lcid") int lcid) {
    this.memberRepository.deleteById(lcid);
  }
}
