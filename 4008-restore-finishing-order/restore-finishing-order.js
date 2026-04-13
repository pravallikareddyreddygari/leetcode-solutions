var recoverOrder = function(order, friends) {
     let friendsSet = new Set(friends); 
     let res=[]
  for (let person of order) {
    if (friendsSet.has(person)) {
      res.push(person);
    }
  }

  return res;
}