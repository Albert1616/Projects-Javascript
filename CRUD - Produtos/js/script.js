var inputName = document.querySelector('#name');
var inputCost = document.querySelector("#cost");
var formProduct = document.querySelector(".form");
var table = document.querySelector("#table_content");

class product {
    constructor(){
        this.id = 0;
        this.products = [];
    }
    create(){
        let product = this.lerDados();

        if(this.validaCampos(product)){
            this.products.push(product);
            this.id++;
            this.listarProdutos();
        }else{
            alert('Preencha os campos para continuar');
        }
        console.log(produto);
        this.clearForm();
    }
    lerDados(){
        let product = {};

        product.id =  this.id;
        product.nome = inputName.value;
        product.preco =  inputCost.value;

        return product;
    }
    validaCampos(product){
        let msg = '';

        if(product.nome == ''){
            msg+='Informe o nome do produto ';
        }
        if(product.preco == ''){
            msg+='Informe o preço do produto';
        }
        if(msg != ''){
            alert(msg);
            return false;
        }else{
            return true;
        }
    }
    clearForm(){
        inputName.value = '';
        inputCost.value = '';
    }
    listarProdutos(){
        let compr = this.products.length;
        for(var i = 0;i<compr;i++){
            let table_row = table.insertRow();

            let table_id = table_row.insertCell();
            let table_name = table_row.insertCell();
            let table_cost = table_row.insertCell();
            let table_action = table_row.insertCell();

            table_id.innerText = this.products[i].id;
            table_name.innerText = this.products[i].nome;
            table_cost.innerText = this.products[i].preco;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'images/edit.png';
            let imgDelete = document.createElement('img');
            imgDelete.src = 'images/trash-can.png';

            table_action.appendChild(imgEdit)
            table_action.appendChild(imgDelete)
        }
    }
}
/* function mostraForm(){
    formProduct.style.display = 'block';
} */

var produto = new product();
function mostraForm(){
    formProduct.style.display = 'block';
}