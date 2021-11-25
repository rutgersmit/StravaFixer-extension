function find(){
  var elems = document.querySelectorAll(
    'div[data-react-class="ChallengeJoin"], div[data-react-class="FancyPromo"], div[data-testid="celebration_container"]'
  );
  elems.forEach((element) => {
    removeParent(element)
  });

  elems = document.querySelectorAll(
    'li[class="nav-item upgrade"], div[class="modal-backdrop fade in"], div[id="flybyModal"], div[id="your-challenges"], div[class="section sidebar-footer"], div[class="sharing"], div[id="trophy-case-summary"], div[data-react-class="ChallengeJoin"]'
  );
  elems.forEach((element) => {
    remove(element);
  });
}

function remove(elem) {
  //console.log("Remove parent element");
  elem.remove();
}

function removeParent(elem) {
  //console.log("Remove element");
  elem.parentElement.remove();
}

find();
