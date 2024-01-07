package com.example.demo.web.rest;

import com.example.demo.domain.Tweet;
import com.example.demo.service.service.tweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
@RequestMapping(path = "/tweet")
public class tweetController {

    @Autowired
    private final tweetService tweetservice;

    @Autowired
    public tweetController(tweetService tweetservice) {
        this.tweetservice = tweetservice;
    }

    // Controller routes
    
    @POST
    @RequestMapping(path = "/get", method = RequestMethod.POST)
    public voidnewTweet(@RequestBody String content, @RequestBody String tags) {
        // Implement your logic here
        tweetservice.newTweet(content, tags);
    }

}
