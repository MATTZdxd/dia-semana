function diaSemana() {
    var entrada = parseInt(document.getElementById("valorInserido").value);
    switch (entrada) {
        case 1:
            document.getElementById("resultado").innerHTML="domingo";
            break;
        case 2:
            document.getElementById("resultado").innerHTML="segunda-feira";
            break;
        case 3:
            document.getElementById("resultado").innerHTML="terça-feira";
            break;
        case 4:
            document.getElementById("resultado").innerHTML="quarta-feira";
            break;
        case 5:
            document.getElementById("resultado").innerHTML="quinta-feira";
            break;
        case 6:
            document.getElementById("resultado").innerHTML="sexta-feira";
            break;
        case 7:
            document.getElementById("resultado").innerHTML="sabado";
            break;

        default:
            console.log("valor invalido")
            break;
    }
}