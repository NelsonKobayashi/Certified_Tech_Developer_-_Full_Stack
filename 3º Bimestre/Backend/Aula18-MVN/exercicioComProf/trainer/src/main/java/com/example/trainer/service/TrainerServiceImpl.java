package com.example.trainer.service;

import com.example.trainer.domain.Trainer;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class TrainerServiceImpl implements ITrainerService{

    @Override
    public List<Trainer> listTrainer() {
        return Arrays.asList(
                new Trainer("Simone"),
                new Trainer("Carla"),
                new Trainer("Jéssica")
        );
    }
}
