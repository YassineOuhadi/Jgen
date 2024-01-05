package com.example.demo.domain;

import javax.persistence.*;
import java.util.List;


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
    
	@OneToMany(mappedBy = "tweet", cascade = CascadeType.ALL)
	private List<User> users;

    // Add getters and setters here
}
