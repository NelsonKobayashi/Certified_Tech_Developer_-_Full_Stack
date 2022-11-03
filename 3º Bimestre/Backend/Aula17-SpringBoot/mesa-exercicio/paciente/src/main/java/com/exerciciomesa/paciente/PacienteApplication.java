package com.exerciciomesa.paciente;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PacienteApplication {

	@GetMapping
	public String Pauro() {
		return "Paurosan torousha!";
	}
	public static void main(String[] args) {

		SpringApplication.run(PacienteApplication.class, args);
	}

}
