let Libro = [
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

    function agregarLibro() {
      let libros = {};
  
      Libro.titulo = prompt("Ingresa el título del libro:");
      Libro.autor = prompt("Ingresa el autor del libro:");
      Libro.genero = prompt("Ingresa el género del libro:");
      Libro.idioma = prompt("Ingresa el idioma del libro:");
      Libro.precio = prompt("Ingresa el precio del libro:");
      Libro.formato = prompt("Ingresa el formato del libro:");
      Libro.ISBN = prompt("Ingresa el ISBN del libro:");
      Libro.descripcion = prompt("Ingresa la descripción del libro:");
      Libro.estado = prompt("Ingresa el estado del libro:");
      Libro.ubicacion = prompt("Ingresa la ubicación del libro:");
      Libro.fechaPublicacion = prompt("Ingresa la fecha de publicación del libro:");
      Libro.editorial = prompt("Ingresa la editorial del libro:");
      Libro.paginas = prompt("Ingresa el número de páginas del libro:");
      Libro.dimensiones = {
          alto: prompt("Ingresa el alto del libro:"),
          ancho: prompt("Ingresa el ancho del libro:"),
          grueso: prompt("Ingresa el grueso del libro:")
      };
      Libro.peso = prompt("Ingresa el peso del libro:");
  
      Libro.push(libros);
      console.log(Libro)
  }
  
  
  
  function eliminarLibroNombre() {
      let titulo = prompt("Ingresa el título del libro que deseas eliminar:");
  
      for(let i = 0; i < Libro.length; i++) {
          if(Libro[i].titulo === titulo) {
              libro.splice(i, 1);
              console.log("Libro eliminado exitosamente.");
              return;
          }
          console.log(Libro);
      }
  
      console.log("No se encontró un libro con ese título.");
  }
  
  
  function eliminarUltimoLibro() {
      if(Libro.length > 0) {
          Libro.pop();
          console.log("Último libro eliminado exitosamente.");
      } else {
          console.log("No hay libros en la lista para eliminar.");
      }
      console.log(Libro);
  }
  
  function mostrarLibros() {
      if(Libro.length > 0) {
          for(let i = 0; i < Libro.length; i++) {
              console.log(`Libro ${i+1}:`);
              console.log(`Título: ${Libro[i].titulo}`);
              console.log(`Autor: ${Libro[i].autor}`);
              console.log(`Género: ${Libro[i].genero}`);
              console.log(`Idioma: ${Libro[i].idioma}`);
              console.log(`Precio: ${Libro[i].precio}`);
              console.log(`Formato: ${Libro[i].formato}`);
              console.log(`ISBN: ${Libro[i].ISBN}`);
              console.log(`Descripción: ${Libro[i].descripcion}`);
              console.log(`Estado: ${Libro[i].estado}`);
              console.log(`Ubicación: ${Libro[i].ubicacion}`);
              console.log(`Fecha de publicación: ${Libro[i].fechaPublicacion}`);
              console.log(`Editorial: ${Libro[i].editorial}`);
              console.log(`Páginas: ${Libro[i].paginas}`);
              console.log(`Dimensiones: Alto - ${Libro[i].dimensiones.alto}, Ancho - ${Libro[i].dimensiones.ancho}, Grueso - ${Libro[i].dimensiones.grueso}`);
              console.log(`Peso: ${Libro[i].peso}`);
              console.log("\n");
          }
      } else {
          console.log("No hay libros en la lista para mostrar.");
      }
  }
  
  
  
  
  const NUEVAARRAY = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          autor: libros.autor,
          editorial: libros.editorial,
          precio: libros.precio,
      }
  })
  
  const LISTACASTIGO1 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          genero: libros.genero,
          ISBN: libros.ISBN,
          idioma: libros.idioma,
      }
  })
  
  const LISTACASTIGO2 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          formato: libros.formato,
          descripcion: libros.descripcion,
          idioma: libros.idioma,
      }
  })
  
  const LISTACASTIGO3 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          precio: libros.precio,
          ISBN: libros.ISBN,
          idioma: libros.idioma,
      }
  })
  
  const LISTACASTIGO4 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          formato: libros.formato,
          fechaPublicacion: libros.fechaPublicacion,
          autor: libros.autor
      }
  })
  
  const LISTACASTIGO5 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          genero: libros.genero,
          autor: libros.autor,
          idioma: libros.idioma,
      }
  })
  
  const LISTACASTIGO6 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          ubicacion: libros.ubicacion,
          estado: libros.estado,
          formato: libros.formato,
      }
  })
  
  const LISTACASTIGO7 = Libro.map((libros) => {
      return{
          titulo : libros.titulo,
          precio: libros.precio,
          estado: libros.estado,
          autor: libros.autor,
      }
  })
  
  const LISTACASTIGO8 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          fechaPublicacion: libros.fechaPublicacion,
          dimensiones: libros.dimensiones,
          formato: libros.formato,
      }
  })
  
  const LISTACASTIGO9 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          genero: libros.genero,
          dimensiones: libros.ISBN,
          estado: libros.estado,
      }
  })
  
  const LISTACASTIGO10 = Libro.map((libros) => {
      return{
          titulo: libros.titulo,
          genero: libros.genero,
          genero: libros.genero,
          idioma: libros.idioma,
      }
  })
  
  let descuentoLibros = Libro.map((libros) =>{
      return{
          ...libros,
          descuento: 20,
      };
  })
  
  let nuevoResumen = Libro.map((libros) => {
      return{
          ...libros,
          descuento: 20,
          titulo: libros.titulo,
          autor: libros.autor,
          editorial: libros.editorial,
          precio: libros.precio
          
      }
  })
  
  const LibrosCaros = Libro.filter((libros) => {
      return libros.precio > 50000
      
  })
  
  const libroResumen = Libro
  .sort((a, b) => b.paginas - a.paginas)
  .map((libros) =>{
      return {
          titulo: libros.titulo,
          autor: libros.autor,
          editorial: libros.editorial,
          paginas: libros.paginas,
      }
  })
  
  const ordenLibros = Libro.sort((a, b) => b.paginas - a.paginas)
  
  const libroResumenCaro = Libro
  .filter((libros) => {
      return libros.precio > 50000
  })
  .map((libros) =>{
      return {
          titulo: libros.titulo,
          autor: libros.autor,
          precio: libros.precio,
      }
  })
  
  const libroResumenPaginas = Libro
  .filter((libros) => {
      return libros.paginas < 100
  })
  .map((libros) =>{
      return {
          titulo: libros.titulo,
          autor: libros.autor,
          editorial: libros.editorial,
          paginas: libros.paginas,
      }
  })
  
  const libroCaroResumen = Libro
  .filter((libros) => {
      return libros.precio > 15000
  })
  .sort((a, b) => b.precio - a.precio)
  .map((libros) =>{
      return {
          titulo: libros.titulo,
          autor: libros.autor,
          precio: libros.precio,
      }
  })
  
  const libroResumenPaginasMayor = Libro
  .sort((a, b) => b.paginas - a.paginas)
  .map((libros) =>{
      return {
          titulo: libros.titulo,
          autor: libros.autor,
          editorial: libros.editorial,
          paginas: libros.paginas,
      }
  })
  
  let msj
  msj = "opciones de edición para los libros\n\n";
  msj += "1. Agregar libro\n";
  msj += "2. Eliminar un libro por su nombre\n";
  msj += "3. Eliminar el último libro agregado\n"
  msj += "4. Mostrar lista de libros\n"
  msj += "5. Resumen \n"
  msj += "6. Castigo \n"
  msj += "7. Descuento \n"
  msj += "8. Filter \n"
  msj += "9. Resumen ordenado \n"
  msj += "10. Ordenado por paginas\n"
  msj += "11. Resumen ordenado por mas caro\n"
  msj += "12. Resumen ordenado por paginas menores a 100\n"
  msj += "13. Resumen ordenado por mas caro de mayor a menor\n"
  msj += "13. Resumen ordenado por paginas de mayor a menor\n"
  msj += "Ingrese el código de la acción que quiere realizar siendo entre 1 y "
  let codigo = parseInt(prompt(msj));
  switch (codigo) {
      case 1:
          agregarLibro();
          break;
      case 2:
          eliminarLibroNombre();
          break;
      case 3:
          eliminarUltimoLibro();
          break;
      case 4:
          mostrarLibros();
          break;
      case 5:
          console.table(NUEVAARRAY);
          break;
      case 6:
          console.table(LISTACASTIGO1);
          console.table(LISTACASTIGO2); 
          console.table(LISTACASTIGO3);
          console.table( LISTACASTIGO4); 
          console.table(LISTACASTIGO6); 
          console.table(LISTACASTIGO8);
          console.table(LISTACASTIGO9); 
          console.table(LISTACASTIGO10);
          break;
      case 7:
          console.table(descuentoLibros);
          break;
      case 8:
          console.log(LibrosCaros);
      break;
      case 9:
          console.table(libroResumen);
      break;
      case 10:
          console.log(ordenLibros);
      break;
      case 11:
          console.table(libroResumenCaro);
      break;
      case 12:
          console.table(libroResumenPaginas);
      break;
      case 13:
          console.table(libroCaroResumen);
      break;
      case 14:
          console.table(libroResumenPaginasMayor);
      break;
      default:
          console.log(" el código que ingresó no es válido")
  }