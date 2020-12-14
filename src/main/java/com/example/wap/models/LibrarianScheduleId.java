package com.example.wap.models;

import java.io.Serializable;

public class LibrarianScheduleId implements Serializable {

  private int lid;
  private int sid;

  public LibrarianScheduleId(int lid, int scheduleId) {
    this.lid = lid;
    this.sid = scheduleId;
  }

  public LibrarianScheduleId() {}


}
