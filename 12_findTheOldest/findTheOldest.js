const findTheOldest = function(people) {
  let currentYear = new Date().getFullYear();
  
    withAges = people.map( x => {
      for (i = 1; i <= people.length; i++) {
        if (x.yearOfDeath == undefined) {
          x.age = Number(currentYear) - Number(x.yearOfBirth);
          return x; 
        } 
        else {
        x.age = Number(x.yearOfDeath) - Number(x.yearOfBirth); 
        return x;
        }
        }
    });
  
    let max = Math.max(...withAges.map(x => { return x.age; }));
    let maxFind = withAges.find((x => { return Number(x.age) == Number(max); }));
    return maxFind;
    
};

// Do not edit below this line
module.exports = findTheOldest;


