<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../layout/header.jsp"%>
    <br>
<div class="container mt-3">

  <form id = "myForm">
    <div class="mb-3 mt-3">
      <label for="username">이름:</label>
      <input type="text" class="form-control" id="username" placeholder="이름을 입력하세요." name="username" autocomplete="current-username">
    </div>
    <div class="mb-3">
      <label for="password">비밀번호:</label>
      <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요." name="password" autocomplete="current-password">
    </div>
    <div class="mb-3 mt-3">
      <label for="email">이메일:</label>
      <input type="email" class="form-control" id="email" placeholder="이메일을 입력하세요." name="email" autocomplete="current-email">
    </div>

    <button id="btn-save" class="btn btn-primary">회원가입</button>
  </form>
</div>
<script src="/js/user.js"></script>
<%@ include file="../layout/footer.jsp"%>

