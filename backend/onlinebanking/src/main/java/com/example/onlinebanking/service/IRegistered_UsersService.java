package com.example.onlinebanking.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlinebanking.entity.Registered_Users;

public interface IRegistered_UsersService {

    Optional<Registered_Users> getRegistered_Users(Integer UserID);

    List<Registered_Users> getAllU();

    Registered_Users createRegistered_Users(Registered_Users newRegistered_Users);
}
