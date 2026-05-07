import mongoose from 'mongoose'
import Superhero from '../models/Superhero.js'
import "dotenv/config"

const heroes = [
    {
        nombre: "Spider-Man", nombreReal: "Peter Parker", anioAparicion: 1962, casa: "Marvel",
        biografia: "Tras ser mordido por una araña radiactiva, el joven Peter Parker adquiere poderes asombrosos y aprende que un gran poder conlleva una gran responsabilidad.",
        equipamiento: "Lanza-telarañas, traje tecnológico", cantidadImagenes: 2,
        imagenes: ["https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/5/17/i9g8x5k0y5n8z9m5z0z5/spider-man-across-the-spider-verse", "https://i.blogs.es/bc0549/spider-man-no-way-home/1366_2000.jpeg"]
    },
    {
        nombre: "Iron Man", nombreReal: "Tony Stark", anioAparicion: 1963, casa: "Marvel",
        biografia: "Genio, multimillonario, playboy y filántropo que utiliza una armadura de alta tecnología para proteger al mundo.",
        equipamiento: "Armadura Mark LXXXV", cantidadImagenes: 1,
        imagenes: ["https://vader.news/__export/1591560946221/sites/gadget/img/2020/06/07/iron_man.jpg_1271166673.jpg"]
    },
    {
        nombre: "Capitán América", nombreReal: "Steve Rogers", anioAparicion: 1941, casa: "Marvel",
        biografia: "El primer vengador, un supersoldado con un sentido inquebrantable de la justicia que luchó en la Segunda Guerra Mundial.",
        equipamiento: "Escudo de Vibranium", cantidadImagenes: 1,
        imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Capitan_America_Perfil.png"]
    },
    {
        nombre: "Thanos", nombreReal: "Thanos", anioAparicion: 1973, casa: "Marvel",
        biografia: "El Titán Loco que busca equilibrar el universo recolectando las seis Gemas del Infinito.",
        equipamiento: "Guantelete del Infinito", cantidadImagenes: 1,
        imagenes: ["https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/3P6W6R2X2VGLRFTZ3B6L2O2X6Y.jpg"]
    },
    { nombre: "Thor", nombreReal: "Thor Odinson", anioAparicion: 1962, casa: "Marvel", biografia: "Dios del Trueno y rey de Asgard.", equipamiento: "Mjolnir/Stormbreaker", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5a/Thor_Love_and_Thunder_Poster.jpg"] },
    { nombre: "Hulk", nombreReal: "Bruce Banner", anioAparicion: 1962, casa: "Marvel", biografia: "Científico que se transforma en un gigante verde cuando se enfurece.", equipamiento: "Ninguno", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/c3/Hulk_Endgame.png"] },
    { nombre: "Black Widow", nombreReal: "Natasha Romanoff", anioAparicion: 1964, casa: "Marvel", biografia: "Espía experta y asesina altamente entrenada.", equipamiento: "Bastones eléctricos", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/Black_Widow_Poster.jpg"] },
    { nombre: "Doctor Strange", nombreReal: "Stephen Strange", anioAparicion: 1963, casa: "Marvel", biografia: "Hechicero Supremo y protector de la realidad.", equipamiento: "Capa de levitación", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1a/Doctor_Strange_Poster.jpg"] },
    { nombre: "Black Panther", nombreReal: "T'Challa", anioAparicion: 1966, casa: "Marvel", biografia: "Rey de Wakanda con un traje de vibranium.", equipamiento: "Garras de vibranium", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9f/Black_Panther_Poster.jpg"] },
    { nombre: "Wolverine", nombreReal: "Logan", anioAparicion: 1974, casa: "Marvel", biografia: "Mutante con garras de adamantium y factor de curación.", equipamiento: "Garras de Adamantium", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvel/images/c/cf/Logan_film.jpg"] },
    { nombre: "Scarlet Witch", nombreReal: "Wanda Maximoff", anioAparicion: 1964, casa: "Marvel", biografia: "Poderosa mutante capaz de alterar la realidad.", equipamiento: "Magia del Caos", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/39/Scarlet_Witch_Multiverse_of_Madness.jpg"] },
    { nombre: "Deadpool", nombreReal: "Wade Wilson", anioAparicion: 1991, casa: "Marvel", biografia: "Mercenario bocazas con regeneración extrema.", equipamiento: "Katanas y pistolas", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvel/images/6/66/Deadpool_2_poster.jpg"] },
    { nombre: "Venom", nombreReal: "Eddie Brock", anioAparicion: 1988, casa: "Marvel", biografia: "Simbionte alienígena unido a un periodista.", equipamiento: "Poderes simbióticos", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvel/images/0/05/Venom_2_poster.jpg"] },
    { nombre: "Magneto", nombreReal: "Erik Lehnsherr", anioAparicion: 1963, casa: "Marvel", biografia: "Mutante con control total sobre los metales.", equipamiento: "Casco protector", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvel/images/d/d8/Magneto_X-Men.jpg"] },
    { nombre: "Loki", nombreReal: "Loki Laufeyson", anioAparicion: 1962, casa: "Marvel", biografia: "Dios del engaño y hermano de Thor.", equipamiento: "Cetro/Dagas", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1d/Loki_Poster.jpg"] },
    { nombre: "Star-Lord", nombreReal: "Peter Quill", anioAparicion: 1976, casa: "Marvel", biografia: "Líder de los Guardianes de la Galaxia.", equipamiento: "Blásteres cuádruples", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/df/Star-Lord_Poster.jpg"] },
    { nombre: "Vision", nombreReal: "Vision", anioAparicion: 1968, casa: "Marvel", biografia: "Androide creado con la Gema de la Mente.", equipamiento: "Gema de la Mente", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/14/Vision_Poster.jpg"] },
    { nombre: "Ant-Man", nombreReal: "Scott Lang", anioAparicion: 1979, casa: "Marvel", biografia: "Héroe capaz de encogerse o crecer a voluntad.", equipamiento: "Partículas Pym", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0d/Ant-Man_Poster.jpg"] },
    { nombre: "Daredevil", nombreReal: "Matt Murdock", anioAparicion: 1964, casa: "Marvel", biografia: "Abogado ciego con sentidos súper desarrollados.", equipamiento: "Bastones de pelea", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/4e/Daredevil_Poster.jpg"] },
    { nombre: "Green Goblin", nombreReal: "Norman Osborn", anioAparicion: 1964, casa: "Marvel", biografia: "Archienemigo de Spider-Man, industrial trastornado.", equipamiento: "Planeador y bombas calabaza", cantidadImagenes: 1, imagenes: ["https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a2/Green_Goblin_NWH.png"] },

    {
        nombre: "Batman", nombreReal: "Bruce Wayne", anioAparicion: 1939, casa: "DC",
        biografia: "El caballero de la noche, protector de Gotham City.",
        equipamiento: "Batarangs, Batmóvil", cantidadImagenes: 3,
        imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Batman_20190116_5c3f39228f0ee6.59131504.jpg", "https://i.blogs.es/029671/the-batman-poster/1366_2000.jpg", "https://m.media-amazon.com/images/I/818fS9Y-m1L._AC_SL1500_.jpg"]
    },
    {
        nombre: "Superman", nombreReal: "Clark Kent", anioAparicion: 1938, casa: "DC",
        biografia: "El hombre de acero, último hijo de Krypton.",
        equipamiento: "Traje kriptoniano", cantidadImagenes: 1,
        imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Superman_20190116_5c3f3b4d476231.00329191.jpg"]
    },
    {
        nombre: "Wonder Woman", nombreReal: "Diana Prince", anioAparicion: 1941, casa: "DC",
        biografia: "Princesa de las Amazonas y guerrera legendaria.",
        equipamiento: "Lazo de la Verdad, Escudo", cantidadImagenes: 2,
        imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_WonderWoman_20190116_5c3f3c15332f14.28185686.jpg", "https://m.media-amazon.com/images/I/71Y-8S4Z9HL._AC_SL1000_.jpg"]
    },
    {
        nombre: "Joker", nombreReal: "Desconocido", anioAparicion: 1940, casa: "DC",
        biografia: "El príncipe payaso del crimen y némesis de Batman.",
        equipamiento: "Gas de la risa", cantidadImagenes: 1,
        imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Joker_20190116_5c3f3e2a225324.31649313.jpg"]
    },
    { nombre: "Flash", nombreReal: "Barry Allen", anioAparicion: 1956, casa: "DC", biografia: "El hombre más rápido del mundo.", equipamiento: "Anillo de traje", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Flash_20190116_5c3f3d712217c1.78505504.jpg"] },
    { nombre: "Aquaman", nombreReal: "Arthur Curry", anioAparicion: 1941, casa: "DC", biografia: "Rey de los siete mares y de Atlantis.", equipamiento: "Tridente de Neptuno", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Aquaman_20190116_5c3f3a09374011.63756856.jpg"] },
    { nombre: "Green Lantern", nombreReal: "Hal Jordan", anioAparicion: 1959, casa: "DC", biografia: "Protector galáctico con un anillo de poder.", equipamiento: "Anillo de Poder", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_GreenLantern_20190116_5c3f3db3e67301.99602492.jpg"] },
    { nombre: "Harley Quinn", nombreReal: "Harleen Quinzel", anioAparicion: 1992, casa: "DC", biografia: "Antihéroe y ex-compañera del Joker.", equipamiento: "Bate de béisbol", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_HarleyQuinn_20190116_5c3f3df0a0e5b4.51688647.jpg"] },
    { nombre: "Lex Luthor", nombreReal: "Lex Luthor", anioAparicion: 1940, casa: "DC", biografia: "Brillante industrial y némesis de Superman.", equipamiento: "Traje de guerra", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_LexLuthor_20190116_5c3f3e69a0e417.84370216.jpg"] },
    { nombre: "Cyborg", nombreReal: "Victor Stone", anioAparicion: 1980, casa: "DC", biografia: "Mitad hombre, mitad máquina con tecnología avanzada.", equipamiento: "Cañón sónico", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Cyborg_20190116_5c3f3d178f0d14.54585141.jpg"] },
    { nombre: "Black Adam", nombreReal: "Teth-Adam", anioAparicion: 1945, casa: "DC", biografia: "Antihéroe egipcio con poderes divinos.", equipamiento: "Poder de Shazam", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_BlackAdam_20221018_634f19b88f0ee6.59131504.jpg"] },
    { nombre: "Nightwing", nombreReal: "Dick Grayson", anioAparicion: 1940, casa: "DC", biografia: "El primer Robin, ahora protector de Blüdhaven.", equipamiento: "Bastones de Escrima", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Nightwing_20190116_5c3f3ed08f0ee6.59131504.jpg"] },
    { nombre: "Shazam", nombreReal: "Billy Batson", anioAparicion: 1939, casa: "DC", biografia: "Niño que se convierte en héroe al decir una palabra.", equipamiento: "Rayos mágicos", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Shazam_20190116_5c3f3f2a8f0ee6.59131504.jpg"] },
    { nombre: "Green Arrow", nombreReal: "Oliver Queen", anioAparicion: 1941, casa: "DC", biografia: "Arquero experto y justiciero de Star City.", equipamiento: "Arco y flechas", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_GreenArrow_20190116_5c3f3f7a8f0ee6.59131504.jpg"] },
    { nombre: "Catwoman", nombreReal: "Selina Kyle", anioAparicion: 1940, casa: "DC", biografia: "Experta ladrona y aliada/enemiga de Batman.", equipamiento: "Látigo", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Catwoman_20190116_5c3f3fba8f0ee6.59131504.jpg"] },
    { nombre: "Darkseid", nombreReal: "Uxas", anioAparicion: 1970, casa: "DC", biografia: "Tirano de Apokolips que busca la ecuación anti-vida.", equipamiento: "Rayos Omega", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Darkseid_20190116_5c3f400a8f0ee6.59131504.jpg"] },
    { nombre: "Deathstroke", nombreReal: "Slade Wilson", anioAparicion: 1980, casa: "DC", biografia: "El mercenario más letal del mundo.", equipamiento: "Espada y armas", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Deathstroke_20190116_5c3f405a8f0ee6.59131504.jpg"] },
    { nombre: "Robin", nombreReal: "Damian Wayne", anioAparicion: 2006, casa: "DC", biografia: "Hijo de Batman entrenado por la Liga de Asesinos.", equipamiento: "Katana", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Robin_20190116_5c3f40aa8f0ee6.59131504.jpg"] },
    { nombre: "Batgirl", nombreReal: "Barbara Gordon", anioAparicion: 1961, casa: "DC", biografia: "Hija del comisionado Gordon y heroína de Gotham.", equipamiento: "Gadgets", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_Batgirl_20190116_5c3f40fa8f0ee6.59131504.jpg"] },
    { nombre: "Martian Manhunter", nombreReal: "J'onn J'onzz", anioAparicion: 1955, casa: "DC", biografia: "Último sobreviviente de Marte con vastos poderes.", equipamiento: "Telepatía", cantidadImagenes: 1, imagenes: ["https://static.dc.com/dc/files/default_images/Char_Profiles_MartianManhunter_20190116_5c3f414a8f0ee6.59131504.jpg"] }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a la DB para sembrar datos...");

        // Limpia la colección para no duplicar si ejecutas el script varias veces
        await Superhero.deleteMany({});
        console.log("Base de datos limpiada.");

        await Superhero.insertMany(heroes);
        console.log("¡40 Superhéroes cargados exitosamente!");

        process.exit();
    } catch (err) {
        console.error("Error sembrando datos:", err);
        process.exit(1);
    }
};

seedDB();