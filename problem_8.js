function power(val, pow){
    let poweredValue = val;
    if(pow > 1) {
        poweredValue *= power(val, pow - 1);
    };
    return poweredValue;
};
console.log(power(4, 1));
