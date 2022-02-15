const companies = [
{name: "Company one", category: "Finance", start: 1981, end: 2003},
{name: "Company two", category: "Retail", start: 1992, end: 2008},
{name: "Company three", category: "Auto", start: 1999, end: 2007},
{name: "Company four", category: "Retail", start: 1989, end: 2010},
{name: "Company five", category: "Technology", start: 2009, end: 2014},
{name: "Company six", category: "Finance", start: 1987, end: 2010},
{name: "Company seven", category: "Auto", start: 1986, end: 1996},
{name: "Company eight", category: "Technology", start: 2011, end: 2016},
{name: "Company nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

//companies.forEach(function(company){
   // console.log(company);
//})

//filter

// const canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 18) {
//         canDrink.push(ages[i]);
//     }
// }
// const canDrink = ages.filter(function(age) {
//     if (age >= 18) {
//         return true;
//     }
// });
//this is how you do it ARMAAAAA 
// const canDrink = ages.filter(age => age >= 18);
// console.log(canDrink)

// const retailCompanies = companies.filter(function (company){
//     if(company.category === 'Retail') {
//         return true;
//     }
// })

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// const eightiesCompanies = companies.filter (company => company.start >= 1980 && company.end <= 1990)


//map 

//create array of company names

// const companyNames = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`
// });

// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

// const agesSquare = ages.map(age => Math.sqrt(age))
// console.log(agesSquare)

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 16 - 15 / 2)
// console.log(ageMap);

//sort 

// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
//sort ages

// const sortAges = ages.sort((a, b)=> a - b);

// console.log(sortAges)


//reduce

// const ageSum = 0;
// for(const i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }
// const ageSum = ages.reduce((total,age) => total + age, 0)
// // console.log(ageSum);

//combine methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)
console.log(combined)

