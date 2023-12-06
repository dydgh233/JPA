package com.ssamz.jblog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ssamz.jblog.domain.Post;
import com.ssamz.jblog.domain.User;
import com.ssamz.jblog.dto.ResponseDTO;
import com.ssamz.jblog.service.PostService;


import jakarta.servlet.http.HttpSession;

@Controller
public class PostController {

	@Autowired
	private PostService postService;
	
	@PostMapping("/post")
	public @ResponseBody ResponseDTO<?> insertPost(@RequestBody Post post, HttpSession session){
		//post 객체를 영속화하기 전 연관된 User 엔티티 설정
		User principal = (User) session.getAttribute("principal");
		post.setUser(principal);
		post.setCnt(0);
		
		postService.insertPost(post);
		
		return new ResponseDTO<>(HttpStatus.OK.value(),"새로운 포스트를 등록했습니다.");
	}
	
	@GetMapping({"", "/"})
	public String getPostList(Model model, @PageableDefault(size = 3, sort = "id", direction = Direction.DESC) Pageable pageable) {
		model.addAttribute("postList", postService.getPostList(pageable));
		return "index";
	}
	
	@GetMapping("/post/insertPost")
	public String insertPost() {
		return "post/insertPost";
	}
	//상세
	@GetMapping("/post/{id}")
	public String getPost(@PathVariable int id, Model model) {
		model.addAttribute("post", postService.getPost(id));
		return "post/getPost";
	}
	//수정하기페이지
	@GetMapping("/post/updatePost/{id}")
	public String updatePost(@PathVariable int id, Model model) {
		model.addAttribute("post", postService.getPost(id));
		return "post/updatePost";
	}
	//수정
	@PutMapping("/post")
	public @ResponseBody ResponseDTO<?> updatePost(@RequestBody Post post){
		postService.updatePost(post);
		return new ResponseDTO<>(HttpStatus.OK.value(),post.getId() + "번 포스트를 수정했습니다.");
	}
	
	//삭제
	@DeleteMapping("/post/{id}")
	public @ResponseBody ResponseDTO<?> deletePost(@PathVariable int id){
		postService.deletePost(id);
		return new ResponseDTO<>(HttpStatus.OK.value(),id + "번 포스트를 삭제했습니다.");
	}
	
	
	
}
