let tempCel = +prompt('Введите температуру в градусах Цельсия');

function tempFar (temperature) {
    let conversion = (parseInt((9/5) * temperature + 32));
    console.log(conversion);
};

tempFar(tempCel);