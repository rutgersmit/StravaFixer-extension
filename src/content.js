function find() {
  var elems = document.querySelectorAll(
    'div[data-react-class="ChallengeJoin"], div[data-react-class="FancyPromo"], div[data-testid="celebration_container"], div[data-react-class="ChallengeJoin"], div[data-react-class="SimplePromo"], div[data-react-class="ClubJoin"]'
  );
  elems.forEach((element) => {
    removeParent(element);
  });

  elems = document.querySelectorAll(
    'li[class="nav-item upgrade"], div[class="modal-backdrop fade in"], div[id="flybyModal"], div[id="your-challenges"], div[class="section sidebar-footer"], div[class="sharing"], div[id="trophy-case-summary"], a[href="/challenges"]'
  );
  elems.forEach((element) => {
    remove(element);
  });

  var element = document.querySelector(
    'div[id="suggested-follows"], a[class="btn-section-link"]'
  );
  if (element !== null) remove(element);
}

function remove(elem) {
  fix(elem);
}
function removeParent(elem) {
  fix(elem.parentElement);
}
function fix(elem) {
  elem.style.display = "none";
}

find();
getActivities();

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}

function getActivities() {
  httpGetAsync("https://www.strava.com/athlete/training", parseActivities);
}

function parseActivities(data) {
  var div = document.querySelector("div[class='card-section']");
  if (div == null) return;
  div.innerHTML = '';

  var parser = new DOMParser();
  var doc = parser.parseFromString(data, "text/html");
  div.append(doc.querySelector("ul.recent-activities"));
}
