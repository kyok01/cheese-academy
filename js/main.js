// jsを記述する際はここに記載していく

// TEST用
// console.log(10);

// Demo API 
// var request = new XMLHttpRequest();

// request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
// request.responseType = 'json';

// request.onload = function () {
//   var data = this.response;
//   console.log(data);
// };

// request.send();

// DefiLama API xmlhttprequest method
// var requestUniswap = new XMLHttpRequest();

// requestUniswap.open('GET', 'https://api.llama.fi/tvl/uniswap', true);
// requestUniswap.responseType = 'json';

// requestUniswap.onload = function () {
//   var dataUniswap = this.response;
//   console.log(dataUniswap);
// };

// requestUniswap.send();

// // DefiLama API xmlhttprequest method

// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.llama.fi/tvl/curve', true);
// request.responseType = 'json';

// request.onload = function () {
//   var data = this.response;
//   console.log(data);
// };

// request.send();

//////////////////////////////////////////////////////////////////


// global variable definition
var elementTest = document.getElementById('api__test');
var elementUni = document.getElementById('uniswap__tvl');
var elementPan = document.getElementById('pancakeswap__tvl');
var elementSushi = document.getElementById('sushiswap__tvl');

// global function

function comma(num) {
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

// Uniswap tvl using defillama api fetch

fetch('https://api.llama.fi/tvl/uniswap')
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then((fetchData) => {
        console.log(fetchData);
        console.log(comma(Math.floor(fetchData)));
        fetchData = comma(Math.floor(fetchData));
        elementUni.textContent = "$" + fetchData;
    })
    .catch((reason) => {
        console.log(reason);
    });

// Pancakeswap tvl using defillama api fetch

fetch('https://api.llama.fi/tvl/pancakeswap')
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then((fetchData) => {
        console.log(fetchData);
        console.log(comma(Math.floor(fetchData)));
        fetchData = comma(Math.floor(fetchData));
        elementPan.textContent = "$" + fetchData;
    })
    .catch((reason) => {
        console.log(reason);
    });

// Sushiswap tvl using defillama api fetch

fetch('https://api.llama.fi/tvl/sushiswap')
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then((fetchData) => {
        console.log(fetchData);
        console.log(comma(Math.floor(fetchData)));
        fetchData = comma(Math.floor(fetchData));
        elementSushi.textContent = "$" + fetchData;
    })
    .catch((reason) => {
        console.log(reason);
    });

// bitcoin using coinmarketcap api fetch

// const param = {
//     method: "POST",
//     headers: {
//         'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
//         'Accept': 'application/json'
//     },
//     body: 'id=1&convert=USD'
// };

//   fetch('https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest', param)
//   .then((res) => {
//       if (!res.ok) {
//           throw new Error(`${res.status} ${res.statusText}`);
//       }
//       return res.json();
//   })
//   .then((fetchData) => {
//       console.log(fetchData);
//     //   console.log(comma(Math.floor(fetchData)));
//     //   fetchData = comma(Math.floor(fetchData));
//     //   elementSushi.textContent = "$" + fetchData;
//   })
//   .catch((reason) => {
//       console.log(reason);
//   });

// Sushiswap tvl using defillama api fetch

fetch('https://api.llama.fi/chains')
    .then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then((fetchData) => {
        console.log(fetchData);
        // console.log(fetchData);
        // console.log(comma(Math.floor(fetchData)));
        // fetchData = comma(Math.floor(fetchData));
        // elementSushi.textContent = "$" + fetchData;

        const playerList = document.getElementById("playerList");

        var i = 0;

        fetchData.forEach((player) => {  // 配列の中のオブジェクトの数だけ処理を繰り返す
            const tr = document.createElement("tr");
            playerList.appendChild(tr); // 表の中に８個の「tr」（行）ができる
            // 1行の中を生成
            const objArray = Object.entries(player);  // オブジェクトを配列に
            console.log(comma(Math.floor(player.tvl)));
            // player.tvl = comma(Math.floor(player.tvl));
            objArray.forEach((arr) => { // No, name, age, gradeの4回繰り返す
                const td = document.createElement("td");
                if(!isNaN(arr[1]) && arr[1] !== null) {
                    arr[1] = comma(Math.floor(arr[1]));
                } else if(arr[1] === null) {
                    arr[1] = "-";
                }
                td.textContent = arr[1];  // arr[1]はvalueの部分
                tr.appendChild(td);
            });
        });
    })
    .catch((reason) => {
        console.log(reason);
    });