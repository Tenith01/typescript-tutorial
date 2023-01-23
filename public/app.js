var me = {
    name: 'shaun',
    age: 30,
    speak: function (Text) {
        console.log(Text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
import { Invoice } from './Classes/Invoice.js';
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices                                                                                                                                                                                                                                  .push({ name: 'shaun' });
console.log(invoices);
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
