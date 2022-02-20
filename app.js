function updateMobileNumber(isIncrement){
  const getInpute=document.getElementById("mobile-number");
  const getNumber=parseInt(getInpute.value);
  // return getNumber;

  if(isIncrement){
    const mobileNumber=getInpute.value=getNumber+1;

    const mobilePrice=document.getElementById("mobile-price");
    mobilePrice.innerText=mobileNumber*1219;
  }
  else if(getNumber>0){
    const mobileNumber= getInpute.value=getNumber-1;

    const mobilePrice=document.getElementById("mobile-price")
    mobilePrice.innerText=parseInt(mobilePrice.innerText)-1219;
  };
}

// calling updated mobile number and price 
document.getElementById("mobile-plus-btn").addEventListener("click", ()=>{
  updateMobileNumber(true);
})

document.getElementById("mobile-minus-btn").addEventListener("click", ()=>{
  updateMobileNumber(false);
})

// get cover pluse button
document.getElementById("cover-plus-btn").addEventListener("click", ()=>{
    const coverInpute=document.getElementById("cover-number");
    const coverNumber=parseInt(coverInpute.value);
    coverInpute.value=coverNumber+1;
    
});
// get cover minus button
document.getElementById("cover-minus-btn").addEventListener("click", ()=>{
  const coverInpute=document.getElementById("cover-number");
  const coverNumber=parseInt(coverInpute.value);
  coverInpute.value=coverNumber-1;
  
})