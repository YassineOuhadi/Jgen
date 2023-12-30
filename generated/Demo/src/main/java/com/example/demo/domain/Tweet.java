package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import lombok.Data;

@Entity
@Table(name = "tweet")
public class Tweet {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String content;

	@Column(nullable = true)
	private String tags;

    // Relationships
    
	@ManyToOne(fetch = FetchType.LAZY)
	private User user;

    // Add getters and setters here
}
