// the fitnessScore function
  //input: a specific arangement in the population.
  //output: a positive, negative, or netural score. the more positive the score the more fit. 

var data = [
    {
        "timestamp": "2017-05-01T18:43:45.112Z",
        "yourName": "kimJongUn",
        "walterWhite": -5,
        "stephenColbert": -5,
        "albertEinstein": 1,
        "rickSanchez": 1,
        "donaldTrump": 1,
        "hannahMontana": 1,
        "georgeWashington": 1,
        "pikachu": -5,
        "louisCk": -5
    },
    {
        "timestamp": "2017-05-01T18:44:28.417Z",
        "yourName": "borat",
        "walterWhite": 1,
        "arthurDent": 1,
        "danielBoone": 1,
        "albertEinstein": 1,
        "rickSanchez": 1,
        "sterlingArcher": -5,
        "donaldTrump": 1,
        "homerSimpson": -5,
        "kimJongUn": -5,
        "billNyeTheScienceGuy": 1,
        "hannahMontana": 1,
        "georgeWashington": 1,
        "pikachu": 1,
        "bruceWayne": 1,
        "louisCk": 1,
        "kanyeWest": 1,
        "elsa": 1
    },
    {
        "timestamp": "2017-05-01T18:45:36.859Z",
        "yourName": "michaelScott",
        "stephenColbert": -5,
        "albertEinstein": -5,
        "spongeBob": 1,
        "sterlingArcher": 1,
        "donaldTrump": 1,
        "kimJongUn": -5,
        "billNyeTheScienceGuy": 1,
        "bojackHorseman": 1,
        "borat": 1
    },
    {
        "timestamp": "2017-05-01T18:46:19.207Z",
        "yourName": "wonderWoman",
        "walterWhite": 1,
        "albertEinstein": 1,
        "donaldTrump": -5,
        "kimJongUn": -5
    },
    {
        "timestamp": "2017-05-01T18:46:19.899Z",
        "yourName": "danielBoone",
        "kimJongUn": -5,
        "jeanLucPicard": 1,
        "georgeWashington": 1,
        "frodo": 1
    },
    {
        "timestamp": "2017-05-01T18:46:30.923Z",
        "yourName": "courageTheCowardlyDog",
        "rickSanchez": 1,
        "spongeBob": 1,
        "sterlingArcher": 1,
        "hobbes": 1,
        "homerSimpson": 1,
        "pikachu": 1,
        "bojackHorseman": 1,
        "bugsBunny": 1,
        "bruceWayne": 1,
        "superman": 1,
        "borat": -5,
        "pinky": 1,
        "wonderWoman": 1,
        "heman": 1
    },
    {
        "timestamp": "2017-05-01T18:46:34.137Z",
        "yourName": "pinky",
        "walterWhite": 1,
        "arthurDent": 1,
        "danielBoone": 1,
        "stephenColbert": 1,
        "albertEinstein": 1,
        "rickSanchez": 1,
        "spongeBob": 1,
        "sterlingArcher": 1,
        "hobbes": 1,
        "donaldTrump": 1,
        "homerSimpson": 1,
        "kimJongUn": 1,
        "michaelScott": 1,
        "billNyeTheScienceGuy": 1,
        "jeanLucPicard": 1,
        "hannahMontana": 1,
        "georgeWashington": 1,
        "pikachu": 1,
        "bojackHorseman": 1,
        "bugsBunny": 1,
        "bruceWayne": 1,
        "superman": 1,
        "borat": 1,
        "pinky": 1,
        "louisCk": 1,
        "frodo": 1,
        "courageTheCowardlyDog": 1,
        "wonderWoman": 1,
        "albusPercivalWulfricBrianDumbledore": 1,
        "kanyeWest": 1,
        "elsa": 1,
        "rickGrimes": 1,
        "heman": 1
    },
    {
        "timestamp": "2017-05-01T18:46:37.716Z",
        "yourName": "frodo",
        "walterWhite": -5,
        "donaldTrump": -5,
        "kimJongUn": -5,
        "jeanLucPicard": 1,
        "georgeWashington": 1,
        "courageTheCowardlyDog": 1,
        "albusPercivalWulfricBrianDumbledore": 1
    },
    {
        "timestamp": "2017-05-01T18:46:56.896Z",
        "yourName": "sterlingArcher",
        "danielBoone": -5,
        "albertEinstein": 1,
        "donaldTrump": -5,
        "billNyeTheScienceGuy": 1,
        "pinky": 1
    },
    {
        "timestamp": "2017-05-01T18:47:51.217Z",
        "yourName": "hannahMontana",
        "danielBoone": 1,
        "stephenColbert": 1,
        "albertEinstein": 1,
        "rickSanchez": -5,
        "spongeBob": 1,
        "sterlingArcher": -5,
        "hobbes": 1,
        "billNyeTheScienceGuy": 1,
        "georgeWashington": 1,
        "superman": 1,
        "pinky": 1,
        "elsa": 1
    },
    {
        "timestamp": "2017-05-01T18:48:11.512Z",
        "yourName": "louisCk",
        "stephenColbert": 1,
        "donaldTrump": -5,
        "kimJongUn": -5,
        "billNyeTheScienceGuy": 1,
        "louisCk": 1
    },
    {
        "timestamp": "2017-05-01T18:48:14.724Z",
        "yourName": "superman",
        "walterWhite": 1,
        "danielBoone": -5,
        "pinky": -5,
        "wonderWoman": -5,
        "kanyeWest": 1,
        "elsa": 1,
        "rickGrimes": 1,
        "heman": 1
    },
    {
        "timestamp": "2017-05-01T18:49:30.640Z",
        "yourName": "arthurDent",
        "walterWhite": -5,
        "danielBoone": 1,
        "albertEinstein": 1,
        "donaldTrump": -5,
        "kimJongUn": -5,
        "billNyeTheScienceGuy": 1,
        "jeanLucPicard": 1,
        "superman": 1,
        "louisCk": 1
    },
    {
        "timestamp": "2017-05-01T18:50:06.854Z",
        "yourName": "stephenColbert",
        "walterWhite": 1,
        "albertEinstein": 1,
        "spongeBob": -5,
        "donaldTrump": -5,
        "kimJongUn": -5,
        "billNyeTheScienceGuy": 1
    },
    {
        "timestamp": "2017-05-01T18:51:30.356Z",
        "yourName": "billNyeTheScienceGuy",
        "albertEinstein": 1,
        "rickSanchez": 1,
        "donaldTrump": -5,
        "jeanLucPicard": 1,
        "albusPercivalWulfricBrianDumbledore": 1
    },
    {
        "timestamp": "2017-05-01T18:51:48.578Z",
        "yourName": "elsa",
        "donaldTrump": -5,
        "kimJongUn": -5,
        "michaelScott": -5,
        "hannahMontana": 1,
        "georgeWashington": -5,
        "pikachu": 1,
        "bugsBunny": -5,
        "superman": 1,
        "pinky": -5,
        "frodo": 1,
        "wonderWoman": 1,
        "albusPercivalWulfricBrianDumbledore": 1,
        "heman": 1
    },
    {
        "timestamp": "2017-05-01T18:51:53.994Z",
        "yourName": "rickSanchez",
        "albertEinstein": -5,
        "homerSimpson": 1,
        "michaelScott": 1,
        "georgeWashington": -5,
        "pinky": 1,
        "albusPercivalWulfricBrianDumbledore": -5
    },
    {
        "timestamp": "2017-05-01T18:51:57.185Z",
        "yourName": "heman",
        "walterWhite": -5,
        "arthurDent": 1,
        "danielBoone": 1,
        "stephenColbert": 1,
        "rickSanchez": 1
    },
    {
        "timestamp": "2017-05-01T18:52:02.641Z",
        "yourName": "albertEinstein",
        "danielBoone": 1,
        "albertEinstein": 1,
        "kimJongUn": -5,
        "billNyeTheScienceGuy": 1,
        "bojackHorseman": -5,
        "borat": -5
    },
    {
        "timestamp": "2017-05-01T18:53:22.711Z",
        "yourName": "rickGrimes",
        "walterWhite": 1,
        "arthurDent": -5,
        "danielBoone": -5,
        "stephenColbert": -5,
        "albertEinstein": 1,
        "rickSanchez": -5,
        "spongeBob": 1,
        "sterlingArcher": 1,
        "hobbes": -5,
        "donaldTrump": -5,
        "homerSimpson": 1,
        "kimJongUn": 1,
        "michaelScott": 1,
        "billNyeTheScienceGuy": 1,
        "jeanLucPicard": 1,
        "hannahMontana": -5,
        "georgeWashington": -5,
        "pikachu": 1,
        "bojackHorseman": -5,
        "bugsBunny": -5,
        "bruceWayne": -5,
        "superman": 1,
        "borat": 1,
        "louisCk": -5,
        "frodo": 1,
        "courageTheCowardlyDog": -5,
        "wonderWoman": 1,
        "albusPercivalWulfricBrianDumbledore": -5,
        "kanyeWest": 1,
        "elsa": 1,
        "rickGrimes": 1,
        "heman": -5
    },
    {
        "timestamp": "2017-05-01T18:53:39.667Z",
        "yourName": "donaldTrump",
        "walterWhite": 1,
        "stephenColbert": -5,
        "albertEinstein": -5,
        "spongeBob": 1,
        "hobbes": 1,
        "donaldTrump": 1,
        "homerSimpson": 1,
        "kimJongUn": -5,
        "michaelScott": 1,
        "billNyeTheScienceGuy": -5,
        "jeanLucPicard": -5,
        "georgeWashington": -5,
        "pikachu": 1,
        "bruceWayne": -5,
        "superman": -5,
        "borat": 1,
        "pinky": -5,
        "louisCk": -5,
        "frodo": -5,
        "courageTheCowardlyDog": -5,
        "wonderWoman": 1,
        "albusPercivalWulfricBrianDumbledore": -5,
        "kanyeWest": 1,
        "elsa": -5
    },
    {
        "timestamp": "2017-05-01T18:56:17.768Z",
        "yourName": "spongeBob",
        "walterWhite": 1,
        "arthurDent": 1,
        "danielBoone": 1,
        "stephenColbert": 1,
        "albertEinstein": 1,
        "rickSanchez": 1,
        "spongeBob": 1,
        "sterlingArcher": 1,
        "hobbes": 1,
        "donaldTrump": 1,
        "homerSimpson": 1,
        "kimJongUn": 1,
        "michaelScott": 1,
        "billNyeTheScienceGuy": 1,
        "jeanLucPicard": 1,
        "hannahMontana": 1,
        "georgeWashington": 1,
        "pikachu": 1,
        "bojackHorseman": 1,
        "bugsBunny": 1,
        "bruceWayne": 1,
        "superman": 1,
        "borat": 1,
        "pinky": 1,
        "louisCk": 1,
        "frodo": 1,
        "courageTheCowardlyDog": 1,
        "wonderWoman": 1,
        "albusPercivalWulfricBrianDumbledore": 1,
        "kanyeWest": 1,
        "elsa": 1,
        "rickGrimes": 1,
        "heman": 1
    },
    {
        "timestamp": "2017-05-01T18:57:19.799Z",
        "yourName": "bojackHorseman",
        "walterWhite": -5,
        "spongeBob": 1,
        "sterlingArcher": 1,
        "donaldTrump": -5,
        "kanyeWest": 1
    },
    {
        "timestamp": "2017-05-01T18:59:10.910Z",
        "yourName": "jeanLucPicard",
        "arthurDent": -5,
        "albertEinstein": 1,
        "rickSanchez": 1,
        "billNyeTheScienceGuy": 1
    },
    {
        "timestamp": "2017-05-01T19:05:24.592Z",
        "yourName": "georgeWashington",
        "walterWhite": 1,
        "stephenColbert": 1,
        "hobbes": 1,
        "donaldTrump": -5,
        "homerSimpson": -5,
        "kimJongUn": -5
    },
    {
        "timestamp": "2017-05-01T19:06:09.719Z",
        "yourName": "hobbes",
        "danielBoone": -5,
        "stephenColbert": 1,
        "albertEinstein": 1,
        "rickSanchez": -5,
        "kimJongUn": -5,
        "michaelScott": 1,
        "bruceWayne": 1,
        "superman": 1,
        "courageTheCowardlyDog": -5,
        "albusPercivalWulfricBrianDumbledore": 1
    },
    {
        "timestamp": "2017-05-01T19:06:14.225Z",
        "yourName": "pikachu",
        "stephenColbert": 1,
        "spongeBob": 1,
        "hobbes": 1,
        "donaldTrump": -5,
        "homerSimpson": -5,
        "kimJongUn": -5,
        "michaelScott": 1,
        "bugsBunny": 1,
        "elsa": 1
    },
    {
        "timestamp": "2017-05-01T19:07:53.841Z",
        "yourName": "kanyeWest",
        "albertEinstein": 1,
        "donaldTrump": 1,
        "kimJongUn": -5,
        "kanyeWest": 1
    },
    {
        "timestamp": "2017-05-01T21:03:52.066Z",
        "yourName": "albusPercivalWulfricBrianDumbledore",
        "stephenColbert": 1,
        "albertEinstein": 1,
        "rickSanchez": 1,
        "sterlingArcher": 1,
        "hobbes": 1,
        "donaldTrump": -5,
        "billNyeTheScienceGuy": 1,
        "jeanLucPicard": 1,
        "pikachu": 1,
        "bruceWayne": 1,
        "superman": 1,
        "frodo": 1,
        "albusPercivalWulfricBrianDumbledore": 1
    }
]

