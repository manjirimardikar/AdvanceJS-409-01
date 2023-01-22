const form = document.getElementById("heading");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const yourbio = document.getElementById("yourbio");

const firstnameerrormessage =document.getElementById("firstnameerrormessage")
const lastnameerrormessage=document.getElementById("lastnameerrormessage")
const emailerrormessasge=document.getElementById("emailerrormessasge")
const passworderrormessage=document.getElementById("passworderrormessage")
const telephoneerrormessage=document.getElementById("telephoneerrormessage")
const yourbioerrormessage=document.getElementById("yourbioerrormessage")

const error ={
    firstname:false,
    lastname:false,
    email:false,
    password:false,
    telephone:false,
    yourbio:false
}
function firstnameVal() {
    if(firstname.value==="" || firstname.value.length<3 ||firstname.value.length>17 || /^[a-zA-Z\-]+$/.test(firstname.value)==false){
        // console.log("false");
        error.firstname=false
        firstnameerrormessage.innerText="First name must be alphanumeric and contain 3-16 characters"
    }
    else{
        error.firstname=true
        // console.log("firstname");
        firstnameerrormessage.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.telephone==true && error.yourbio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()"  >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function lastnameVal() {
    if(lastname.value==="" || lastname.value.length<3 ||lastname.value.length>17 || /^[a-zA-Z\-]+$/.test(lastname.value)==false){
        // console.log("false");
        error.lastname=false
        lastnameerrormessage.innerText="Last name must be alphanumeric and contain 3-16 characters"
    }
    else{
        error.lastname=true
        // console.log("firstname");
        lastnameerrormessage.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.telephone==true && error.yourbio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function emailVal() {
    if(email.value==="" ||  /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(email.value)==false){
        // console.log("false");
        error.email=false
        emailerrormessasge.innerText="Email must be a valid address, e.g. example@example.com"
    }
    else{
        // console.log("firstname");
        error.email=true
        emailerrormessasge.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.telephone==true && error.yourbio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function passwordVal() {
    if(password.value==="" || password.value.length<6 || password.value.length>20 || [/[a-z]/,/[A-Z]/,/\d/,/\W/].filter(function(t){ return t.test(password.value); }).length > 2==false){
        // console.log("false");
        error.password=false
        passworderrormessage.innerText="Password must be alphanumeric (@,_and - are also allowed) and between 6-20 characters"
    }
    else{
        error.password=true
        // console.log("firstname");
        passworderrormessage.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.telephone==true && error.yourbio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function telephoneVal() {
    if(telephone.value==="" ||  /^(0|[+91]{3})?[6-9][0-9]{9}$/.test(telephone.value)==false){
        // console.log("false");
        error.telephone=false
        telephoneerrormessage.innerText="A valid Telephone number(11 digits and 333-333-3334)"
    }
    else{
        // console.log("firstname");
        error.telephone=true
        telephoneerrormessage.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.telephone==true && error.yourbio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function yourbioVal() {
    if(yourbio.value==="" ||  /^[a-z0-9\_]+$/.test(yourbio.value)==false){
        // console.log("false");
        error.yourbio=false
        yourbioerrormessage.innerText="Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters"
    }
    else{
        // console.log("firstname");
        error.yourbio=true
        yourbioerrormessage.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.yourbio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}

function alertme() {
    alert("Your application is submitted successfully")
}