// JSON
// nos permite hacer arrays asociativos

window.addEventListener('load', function () {

    // Obejtos js - objeto literal js
    //////////////////////////
    var person = {
        name: ['Bob', 'Smith'],
        age: 32,
        gender: 'male',
        interests: ['music', 'skiing'],
        bio: function () {
            alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        },
        greeting: function () {
            alert('Hi! I\'m ' + this.name[0] + '.');
        }
    };
    console.log(person.name);
    console.log(person.name[0]);
    console.log(person.age);
    console.log(person.interests[1]);
    console.log(person.bio());
    console.log(person.greeting());

    // Objetos Json
    ///////////////////
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados Unidos'
    };
    console.log(pelicula);
    console.log(pelicula.titulo);

    pelicula.titulo = "Superman Begins";
    console.log("Titulo cambiado a " + pelicula.titulo);

    var peliculas = [
        {
            titulo: 'La verdad duele',
            year: 2016,
            pais: 'Francia'
        },
    pelicula
];
    var cajaPeliculas = document.querySelector("#peliculas");
    for (var index in peliculas) {
        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " " + peliculas[index].year + " " + peliculas[index].pais);
        cajaPeliculas.append(p);

    }

    // https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON  

    var superHeroes = {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
            {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
            {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
            {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
    }
    var br = document.createElement("br");
    var cajaSuperPoderes = document.querySelector("#superPoderes span");
    for (var i = 0; i < superHeroes.members.length; i++) {
        var p = document.createElement("p");
        p.append(superHeroes.members[i].name + " " + superHeroes.members[i].age + " " + superHeroes.members[i].secretIdentity + " ");
        cajaPeliculas.append(p);
        cajaSuperPoderes.append("SuperPoderes");

        for (var j = 0; j < superHeroes.members[i].powers.length; j++) {
            p.append(superHeroes.members[i].powers[j] + " ");
            cajaSuperPoderes.append(p);
        }

    }


    /*var p = document.createElement("p");
    p.append(superHeroes['members'][1]['powers'][0]);
    cajaPeliculas.append(p);*/

});
