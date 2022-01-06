var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
      var time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
      var usdValue = "1 BTC = $" + json["bpi"]["USD"]["rate"];
      var gbpValue = "1 BTC = &pound;" + json["bpi"]["GBP"]["rate"];
      var euroValue = "1 BTC = &euro;" + json["bpi"]["EUR"]["rate"];

      document.getElementById("data").innerHTML = usdValue;
}


CoinbaseBTCPrice();

function CoinbaseBTCPrice(){
    $.ajax({
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    success: function(bitcoinPrice){
        console.log("1 BTC = " + JSON.parse(bitcoinPrice).bpi.USD.rate + "usd")
        }
    })
}


function getValue() {
    var btcAddress = document.querySelector(".js-copytextarea");

    console.log('fetching blockchain...');
    fetch("https://blockchain.info/q/addressbalance/" + btcAddress.value)
      .then(function(response) {
        console.log('...got response from blockchain...');
        return response.json();
      })
      .then(function(json) {
        var btcBalance = parseInt(json, 10);
        document.getElementById("btc-balance").innerHTML = "Balance = " + btcBalance / 100000000 + " BTC";
        console.log('balance set!');
      });
//BTC BALLANCE
}