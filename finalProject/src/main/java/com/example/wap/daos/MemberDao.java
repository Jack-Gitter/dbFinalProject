package com.example.wap.daos;

import com.example.wap.models.Member;
import com.example.wap.repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberDao {

  @Autowired
  MemberRepository memberRepository;

  @GetMapping("/findAllBooks")
  public Iterable<Member> findAllMembers() {
    return memberRepository.findAll();
  }
}
