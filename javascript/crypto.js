function btcbubble(){
  document.getElementById("data").style.color = '#7c7aff';

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
        //var time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
        var usdValue = "BTC = $" + json["bpi"]["USD"]["rate"];
        //var gbpValue = "1 BTC = &pound;" + json["bpi"]["GBP"]["rate"];
        //var euroValue = "1 BTC = &euro;" + json["bpi"]["EUR"]["rate"];
        document.getElementById("data").innerHTML = usdValue;
  }

  setTimeout(function(){ document.getElementById("data").style.color = 'white'; }, 100);
    
  setTimeout(btcbubble, 25000);
}

btcbubble();

function ethbubble(){
  document.getElementById("dataeth").style.color = '#7c7aff';
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H";
  
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4  &&  this.status == 200) {
    var json = JSON.parse(this.responseText);
    parseJson(json);
    }		
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  
  function parseJson(json) {
        var usdValue = "ETH = $" + json["result"]["ethusd"];
  
        document.getElementById("dataeth").innerHTML = usdValue;
  }
  
  setTimeout(function(){ document.getElementById("dataeth").style.color = 'white'; }, 100);
  
  setTimeout(ethbubble, 25000);
}

ethbubble();

CoinbaseBTCPrice();

function CoinbaseBTCPrice(){
    $.ajax({
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    success: function(bitcoinPrice){
        btctousd = JSON.parse(bitcoinPrice).bpi.USD.rate;
        console.log("1 BTC = " + btctousd + " USD")
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
        console.log(btcBalance + " before math.pow");
        var btcfinal = btcBalance * Math.pow(10, -8);
        btctousd=btctousd.replace(/\,/g,'');
        usdconverted = parseInt(btctousd) * btcfinal;
        console.log("To usd:" + usdconverted);
        document.getElementById("btc-balance").innerHTML = "Balance = " + btcfinal.toFixed(8) + " BTC";
        document.getElementById("btc-usd-balance").innerHTML = "Balance = " + usdconverted.toFixed(2) + " USD";
        console.log('balance set!');
      });
      setTimeout(getValue, 25000);
//BTC BALLANCE
}

function getETH(e) {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H";
  
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4  &&  this.status == 200) {
    var json = JSON.parse(this.responseText);
    parseJson(json);
    }		
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  
  function parseJson(json) {
        var usdValue = + json["result"]["ethusd"];

        var ethAddress = document.querySelector(".js-copytextarea2");
  
        console.log('fetching etherscan...');
        fetch("https://api.etherscan.io/api?module=account&action=balance&address=" + ethAddress.value + "&tag=latest&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H")
            .then(function(response) {
              console.log('...got response from etherscan...');
              return response.json();
            })
            .then(function(json) {
              console.log(json);
              var bal = (json.result * Math.pow(10, -18));
              $('#eth-balance').text('Balance = ' + bal.toFixed(8) + ' ETH');
              ethusd = bal * usdValue;
              $('#eth-usd-balance').text('Balance = ' + ethusd.toFixed(2) + ' USD');
              console.log(usdValue);
              console.log('balance set!');
            });
  }
      setTimeout(getETH, 25000);
}