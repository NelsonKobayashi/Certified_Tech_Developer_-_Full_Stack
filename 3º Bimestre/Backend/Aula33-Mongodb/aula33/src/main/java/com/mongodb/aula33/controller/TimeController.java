package com.mongodb.aula33.controller;

import com.mongodb.aula33.model.Time;
import com.mongodb.aula33.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/times")
public class TimeController {

    private TimeService timeService;

    @Autowired
    public TimeController(TimeService timeService) {
        this.timeService = timeService;
    }

    @PostMapping
    public Time adicionarTime(@RequestBody Time time) {return timeService.guardarTime(time);}

    @GetMapping
    public List<Time> listarTime(){return timeService.listarTime();}

}
