//#6d9e65
// localStorage.clear();

let title     = document.getElementById('title');
let price     = document.getElementById('price');
let taxes     = document.getElementById('taxes');
let ads       = document.getElementById('ads');
let discount  = document.getElementById('discount');
let total     = document.getElementById('total');
let Count     = document.getElementById('count');
let category  = document.getElementById('category');
let create    = document.getElementById('create');
let row       = document.getElementById('row');
let deleteAll = document.getElementById('deleteAll');
let tbody=document.getElementById('tbody');
let Search =document.getElementById('search');
let dataPro;
let Ncount;
let table = '';
let i=0;
let mode='create';
let temp;
let sMode='none';


// creates i = 0;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.product);
    showDate();
}
else {
    dataPro = [];
}



function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value - +discount.value);
        total.innerHTML = result;
        total.style.background = "#6d9e65";

    }
    else {
        total.style.background = "rgb(213, 41, 41)";
        total.innerHTML='';
    }

}



function getCount() {
    if (Count.value != '') {
        Ncount = +count.value;

    }
   
}


function getCreate() {
    
    
    
       let newPro = {
           title: title.value,
           price: price.value,
           taxes: taxes.value,
           ads:   ads.value,
        discount: discount.value,
           total: total.innerHTML,
           count: count.value,
        category: category.value,
       };
    if(mode=='create')
    {
       
         if(Ncount!=undefined)
       {
           for(let x=0;x<Ncount;x++)
           {
               dataPro.push(newPro);
           }
   
           
       }  
    }
    else if(mode=='update')
    {
        dataPro[temp]=newPro;
        mode='create';
        count.style.display='block';
        create.innerHTML='Create';
        tbody.innerHTML='';
    }
    
    localStorage.setItem('product', JSON.stringify(dataPro));

   
     showDate();     
     clearData();
     getTotal();
}

function clearData()
{
    title.value=''
    price.value=''
    taxes.value=''
      ads.value=''
 discount.value=''
total.innerHTML=''
    count.value=''
 category.value=''
}


////////////////show data///////////////////////////////
function showDate() {
   // let c ;
   if(tbody.innerHTML=='')
   {
    i=0;
   }
    for(i;i<dataPro.length;i++)
    {
        if(dataPro!='')
        {
            deleteAll.style.display='block';
            deleteAll.innerHTML=`delet all(${dataPro.length})`
        }
        
        table = `<tr>
        <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].ads}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td><button onclick="updateData(${i})">update</button></td>
    <td><button onclick="singlDlete(${i})">delete</button></td>
    </tr> 
    `

    tbody.innerHTML += table;

    }
}
///////////////
function getDeleteAll()
{
    dataPro=[];
    localStorage.clear();
    tbody.innerHTML='';
    i=0;
    x=1;
    deleteAll.style.display='none';
}
function singlDlete(i)
{
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    tbody.innerHTML='';
    showDate();
    if(dataPro=='') 
        {
            deleteAll.style.display='none';
        }
}
/////////////////////Update///////////////////
function updateData(i)
{
    title.value=dataPro[i].title;
    price.value=dataPro[i].price;
    taxes.value=dataPro[i].taxes;
    ads.value=dataPro[i].ads;
    discount.value=dataPro[i].discount;
    total.innerHTML=dataPro[i].total;
    category.value=dataPro[i].category;
    count.style.display='none';
    create.innerHTML='Update'
    getTotal();
    temp=i;
    mode='update';
    scroll({
        top:0,
        behavior:'smooth'
    })
}
/////////////////////Search///////////////////
function searchTitle()
{
   
    for(let i=0;i<dataPro.length;i++)
        {
            if(Search.value==dataPro[i].title)
                {
                    title.value=dataPro[i].title;
                    price.value=dataPro[i].price;
                    taxes.value=dataPro[i].taxes;
                    ads.value=dataPro[i].ads;
                    discount.value=dataPro[i].discount;
                    total.innerHTML=dataPro[i].total;
                    category.value=dataPro[i].category;
                    count.value=dataPro[i].count;
                    getTotal();
                    scroll({
                        top:0,
                        behavior:'smooth'
                    })
                    
                }
               
        }
}
function searchCategory()
{
    for(let i=0;i<dataPro.length;i++)
        {
            if(Search.value==dataPro[i].category)
                {
                    title.value=dataPro[i].title;
                    price.value=dataPro[i].price;
                    taxes.value=dataPro[i].taxes;
                    ads.value=dataPro[i].ads;
                    discount.value=dataPro[i].discount;
                    total.innerHTML=dataPro[i].total;
                    category.value=dataPro[i].category;
                    count.value=dataPro[i].count;
                    getTotal();
                    scroll({
                        top:0,
                        behavior:'smooth'
                    })
                    
                }
               
        }
}







/****************
    <div onclick="setColor(this.id)" id="red"></div>
    <div onclick="setColor(this.id)" id="blue"></div>
    <div onclick="setColor(this.id)" id="green"></div>
    <div onclick="setColor(this.id)" id="black"></div>
    ************************* */
