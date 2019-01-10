var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Identify who has the most followers over 30
function mostFollowersOver30(socialData){
  var oldFollowers = [];
  return nameFinder(oldFollowers, socialData);
}
console.log("Who has the most followers over 30?", mostFollowersOver30(data));

// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)


// Identify who follows the most people
function followsTheMostPeople (socialData) {
  var max = 0;
  var maxPerson = "";
  for (var id in socialData) {
    var numberFollows = socialData[id].follows.length;
    if (numberFollows > max) {
      max = numberFollows;
      maxPerson = socialData[id].name;
    }
  }
  return maxPerson;
}
console.log("Who follows the most people?", followsTheMostPeople(data));

// Identify who follows the most over 30
function mostFollowsOver30 (socialData) {
  var obj = {};
  var maxPerson30 = "";
  for (var id in socialData){
    var follows = socialData[id].follows;
    for (var i = 0; i < follows.length; i++) {
      var id = follows[i];
      if(socialData[id].age > 30){
        if(!obj[id]){
          obj[id] = 1;
        }
        else{
          obj[id]++;
        }
      }
    }
  }
  var max = 0;
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  var persons = [];
  for (var key in obj) {
    if(obj[key] === max) {
      persons.push(key);
    }
  }
  return nameFinder(persons, socialData);
}
console.log("Who follows the most people over 30?", mostFollowsOver30(data));


// List everyone and for each of them, list the names of who they follow and who follows them
function summaryList (socialData) {
  var summary = {};
  for(var id in socialData) {
    var name = socialData[id].name;
    summary[name] = {
      follows: followersNames(id, socialData),
      followedBy: followedBy(id, socialData)
    };
  }
  return summary;
}
console.log("Who follows whom, and who follows them?", summaryList(data));

// Identify who has the most followers
function mostFollowers(socialData) {
  var obj = numberOfFollowers(socialData);
  var max = 0;
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  var persons = [];
  for (var key in obj) {
    if(obj[key] === max) {
      persons.push(key);
    }
  }
return nameFinder(persons, socialData);
}
console.log("Who has the most followers?", mostFollowers(data));

// HELPER for summaryList()
function followersNames (pId, socialData) {
  var follows = socialData[pId].follows;
  var namesFollows = [];
  for (var i = 0; i < follows.length; i++) {
    for(var id in socialData) {
      var name = socialData[id].name;
      if(id === follows[i]) {
        namesFollows.push(name);
      }
    };
  }
  return namesFollows;
}

// HELPER for summaryList()
function followedBy(pId, socialData) {
  var followedByNames = [];
  for (var id in socialData){
    var follows = socialData[id].follows;
    for (var i = 0; i < follows.length; i++) {
      var fId = follows[i];
      if(fId === pId)
      {
      followedByNames.push(socialData[id].name);
      }
    }
  }
  return followedByNames;
}


// HELPER for mostFollowers()
function numberOfFollowers(socialData) {
  var obj = {};
  for (var id in socialData){
    var follows = socialData[id].follows;
    for (var i = 0; i < follows.length; i++) {
      var id = follows[i];
      if(!obj[id]){
        obj[id] = 1;
      }
      else{
        obj[id]++;
      }
    }
  }
  return obj;
}

// HELPER - take array of ids and return list of names
function nameFinder(arrOfIds, salesData){
  var foundNames = '';
  for (var i = 0; i < arrOfIds.length; i++) {
    var foundId = arrOfIds[i];
    var foundName = salesData[foundId].name;
    if (i < arrOfIds.length - 2){
      foundNames = foundNames + foundName + ", ";
    } else if (i < arrOfIds.length - 1) {
      foundNames = foundNames + foundName;
    } else {
      foundNames = foundNames + " and " + foundName + ".";
    }
  }
  return foundNames;
}

