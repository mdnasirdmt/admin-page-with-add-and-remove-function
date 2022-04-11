
 let arr1 = JSON.parse(localStorage.getItem('data')) || [];
 console.log(arr1)


 arr1.map(function(elem,ind){
     console.log(elem.ima)

 var box = document.createElement("div");

 var img = document.createElement("img");
 img.src = elem.ima;

 var product = document.createElement("p");
 product.textContent = elem.pro;

 var price = document.createElement("p");
 price.innerText = elem.pri;

 var brandd=document.createElement('p');
 brandd.innerText=elem.cat

 var btn = document.createElement("button");
 btn.innerText = "Add to Cart";

 var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(elem,ind);
    });

 box.append(img,brandd,product, price, btn,);

 document.querySelector("#products_data").append(box);


 });

 function removeItem(elem,ind) {
    //  alert('hi')
    console.log(elem, ind);
    arr1.splice(ind, 1);
    console.log(arr1);
    localStorage.setItem("data", JSON.stringify(arr1));
    window.location.reload();
  }