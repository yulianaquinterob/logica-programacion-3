const num = document.getElementById('number'); 
const btnResult = document.getElementById('btn-result'); 
const result = document.getElementById('result'); 


btnResult.addEventListener('click', () => {
    const valor = num.value.trim();

    if (valor === "" || isNaN(valor)) {

        result.innerHTML = ` El valor ingresado no es válido. <br>
        Ingrese un valor númerico.<br>
         Ejemplo : 5 
        `
    num.value = "";
    num.focus();
          
    } else {
        const validNumber = Number(valor);
        let factorial = 1;
        for(let i = 1; i <= validNumber; i++){
            factorial *= i;
           
        }
        
    result.innerHTML = `
    El factorial de ${validNumber}! es: ${factorial}
    `
    }

});

const clean = document.getElementById('btn-clean');

clean.addEventListener('click', () =>{
    num.value = "";
    result.innerHTML = "";
    num.focus();

});