function _calculatefitnessScore(arrangement) {
  var copyOfArrangement = Array.prototype.slice.call(arrangement);
  var fitnessScoreTally = 0;
  //slice off 4 names at a time to create a team
  while (copyOfArrangement.length > 0) {
    var team = copyOfArrangement.splice(0,4);
    console.log('* team.length ->', team.length);
    //for each member of the team
    for (var i = 0; i < team.length; i++) {
      for (var j = 0; j < team.length; j++) {
        var memberToCompare = team[j].yourName;
        if (team[i][memberToCompare]) {
          fitnessScoreTally += team[i][memberToCompare];
        }
      }
    }
  }
  // console.log('fitnesScoreTally: ', fitnessScoreTally);
  return fitnessScoreTally;
}

function randomArrangementGenerator(arrangement) {
  var arrangementLength = arrangement.length;
  var copyOfArrangement = Array.prototype.slice.call(arrangement);
  var newArrangement = [];
  
  while (newArrangement.length < arrangementLength) {
    var randomNumber = Math.floor( Math.random() * copyOfArrangement.length );
    newArrangement.push( copyOfArrangement.splice(randomNumber, 1)[0] );  //splice and push number from random index into newArrangement
  }
  // console.log('newArrangement: ', newArrangement);
  return newArrangement;
}

