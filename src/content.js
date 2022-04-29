function fixThings() {
  var elems = document.querySelectorAll('div[class*="Feed--entry-container--"]');
  elems.forEach((element) => {
    var c = element.childNodes[0].childNodes.length;
    if (c == 2) {
      remove(element);
    }
  });

  elems = document.querySelectorAll(
    'li[class="nav-item upgrade"], div[class="modal-backdrop fade in"], div[id="flybyModal"], div[id="your-challenges"], div[class="section sidebar-footer"], div[class="sharing"], div[id="trophy-case-summary"], a[href="/challenges"]'
  );
  elems.forEach((element) => {
    remove(element);
  });

  elems = document.querySelectorAll('div[data-testid="celebration_container"]');
  elems.forEach((element) => {
    removeParent(element);
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

fixThings();

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const processChange = debounce(() => fixThings());
new MutationObserver(function () {
  processChange();
}).observe(document.querySelector('div[class="feed-container"]'), {
  childList: true,
  subtree: true,
});

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
  div.innerHTML = "";

  var parser = new DOMParser();
  var doc = parser.parseFromString(data, "text/html");
  div.append(doc.querySelector("ul.recent-activities"));
}


var notifications = document.querySelector('div[id="notifications-drop-down"]');
var targetDiv = document.querySelector('div[id="your-challenges"]');
targetDiv.insertBefore(notifications, targetDiv.children[0]);
document.getElementById("notifications-drop-down").style.display = 'inline';
document.getElementById("notifications-drop-down").style.position = 'unset';

document.querySelectorAll('img[class*="no-avatar"]').forEach(function (a) {
  a.src = a.dataset.src;
  a.classList.remove("no-avatar");
  a.classList.add("avatar");
  a.parentElement.style.padding = "10px 0px 10px 51px";
});
