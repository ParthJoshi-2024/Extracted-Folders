// DOM 
//Glue b/w View and Model
window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('compute').addEventListener('click', computeIt);
}

function computeIt(){
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    salaryOperations.basicSalary = basicSalary;
    document.getElementById('hra').innerText = salaryOperations.hra();
    document.getElementById('da').innerText = salaryOperations.da();
    document.getElementById('ta').innerText = salaryOperations.ta();
    document.getElementById('ma').innerText = salaryOperations.ma();
    document.getElementById('pf').innerText = salaryOperations.pf();
    document.getElementById('tax').innerText = salaryOperations.tax();
    document.getElementById('gs').innerText = salaryOperations.gs();
    document.getElementById('ns').innerText = salaryOperations.ns();
}