
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
/////////////////////////Delete All Button/////////////////////////
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






