function recommendUp(upNumber, conNum) {
	$("#te").text("test");

	if (isSession == false) {
		alert("먼저로그인을 해주세요");
	} else {
		$.ajax({
			type : "POST", // 전송방식을 지정한다 (POST,GET)
			url : "recommendUp",// 호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
			dataType : "text",// 호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을
								// 사용할 수 있다.
			data : {
				upNumber : upNumber,
				conNum : conNum
			},
			error : function() {
				alert("error");
			},
			success : function(Parse_data) {

				if (Parse_data == 'yes') {
					alert("추,비추천은 한번만 가능합니다.");
				} else {
					alert("추천 되었습니다.");
					var id = 'recommendUp' + conNum;
					var num = upNumber + 1;
					document.getElementById(id).innerHTML = "추천: " + num;
				}
			}
		});
	}
}

function recommendDown(downNumber, conNum) {
	if (isSession == false) {
		alert("먼저로그인을 해주세요");
	} else {
		$.ajax({
			type : "POST", // 전송방식을 지정한다 (POST,GET)
			url : "recommendDown",// 호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서
									// 사용해도된다.
			dataType : "text",// 호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을
								// 사용할 수 있다.
			data : {
				downNumber : downNumber,
				conNum : conNum
			},
			error : function() {
				alert("error");
			},
			success : function(Parse_data) {
				if (Parse_data == 'yes') {
					alert("추,비추천은 한번만 가능합니다.");
				} else {
					alert("비추천 되었습니다.");
					var id = 'recommendDown' + conNum;
					var num = downNumber + 1;
					document.getElementById(id).innerHTML = "추천: " + num;
				}
			}

		});
	}
}


function commentClick(num) {
	var commentSection = 'button' + num;
	var con = document.getElementById(commentSection);

	if (isSession == false) {
		alert("먼저로그인을 해주세요");
	} else {
		if (con.style.display == "none") {
			con.style.display = 'block';
		} else {
			con.style.display = 'none';
		}
	}
}

function belowCommentClick(num) {
	var commentSection = 'commentClickButton' + num;
	var con = document.getElementById(commentSection);

	if (isSession == false) {
		alert("먼저로그인을 해주세요");
	} else {
		if (con.style.display == "none") {
			con.style.display = 'block';
		} else {
			con.style.display = 'none';
		}
	}
}

var num = 0;
var endNum = 0;

function wordClick(word) {
	$("#inputText").val(word);
}

function loseFocus() {
	setTimeout(function() {
		textOut();
	}, 150);
}
// 포커스잃었을때추천창끔
function textOut() {
	var searchRecommendSection = document
			.getElementById("searchRecommendSection");
	searchRecommendSection.innerHTML = "";
}



