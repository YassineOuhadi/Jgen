package com.example.demo.service.impl;

import com.example.demo.domain.Tweet;
import com.example.demo.repository.tweetRepository;
import com.example.demo.service.service.tweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import java.util.List;

@Service
public class tweetServiceImpl implements tweetService {

    @Autowired
    private final tweetRepository tweetrepository;
    
    @Autowired
    public tweetServiceImpl(tweetRepository tweetrepository) {
        this.tweetrepository = tweetrepository;
    }

    @Override
    public void newTweet(String content, String tags) {
        log.info("Inside newTweet {}", content,tags);

        tweetrepository.newTweet(content, tags);
    };
}