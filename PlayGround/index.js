var person = {
    firstname:'Default',
    lastname:'Default',
    getFullName: function(){
        return this.firstname+ ' ' + this.lastname
        }
}

var john = {
    firstname:"John",
    lastname:"Doe"
}

// don't do this ever!!! for demo purposes only 
john.__proto__ = person;

console.log(john.getFullName())

for (var prop in john){
    if(john.haOwnProperty(prop)){
        console.log(prop + ': ' +john[prop])
    }
    
}

