var valobj = {"Name":"Marjan","Age":"17","Fav Movie":"Pushpa"};
console.log(valobj);

var arrval = Object.keys(valobj);

console.log(arrval);

var arrobj = arrval.map(function(key){
    return{[key]: valobj[key]};
});

console.log(arrobj);
