const companies = [
    { name: "Company One", category: "FinTech", start: 1983, end: 2003 },
    { name: "Company Two", category: "Finance", start: 1992, end: 2008 },
    { name: "Company Three", category: "Retail", start: 1999, end: 2007 },
    { name: "Company Four", category: "Auto", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 1987, end: 2013 },
    { name: "Company Six", category: "Retail", start: 1987, end: 1997 },
    { name: "Company Seven", category: "Retail", start: 1987, end: 2015 },
    { name: "Company Eight", category: "Retail", start: 1979, end: 2011 },
    { name: "Company Nine", category: "FinTech", start: 1981, end: 1989 },
];

const ages = [33, 12, 21, 16, 73, 32, 35, 64, 45, 3, 55, 61, 75, 4, 23];

let domBody = document.getElementsByTagName('body')[0];
function createDiv(input) {
    let domDiv = document.createElement('div');
    typeof (input) == 'object' ? domDiv.innerText = JSON.stringify(input) : domDiv.innerText = input;
    domBody.appendChild(domDiv);
    let domBut = document.createElement('button');
    domBut.innerText = 'Delete';
    domBut.addEventListener('click', () => {
        domBody.removeChild(domDiv);
        domBody.removeChild(domBut);
    });
    domBody.appendChild(domBut);
}


// ------------------------------Use of Filter--------------------------------------

const filteredArray = companies.filter(company => company.category == 'Retail');
createDiv(filteredArray);
domBody.appendChild(document.createElement('hr'));

// Get 80s companies
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
createDiv(eightiesCompanies);
domBody.appendChild(document.createElement('hr'));

// Get companies that lasted more than 10years
const lastedTenYearsCompanies = companies.filter(company => company.end - company.start >= 10);
createDiv(lastedTenYearsCompanies);
domBody.appendChild(document.createElement('hr'));


// ------------------------------Use of Map----------------------------------------- 

// Create companies based on company names

const companyNames = companies.map(company =>
    `${company.category} ->[${company.name},${company.start}-${company.end}]`
);
createDiv(companyNames);
domBody.appendChild(document.createElement('hr'));

const companyNamesForAge = companies.map(company =>
    `${company.category} ->[${company.name}---${company.end - company.start}]`
);


// -------------------------------Use of Sort----------------------------------------
// Sort ages in ascending order

const sortAgesAsc = ages.sort((a, b) => a - b);


// Sort ages in descending order

const sortAgesDsc = ages.sort((a, b) => b - a);

// Sort order by companies ages ascending order

const sortCompsAsc = companies.sort((a, b) => (a.end - a.start) > (b.end - b.start) ? 1 : -1).map(
    company => `{${company.name} -> ${company.end - company.start}`
);
createDiv(sortCompsAsc);

// Sort order by companies ages descending order
const sortCompsDsc = companies.sort((a, b) => (a.end - a.start) < (b.end - b.start) ? 1 : -1).map(
    company => `${company.name} -> ${company.end - company.start}`
);
createDiv(sortCompsDsc)
domBody.appendChild(document.createElement('hr'));


// ------------------------------Use of reduce---------------------------------------

// find sum of ages
const ageSum = ages.reduce((total, age) =>
    total + age, 0
);

// Get total years of all the companies
const totalYearsOfComps = companies.reduce((total, company) =>
    total + (company.end - company.start), 0
);


// ---------------------------Use of combined method-------------------------------
const combined = ages
    .map(age => age * 3)
    .filter(age => age % 2 == 0)
    .sort((a, b) => a > b ? 1 : -1)
    .reduce((a, b) => a + b, 0);


createDiv(combined);
