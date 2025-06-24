//Closure

function main() {
    let b=1
    function sub(){
        b++;
        return b
    }
    return sub
}

let f1 = main()
console.log(f1());
console.log(f1());

//Even outer function finshed but the inner function still has access -- closure