var json_parse= '{ "nombre": "Erica", "edad": "46", "nacionalidad": "Mexicana"  }'
var obj_parse=JSON.parse(json_parse)
console.log(obj_parse)
var json= { 
    nombre: "Erica", 
    edad: 46, 
    nacionalidad: "Mexicana" }
console.log(json)

var json = '{"nombre":"Adrian","edad":23,"nacionalidad":"Mexicana","hobbies":["ajedrez","video juegos","comics"]}';
var obj = JSON.parse(json);
console.log(obj.hobbies[0]);
obj.hobbies[0] = "peliculas";
console.log(obj.hobbies[0]);
