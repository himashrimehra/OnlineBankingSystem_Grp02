package com.wellsfargo.onlinebanking;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.web.client.RestTemplate;

import com.wellsfargo.onlinebanking.entity.User;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class OnlinebankingApplicationTests {

    @LocalServerPort
    private int port;

    private String baseUrl = "http://localhost";

    private static RestTemplate restTemplate;

    @Autowired
    private TestH2Repository h2Repository;

    @BeforeAll
    public static void init() {
        restTemplate = new RestTemplate();
    }

    @BeforeEach
    public void setUp() {
        baseUrl = baseUrl.concat(":").concat(port + "").concat("/users");
    }


    @Test
    public void testAddUser() {
        User user = new User(1, "test3", "test3@gmail.com", "12345678", "test3", "1", "q", "q", "123", "1");
        User response = restTemplate.postForObject(baseUrl, user, User.class);
        assertEquals("test3", response.getName());
        assertEquals(1, h2Repository.findAll().size());
    }

    @Test
    @Sql(statements = "INSERT INTO user (user_id, aadhar, address, date_of_birth, email, name, password, permanent_address, phone_number, user_name) VALUES (4, '1237', 'abc', '1234', 'test7@gmail.com', 'test7', '12345678', 'qw', '123', 'test7')", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
    @Sql(statements = "DELETE FROM user WHERE name='test7'", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
    public void testGetUsers() {
        List<User> users = restTemplate.getForObject(baseUrl, List.class);
        assertEquals(1, users.size());
        assertEquals(1, h2Repository.findAll().size());
    }

	

}