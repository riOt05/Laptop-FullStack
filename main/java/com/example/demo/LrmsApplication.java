package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com.example"}) 
@EnableJpaRepositories(basePackages = "com.example.repository")
@EntityScan({ "com.example.model" })
class LrmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(LrmsApplication.class, args);
	}

}
