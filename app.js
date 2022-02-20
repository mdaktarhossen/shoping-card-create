function updateMobileNumber(prodictName,price,isIncrement){
  const getInpute=document.getElementById(prodictName+"-number");
  const getNumber=parseInt(getInpute.value);

  if(isIncrement){
    const mobileNumber=getInpute.value=getNumber+1;
    const mobilePrice=document.getElementById(prodictName+"-price");
    mobilePrice.innerText=mobileNumber*price;
  }
  
  else if(getNumber>0){
    const mobileNumber= getInpute.value=getNumber-1;
    const mobilePrice=document.getElementById(prodictName+"-price")
    mobilePrice.innerText=parseInt(mobilePrice.innerText)-price;
  };
};

// calling updated mobile number and price;
// get mobile plus btn
document.getElementById("mobile-plus-btn").addEventListener("click", ()=>{
  updateMobileNumber("mobile",1219,true);
})

// get mobile minus btn;
document.getElementById("mobile-minus-btn").addEventListener("click", ()=>{
  updateMobileNumber("mobile",1219,false);
});

// get cover pluse button;
document.getElementById("cover-plus-btn").addEventListener("click", ()=>{
updateMobileNumber( "cover",59,true)
});

// get cover minus button;
document.getElementById("cover-minus-btn").addEventListener("click", ()=>{
  updateMobileNumber( "cover",59,false)
})