package com.example.wap.daos;

import com.example.wap.models.Librarian;
import com.example.wap.models.LibrarianSchedule;
import com.example.wap.models.LibrarianScheduleId;
import com.example.wap.models.Schedule;
import com.example.wap.repositories.LibrarianRepository;
import com.example.wap.repositories.LibrarianScheduleRepository;
import com.example.wap.repositories.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LibrarianScheduleDao {

  @Autowired
  LibrarianRepository librarianRepository;

  @Autowired
  ScheduleRepository scheduleRepository;

  @Autowired
  LibrarianScheduleRepository librarianScheduleRepository;

  @GetMapping("/addSchedule/{sched}/ToLibrarian/{id}")
  public LibrarianSchedule setLibrarianSchedule(@PathVariable(name = "id") int id, @PathVariable(name = "sched") int sched) {
    LibrarianSchedule librarianSchedule = new LibrarianSchedule();
    librarianSchedule.setLibrarianId(id);
    librarianSchedule.setScheduleId(sched);
    librarianSchedule.setLibrarian(librarianRepository.findById(id).get());
    librarianSchedule.setSchedule(scheduleRepository.findById(sched).get());
    return librarianScheduleRepository.save(librarianSchedule);
  }


  @GetMapping("/removeSchedule/{sched}/FromLibrarian/{id}")
  public void removeLibrarianSchedule(@PathVariable(name = "sched") int sched, @PathVariable(name = "id") int id) {
    LibrarianScheduleId librarianScheduleId = new LibrarianScheduleId(id, sched);
    librarianScheduleRepository.deleteById(librarianScheduleId);
  }


  @GetMapping("/findAllMappings")
  public Iterable<LibrarianSchedule> findAllMappings() {
    return librarianScheduleRepository.findAll();
  }

}
