package com.wellsfargo.onlinebanking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.onlinebanking.entity.LoginRequest;
import com.wellsfargo.onlinebanking.entity.User;
import com.wellsfargo.onlinebanking.repository.UserRepository;

@Service
public class UserService implements IUserService {

    @Autowired
    UserRepository userRepo;

    @Override
    public Optional<User> getUser(Integer id) {
        return userRepo.findById(id);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public User createUser(User newUser) {
        if(userRepo.findByName(newUser.getName()) != null)return null;
        return userRepo.save(newUser);
    }

    @Override
    public User login(LoginRequest loginRequest) {
        User user = userRepo.findByUserName(loginRequest.getUsername());
        String password= user.getPassword();
        if(password.equals(loginRequest.getPassword()))return user;
        else return null;
    }    
}