function randomPoolGenerator(arrangement, numberOfArrangements) {
  var newPool = [];

  for (var i = 0; i < numberOfArrangements; i++) {
    newPool.push(randomArrangementGenerator(arrangement));
  }
  // console.log('** newPool from randomPoolGenerator ->', newPool);
  // console.log('newPool.length: ', newPool.length);
  return newPool;
}

function _calculatePoolFitnessScore(pool) {
  var fitnessScoreHashTable = {};

  for (var i = 0; i < pool.length; i++) {
    var currentArrangement = pool[i];
    fitnessScoreHashTable[i] = _calculatefitnessScore(currentArrangement);
  }
  return fitnessScoreHashTable;
}

//sorts the hash and returns the index (location) of the lowest fitness arrangement
function _findLowestArrangement(hash) {
  var sortedHash = Object.keys(hash).sort(function(a,b){return hash[a] - hash[b]});
  return sortedHash[0];
}

function _findHighestArrangements(hash) {
  var sortedHash = Object.keys(hash).sort(function(a,b){return hash[b] - hash[a]});
  return [sortedHash[0], sortedHash[1]];
}

function _removeLowestArrangement(pool, index) {
  pool.splice(index, 1);
}

function _generateNewChildArrangement(pool, arr) {
  var parent1 = pool.slice(arr[0], arr[0] + 1);
  var parent2 = pool.slice(arr[1], arr[1] + 1);
  var newChildArrangement = [];
  
  var headsOrTails = function() { return (Math.floor(Math.random() * 2) == 0);}  //returns true or false

  for (var i = 0; i < parent1.length; i++) {
    headsOrTails ? newChildArrangement.push(parent1[i]) : newChildArrangement.push(parent1[i]);
  }
  return newChildArrangement;
}

