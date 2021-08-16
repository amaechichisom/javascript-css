function greet(firstname, lastname, language, ...other){
    language = language || 'en';

    //ARGUMENTS IS A DEFAULT ARRAY SOMEWHAT THAT COMES WITH FUNCTIONS

    if(arguments.length === 0){
        console.log('Missing parameters!');
        console.log('------------------');
        return;
    }

    console.log('arg0: ' + arguments[0]);

    console.log(arguments);

    console.log(other)

    console.log("Other [0] = " + other[0])
}

greet();

greet("Legend", "Awesome", "es", "other 1", "other 2");

greet( "other 1", "other 2");