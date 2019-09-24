band = true;
do{
    let repuesta= prompt("¿Cual es tu clima favorito?");
    switch(repuesta){
        case "lluvia":
            alert("recuerda llevar un paraguas");
            break;
        case "sol":
            alert("recuerda llevar ropa ligera");
            break;
        case "nublado":
            alert("sal a pasear ");
            break;
        default:
            band = false;
    }
}while(band);
alert("adios...");