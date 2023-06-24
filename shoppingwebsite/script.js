

     function showList(){
       fetch("./lib/products.json")
         .then(response => response.json())
         .then(data => createList(data));
     }

         
 function createList(products) {
   
     const productList=document.getElementById('product-list');

 products.forEach(product=>{
     const productDiv=document.createElement('div');
     productDiv.className='product';

     const productImage=document.createElement('img');
     productImage.src=product.image;
     productDiv.appendChild(productImage);

     const productName=document.createElement('h3');
     productName.textContent=product.name;
     productDiv.appendChild(productName);

     const productDescription=document.createElement('p');
     productDescription.textContent=product.desciption;
     productDiv.appendChild(productDescription);

     productList.appendChild(productDiv);
 });
 }
 showList();
     