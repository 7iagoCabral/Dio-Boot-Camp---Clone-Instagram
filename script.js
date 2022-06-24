


        let i = 0;
    setInterval(()=>{

         let disabled = document.querySelectorAll('.disabled');
         let actived = document.querySelector('.actived');
         
         
         actived.setAttribute('class', 'disabled')
         disabled[i].setAttribute('class', 'actived')
         if(i >= 2){
            i = 0
         }else{
            i++
         }
    },5000)
        
             
          