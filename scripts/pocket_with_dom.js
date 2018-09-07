var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

function doCORSRequest(options, printResult) {
  var x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function() {
    printResult(
      options.method + ' ' + options.url + '\n' +
      x.status + ' ' + x.statusText + '\n\n' +
      (x.responseText || '')
    );
  };
  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }
  x.send(options.data);
}

// Bind event
function bodyOnLoad() {
  var urlField = "https://getpocket.com/v3/get"
  var dataField = "consumer_key=70614-0b82ce98bf4d09daeb7ad48f&access_token=d8fe28b0-8a33-95e1-33b7-a553e1"
  doCORSRequest({
    method: 'POST',
    url: urlField,
    data: dataField
  }, function printResult(result) {
    console.log(result);
    console.log(typeof result);

    // var response = JSON.parse(result);
    // console.log(response.count);

    // var listNum = [];
    // var readingTitle = [];
    // var readingUrl = [];
    // var readingList = JSON.stringify(Object.keys(response.list));
    // var readingListLength = JSON.stringify(Object.keys(response.list).length);
    // for (i = 0; i < readingListLength; i++) {
    //   listNum.push(JSON.parse(readingList)[i])
    // }
    //
    // Object.keys(listNum).forEach(function(key) {
    //   if (response.list[listNum[key]].resolved_title != "") {
    //     readingTitle.push(response.list[listNum[key]].resolved_title)
    //   }
    //   readingUrl.push(response.list[listNum[key]].resolved_url)
    // });
    //
    // var readingTitle = readingTitle.reverse();
    // var readingUrl = readingUrl.reverse();
    // var table = document.getElementById("myTable");
    // for (var i = 0; i < readingTitle.length; i++) {
    //   var row = table.insertRow(i);
    //   var cell = row.insertCell(0);
    //   cell.innerHTML = "<a href='" + readingUrl[i] + "'>" + readingTitle[i] + "</a>"
    // }
    $('.lds-ripple').hide()
  });
}
