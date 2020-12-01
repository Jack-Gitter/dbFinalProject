package com.example.wap.repositories;

import com.example.wap.models.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Integer> {

}
