package com.example.onlinebanking.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlinebanking.entity.Registered_Users;
import com.example.onlinebanking.repository.Registered_UsersRepository;

@Service
public class Registered_UsersService implements IRegistered_UsersService {

    @Autowired
    Registered_UsersRepository regrepo;

    @Override
    public Optional<Registered_Users> getRegistered_Users(Integer UserID) {
        return regrepo.findById(UserID);
    }

    @Override
    public List<Registered_Users> getAllU() {
        return regrepo.findAll();
    }

    @Override
    public Registered_Users createRegistered_Users(Registered_Users newRegistered_Users) {
        return regrepo.save(newRegistered_Users);
    }
}
