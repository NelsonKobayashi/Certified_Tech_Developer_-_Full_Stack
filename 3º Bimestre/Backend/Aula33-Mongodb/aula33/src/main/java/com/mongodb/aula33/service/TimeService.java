package com.mongodb.aula33.service;

import com.mongodb.aula33.model.Time;
import com.mongodb.aula33.repository.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeService {

    private TimeRepository timeRepository;

    @Autowired

    public TimeService(TimeRepository timeRepository) {
        this.timeRepository = timeRepository;
    }

    public Time guardarTime(Time time) {return timeRepository.save(time);}
    public List<Time> listarTime(){ return timeRepository.findAll();}
}
