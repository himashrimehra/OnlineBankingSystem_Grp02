package com.wellsfargo.onlinebanking.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wellsfargo.onlinebanking.entity.User;

@Service
public interface IUserService {

    Optional<User> getUser(Integer id);

    List<User> getAllUsers();

    User createUser(User newUser);

}