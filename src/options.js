function save_options() {
  var hideJoiningChallanges = el("hideJoiningChallanges").checked;
  var hideJoinClubs = el("hideJoinClubs").checked;
  //var hideTrophies = el("hideTrophies").checked;
  var hideCommutes = el("hideCommutes").checked;
  var hideSidebarFooter = el("hideSidebarFooter").checked;
  var hideShareButtons = el("hideShareButtons").checked;
  var hideSuggestedFriends = el("hideSuggestedFriends").checked;
  var hideGiveSubscriptionButton = el("hideGiveSubscriptionButton").checked;
  var showLast5Activities = el("showLast5Activities").checked;
  var hiderun = el("hiderun").checked;
  var hideride = el("hideride").checked;
  var hideswim = el("hideswim").checked;
  var hidehike = el("hidehike").checked;
  var hidewalk = el("hidewalk").checked;
  var hidealpineski = el("hidealpineski").checked;
  var hidebackcountryski = el("hidebackcountryski").checked;
  var hidecanoe = el("hidecanoe").checked;
  var hidecrossfit = el("hidecrossfit").checked;
  var hideebikeride = el("hideebikeride").checked;
  var hideelliptical = el("hideelliptical").checked;
  var hidegolf = el("hidegolf").checked;
  var hidehandcycle = el("hidehandcycle").checked;
  var hideiceskate = el("hideiceskate").checked;
  var hideinlineskate = el("hideinlineskate").checked;
  var hidekayaking = el("hidekayaking").checked;
  var hidekitesurf = el("hidekitesurf").checked;
  var hidenordicski = el("hidenordicski").checked;
  var hiderockclimb = el("hiderockclimb").checked;
  var hiderollerski = el("hiderollerski").checked;
  var hiderowing = el("hiderowing").checked;
  var hidesail = el("hidesail").checked;
  var hideskateboard = el("hideskateboard").checked;
  var hidesnowboard = el("hidesnowboard").checked;
  var hidesnowshoe = el("hidesnowshoe").checked;
  var hidesoccer = el("hidesoccer").checked;
  var hidestairstepper = el("hidestairstepper").checked;
  var hidestanduppaddling = el("hidestanduppaddling").checked;
  var hidesurfing = el("hidesurfing").checked;
  var hidevelomobile = el("hidevelomobile").checked;
  var hidevirtualride = el("hidevirtualride").checked;
  var hidevirtualrun = el("hidevirtualrun").checked;
  var hideweighttraining = el("hideweighttraining").checked;
  var hidewheelchair = el("hidewheelchair").checked;
  var hidewindsurf = el("hidewindsurf").checked;
  var hideworkout = el("hideworkout").checked;
  var hideyoga = el("hideyoga").checked;

  chrome.storage.sync.set(
    {
      hideJoiningChallanges: hideJoiningChallanges,
      hideJoinClubs: hideJoinClubs,
      //hideTrophies: hideTrophies,
      hideCommutes: hideCommutes,
      hideSidebarFooter: hideSidebarFooter,
      hideShareButtons: hideShareButtons,
      hideSuggestedFriends: hideSuggestedFriends,
      hideGiveSubscriptionButton: hideGiveSubscriptionButton,
      showLast5Activities: showLast5Activities,
      hiderun: hiderun,
      hideride: hideride,
      hideswim: hideswim,
      hidehike: hidehike,
      hidewalk: hidewalk,
      hidealpineski: hidealpineski,
      hidebackcountryski: hidebackcountryski,
      hidecanoe: hidecanoe,
      hidecrossfit: hidecrossfit,
      hideebikeride: hideebikeride,
      hideelliptical: hideelliptical,
      hidegolf: hidegolf,
      hidehandcycle: hidehandcycle,
      hideiceskate: hideiceskate,
      hideinlineskate: hideinlineskate,
      hidekayaking: hidekayaking,
      hidekitesurf: hidekitesurf,
      hidenordicski: hidenordicski,
      hiderockclimb: hiderockclimb,
      hiderollerski: hiderollerski,
      hiderowing: hiderowing,
      hidesail: hidesail,
      hideskateboard: hideskateboard,
      hidesnowboard: hidesnowboard,
      hidesnowshoe: hidesnowshoe,
      hidesoccer: hidesoccer,
      hidestairstepper: hidestairstepper,
      hidestanduppaddling: hidestanduppaddling,
      hidesurfing: hidesurfing,
      hidevelomobile: hidevelomobile,
      hidevirtualride: hidevirtualride,
      hidevirtualrun: hidevirtualrun,
      hideweighttraining: hideweighttraining,
      hidewheelchair: hidewheelchair,
      hidewindsurf: hidewindsurf,
      hideworkout: hideworkout,
      hideyoga: hideyoga,
    }
  );
}

