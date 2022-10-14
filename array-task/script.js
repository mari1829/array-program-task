let a=[1,2,3,4,5,7,8,9,10]
console.log(a.filter(fill));

function fill(great){
return great%2==1
}

let b=[12,3,4,5,10,15,25];
console.log(b.filter(fill1));

function fill1(great1){
    if(great1%2==0 || great1%5==0){
        return fill1
    }
}


let c=[1,2,3,4,5,7,8,9];
c.filter(fill2);



function fill2(great2){
    if( great2%3==0){
        console.log(great2**2);
        console.log(great2);
    }
}

let d=[1,2,3,4,5,7,8,9,10]
d.filter(fill3)


function fill3(great3){
    if(great3%5==0){
        console.log(great3);
        console.log((great3**2));
    }
}











