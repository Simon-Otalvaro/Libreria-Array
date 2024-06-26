let libros = [
    //constructor(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso) 
    //Libro #1) 
       { titulo:"Satanás",
        autor: "Mario Mendoza",
        genero: "Novela-Ficción",
        idioma: "Español Latino",
        precio: "$ 39.900",
        formato: "Tapa dura",
        isbn: "9786287650510",
        descripcion: "Una mujer hermosa e ingenua que roba con destreza a altos ejecutivos, un pintor habitado por fuerzas misteriosas, y un sacerdote que se enfrenta a un caso de posesión demoníaca en La Candelaria, el barrio colonial de Bogotá… historias que se tejen en torno a la de Campo Elías, héroe de la guerra de Vietnam, quien inicia su particular descenso a los infiernos obsesionado por la dualidad entre el bien y el mal, entre Jekyll y Hyde, y se convertirá en un ángel exterminador.",
        estado: "Nuevo",
        ubicacion: "Latinoamerica",
        fecha_publicacion: "2002",
        editorial: "PLANETA",
        paginas: "273",
        dimensiones: "Ancho: 15cm - Alto: 23cm",
        peso : "50grs",
       },
       //Libro #2)
       { titulo:"Don Quijote de la Mancha",
        autor: "Miguel de Cervantes Saavedra",
        genero: "Novela",
        idioma: "Español",
        precio: "$ 28.500",
        formato: "formato",
        isbn: "9788477110972",
        descripcion: "El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.",
        estado: "Usado",
        ubicacion: "España, Latinoamerica ",
        fecha_publicacion: "1995",
        editorial: "EDELSA",
        paginas: "142",
        dimensiones: "Ancho: 18cm - Alto: 25cm",
        peso : "50grs",
       },
       //Libro #3)
       { titulo:"El Principito",
        autor: "Antoine De Saint Exupery",
        genero: "Literatura infantil, novela",
        idioma: "Frances",
        precio: "$21,000",
        formato: "Tapa blanda",
        isbn: "9789873697173",
        descripcion: "El Principito, protagonista de la historia, es un niño muy singular que habita en un asteroide lejano, y que en su inocencia es portador de una gran sabiduría. Llega a la Tierra luego de un largo recorrido espacial, en busca de alguien que le sepa dibujar un cordero.",
        estado: "Como nuevo",
        ubicacion: "Todo el mundo   ",
        fecha_publicacion: "1943",
        editorial: "UNIVERSO LIBROS SAS",
        paginas: "130",
        dimensiones: "Ancho: 11cm - Alto: 15cm",
        peso : "45grs",
       },
       //Libro #4)
       { titulo:"Noches Blancas",
        autor: "Fiódor Dostoyevski",
        genero: "Ficción",
        idioma: "Ruso",
        precio: "$25.000",
        formato: "Tapa blanda",
        isbn: "9789580019626",
        descripcion: "Dostoievski presenta a un enamorado para quien el amor no implica ansia de posesión o de sometimiento al ser amado. El escenario es la ciudad de San Petersburgo con toda su poesía, su aura entre antigua y moderna, su espacio nocturno en el que las confidencias más desgarradoras pueden expresarse.",
        estado: "Usado",
        ubicacion: "Todo el mundo",
        fecha_publicacion: "1848",
        editorial: "NORMA",
        paginas: "128",
        dimensiones: "Ancho: 14cm - Alto: 21cm",
        peso : "45grs",
       },
       //Libro #5)
       { titulo:"El Amor en los Tiempos del Cólera",
        autor: "Gabriel García Márquez",
        genero: "Realismo Mágico",
        idioma: "Español Latino",
        precio: "$47.000",
        formato: "Tapa blanda",
        isbn: "9789588886152",
        descripcion: "De jóvenes, Florentino Ariza y Fermina Daza se enamoran apasionadamente, pero Fermina eventualmente decide casarse con un médico rico y de muy buena familia. ",
        estado: "Nuevo",
        ubicacion: "Todo el mundo",
        fecha_publicacion: "1985",
        editorial: "DEBOLSILLO",
        paginas: "490",
        dimensiones: "Ancho: 13cm - Alto: 19cm",
        peso : "50grs",
       },
       //Libro #6)
       {   titulo: "El alquimista",
       autor: "Paulo Coelho",
       genero: "Ficción espiritual",
       idioma: "Español",
       precio: "$21.000",
       formato: "Tapa blanda",
       isbn: "9780061122415",
       descripcion: "Un joven pastor emprende un viaje en busca de un tesoro oculto y descubre el verdadero significado de la vida y el destino.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1988",
       editorial: "HarperOne",
       paginas: "208",
       dimensiones: "Ancho: 12cm - Alto: 18cm",
       peso: "250grs",            
       },
       //Libro #7)
       {   titulo: "El nombre del viento",
       autor: "Patrick Rothfuss",
       genero: "Fantasía épica",
       idioma: "Español",
       precio: "$25.000",
       formato: "Tapa dura",
       isbn: "9788499082479",
       descripcion: "Kvothe, un joven músico con una mente prodigiosa, narra su vida y sus aventuras desde su infancia en una troupe de artistas hasta su entrenamiento en la universidad mágica.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "2007",
       editorial: "Plaza & Janés",
       paginas: "880",
       dimensiones: "Ancho: 16cm - Alto: 24cm",
       peso: "900grs",
       },
       //Libro #8)
       { titulo: "El código Da Vinci",
       autor: "Dan Brown",
       genero: "Thriller, misterio",
       idioma: "Español",
       precio: "$20.000",
       formato: "Tapa blanda",
       isbn: "9780307474278",
       descripcion: "Una serie de asesinatos en el Louvre lleva a un experto en simbología y a una criptógrafa a descifrar un misterio que podría cambiar la historia del cristianismo.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "2003",
       editorial: "Vintage Español",
       paginas: "592",
       dimensiones: "Ancho: 15cm - Alto: 23cm",
       peso: "700grs",
       },
       //Libro #9)
       { titulo: "Matar a un ruiseñor",
       autor: "Harper Lee",
       genero: "Novela social",
       idioma: "Español",
       precio: "$18.000",
       formato: "Tapa dura",
       isbn: "9780061120084",
       descripcion: "La historia de Atticus Finch, un abogado que defiende a un hombre negro acusado de violar a una mujer blanca en el sur de Estados Unidos durante los años 30.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1960",
       editorial: "HarperCollins Español",
       paginas: "336",
       dimensiones: "Ancho: 14cm - Alto: 21cm",
       peso: "500grs",
       },
       //Libro #10)
       { titulo: "El señor de los anillos: La comunidad del anillo",
       autor: "J.R.R. Tolkien",
       genero: "Fantasía",
       idioma: "Español",
       precio: "$35.000",
       formato: "Tapa dura",
       isbn: "9788478884450",
       descripcion: "Frodo Bolsón se embarca en una aventura para destruir un anillo maligno que amenaza con sumir a la Tierra Media en la oscuridad.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1954",
       editorial: "Minotauro",
       paginas: "432",
       dimensiones: "Ancho: 16cm - Alto: 24cm",
       peso: "800grs",
       },
       //Libro #11)
       { titulo: "Orgullo y prejuicio",
       autor: "Jane Austen",
       genero: "Novela romántica",
       idioma: "Español",
       precio: "$22.000",
       formato: "Tapa blanda",
       isbn: "9788497940852",
       descripcion: "La historia de Elizabeth Bennet y su complicada relación con el apuesto pero orgulloso Sr. Darcy en la Inglaterra del siglo XIX.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1813",
       editorial: "Penguin Clásicos",
       paginas: "424",
       dimensiones: "Ancho: 13cm - Alto: 20cm",
       peso: "550grs",
       },
       //Libro #12)
       { titulo: "Los juegos del hambre",
       autor: "Suzanne Collins",
       genero: "Ciencia ficción, distopía",
       idioma: "Español",
       precio: "$25.000",
       formato: "Tapa dura",
       isbn: "9788427202139",
       descripcion: "En un futuro distópico, Katniss Everdeen se ofrece como voluntaria para participar en los Juegos del Hambre, un cruel reality show donde solo puede quedar un ganador.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "2008",
       editorial: "Molino",
       paginas: "400",
       dimensiones: "Ancho: 15cm - Alto: 22cm",
       peso: "650grs",
       },
       //Libro #13)
       { titulo: "1984",
       autor: "George Orwell",
       genero: "Distopía",
       idioma: "Español",
       precio: "$20.000",
       formato: "Tapa blanda",
       isbn: "9788420668450",
       descripcion: "En una sociedad totalitaria, Winston Smith lucha por mantener su individualidad y libertad de pensamiento mientras es vigilado constantemente por el Gran Hermano.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1949",
       editorial: "Debolsillo",
       paginas: "368",
       dimensiones: "Ancho: 12cm - Alto: 18cm",
       peso: "450grs",
       },
       //Libro #14)
       { titulo: "Harry Potter y la piedra filosofal",
       autor: "J.K. Rowling",
       genero: "Fantasía juvenil",
       idioma: "Español",
       precio: "$28.000",
       formato: "Tapa dura",
       isbn: "9788498387073",
       descripcion: "Harry Potter descubre que es un mago y comienza su formación en la escuela de magia y hechicería de Hogwarts, donde se enfrentará a numerosas aventuras.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1997",
       editorial: "Salamandra",
       paginas: "256",
       dimensiones: "Ancho: 15cm - Alto: 22cm",
       peso: "600grs",
       },
       //Libro #15)
       { titulo: "Rayuela",
       autor: "Julio Cortázar",
       genero: "Novela experimental",
       idioma: "Español",
       precio: "$23.000",
       formato: "Tapa blanda",
       isbn: "9788437601405",
       descripcion: "Una novela que desafía las convenciones narrativas tradicionales y ofrece múltiples formas de ser leída, invitando al lector a participar activamente en la construcción del relato.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1963",
       editorial: "Cátedra",
       paginas: "656",
       dimensiones: "Ancho: 14cm - Alto: 21cm",
       peso: "750grs",
       },
       //Libro #16)
       { titulo: "La sombra del viento",
       autor: "Carlos Ruiz Zafón",
       genero: "Misterio, ficción histórica",
       idioma: "Español",
       precio: "$24.000",
       formato: "Tapa blanda",
       isbn: "9788408163383",
       descripcion: "Daniel Sempere descubre un libro misterioso que lo lleva a un mundo de intrigas y secretos en el oscuro y fascinante Barcelona de posguerra.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "2001",
       editorial: "Planeta",
       paginas: "560",
       dimensiones: "Ancho: 14cm - Alto: 21cm",
       peso: "450grs"
       },
       //Libro #17)
       { titulo: "Crónica de una muerte anunciada",
       autor: "Gabriel García Márquez",
       genero: "Novela corta, realismo mágico",
       idioma: "Español",
       precio: "$19.000",
       formato: "Tapa blanda",
       isbn: "9788420471839",
       descripcion: "En un pequeño pueblo caribeño, se narra la historia del asesinato de Santiago Nasar, y cómo todos los habitantes conocían su destino pero nadie pudo evitarlo.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1981",
       editorial: "Literatura Random House",
       paginas: "128",
       dimensiones: "Ancho: 12cm - Alto: 18cm",
       peso: "150grs",
       },
       //Libro #18)
       { titulo: "El perfume",
       autor: "Patrick Süskind",
       genero: "Novela histórica, drama",
       idioma: "Español",
       precio: "$24.000",
       formato: "Tapa dura",
       isbn: "9788432215223",
       descripcion: "La historia de Jean-Baptiste Grenouille, un asesino en serie obsesionado con capturar el olor perfecto, en la Francia del siglo XVIII.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1985",
       editorial: "Seix Barral",
       paginas: "272",
       dimensiones: "Ancho: 15cm - Alto: 22cm",
       peso: "400grs",
       },
       //Libro #19)
       { titulo: "La ladrona de libros",
       autor: "Markus Zusak",
       genero: "Ficción histórica",
       idioma: "Español",
       precio: "$22.000",
       formato: "Tapa blanda",
       isbn: "9788498385083",
       descripcion: "La historia de Liesel Meminger, una niña adoptada por una familia alemana durante la Segunda Guerra Mundial, y su relación con los libros y la literatura.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "2005",
       editorial: "Salamandra",
       paginas: "560",
       dimensiones: "Ancho: 14cm - Alto: 21cm",
       peso: "450grs",
       },
       //Libro #20)
       { titulo: "El juego de Ender",
       autor: "Orson Scott Card",
       genero: "Ciencia ficción",
       idioma: "Español",
       precio: "$26.000",
       formato: "Tapa dura",
       isbn: "9788490707308",
       descripcion: "Andrew 'Ender' Wiggin es reclutado por la Escuela de Batalla para entrenar y liderar a la humanidad en una guerra contra una raza alienígena.",
       estado: "Nuevo",
       ubicacion: "Mundial",
       fecha_publicacion: "1985",
       editorial: "Ediciones B",
       paginas: "352",
       dimensiones: "Ancho: 15cm - Alto: 23cm",
       peso: "500grs",
       },
    ]

    
    function buscarLibroPorTitulo() {
        let nombreLibro = prompt("Inserta el título del libro:");
        let libroBuscado = libros.find(libro => libro.titulo === nombreLibro);
        if (libroBuscado) {
            console.log("Se encontró el libro:", libroBuscado);
        } else {
            console.log("El libro no se encontró en la lista.");
        }
    }

    function buscarLibroPorAutor() {
        let nombreAutor = prompt("Inserta el nombre del autor:");
        let librosDelAutor = libros.filter(libro => libro.autor === nombreAutor);
        if (librosDelAutor.length > 0) {
            console.log("Libros encontrados del autor", nombreAutor + ":");
            librosDelAutor.forEach(libro => console.log(libro));
        } else {
            console.log("No se encontraron libros del autor", nombreAutor + ".");
        }
    }

    function buscarLibroPorFecha() {
        let añoPublicacion = prompt("Inserta el año de publicación:");
        let librosPorFecha = libros.filter(libro => libro.fecha_publicacion === añoPublicacion);
        if (librosPorFecha.length > 0) {
            console.log("Libros encontrados publicados en el año", añoPublicacion + ":");
            librosPorFecha.forEach(libro => console.log(libro));
        } else {
            console.log("No se encontraron libros publicados en el año", añoPublicacion + ".");
        }
    }

    function buscarPorGenero() {
        let nombreGenero = prompt("Ingrese el género del libro:");
        let generoLibro = libros.filter(libro => libro.genero ===nombreGenero);
        if (generoLibro.length > 0) {
            console.log("Libros encontrados por género", nombreGenero + ":");
            generoLibro.forEach(libro => console.log(libro))
        } else {
            console.log("No se encontraron libros por este género", nombreGenero + ":");
        }
    }

    function buscarPorIdioma() {
        let idiomaBuscado = prompt("Ingrese el idioma del libro:");
        let librosPorIdioma = libros.filter(libro => libro.idioma === idiomaBuscado);
        if (librosPorIdioma.length > 0) {
            console.table("Libros encontrados en el idioma");
            console.table(idiomaBuscado)
            librosPorIdioma.forEach(libro => console.log(libro));
        } else {
            console.log("No se encontraron libros en el idioma", idiomaBuscado + ":");
        }
    }

    /*incio de las 10 interaciones*/
    /*1*/
    let iteracion = libros.find((libros) => {
        return libros.precio === "$24.000";
      });
    /*2*/
    let iteracion2 = libros.find((libros) => {
        return libros.isbn === "9788437601405";
      });
    /*3*/
    let iteracion3 = libros.find((libros) => {
        return libros.ubicacion === "Mundial";
      });
    /*4*/
    let iteracion4 = libros.find((libros) => {
        return libros.descripcion === "Una mujer hermosa e ingenua que roba con destreza a altos ejecutivos, un pintor habitado por fuerzas misteriosas, y un sacerdote que se enfrenta a un caso de posesión demoníaca en La Candelaria, el barrio colonial de Bogotá… historias que se tejen en torno a la de Campo Elías, héroe de la guerra de Vietnam, quien inicia su particular descenso a los infiernos obsesionado por la dualidad entre el bien y el mal, entre Jekyll y Hyde, y se convertirá en un ángel exterminador.";
      });
    /*5*/
    let iteracion5 = libros.find((libros) => {
        return libros.estado === "Nuevo";
      });
    /*6*/
    let iteracion6 = libros.find((libros) => {
        return libros.formato === "Tapa dura";
      });
    /*7*/
    let iteracion7 = libros.find((libros) => {
        return libros.editorial === "Vintage Español";
      });
    /*8*/
    let iteracion8 = libros.find((libros) => {
        return libros.peso === "550grs";
      });
    /*9*/
    let iteracion9 = libros.find((libros) => {
        return libros.dimensiones === "Ancho: 14cm - Alto: 21cm";
      });
    /*10*/
    let iteracion10 = libros.find((libros) => {
        return libros.paginas === "560";
      });

    
    let msj = "BIENVENIDOS AL MENÚ DE BIBLIOTECA\n\n";
    msj += "1. Buscar un objeto del array por título.\n";
    msj += "2. Buscar un objeto del array por autor.\n";
    msj += "3. Buscar un objeto del array por fecha de publicación.\n";
    msj += "4. Buscar un objeto del array por género.\n";  
    msj += "5. Buscar un objeto del array por idioma.\n";
    msj += "6. 10 interacciones distintas.\n";
    msj += "7. Salir.\n"; 
    
    let codigo = parseInt(prompt(msj));
    
    switch (codigo) {
        case 1:
            buscarLibroPorTitulo();
            break;
        case 2:
            buscarLibroPorAutor();
            break;
        case 3:
            buscarLibroPorFecha();
            break;
        case 4:
            buscarPorGenero();
            break;
        case 5:
            buscarPorIdioma();
            break;
        case 6:
        console.table(iteracion);
        console.table(iteracion2);
        console.table(iteracion3);
        console.table(iteracion4);
        console.table(iteracion5);
        console.table(iteracion6);
        console.table(iteracion7);
        console.table(iteracion8);
        console.table(iteracion9);
        console.table(iteracion10);
            break;    
        case 7:
            console.log("¡Hasta luego!");
            break;
        default:
            console.log("El código que ingresó no es válido.");
    }