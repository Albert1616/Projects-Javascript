var inputName = document.querySelector('#name');
var inputCost = document.querySelector("#cost");
var formProduct = document.querySelector(".form");
var table = document.querySelector("#table_content");
var save = document.querySelector(".create");

class product {
    constructor() {
        this.id = 1;
        this.products = [];
        this.edit = null;
    }
    create() {
        let product = this.lerDados();

        if (this.validaCampos(product)) {
            if (this.edit == null) {
                this.products.push(product);
                this.id++;
                this.listarProdutos();
            } else {
                this.modifildeStats(this.edit)
            }
        } else {
            alert('Preencha os campos para continuar');
        }
        console.log(produto);
        this.clearForm();
    }
    lerDados() {
        let product = {};
        product.id = this.id;
        product.nome = inputName.value;
        product.preco = inputCost.value;

        return product;
    }
    validaCampos(product) {
        let msg = '';

        if (product.nome == '') {
            msg += 'Informe o nome do produto ';
        }
        if (product.preco == '') {
            msg += 'Informe o preço do produto';
        }
        if (msg != '') {
            alert(msg);
            return false;
        } else {
            return true;
        }
    }
    clearForm() {
        inputName.value = '';
        inputCost.value = '';
    }
    listarProdutos() {
        let compr = this.products.length;
        table.innerText = '';
        for (var i = 0; i < compr; i++) {
            let table_row = table.insertRow();

            let table_id = table_row.insertCell();
            let table_name = table_row.insertCell();
            let table_cost = table_row.insertCell();
            let table_action = table_row.insertCell();

            table_id.innerText = this.products[i].id;
            table_name.innerText = this.products[i].nome;
            table_cost.innerText = this.products[i].preco;

            let imgEdit = document.createElement('span');
            imgEdit.className = "material-symbols-outlined"
            imgEdit.innerText = "edit"
            imgEdit.setAttribute("Onclick", "produto.editProduct(" + this.products[i].id + ")");

            let imgDelete = document.createElement('span');
            imgDelete.className = "material-symbols-outlined";
            imgDelete.innerText = "delete"
            imgDelete.setAttribute("Onclick", "produto.deleteProduct(" + this.products[i].id + ")");

            table_action.appendChild(imgEdit)
            table_action.appendChild(imgDelete)
        }
    }
    deleteProduct(id_product) {
        let compr = this.products.length;
        let msg = prompt("Deseja realmente deletar o produto?[sim/não]");
        if (msg == 'sim') {
            for (let i = 0; i <= compr; i++) {
                if (this.products[i].id == id_product) {
                    this.products.splice(i, 1);
                    table.deleteRow(i)
                }
            }
        } else {
            alert("Modificação não realizada");
        }
    }
    editProduct(id_product) {
        this.edit = id_product;
        inputName.value = this.products[id_product - 1].nome;
        inputCost.value = this.products[id_product - 1].preco;
        save.innerText = "Salvar";
    }
    modifildeStats(id_product) {
        this.products[id_product - 1].nome = inputName.value;
        this.products[id_product - 1].preco = inputCost.value;
        table.innerText = '';
        this.listarProdutos();
        this.edit = null;
        save.innerText = 'Cadastrar';
    }
    mostraForm() {
        formProduct.style.display = 'block';
    }
    cancel() {
        formProduct.style.display = 'none';
        this.clearForm();
        this.edit = null;
        save.innerText = 'Cadastrar';
    }
}

var produto = new product();