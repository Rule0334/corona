const p_tag_date = document.getElementById('date');
const p_tag_today = document.getElementById('today');

const year = new Date().getFullYear();
const month = new Date().getMonth()+1;
const day = new Date().getDate();
const date = new Date().getDay();

var today = "";

if (date === 1) {
    p_tag_today.innerHTML = "출생년도 끝자리가 1, 6인 분만 구매 가능합니다.";
    today = "월";
} else if (date === 2) {
    p_tag_today.innerHTML = "출생년도 끝자리가 2, 7인 분만 구매 가능합니다.";
    today = "화";
} else if (date === 3) {
    p_tag_today.innerHTML = "출생년도 끝자리가 3, 8인 분만 구매 가능합니다.";
    today = "수";
} else if (date === 4) {
    p_tag_today.innerHTML = "출생년도 끝자리가 4, 9인 분만 구매 가능합니다.";
    today = "목";
} else if (date === 5) {
    p_tag_today.innerHTML = "출생년도 끝자리가 5, 0인 분만 구매 가능합니다.";
    today = "금";
} else {
    p_tag_today.innerHTML = "주중 구매 못한 사람 구매 가능합니다."; 
    if (date === 6){
        today = "토";
    } else {
        today = "일";
    }
}

    p_tag_date.innerHTML = year + "년 " +  month + "월 " + day + "일 " + "("+ today +")";