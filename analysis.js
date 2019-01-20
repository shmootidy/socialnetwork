const data = {
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
function mostFollowersOver30(socialData){ // THIS IS INCOMPLETE!
  const oldFollowersArr = whoFollowsOldPeople(socialData);
  for (let i = 0; i < oldFollowersArr.length; i++) {
    const oldFollowers = oldFollowersArr[i];
  }
}
console.log("Who has the most followers over 30?", mostFollowersOver30(data));

function whoFollowsOldPeople(socialData){
  const oldFollowers = [];
  const oldUsers = whosOld(socialData);
  oldUsers.forEach(function(oldUser){
    for (const id in socialData){
      socialData[id].follows.forEach(function(oldFollower){
        if (oldFollower == oldUser){
          oldFollowers.push(id);
        }
      });
    }
  })
  return oldFollowers;
}

// console.log(whoFollowsOldPeople(data));


// Identify who follows the most people
function followsTheMostPeople (socialData) {
  const max = 0;
  const maxPerson = "";
  for (const id in socialData) {
    const numberFollows = socialData[id].follows.length;
    if (numberFollows > max) {
      max = numberFollows;
      maxPerson = socialData[id].name;
    }
  }
  return maxPerson;
}
// console.log("Who follows the most people?", followsTheMostPeople(data));

// Identify who follows the most over 30
function mostFollowsOver30 (socialData) {
  const obj = {};
  const maxPerson30 = "";
  for (const id in socialData){
    const follows = socialData[id].follows;
    for (let i = 0; i < follows.length; i++) {
      const id = follows[i];
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
  const max = 0;
  for (const key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  const persons = [];
  for (const key in obj) {
    if(obj[key] === max) {
      persons.push(key);
    }
  }
  return nameFinder(persons, socialData);
}
// console.log("Who follows the most people over 30?", mostFollowsOver30(data));


// List everyone and for each of them, list the names of who they follow and who follows them
function summaryList (socialData) {
  const summary = {};
  for(const id in socialData) {
    const name = socialData[id].name;
    summary[name] = {
      follows: followersNames(id, socialData),
      followedBy: followedBy(id, socialData)
    };
  }
  return summary;
}
// console.log("Who follows whom, and who follows them?", summaryList(data));

// Identify who has the most followers
function mostFollowers(socialData) {
  const obj = numberOfFollowers(socialData);
  const max = 0;
  for (const key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  const persons = [];
  for (const key in obj) {
    if(obj[key] === max) {
      persons.push(key);
    }
  }
return nameFinder(persons, socialData);
}
// console.log("Who has the most followers?", mostFollowers(data));

// HELPER for summaryList()
function followersNames (pId, socialData) {
  const follows = socialData[pId].follows;
  const namesFollows = [];
  for (let i = 0; i < follows.length; i++) {
    for(const id in socialData) {
      const name = socialData[id].name;
      if(id === follows[i]) {
        namesFollows.push(name);
      }
    };
  }
  return namesFollows;
}

// HELPER for summaryList()
function followedBy(pId, socialData) {
  const followedByNames = [];
  for (const id in socialData){
    const follows = socialData[id].follows;
    for (let i = 0; i < follows.length; i++) {
      const fId = follows[i];
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
  const obj = {};
  for (const id in socialData){
    const follows = socialData[id].follows;
    for (let i = 0; i < follows.length; i++) {
      const id = follows[i];
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
function nameFinder(arrOfIds, socialData){
  const foundNames = '';
  for (let i = 0; i < arrOfIds.length; i++) {
    const foundId = arrOfIds[i];
    const foundName = socialData[foundId].name;
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

// HELPER - who's old?
function whosOld(socialData){
  const oldId = [];
  for (const id in socialData){
    if (socialData[id].age > 30){
      oldId.push(id);
    }
  }
  return oldId;
}


// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)
module.exports = {
  mostFollowersOver30,
  whoFollowsOldPeople,
  followsTheMostPeople,
  mostFollowsOver30,
  summaryList,
  mostFollowers,
  followersNames,
  followedBy,
  numberOfFollowers,
  nameFinder,
  whosOld,
}