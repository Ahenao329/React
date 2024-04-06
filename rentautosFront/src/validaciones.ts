import * as yup from "yup"

export default function configurarValidaciones(){
    yup.addMethod(yup.string, 'primeraLetraMayuscula',function() {

        return this.test('primera-letra-mayuscula','La primera letra debe ser en mayúscula', 
        function(valor){
            if (valor && valor.length>0){
                
                const primeraLetra=valor.substring(0,1);
                return primeraLetra===primeraLetra.toUpperCase();

            }

            return true;

            })

    })

    yup.addMethod(yup.string, 'soloNumero',function() {

        return this.test('solo-numero','Solo números', 
        function(valor){
            
        if (valor && valor.length>0){
        
            
        return /^\d+$/.test(valor);
        
        }
        
        return true;
        
        })
        
        })
    
    yup.addMethod(yup.string, 'placa',function() {

        return this.test('placa','No es una placa válida', 
        function(valor){
                
            if (valor && valor.length>0){
                const letras = valor.substring(0,3)
                const numeros = valor.substring(3,6)
                return valor.length===6 && letras===letras.toUpperCase() && /^\d+$/.test(numeros)
                  
            } 

            return true;
            
        })
            
            
            
    })

    yup.addMethod(yup.string, 'anno',function() {

        return this.test('anno','Debe ser un año', 
        function(valor){
            
        if (valor && valor.length>0){
        
            
        return valor.length===4 && /^\d+$/.test(valor);
        
        }
        
        return true;
        
        })
        
        })
            
}


