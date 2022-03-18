const deportista={
    nombre:"Messi",
    champions:4,
};
const deportista2={"nombre":"Messi","champions":"4"};

 console.log("Object")
 console.log(deportista);
 console.log("String")
 console.log(JSON.stringify(deportista));
 console.log("Parse")
 console.log(JSON.parse(deportista2));