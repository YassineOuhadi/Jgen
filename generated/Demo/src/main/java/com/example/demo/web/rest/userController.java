package com.example.demo.web.rest;

import com.example.demo.domain.User;
import com.example.demo.service.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
@RequestMapping(path = "/user")
public class userController {

    @Autowired
    private final userService userservice;

    @Autowired
    public userController(userService userservice) {
        this.userservice = userservice;
    }

    // Controller routes
    
    @GET
    @RequestMapping(path = "/get", method = RequestMethod.GET)
    public List<User>getUserByEmail(@RequestParam String userEmail) {
        // Implement your logic here
        return userservice.getUserByEmail(userEmail);
    }

}
