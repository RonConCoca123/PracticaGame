//creación del tablero
var tablero =[
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];

//creamos un variable para asignar los turnos donde este empezara siendo x
var turno="x";

//creamos la función que muestre el tablero.
function mostrarTablero(){
    document.body.innerHTML = ""; //clear() eliminamos el html anterior
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var boton = "<button onclick='selecion(" + i + "," + j + ")'>"+ tablero[i][j]+ "</button>"
            document.write(boton);
        }
        document.write("<br>");
    }
    document.write("<br>");
}

//seleccionaremos la casilla donde vamos a colocar nuestro simbolo
function selecion(i,j){
    tablero[i][j]=turno;
    if(turno=="x"){
        turno="o";
    }else{
        turno="x";
    }
    mostrarTablero();
    verifGanador();
}

 //verificando si ganamos
function verifGanador(){
    //recorrido por filas para verificar
   for(var i=0; i<3;i++){
    var x=0;
    var o=0;
    for(var j=0;j<3;j++){
        if(tablero[i][j]=="x"){
            x++;
        }if(tablero[i][j]=="o"){
            o++;
        }
    }
        if(x==3){
            ganador('x');
        }if(o==3){
            ganador('o');
        }
   }
 //recorrido por columnas para verificar
   for(j=0;j<3;j++){
    var x=0;
    var o=0;
   for(i=0;i<3;i++){
        if(tablero[i][j]=="x"){
        x++;
        }if(tablero[i][j]=="o"){
        o++;
        }
   }
        if(x==3){
            ganador("x");
        }if(o==3){
            ganador("o");
        }
   }

   //recorrido diagonal
   if(tablero[0][0]==tablero[1][1] && tablero[1][1]==tablero[2][2] && tablero[0][0]!="_"){
    ganador(tablero[0][0]);
   }
   if(tablero[0][2]==tablero[1][1] && tablero[1][1]==tablero[2][0] && tablero[0][2]!="_"){
    ganador(tablero[0][2]);
   }

}

//funcion que avisara si ya ganamos
function ganador(g){
    document.write("El ganador es: "+g);
    document.write("<br>");
}
mostrarTablero();