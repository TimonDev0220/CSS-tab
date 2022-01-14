var flag = { Moster:0 , Transaction:0 , Reports: 0 , Outstanding: 0 , Accounts: 0 , TRANSPORT: 0 , TRANSPORTREPORTS: 0 , INCIDENTS : 0};
var cities = ['Moster', 'Transaction' , 'Reports', 'Outstanding', "Accounts", 'TRANSPORT', 'TRANSPORTREPORTS' , 'INCIDENTS'];
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  flag[cityName] = flag[cityName] + 1;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  if(flag[cityName] % 2 != 0)
    document.getElementById(cityName).style.display = "block";
  for (i = 0 ; i < cities.length ; i ++) {
    if (cities[i] == cityName) {

    }
    else {
      flag[cities[i]] = 0;
    }
  }
  evt.currentTarget.className += " active";
}

