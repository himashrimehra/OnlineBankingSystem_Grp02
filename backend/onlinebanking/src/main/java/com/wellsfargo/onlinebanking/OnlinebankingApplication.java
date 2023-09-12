package com.wellsfargo.onlinebanking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OnlinebankingApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinebankingApplication.class, args);
		System.out.println("Online Banking System is running");
	}

}