package com.example.onlinebanking.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.onlinebanking.entity.Registered_Users;
import com.example.onlinebanking.service.Registered_UsersService;
import com.example.onlinebanking.service.IRegistered_UsersService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.Optional;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/Registered_Users")
public class OnlineBankingController {

    @Autowired
    Registered_UsersService service;

    @GetMapping("/allRegistered_Users")
    public List<Registered_Users> getAllU() {
        return service.getAllU();
    }

    @GetMapping("/{UserID}")
    public Optional<Registered_Users> getRegistered_UsersbyUserID(@PathVariable Integer UserID) {
        return service.getRegistered_Users(UserID);
    }

    @PostMapping("createRegistered_Users")
    public Registered_Users createRegistered_Users(@Validated @RequestBody Registered_Users newRegistered_Users) {
        return service.createRegistered_Users(newRegistered_Users);
    }

}
