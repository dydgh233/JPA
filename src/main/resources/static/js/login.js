//loginObject 객체 선언
let loginObject = {
	// init()함수선언
	init: function() {
		$("#btn-login").on("click", function() {
			this.login();
		}.bind(this)); // 'this'를 명시적으로 바인딩
	},
	
	login : function(){
		alert("로그인 요청됨");		
		//사용자가 입력한 값(username, password, email) 추출
		let data = {
			username : $("#username").val(),
			password : $("#password").val()
		}
		console.log("data",data);
		
		//Ajax를 이용한 비동기 호출
		//done() 함수: 요청 처리에 성공했을 때 실행될 코드
		//fail() 함수: 요청 처리에 실패했을 때 실행될 코드
		$.ajax({
			type: "POST", //요청방식
			url: "/auth/login", //요청 경로
			data: JSON.stringify(data), //data 객체를 JSON 형식으로 변환
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
			location = "/";
		});
	},
}

loginObject.init();

