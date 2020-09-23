let products=["Sony Xperia","Samsung Galaxy","Nokia 6","Xiaomi Rdmi Note"];
var table="";

function showProduct(){
    var tbody = document.getElementById("productList");
    var trs="";
    products.forEach(function(v,i){
            trs+=`<tr>
            <td>${v}</td
            <td>
            <a class="btn" href="#">Edit</a>
            <a class="btn" href="#">Remove</a>
            </td>
            </tr>`;
            
    })
    tbody.innerHTML=trs;
}
function create(){
    var name= document.getElementById("productName").nodeValue;
    if(!existProduct(name)){
        products.push(name);
        window.alert(`Product : ${name} has been added successfully`);
        showwProduct();
        document.getElementById("productName").value="";
    }else{
        window.alert(`Product : ${name.trim()} is exsted`);
    }
}
function modify(){

}
function remove(){

}
function existProduct(productName){
    for(var p of product){
        if(format(p)==format(product))
        return true;
    }
    return false;
}
function format(name){
        let susul="";
        let chars=[];
        name=name.trim();
        name=name.toLocalLowerCase();
        chars = name.split(``);
        for(let i=0;i<(chars.length-1);i++){
            if(chars[i]==` `&& chars[i+1]==` `){
                continue;
            }
            result+=chars[i];
        }
            result+= chars[chars.length-1]; 
            return result;
        }

function ready(){
    showProduct();
}
ready();
