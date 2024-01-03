package com.example.demo.repository;

import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;
public interface userRepository extends JpaRepository<User, Long> {

    // Query methods
    List<User> findBYName(@Param("fullname") String username);
	List<User> getUserByEmail(@Param("email") String email);
	void modifyUsername(@Param("id") Long id, @Param("fullname") String username);
}
