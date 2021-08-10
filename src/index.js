const {companies, productMap} = require('./data');
const { render } = require('./render');
const companyList = document.querySelector('#company-list');

let curr = window.location.hash.slice(1)*1; //window object has a location hash
//console.log(curr);

const _render = () => {
    render({ companies, productMap, companyList, curr });
}

_render();

window.addEventListener('hashchange', () => {
    curr = window.location.hash.slice(1)*1; //window object has a location hash
    _render();
});