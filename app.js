function updateMobileNumber(isIncrement){
  const mobileInpute=document.getElementById("mobile-number")
  const mobileNumber=parseInt(mobileInpute.value);

  if(isIncrement){
    mobileInpute.value=mobileNumber+1;
  }
  else if(mobileNumber>0){
    mobileInpute.value=mobileNumber-1;
  }
}

document.getElementById("mobile-plus-btn").addEventListener("click", ()=>{
  updateMobileNumber(true)
})

document.getElementById("mobile-minus-btn").addEventListener("click", ()=>{
  updateMobileNumber(false)
})


// get cover pluse button
document.getElementById("cover-plus-btn").addEventListener("click", ()=>{
    const coverInpute=document.getElementById("cover-number")
    const coverNumber=parseInt(coverInpute.value);
    coverInpute.value=coverNumber+1
    
});
// get cover minus button
document.getElementById("cover-minus-btn").addEventListener("click", ()=>{
  const coverInpute=document.getElementById("cover-number")
  const coverNumber=parseInt(coverInpute.value);
  coverInpute.value=coverNumber-1
  
})