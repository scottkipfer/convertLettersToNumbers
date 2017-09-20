angular.module('convertLettersToNumbers',[])
.filter('convertLettersToNumbers', function() {
    return function (input) {
        var result = "";
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAX_LOWERCASE = 123;
        var MIN_LOWERCASE = 96;
        var MAX_UPPERCASE = 91;
        var MIN_UPPERCASE = 64;

        // Make sure we input is a string.
        if(typeof input === 'string' || input instanceof String){
            var length = input.length;

            for(var i = 0; i < length; i++) {
                var c = input.charCodeAt(i);
                if(c > MIN_LOWERCASE && c < MAX_LOWERCASE ) {
                    c = c - 96;
                    result = result + c;
                } else if( c > MIN_UPPERCASE && c < MAX_UPPERCASE) {
                    c = (c - 64) * 2;
                    result = result + c;
                } else {
                    // input contains invalid character return -1;
                    return -1;
                }
            }

            // convert result to integer
            result = parseInt(result,10);

            // check to see if integer is safe;
            if(result <= MAX_SAFE_INTEGER){
                return result;
            } else {
                return -1;
            }

        } else {
            // input is not a string return -1;
            return -1;
        }
    }
});