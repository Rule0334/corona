const p_name = document.getElementById('name');

const URL_a = 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%B0%BD%EC%9B%90%EC%8B%9C%20%EB%A7%88%EC%82%B0%ED%95%A9%ED%8F%AC%EA%B5%AC';

const tbody = document.getElementById('tbody');
const table = document.getElementById('table');


fetch(URL_a)
.then(res => res.json())
.then((out) => {
    var obj = JSON.stringify(out);
    var data = JSON.parse(obj);
    // console.log(data['count']);
    // console.log(data);
    // console.log(data['stores'][0]);
    i = 0;

    for (i; i<Object.keys(data['stores']).length; i++){
        add_row(i, data);
        
    }
}).catch(err => console.error(err));

function add_row(i, data) {
    // var row = tbody.insertRow(0); // 상단에 추가
    var row = tbody.insertRow(tbody.rows.length); // 하단에 추가
    row.insertCell(0).outerHTML = "<th scope=\"row\">"+ (i+1) + "</th>";
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    cell1.innerHTML = data['stores'][i]['name'];
    cell2.innerHTML = data['stores'][i]['addr'];
    cell3.innerHTML = stock_return(data['stores'][i]['remain_stat']);
    cell4.innerHTML = data['stores'][i]['stock_at'];
    cell5.innerHTML = data['stores'][i]['created_at'];

}

function stock_return(data){
    switch(data){
        case 'plenty':
            return '🟢100개 이상';
            break;
        case 'some':
            return '🟡 100개 미만';
            break;
        case 'few':
            return '🔴 30개 미만';
            break;
        case 'empty':
            return '✖️';
            break;
        default:
            return '❓';   
    }
}