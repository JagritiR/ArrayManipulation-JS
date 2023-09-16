const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  var n = data.length
  for(var i=0;i<n;i++)
  {
    console.log(data[i].name);
  }
}

// 2. Add Data
function addData() {
    const name = prompt('Enter name:');
    const age = parseInt(prompt('Enter age:'));
    const profession = prompt('Enter profession:');
    data.push({ name, age, profession });
    console.log(data)
  }


// 3. Remove Admins
function removeAdmin() {
    const filtereddata = data.filter(person => person.profession !== 'admin');
    console.log(filtereddata);
  }


// 4. Concatenate Array
function concatenateArray() {
    const arr2 = [
      { name: 'Aman',age: 32,profession: 'developer',},
      {name: 'Ankit',age: 26,profession: 'admin',},
    ];
    const arr3 = data.concat(arr2);
    console.log(arr3);
}

// 5. Average Age
function averageAge() {
  var n = data.length
  var sum = 0;
  for(var i=0;i<n;i++)
  {
    sum = sum+data[i].age;
  }
  sum = sum/n;
  console.log(sum)
}

// 6. Age Check
function checkAgeAbove25() {
    var above25 = data.some(person => person.age > 25);
    console.log(above25 ? 'There is at least one person above 25.' : 'No one is above 25.');
  
}

// 7. Unique Professions
function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log(professions);
  }


// 8. Sort by Age
function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    const john = data.find(person => person.name === 'john');
    if (john) {
      john.profession = 'manager';
      console.log(john);
    }
  }


// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(person => person.profession === 'developer').length;
    const adminCount = data.filter(person => person.profession === 'admin').length;
    console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
}
