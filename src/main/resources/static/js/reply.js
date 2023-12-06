//userObject 객체 선언
let replyObject = {
	// init()함수선언
	init: function(){
		$("#btn-save-reply").on("click", () => {
			this.insertReply();
		});
	},
	
	insertReply: function(){
		alert("포스트 삭제 요청됨");
		let id = $("#postId").val();
		
		let reply = {
			content : $("#reply-content").val()
		}
		
		//Ajax를 이용한 비동기 호출
		//done() 함수: 요청 처리에 성공했을 때 실행될 코드
		//fail() 함수: 요청 처리에 실패했을 때 실행될 코드
		$.ajax({
			type: "POST", //요청방식
			url: "/reply/" + id, //요청 경로
			data: JSON.stringify(reply), //reply 객체를 JSON 형식으로 변환
			//HTTP의 body에 설정되는 데이터 마임타입
			contentType: "application/json; charset=utf-8"
			//응답으로 들어온 JSON 데이터를 response로 받는다.
		}).done(function(response){
			let message = response["data"];
			alert(message);
			location = "/post/" + id;
		});
	},
	
}


replyObject.init();


