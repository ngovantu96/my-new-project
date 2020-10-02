
function createProduct(){
   
            let masanpham = document.getElementById('masp').value;
            let tensanpham = document.getElementById('tensp').value;
            let gia = document.getElementById('gia').value;
            let nhasanxuat = document.getElementById('nhasanxuat').value;
            let noisanxuat = document.getElementById('noisanxuat').value;
            let namsanxuat = document.getElementById('namsanxuat').value;

            // validate
            if(masanpham.length<=0){
                document.getElementById("ma-error").innerHTML = "!!! vui lòng nhập mã sản phẩm";
            }else{
                document.getElementById("ma-error").innerHTML = '';
            }

            if(tensanpham.length<=0){
                document.getElementById("ten-error").innerHTML = "!!! vui lòng nhập tên sản phẩm";
            }else{
                document.getElementById("ten-error").innerHTML = "";
            }

            if(gia.length<=0){
                document.getElementById("gia-error").innerHTML = "!!! vui lòng nhập giá sản phẩm";
            }else{
                document.getElementById("gia-error").innerHTML = '';
            }

            if(nhasanxuat.length<=0){
                document.getElementById("nhasx-error").innerHTML = "!!! vui lòng nhập nhà sản xuất";
            }else{
                document.getElementById("nhasx-error").innerHTML = "";
            }

            if(noisanxuat.length<=0){
                document.getElementById("noisx-error").innerHTML = "!!! vui lòng nhập nơi sản xuất";
            }else{
                document.getElementById("noisx-error").innerHTML = '';
            }

            if(namsanxuat.length<=0){
                document.getElementById("namsx-error").innerHTML = "!!! vui lòng nhập năm sản xuất";
            }else{
                document.getElementById("namsx-error").innerHTML = "";
            }

    if(masanpham && tensanpham && gia && nhasanxuat && noisanxuat && namsanxuat){
        // lưu vào trong danh sách sản phẩm
        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem("products")) : [];
        products.push({
            masanpham: masanpham,
            tensanpham: tensanpham,
            gia: gia,
            nhasanxuat: nhasanxuat,
            noisanxuat: noisanxuat,
            namsanxuat: namsanxuat,

        });
        
        // cách khởi tạo local storage
        // .slocalStorageetItem('key', 'value');
        
        // set lại dữ liệu
        localStorage.setItem("products", JSON.stringify(products))  ;
        //gọi renderListProduct ra để hiển thị danh sách
        this.renderListProduct();
        alert("bạn đã thêm thành công");
     setInputValue();
}
}

function setInputValue(){
    document.getElementById("masp").value ="";
    document.getElementById("tensp").value ="";
    document.getElementById("gia").value ="";
    document.getElementById("nhasanxuat").value ="";
    document.getElementById("noisanxuat").value ="";
    document.getElementById("namsanxuat").value ="";
}


function renderListProduct(){
    let products = localStorage.getItem("products")? JSON.parse(localStorage.getItem("products")):[];
    
    //if(products.length === 0) return false;
    let tableContent = `<tr>
    <td>Số Thứ Tự</td>
    <td>Mã Sản Phẩm</td>
    <td>Tên Sản Phẩm</td>
    <td>Giá</td>
    <td>Nhà Sản Xuất</td>
    <td>Nơi Sản Xuất</td>
    <td>Năm Sản Xuất</td>
    <td>Hành Động</td>
    </tr>`;
    products.forEach((product, index) =>{
        let productId = index;
        if(index % 2==0){
            tableContent += `<tr style="color:rgb(20,74,233)">
            <td>${index +1}</td>
            <td>${product.masanpham}</td>
            <td>${product.tensanpham}</td>
            <td>${product.gia}</td>
            <td>${product.nhasanxuat}</td>
            <td>${product.noisanxuat}</td>
            <td>${product.namsanxuat}</td>
            <td><a href="#" onclick="editProduct(${productId})">Edit</a> ||  <a href="#" onclick="deleteProduct(${productId})">Delete</a></td>
            
            </tr>`;

        }else{
            tableContent += `<tr>
            <td>${index+1}</td>
            <td>${product.masanpham}</td>
            <td>${product.tensanpham}</td>
            <td>${product.gia}</td>
            <td>${product.nhasanxuat}</td>
            <td>${product.noisanxuat}</td>
            <td>${product.namsanxuat}</td>
            <td><a href="#" onclick="editProduct(${productId})">Edit</a> ||  <a href="#" onclick="deleteProduct(${productId})">Delete</a></td>
            
            </tr>`;
        }
        
     });
    
    document.getElementById("listProduct").innerHTML = tableContent;
}

function deleteProduct(id){
   if(confirm("Bạn muốn xóa sản phẩm này?"))
   {
    let products =localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    products.splice(id,1);
    // xóa xong thì set lại
    localStorage.setItem('products', JSON.stringify(products));
    renderListProduct();
    
   } 
    
}

 function editProduct(id){
   let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
   let product = products[id];
//    let maspelement = document.getElementById("masp").value;
    document.getElementById("masp").value =product.masanpham;
    document.getElementById("tensp").value =product.tensanpham;
    document.getElementById("gia").value = product.gia;
    document.getElementById("nhasanxuat").value = product.nhasanxuat;
    document.getElementById("noisanxuat").value = product.noisanxuat;
    document.getElementById("namsanxuat").value = product.namsanxuat;
    if(confirm("Bạn muốn sửa sản phẩm này?"))
   {
    let products =localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    products.splice(id,1);
    // xóa xong thì set lại
    localStorage.setItem('products', JSON.stringify(products));
    renderListProduct();
   }

 }
//  function Search(id){
//     let products =localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
//     let masp = document.getElementById("search").value;
//     let product =products[id];
//     if(masp == product){
//         console.log(masp);
//    // document.getElementById("masp").value =product.masanpham;
//     }
//     // document.getElementById("tensp").value =product.tensanpham;
//     // document.getElementById("gia").value = product.gia;
//     // document.getElementById("nhasanxuat").value = product.nhasanxuat;
//     // document.getElementById("noisanxuat").value = product.noisanxuat;
//     // document.getElementById("namsanxuat").value = product.namsanxuat;
//     // }
   
//     // localStorage.setItem('products', JSON.stringify(products));
//     // renderListProduct();
//  }
 
