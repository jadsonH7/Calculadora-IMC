// Criando o titulo
const createTitle = () => {
    const title = document.createElement("h1");
    title.innerText = "Calculadora IMC";
    title.classList.add("title");
    document.querySelector(".title-js").appendChild(title);
};
createTitle();
// Calculadora
const calcIMC = (weight, height) => {
    return new Promise((resolve, reject) => {
        typeof weight !== "number" || typeof height !== "number"
            ? reject("Argumento não e um numero") : resolve(weight / (height * height));
    });
};
const calculoShow = (weight, height) => {
    calcIMC(weight, height)
        .then((resolve) => {
        console.log(`Resultado do calculo: ${resolve}!`);
        if (resolve < 18.5)
            console.log("Situação: MAGREZA");
        else if (resolve < 25)
            console.log("Situação: NORMAL");
        else if (resolve < 30)
            console.log("Situação: SOBREPESO");
        else if (resolve < 40)
            console.log("Situação: OBESIDADE");
        else
            console.log("Situação: OBESIDADE GRAVE");
    }).catch((err) => console.log(err.message));
    console.log(`Calculando o IMC para o peso ${weight} e altura ${height}...`);
};
calculoShow(56, 163);
