var articulos = [
    {nombre: "Camiseta", costo : 100, cantidad : 100},	
    {nombre: "Pantalon", costo : 200, cantidad : 50},
    {nombre: "Chamarra", costo : 300, cantidad : 10},
    {nombre: "Zapatos", costo : 1000, cantidad : 20},
    {nombre: "Gorra", costo : 50, cantidad : 100}
];
//fitters
var filtroCosto = articulos.filter(function(articulo){
    return articulo.costo <= 200;
});
console.log(filtroCosto);
var articulos = [
    {nombre: "Camiseta", costo : 100, cantidad : 100},	
    {nombre: "Pantalon", costo : 200, cantidad : 50},
    {nombre: "Chamarra", costo : 300, cantidad : 10},
    {nombre: "Zapatos", costo : 1000, cantidad : 20},
    {nombre: "Gorra", costo : 50, cantidad : 100}
];

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
}
);
console.log(nombreArticulos);

var articulos = [
    {nombre: "Camiseta", costo : 100, cantidad : 100},	
    {nombre: "Pantalon", costo : 200, cantidad : 50},
    {nombre: "Chamarra", costo : 300, cantidad : 10},
    {nombre: "Zapatos", costo : 1000, cantidad : 20},
    {nombre: "Gorra", costo : 50, cantidad : 100}
];

var findArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Pantalon";
}
);
console.log(findArticulo);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
}



       