

function addtocart(name, price, image, rating) {
    const cartItem = {
        name: name,
        price: price,
        image: image,
        rating: rating
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(name + " has been added to your cart.");
}
function deleteCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    loadCartItems(); 
    updateCartCount(); 
}
function enterserver() {
    let cartItemsDiv = document.getElementById('cart-items');
    let check = cartItemsDiv.textContent.toUpperCase().includes('NO ORDERS WERE PLACED!!');
    if (check) {
        document.getElementById('noMatches').style.display = 'grid';
    }
}

function submitSearch(){
    let filter= document.getElementById('find').value.toUpperCase();
    let items=document.querySelectorAll('.i > div');
    let mobileproduct=document.querySelectorAll('.namehere');
    let found=false;
    for(let i=0;i<items.length;i++){
        let a=mobileproduct[i];
        let value=a.innerHTML;
        if(value.toUpperCase().indexOf(filter)>-1)
        {
            items[i].style.display="";
            found=true;
        }
        else{
            items[i].style.display="none";
            found=false;
        }

    }
   

}
function bestsellerbutton() {
    let filter = "Best Seller";
    let items = document.querySelectorAll('.i > div');
    
    items.forEach(item => {
        let bestsellerElement = item.querySelector('.bestseller'); 

        if (bestsellerElement) {
            let value = bestsellerElement.innerHTML.trim(); 

            if (value === filter) {
                item.style.display = ""; 
            } else {
                item.style.display = "none"; 
            }
        } else {
            item.style.display = "none"; 
        }
    });
}


function newbutton(){
    let items=document.querySelectorAll('.i > div');
    items.forEach(item=>{
        item.style.display='';
    })   
}


function mobilebutton() {
    let items = document.querySelectorAll('.i > div'); 
    let displayproduct = document.querySelectorAll('.mobile'); 

    items.forEach(item => {
        item.style.display = 'none'; 
    });

    displayproduct.forEach(product => {
        product.style.display = ''; 
    });
}

function laptopbutton() {
    let items = document.querySelectorAll('.i > div'); 
    let displayproduct = document.querySelectorAll('.laptop');

    items.forEach(item => {
        item.style.display = 'none'; 
    });

    displayproduct.forEach(product => {
        product.style.display = '';
    });
}

function headphonebutton() {
    let items = document.querySelectorAll('.i > div'); 
    let displayproduct = document.querySelectorAll('.headphones');

    items.forEach(item => {
        item.style.display = 'none'; 
    });

    displayproduct.forEach(product => {
        product.style.display = ''; 
    });
}


function  airpodsbutton(){
    let items=document.querySelectorAll('.i > div');
    let displayproduct=document.querySelectorAll('.airpods');
    items.forEach(item=> {
        item.style.display='none';
    });
    displayproduct.forEach(product=>
        {
            product.style.display="";
        });
}

function watchbutton(){
    let items=document.querySelectorAll('.i > div');
    let displayproduct=document.querySelectorAll('.watches');
    items.forEach(item=>{
        item.style.display='none';
    });
    displayproduct.forEach(product=>{
        product.style.display="";
    });
}