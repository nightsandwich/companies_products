const faker = require('faker');

let companies, productMap;


//why does this come first?
companies = JSON.parse(window.localStorage.getItem('companies'));
productMap = JSON.parse(window.localStorage.getItem('productMap'));

if(!companies || !productMap){
    companies = new Array(50).fill('').map(_ => faker.company.companyName());
    window.localStorage.setItem('companies', JSON.stringify(companies));

    productMap = companies.reduce((acc,company)=> {
        //generates random number between 1 and 2 ??
        acc[company] = new Array(1 + faker.datatype.number(2)).fill('-').map(_=> faker.commerce.productName());
        return acc;
    }, {});
    window.localStorage.setItem('productMap', JSON.stringify(productMap));
}
module.exports = {
    companies,
    productMap
}