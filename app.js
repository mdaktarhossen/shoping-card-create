function updateMobileNumber(prodictName,price,isIncrement){
  const getInpute=document.getElementById(prodictName+"-number");
  const getNumber=parseInt(getInpute.value);

  if(isIncrement){
    const mobileNumber=getInpute.value=getNumber+1;
    const mobilePrice=document.getElementById(prodictName+"-price");
    mobilePrice.innerText=mobileNumber*price;
    calculate()
  }
  
  else if(getNumber>0){
    const mobileNumber= getInpute.value=getNumber-1;
    const mobilePrice=document.getElementById(prodictName+"-price")
    mobilePrice.innerText=parseInt(mobilePrice.innerText)-price;
    calculate()
  };
};

function getInputeValue(product){
  const mobileInpute=document.getElementById(product +"-number")
  const mobileNumber=mobileInpute.value;
  return mobileNumber;
};

function calculate(){
  const totalPhonePrice=getInputeValue("mobile")*1219;
  const totalCoverPrice=getInputeValue("cover")*59;
  const subTotal=totalPhonePrice+totalCoverPrice;
  const tax=subTotal/10;
  const total=subTotal+tax;

  document.getElementById("sub-total").innerText=subTotal;
  document.getElementById("tax").innerText=tax;
  document.getElementById("total").innerText=total;
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
});