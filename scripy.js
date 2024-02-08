function generateNumber(){
    const max = Math.ceil(document.querySelector(".entre").value)
    const min =Math.floor (document.querySelector(".e").value)

   const result = Math.floor(Math.random() * (max - min + 1 )) + min;
    
   alert(result)
}