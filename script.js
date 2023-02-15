var operand1=0;
var operand2=0;
var operator=null;
var display=document.getElementById("display");




var buttons = document.getElementsByClassName("btn");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function(){
                var value=this.getAttribute('data-value');
                if(value=='+'){
                    operator='+';
                    operand1=parseFloat(display.innerText);
                    display.innerText="";
                }
                else if(value=='-'){
                    operator='-';
                    operand1=parseFloat(display.innerText);
                    display.innerText="";
                }
                else if(value=='*'){
                    operator='*';
                    operand1=parseFloat(display.innerText);
                    display.innerText="";
                }
                else if(value=='/'){
                    operator='/';
                    operand1=parseFloat(display.innerText);
                    display.innerText="";
                }
                else if(value=='AC'){
                    display.innerText="";
                }
                else if(value=='='){
                    operand2=parseFloat(display.innerText);
                    if(operator=='+'){
                        display.innerText=operand1+operand2;
                    }
                    if(operator=='-'){
                        display.innerText=operand1-operand2;
                    }
                    if(operator=='*'){
                        display.innerText=operand1*operand2;
                    }
                    if(operator=='/'){
                        display.innerText=operand1/operand2;
                    }
                }
                else{
                    display.innerText+=value;
                }

            })
            
        }