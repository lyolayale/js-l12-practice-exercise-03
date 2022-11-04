/*
- Purpose: Practice fetch --> host file
- Date: 04-NOV-2022
*/

// ==== variables ====
const notRegistered = document.querySelector(".not-registered");

// ==== async functions ====
const getRegistrationData = async function (
  url = "https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"
) {
  const request = await fetch(url);
  const data = await request.json();
  displayContactList(data);
  console.log(data);
};

// ==== function expression ====
const displayContactList = function (data) {
  data.forEach(function (item) {
    if (item.registered === "no") {
      const li = document.createElement("li");
      li.innerText = item.name;
      notRegistered.append(li);
    }
  });
};

getRegistrationData();
