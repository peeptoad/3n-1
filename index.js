


function generate() {
    
    
    let value = document.getElementById("input").value;
    document.getElementById('log').innerHTML = '';
    console.log(value)
   
    
    
    while (value > 1) 
    
       {
        if (value % 2 == 0) 
        {
            value = value / 2
            console.log(value)
        }
        else  {
            value = value * 3 + 1
            console.log(value)
        }
     
        (function () {
            var old = console.log;
            var logger = document.getElementById('log');
            console.log = function () {
              for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] == 'object') {
                    logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 0) : arguments[i]) + '<br />';
                } else {
                    logger.innerHTML += arguments[i] + '<br />';
                }
              }
            }
        })();
        
       
    
    }    
}
