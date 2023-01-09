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
        this.result = 0;
    }
    add_number(number){
        if(number === '.' && this.currentText.innerText.includes('.')){
            return;
        }
        this.screen = number;
        this.updateScreen();
    }
    add_operation(simbol){
        this.screen1 = simbol;
        this.updateScreen();
        this.currentText.innerText = '';
    }
    clear_all(){
        this.previousText.innerText = '';
        this.currentText.innerText = '';
    }
    deleteDigit(){
        this.currentText.innerText.slice(0,-1);
    }
    updateScreen(){
        if(this.screen != '' && this.screen1 == ''){
            this.currentText.innerText += this.screen;
        }else if(this.screen == '' && this.screen1 != ''){
            this.previousText.innerText += this.currentText.innerText + this.screen1;
        }
        this.screen = '';
        this.screen1 = '';
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
        }else switch(value){
            case 'C':
                op.clear_all();
                break;
            case '':
                alert('as');
                op.deleteDigit();
                break;
            default: op.add_operation(value);
        }
    })
})

