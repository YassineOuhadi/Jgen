package com.example.demo.domain;

import javax.persistence.*;
import java.util.List;
import com.example.demo.enums.Roles;

@Entity
@Table(name = "user")
public class User {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String fullname;

	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private Roles role;

    // Relationships
    
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Tweet> tweets;

    // Add getters and setters here
}
