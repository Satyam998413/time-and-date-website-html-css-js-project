setInterval(() => {
  

let elmid=new Date;
let date=elmid.toLocaleDateString();
let a=elmid.getHours();
let b=elmid.getMinutes();
let c=elmid.getSeconds();
let time=a+':'+b+':'+c;
let timezone=time+' on Date Is: '+date;
document.getElementById('time').innerHTML=timezone;
}, 1000);