/*if(localStorage.length >0)
{
    document.body.style.background=localStorage.color
}
console.log(localStorage.color);
function setColor(color)
{
    localStorage.setItem('color',color);
    document.body.style.background=color
}
let text= document.getElementById('text');
if(localStorage.length >0)
{
    text.value=localStorage.text;
}
text.onkeyup=function(){
    localStorage.setItem('text', text.value);
}
localStorage.setItem('name','abdalla');
localStorage.name='ahmed';
localStorage.age=JSON.stringify(25);
localStorage.setItem('skills',JSON.stringify([1,2,3,5]));
localStorage.user=JSON.stringify({
    name:'kamal',
    age:35
})
console.log(typeof JSON.parse((localStorage.user)));

let i=0;

let hello =setInterval(function(){
    console.log(i++);
    if(i==10)
    {
        console.log('time enough');
        clearInterval(hello);
    }
    
},1000)

console.log(screen.orientation.type);
console.log(screen.pixelDepth);

/*******************************
<button id="btn">^</button>
    <div class="photos">
        <img onmouseup="main.src=this.src" src="images/trending-01.jpg" alt="">
        <img onmouseup="main.src=this.src" src="images/trending-02.jpg" alt="">
        <img onmouseup="main.src=this.src" src="images/trending-03.jpg" alt="">
        <img onmouseup="main.src=this.src" src="images/trending-04.jpg" alt="">
    </div>
    <div class="main">
        <img src="images/trending-01.jpg" name="main" alt="">
    </div>

    <div class="photos">
        <img onmouseover="main.src=this.src" src="images/trending-01.jpg" alt="">
        <img onmouseover="main.src=this.src" src="images/trending-02.jpg" alt="">
        <img onmouseover="main.src=this.src" src="images/trending-03.jpg" alt="">
        <img onmouseover="main.src=this.src" src="images/trending-04.jpg" alt="">
    </div>

    <input id="text" type="text" placeholder="text" >
****************************************

let btn =document.getElementById('btn');
window.onscroll =function()
{
    if(scrollY>=400)
    {
        btn.style.display='block'
    }
    if(scrollY<400)
     {
        btn.style.display='none'
     }
    
}
btn.onclick=function()
{
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
    
}
let inp =document.getElementById('open');
window.onload=function(){
    inp.focus();
    
}
inp.onfocus=function(){
    inp.style.border='4px solid #6d9e65';
}
/************************HTML Code***************
<button id="open" >open</button>
   <button id="close" class="hide" >close</button>
   
   <div id="container"  class="container" >
    <p>home</p>
   <p>courses</p>
   <p>news</p>
   <p>problem solving</p>
   <p>quizese</p>
   <p>blogs</p>
   <p>chat</p>
   </div>
*******************************
let open=document.getElementById('open');
let close=document.getElementById('close');
close
let container=document.getElementById('container');
container.classList.add('hide');
open.onclick=function()
{
    container.classList.remove('hide');
    close.classList.remove('hide');
    open.classList.add('hide');
}
close.onclick=function()
{
    container.classList.add('hide');
    close.classList.add('hide');
    open.classList.remove('hide');
}*/
/*let p=document.getElementById('p');
p.onclick =function()
{
    p.classList.toggle("name");
}
let after=document.getElementById('after');//button
let before=document.getElementById('before');//button
let append=document.getElementById('append');//button
let content=document.getElementById('content');//p
let container=document.getElementById('container');//div
container.style.background='#6d9e65';
container.style.height='100px';
after.onclick =function()
{
    container.after(content);

before.onclick =function()
{
    container.before(content);
}
append.onclick =function()
{
    container.append(content);
    container.style.alignContent='center';
    //container.style.display='flex';
    // container.style.justifyContent='center';
   
}

let dollar=document.getElementById('dollar');
let pound=document.getElementById('pound');
dollar.onkeyup= function ()
{
    pound.value=dollar.value*50;
}
pound.onkeyup= function ()
{
    dollar.value=pound.value/50;
}

let inp =document.getElementById('inp');
inp.style.background='#6d9e65'
    inp.style.border='5px solid black';
inp.onfocus=function click()
{
    inp.style.border='5px solid #f00';
    inp.style.background='black'
    inp.style.color='white'
}
inp.onblur=function click()
{
  
    inp.style.background='#f00'
    inp.style.border='5px solid black';
}
inp.onsubmit =function click()
{
    inp.style.background='white'
}


let names=['abdalla','ahmed','ali','mohamed'];
let ages=['15 years old','18 years old','22 years old','25 years old'];
let images=['images/categories-01.jpg','images/categories-03.jpg','images/categories-02.jpg','images/categories-01.jpg']; 
let container= document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';
function element(name,agess,imgSrc)
{
    //elemtents
    let card =document.createElement('div');
    let title =document.createElement('h2');
    let age =document.createElement('p');
    let img =document.createElement('img');

    //content
    let head=document.createTextNode(name);
    let ageContent=document.createTextNode(agess);
    img.src=imgSrc;

    //lacotion of content
    title.appendChild(head);
    age.appendChild(ageContent);
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    card.style.background='#555';
    card.style.display='inline-block';
    container.appendChild(card);
    //style
    card.style.width='300px';
    card.style.padding='10px';
    card.style.margin='5px';
    card.style.color='#fff';
    img.style.width='100%';



}
for(let i=0;i<4;i++)
{
    element(names[i],ages[i],images[i]);
}
let btn=document.getElementById('btn');
function hello1()
{
    document.body.style.background='red';
    btn.style.background='blue';
    btn.style.color='white';
}
function hello2()
{

    btn.style.background='blue';

}
function hello3()
{

    btn.style.color='white';
}
// btn.addEventListener ('click',hello1);
// btn.addEventListener ('click',hello2);
// btn.addEventListener ('click',hello3);
// btn.onclick=hello1;
// btn.onclick=hello2;
// btn.onclick=hello3;
*/