package com.ssamz.jblog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssamz.jblog.domain.RoleType;
import com.ssamz.jblog.domain.User;
import com.ssamz.jblog.persistence.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public void insertUser(User user) {
		user.setRole(RoleType.USER);
		userRepository.save(user);
	}
	
	@Transactional
	public User getUser(String username) {
		//검색 결과가 없을 때 빈 User 객체 반환
		User findUser = userRepository.findByUsername(username).orElseGet(()->{
			return new User();
		});
		return findUser;
	}

}
