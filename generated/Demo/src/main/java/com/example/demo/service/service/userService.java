package com.example.demo.service.service;

import com.example.demo.domain.User;
import java.util.List;
public interface userService {

    // Service methods
    public List<User> getUserByEmail(String email);
}
