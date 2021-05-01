class Product {
 constructor(name,price,year){
     this.name = name;
     this.price = price;
     this.year = year;
 }
}

class UI {
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Product</strong>: ${product.name} -
                        <strong>Price</strong>: ${product.price} - 
                        <strong>Year</strong>: ${product.year}
                        <a href="#" class="btn btn-danger" name="delete">Delete</a>
                    </div>
                </div>
            `;
        productList.appendChild(element);

    }
    
    resetForm(){
        document.getElementById("form-pro").reset();
    }

    deleteProduct(element){
     if(element.name === "delete"){
        element.parentElement.parentElement.parentElement.remove();
        this.showMessage('Product deleted successfully','info')
     }
    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
    
        // Show in The DOM
        const container = document.querySelector("#container");
        const app = document.querySelector("#App");
    
        // Insert Message in the UI
        container.insertBefore(div, app);
    
        // Remove the Message after 3 seconds
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
      }
}


document.getElementById("form-pro").addEventListener('submit',(e)=>{
     e.preventDefault();
     const nameProduct = document.getElementById('name').value;
     const priceProduct = document.getElementById('price').value;
     const yearProduct = document.getElementById('year').value;


     product= new Product(nameProduct,priceProduct,yearProduct);
     const ui = new UI();
     ui.resetForm();
    


     if(nameProduct === '' ||priceProduct==='' ||yearProduct =='' ){
        ui.showMessage('Complete the fields','danger')
    }else{
        ui.showMessage("Product Added Successfully", "success");
        ui.addProduct(product);
    }
    
})

document.getElementById("product-list").addEventListener('click',(e)=>{
    const ui = new UI()
    ui.deleteProduct(e.target);
})

