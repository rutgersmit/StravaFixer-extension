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

  var element = document.querySelector('div[id="suggested-follows"], a[class="btn-section-link"]');
  if(element !== null)
    remove(element);
}

function remove(elem) { fix(elem); }
function removeParent(elem) { fix(elem.parentElement); }
function fix(elem) { elem.style.display = "none"; }

find();
