var nome = window.prompt('Nome');
var cognome = window.prompt('Cognome');
var eta = window.prompt('Età');
var citta = window.prompt('Città');
var email = window.prompt('Email');
var fullname = nome+' '+cognome+' '+eta+' '+citta+' '+'('+email+')'

document.getElementById('nome_js').innerHTML=nome;
document.getElementById('cognome_js').innerHTML=cognome;
document.getElementById('eta_js').innerHTML=eta;
document.getElementById('citta_js').innerHTML=citta;
document.getElementById('email_js').innerHTML=email;

document.getElementById('recap_js').innerHTML=fullname;

console.log(fullname)
document.write(fullname)
window.alert(fullname)
