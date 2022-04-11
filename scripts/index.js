//store the products array in localstorage as "data"

var arr = JSON.parse(localStorage.getItem('data')) || [];
// let arr= []
document.querySelector('form').addEventListener('submit',dataUpload)

function dataUpload(){
    event.preventDefault()
    // alert('hi')
   

        let product=document.querySelector('#product_name').value;
        let catog=document.querySelector('#product_brand').value;
        
        let price=document.querySelector('#product_price').value;
        
        let image=document.querySelector('#product_image').value;
        
       
    
        let obj={
            pro:product,
            cat:catog,
            pri:price,
            ima:image,
           
    
        }
        arr.push(obj)
    

    console.log(arr)
    localStorage.setItem("data", JSON.stringify(arr));
    window.screen.href='inventory.html'
    
    
}