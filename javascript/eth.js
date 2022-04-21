function getTransactions() {
    console.log("Getting transactions...");
    fetch("https://api.etherscan.io/api?module=account&action=txlist&address=0x64f74ad48cE1A6086C8822Ed9CC15401ABA22fa1&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=FH12Z2IYGM3JKD1RN42NG6VHSXV73YX61H")
      .then(function (response) {
        console.log("...got response from blockchain...");
        return response.json();
      })
      .then(function (json) {
        for (var res of json.result) 
        {
          trValue = res.value * Math.pow(10, -18);
          trSender = res.from;
          trReciever = res.to;
          trConfirmations = res.confirmations;

          $(`<div class="transaction" id="${res.hash}"/>`).appendTo( document.getElementById("transDiv"));
          
          $(`<p class="thicc"/>`).text("Sender: " + trSender).appendTo(document.getElementById(`${res.hash}`));
          $(`<p class="thicc"/>`).text("Reciever: " + trReciever).appendTo(document.getElementById(`${res.hash}`));
          $(`<p class="thicc"/>`).text("Value: " + trValue).appendTo(document.getElementById(`${res.hash}`));
          $(`<p class="thicc"/>`).text("Confirmations: " + trConfirmations).appendTo(document.getElementById(`${res.hash}`));
  
          //console.log("Value: " + trValue + " From: " + trSender + " To: " + trReciever + " Confirmations: " + trConfirmations);
        }
      });
  }
  
  getTransactions()