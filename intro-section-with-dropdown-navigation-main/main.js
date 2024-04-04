const featureArrowUp = document.querySelector('.features .arrow-up');
const featureArrowDown = document.querySelector('.features .arrow-down');
const companyArrowUp = document.querySelector('.company .arrow-up');
const companyArrowDown = document.querySelector('.company .arrow-down');
const featuresList = document.querySelector('.feature-list');
const companyList = document.querySelector('.company-list');
const features = document.querySelector('.features .select');
const company = document.querySelector('.company .select');

const featureFunction = () => {
    featureArrowDown.classList.toggle('hidden');
    featureArrowUp.classList.toggle('hidden');
    featuresList.classList.toggle('hidden');
}

const companyFunction = () => {
    companyArrowDown.classList.toggle('hidden');
    companyArrowUp.classList.toggle('hidden');
    companyList.classList.toggle('hidden');
}

features.addEventListener('click', featureFunction);
company.addEventListener('click', companyFunction);