// Restores select box and checkbox state using the preferences
function restore_options() {
  chrome.storage.sync.get(
    {
      hideJoiningChallanges: false,
      hideJoinClubs: false,
      //hideTrophies: false,
      hideCommutes: false,
      hideSidebarFooter: false,
      hideShareButtons: false,
      hideSuggestedFriends: false,
      hideGiveSubscriptionButton: false,
      showLast5Activities: false,
      hiderun: false,
      hideride: false,
      hideswim: false,
      hidehike: false,
      hidewalk: false,
      hidealpineski: false,
      hidebackcountryski: false,
      hidecanoe: false,
      hidecrossfit: false,
      hideebikeride: false,
      hideelliptical: false,
      hidegolf: false,
      hidehandcycle: false,
      hideiceskate: false,
      hideinlineskate: false,
      hidekayaking: false,
      hidekitesurf: false,
      hidenordicski: false,
      hiderockclimb: false,
      hiderollerski: false,
      hiderowing: false,
      hidesail: false,
      hideskateboard: false,
      hidesnowboard: false,
      hidesnowshoe: false,
      hidesoccer: false,
      hidestairstepper: false,
      hidestanduppaddling: false,
      hidesurfing: false,
      hidevelomobile: false,
      hidevirtualride: false,
      hidevirtualrun: false,
      hideweighttraining: false,
      hidewheelchair: false,
      hidewindsurf: false,
      hideworkout: false,
      hideyoga: false,
    },
    function (items) {
      el("hideJoiningChallanges").checked = items.hideJoiningChallanges;
      el("hideJoinClubs").checked = items.hideJoinClubs;
      //el("hideTrophies").checked = items.hideTrophies;
      el("hideCommutes").checked = items.hideCommutes;
      el("hideSidebarFooter").checked = items.hideSidebarFooter;
      el("hideShareButtons").checked = items.hideShareButtons;
      el("hideSuggestedFriends").checked = items.hideSuggestedFriends;
      el("hideGiveSubscriptionButton").checked = items.hideGiveSubscriptionButton;
      el("showLast5Activities").checked = items.showLast5Activities;
      el("hiderun").checked = items.hiderun;
      el("hideride").checked = items.hideride;
      el("hideswim").checked = items.hideswim;
      el("hidehike").checked = items.hidehike;
      el("hidewalk").checked = items.hidewalk;
      el("hidealpineski").checked = items.hidealpineski;
      el("hidebackcountryski").checked = items.hidebackcountryski;
      el("hidecanoe").checked = items.hidecanoe;
      el("hidecrossfit").checked = items.hidecrossfit;
      el("hideebikeride").checked = items.hideebikeride;
      el("hideelliptical").checked = items.hideelliptical;
      el("hidegolf").checked = items.hidegolf;
      el("hidehandcycle").checked = items.hidehandcycle;
      el("hideiceskate").checked = items.hideiceskate;
      el("hideinlineskate").checked = items.hideinlineskate;
      el("hidekayaking").checked = items.hidekayaking;
      el("hidekitesurf").checked = items.hidekitesurf;
      el("hidenordicski").checked = items.hidenordicski;
      el("hiderockclimb").checked = items.hiderockclimb;
      el("hiderollerski").checked = items.hiderollerski;
      el("hiderowing").checked = items.hiderowing;
      el("hidesail").checked = items.hidesail;
      el("hideskateboard").checked = items.hideskateboard;
      el("hidesnowboard").checked = items.hidesnowboard;
      el("hidesnowshoe").checked = items.hidesnowshoe;
      el("hidesoccer").checked = items.hidesoccer;
      el("hidestairstepper").checked = items.hidestairstepper;
      el("hidestanduppaddling").checked = items.hidestanduppaddling;
      el("hidesurfing").checked = items.hidesurfing;
      el("hidevelomobile").checked = items.hidevelomobile;
      el("hidevirtualride").checked = items.hidevirtualride;
      el("hidevirtualrun").checked = items.hidevirtualrun;
      el("hideweighttraining").checked = items.hideweighttraining;
      el("hidewheelchair").checked = items.hidewheelchair;
      el("hidewindsurf").checked = items.hidewindsurf;
      el("hideworkout").checked = items.hideworkout;
      el("hideyoga").checked = items.hideyoga;
    }
  );
}

function el(el) {
  return document.getElementById(el);
}

const inputElements = document.querySelectorAll('input');
inputElements.forEach((el) => {
  el.addEventListener("change", function() {
    save_options();
  });
});

document.addEventListener("DOMContentLoaded", restore_options);
