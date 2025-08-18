// Header page navigation bar
let btn=document.getElementById('bar');
let navbar=document.getElementById('navbar');
let close=document.getElementById('close');
if(btn){
    btn.addEventListener('click',()=>{
        navbar.classList.add('active');
        document.getElementById('close').style.display="block";
    });
}
if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
        document.getElementById('close').style.display="none";
    });
}
// Shop page 
// button working
let count=0;
document.querySelectorAll(".btnShop").forEach(box => 
    box.addEventListener("click", () =>{
        document.getElementById('cart-item').style.display='block';
        box.style.color='green';
        count++;
        document.getElementById('cart-item').innerHTML=count;

    })
  )
let input =document.getElementById('input');
let couponOff=document.getElementById('offer');  // Total value in cart
let final=document.getElementById('final-value');  // subtotal value in cart 
//for update product-1 quantity
document.getElementById('productN1').addEventListener('click',()=>{
    let a=document.getElementById('productN1').value;
    let b=document.getElementById('update1').innerText; // subtotal list
    let update=a*b;
    document.getElementById('update1').innerHTML=update;
    final.innerHTML=parseInt(update)+parseInt(final.innerHTML);
    couponOff.innerHTML=final.innerHTML;
});
//for update product-2 quantity
document.getElementById('productN2').addEventListener('click',()=>{
    let a=document.getElementById('productN2').value;
    let b=document.getElementById('update2').innerText;
    let update=a*b;
    document.getElementById('update2').innerHTML=update;
    final.innerHTML=parseInt(update)+parseInt(final.innerHTML);
    couponOff.innerHTML=final.innerHTML;
});
//for update product-3 quantity
document.getElementById('productN3').addEventListener('click',()=>{
    let a=document.getElementById('productN3').value;
    let b=document.getElementById('update3').innerText;
    let update=a*b;
    document.getElementById('update3').innerHTML=update;
    final.innerHTML=parseInt(update)+parseInt(final.innerHTML);
    couponOff.innerHTML=final.innerHTML;
});



