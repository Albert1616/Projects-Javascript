const previous = document.querySelector(".previous-operation");
const current = document.querySelector(".current-operation");
const button = document.querySelectorAll("#number-box button");
console.log(button)

class operation{
    constructor(previousText, currentText){
        this.previousText = previousText;
        this.currentText = currentText;
        this.screen = '';
        this.screen1 = '';
    }
    add_number(number){
        if(number === '.' && this.currentText.innerText.includes('.')){
            return;
        }
        this.screen = number;
        this.updateScreen();
    }
    add_operation(simbol){

    if(this.currentText.innerText === ""){
            if(this.previousText.innerText !== ""){
                this.changeOperation(simbol);
            }
        }
    let result;
    const currentValue = +this.currentText.innerText;
    const previousValue = +this.previousText.innerText.split(" ")[0];

    switch(simbol){
        case '+':
            result = previousValue + currentValue;
            this.updateScreen(simbol,currentValue,previousValue,result);
            break;
        case '-':
            result = previousValue - currentValue;
            this.updateScreen(simbol,currentValue,previousValue,result);
            break;
        case 'x':
            result = previousValue * currentValue;
            this.updateScreen(simbol,currentValue,previousValue,result);
            break;
        case '/':
            result = previousValue / currentValue;
            this.updateScreen(simbol,currentValue,previousValue,result);
            break;
        case 'C':
            op.clear_all();
            break;
        case 'DEL':
            op.deleteDigit();
            break;
        case 'CE':
            op.deleteAllDigit();   
        case '=':
            op.showResult();
            break;
        default: return;
    }
    }
    changeOperation(simbol){
        const lstOperations = ["+","-","x","/"];
        if(!lstOperations.includes(simbol)){
            return;
        }
        this.previousText.innerText = this.previousText.innerText.slice(0,-1) + simbol;
    }
    /*      if(this.previousText.innerText = ''){
            this.result = +this.currentText.innerText;
        }else{
            switch(simbol){
                case '+':
                    this.result += +this.currentText.innerText;
                    break;
                case '*':
                    this.result *= +this.currentText.innerText;
                    break;
                case '/':
                    this.result /= +this.currentText.innerText;
                    break;
                default: alert('Operação não definida');
            }
        } */

       /*  this.screen1 = simbol;
        this.updateScreen();
        
        this.currentText.innerText = '';
        alert(this.result); */
    clear_all(){
        this.previousText.innerText = '';
        this.currentText.innerText = '';
    }
    deleteDigit(){
        this.currentText.innerText = this.currentText.innerText.slice(0,-1);
    }
    deleteAllDigit(){
        this.currentText.innerText = '';
    }
    showResult(){
        const operation = this.previousText.innerText.split(" ")[1];
        this.add_operation(operation);
        this.currentText.innerText = this.previousText.innerText.slice(0,-1);
        this.previousText.innerText = '';
    }
updateScreen(simbol = null,currentValue = null, previousValue = null,result = null){
        if(result == null){
            if(this.screen != '' && this.screen1 == ''){
                this.currentText.innerText += this.screen;
            }else if(this.screen == '' && this.screen1 != ''){
                this.previousText.innerText += this.currentText.innerText + this.screen1;
            }
            this.screen = '';
            this.screen1 = '';
        }else{
            if(previousValue === 0){
                result = currentValue;
            }

            this.previousText.innerText = `${result} ${simbol}`;
            this.currentText.innerText = '';
        }
}
   /*  resultOperation(value){
        if(this.previousText.innerText == ''){
            this.result = +this.currentText.innerText;
        }else{
            switch(value){
                case '+':
                    this.result = +this.
            }
        }
        let op1 = this.
    } */
}
const op = new operation(previous,current);

button.forEach((btn) => {
    btn.addEventListener("click",(e) =>{
        const value = e.target.innerText;
        console.log('O valor é: ' + value);
        if(+value >=0 || value === '.'){
            op.add_number(value);
        }else{
            op.add_operation(value);
        }
    })
})

