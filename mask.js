var input = document.getElementById('credit-card-mask'),oldValue,newValue,
                    difference = function(value1, value2) {
                    var output = [];
                    for(i = 0; i < value2.length; i++) {
                        if(value1[i] !== value2[i]) {
                        output.push(value2[i]);
                        }
                    }
                    return output.join("");
                    },
                    keyDownHandler = function(e) {
                    oldValue = input.value;
                    },
                    inputHandler = function(e) {
                    document.getElementById("oninput-result").innerHTML = '$'+input.value;
                    }
                ;

                input.addEventListener('keydown', keyDownHandler);
                input.addEventListener('input', inputHandler);
         
