const container=document.getElementById('container');
const registrationbtn=document.getElementById('register');
const loginbtn=document.getElementById('login');
registrationbtn.addEventListener('click',()=>{
    container.classList.add("active");
});
loginbtn.addEventListener('click',()=>{
    container.classList.remove("active");
});

