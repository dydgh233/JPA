//userObject 객체 선언
let postObject = {
	// init()함수선언
	init: function(){
		let _this = this;
		// #btn-insert 버튼에 click 이벤트가 발생하면 insertPost() 함수 호출
		$("#btn-insert").on("click", () => {
			_this.insertPost();
		});
		
		$("#btn-update").on("click", () => {
			_this.updatePost();
		});
		
		$("#btn-delete").on("click", () => {
			_this.deletePost();
		});
	},
	
	insertPost: function(){
		
		//사용자가 입력한 값(username, password, email) 추출
		let post = {
			title : $("#title").val(),
			content : $("#content").val()
		}
		
		//Ajax를 이용한 비동기 호출
		//done() 함수: 요청 처리에 성공했을 때 실행될 코드
		//fail() 함수: 요청 처리에 실패했을 때 실행될 코드
		$.ajax({
			type: "POST", //요청방식
			url: "/post", //요청 경로
			data: JSON.stringify(post), //post 객체를 JSON 형식으로 변환
			//HTTP의 body에 설정되는 데이터 마임타입
			contentType: "application/json; charset=utf-8"
			//응답으로 들어온 JSON 데이터를 response로 받는다.
		}).done(function(response){
			let message = response["data"];
			alert(message);
			location = "/";
			//에러 발생 시 error로 에러 정보를 받는다.
		}).fail(function(error){
			let message = error["data"];
			//에러 메세지를 알림창에 표시
			alert("에러발생 : " + message);
		});
	},
	
	updatePost: function(){
		alert("포스트 수정 요청됨");
		//사용자가 입력한 값(username, password, email) 추출
		let post = {
			id : $("#id").val(),
			title : $("#title").val(),
			content : $("#content").val()
		}
		
		//Ajax를 이용한 비동기 호출
		//done() 함수: 요청 처리에 성공했을 때 실행될 코드
		//fail() 함수: 요청 처리에 실패했을 때 실행될 코드
		$.ajax({
			type: "PUT", //요청방식
			url: "/post", //요청 경로
			data: JSON.stringify(post), //post 객체를 JSON 형식으로 변환
			//HTTP의 body에 설정되는 데이터 마임타입
			contentType: "application/json; charset=utf-8"
			//응답으로 들어온 JSON 데이터를 response로 받는다.
		}).done(function(response){
			let message = response["data"];
			alert(message);
			location = "/";
			//에러 발생 시 error로 에러 정보를 받는다.
		}).fail(function(error){
			let message = error["data"];
			//에러 메세지를 알림창에 표시
			alert("에러발생 : " + message);
		});
	},
	
	deletePost: function(){
		alert("포스트 삭제 요청됨");
		//사용자가 입력한 값(username, password, email) 추출
		let id = $("#id").text();

		//Ajax를 이용한 비동기 호출
		//done() 함수: 요청 처리에 성공했을 때 실행될 코드
		//fail() 함수: 요청 처리에 실패했을 때 실행될 코드
		$.ajax({
			type: "DELETE", //요청방식
			url: "/post/" + id, //요청 경로
			data: JSON.stringify(id), //post 객체를 JSON 형식으로 변환
			//HTTP의 body에 설정되는 데이터 마임타입
			contentType: "application/json; charset=utf-8"
			//응답으로 들어온 JSON 데이터를 response로 받는다.
		}).done(function(response){
			let message = response["data"];
			alert(message);
			location = "/";
			//에러 발생 시 error로 에러 정보를 받는다.
		}).fail(function(error){
			let message = error["data"];
			//에러 메세지를 알림창에 표시
			alert("에러발생 : " + message);
		});
	},
}


postObject.init();


