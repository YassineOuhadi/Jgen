package com.example.demo.service.impl;

import com.example.demo.domain.User;
import com.example.demo.repository.userRepository;
import com.example.demo.service.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import java.util.List;

@Service
public class userServiceImpl implements userService {

    @Autowired
    private final userRepository userrepository;
    
    @Autowired
    public userServiceImpl(userRepository userrepository) {
        this.userrepository = userrepository;
    }

    @Override
    public List<User> getUserByEmail(String email) {
        log.info("Inside getUserByEmail {}", email);

        return userrepository.getUserByEmail(email);
    };
}