function _addNewChildArrangement(pool, child) {
  pool.push(child);
}


randomArrangementGenerator(data);  //generates 1 random arrangement
randomPoolGenerator(data, 3); //generates a collection of arrangements (n number of arrangements)

// generateOneLifeCycle();
//  // ***** Helper Functions inside generateOneLifeCycle *****
// _calculatefitnessScore();  //calculates fitness score of 1 arrangement
  
// _calculatePoolFitnessScore();  //calculate fitness score of every arrangement in a pool, outputs hash_table
//   //input: pool  //output: scores(hash_table)
// _findLowestArrangement();  //find the index location of the arrangement of the lowest fitness score
//   //input: hash_table  //output: 1 index - location of the lowest fitness score in hash table
// _findHighestArrangements();  //find the 2 index locations of the 2 arrangements of the highest fitness scores
//   //input: hash_table  //output: array of 2 indicies - location of the 2 highest fitness scores in the hash table
// _removeLowestArrangement();  //deletes the lowest arragement from the pool returned from _findLowestArrangement
//   //input: 
// _generateReplacementArrangement();  //generates new arrangement, from array returned from _findHighestArrangements


function generateOneLifeCycle(pool) {
}

var sample_pool = randomPoolGenerator(data, 4);

generateOneLifeCycle(sample_pool);

function evolve(pool) {
  var hash = _calculatePoolFitnessScore(pool);
  // console.log('* hash ->', hash);
  var lowest = _findLowestArrangement(hash);
  // console.log('* lowest ->', lowest);
  var highests = _findHighestArrangements(hash);
  // console.log('* highests ->', highests);
  _removeLowestArrangement(pool, lowest);
  // console.log('* pool.length ->', pool.length);
  var child = _generateNewChildArrangement(pool, highests);
  // console.log('* child.length ->', child.length);
  _addNewChildArrangement(pool,child);
  // console.log('** pool inside generateOneLifeCycle ->', pool);
  if(???){
      return pool;
  } else {
      return evolve(pool)
  }
}
