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



//notificationsDiv.id = "notifications-copy";

// notificationsDiv = document.querySelector('li[id="notifications-copy"]');
// notificationsDiv.querySelector('button[id="notifications-button"]').remove();
// //notificationsDiv.querySelector('div[class="notifications-drop-down"]').display =  "block";
var notificationsLi = document.querySelector('li[id="notifications"]');
var targetDiv = document.querySelector('div[class="col-md-3"]');

var nUl = document.createElement('ul');
nUl.appendChild(notificationsLi);

var nDiv = document.createElement("div");
nDiv.id = "your-notifications";
nDiv.classList.add("section");

var h3 = document.createElement("h3");
h3.appendChild(document.createTextNode("Your notifications"));
h3.className = 'text-callout section-title';
nDiv.appendChild(h3);
nDiv.appendChild(nUl);

targetDiv.insertBefore(nDiv, targetDiv.children[0]);
targetDiv.querySelector('button[id="notifications-button"]').remove();
targetDiv.querySelector('div[id="notifications-drop-down"]').style.display =  "block";
targetDiv.querySelector('div[id="notifications-drop-down"]').style.position='';
targetDiv.querySelector('div[id="notifications-drop-down"]').style.border = "";
targetDiv.querySelector('div[id="notifications-drop-down"]').style.width = "";
targetDiv.querySelector('div[id="notifications-drop-down"]').style.top = "";
