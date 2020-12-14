package com.example.wap.daos;

import com.example.wap.models.Librarian;
import com.example.wap.models.LibrarianSchedule;
import com.example.wap.models.LibrarianScheduleId;
import com.example.wap.repositories.LibrarianRepository;
import com.example.wap.repositories.LibrarianScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibrarianDao {

  @Autowired
  LibrarianRepository librarianRepository;

  @Autowired
  LibrarianScheduleRepository librarianScheduleRepository;

  @GetMapping("/findAllLibrarians")
  public Iterable<Librarian> findAllLibrarians() {
    return librarianRepository.findAll();
  }

  @GetMapping("/findLibrarian/{id}")
  public Librarian findLibrarianById(@PathVariable(name = "id") int id) {
    return librarianRepository.findById(id).get();
  }

  @GetMapping("removeLibrarian/{id}")
  public void removeLibrarianById(@PathVariable(name = "id") int id) {
    Iterable<LibrarianSchedule> librarianSchedules = librarianScheduleRepository.findAll();
    for (LibrarianSchedule schedule: librarianSchedules) {
      if (schedule.getLibrarianId() == id) {
        librarianScheduleRepository.delete(schedule);
      }
    }
    librarianRepository.deleteById(id);
  }

  @GetMapping("/addLibrarian")
  public Librarian addLibrarian() {
    Librarian l = new Librarian();
    return librarianRepository.save(l);
  }

  @GetMapping("/setLibrarian/{id}/Salary/{salary}")
  public Librarian setLibrarianSalary(@PathVariable(name = "id") int id, @PathVariable(name = "salary") int salary) {
    Librarian librarian = librarianRepository.findById(id).get();
    librarian.setSalary(salary);
    return librarianRepository.save(librarian);
  }

  @GetMapping("/setLibrarian/{id}/Name/{name}")
  public Librarian setLibrarianName(@PathVariable(name = "id") int id, @PathVariable(name = "salary") String name) {
    Librarian librarian = librarianRepository.findById(id).get();
    librarian.setName(name);
    return librarianRepository.save(librarian);
  }





}