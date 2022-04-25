function fixThings() {
  console.log('find and fix');
  elems = document.querySelectorAll('div[class*="Feed--entry-container--"]');
  elems.forEach((element) => {
    var c = element.childNodes[0];
    if (c.hasAttribute("data-rank")) {
      if (c.getAttribute("data-rank").indexOf(".") == -1) {
        remove(element);
      }
    }
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
var observer = new MutationObserver(function(mutations, observer) {
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
  console.log('doing something');
  var div = document.querySelector("div[class='card-section']");
  if (div == null) return;
  div.innerHTML = "";

  var parser = new DOMParser();
  var doc = parser.parseFromString(data, "text/html");
  div.append(doc.querySelector("ul.recent-activities"));
}