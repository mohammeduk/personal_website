function bodyOnLoad() {
  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/get",
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: {
      consumer_key: "70614-0b82ce98bf4d09daeb7ad48f",
      access_token: "d8fe28b0-8a33-95e1-33b7-a553e1",
      detailType: "simple"
    },
    dataType: 'json',
    success: function(response) {
      var listNum = [];
      var readingTitle = [];
      var readingUrl = [];
      var readingList = JSON.stringify(Object.keys(response.list));
      var readingListLength = JSON.stringify(Object.keys(response.list).length);
      for (i = 0; i < readingListLength; i++) {
        listNum.push(JSON.parse(readingList)[i])
      }

      Object.keys(listNum).forEach(function(key) {
        if (response.list[listNum[key]].resolved_title != "") {
          readingTitle.push(response.list[listNum[key]].resolved_title)
        }
        readingUrl.push(response.list[listNum[key]].resolved_url)
      });

      var readingTitle = readingTitle.reverse();
      var readingUrl = readingUrl.reverse();
      var table = document.getElementById("myTable");
      for (var i = 0; i < readingTitle.length; i++) {
        var row = table.insertRow(i);
        var cell = row.insertCell(0);
        cell.innerHTML = "<a target='_blank' href='" + readingUrl[i] + "'>" + readingTitle[i] + "</a>"
      }
      $('.lds-ripple').hide()

    },

    error: function(error) {
      console.log("Something went wrong", error)
    }
  })
}
