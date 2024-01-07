package com.example.demo.repository;

import com.example.demo.domain.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;
public interface tweetRepository extends JpaRepository<Tweet, Long> {

    // Query methods
    void newTweet(@Param("content") String content, @Param("tags") String tags);
}
