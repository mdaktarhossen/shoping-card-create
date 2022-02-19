// get mobile pluse button
document.getElementById("mobile-plus-btn").addEventListener("click", ()=>{
    const mobileInpute=document.getElementById("mobile-number")
    const mobileNumber=parseInt(mobileInpute.value);

    const mobilePriceTag=document.getElementById("mobile-price")
    const mobilePrice=parseFloat(mobilePriceTag.innerText);

    if(mobileNumber==10){
      alert("sorry enought number");
    }
    else{
      const aktar=mobileInpute.value=mobileNumber+1;
      mobilePriceTag.innerText=aktar*1219;
    };
});

// get mobile minus button
document.getElementById("mobile-minus-btn").addEventListener("click", ()=>{
  const mobileInpute=document.getElementById("mobile-number")
  const mobileNumber=parseInt(mobileInpute.value);

  const mobilePriceTag=document.getElementById("mobile-price")
  const mobilePrice=parseFloat(mobilePriceTag.innerText);
  if(mobileNumber>0){
    const aktar=mobileInpute.value=mobileNumber-1;
      mobilePriceTag.innerText=mobilePrice-1219;
  }
  else{
    alert("0 Not count")
  }
  
})

// get cover pluse button
document.getElementById("cover-plus-btn").addEventListener("click", ()=>{
    const coverInpute=document.getElementById("cover-number")
    const coverNumber=parseInt(coverInpute.value);

    const coverPriceTag=document.getElementById("cover-price")
    const coverPrice=parseFloat(coverPriceTag.innerText);
    if(coverNumber==10){
      alert("sorry enought number")
    }
    else{
     const aktar= coverInpute.value=coverNumber+1;
      coverPriceTag.innerText=aktar*59;
    }
});
// get cover minus button
document.getElementById("cover-minus-btn").addEventListener("click", ()=>{
  const coverInpute=document.getElementById("cover-number")
  const coverNumber=parseInt(coverInpute.value);

  const coverPriceTag=document.getElementById("cover-price")
  const coverPrice=parseFloat(coverPriceTag.innerText);
    if(coverNumber==0){
      alert("sorry enought number")
    }
    else if(coverNumber==10){
      alert("11 not count")
    }
    else{
      coverInpute.value=coverNumber-1;
      coverPriceTag.innerText=coverPrice-59;
    }
  
})