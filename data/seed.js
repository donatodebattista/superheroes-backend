import mongoose from 'mongoose'
import Superhero from '../models/Superhero.js'
import "dotenv/config"

const heroes = [
    {
        nombre: "Spider-Man", nombreReal: "Peter Parker", anioAparicion: 1962, casa: "Marvel",
        biografia: "Tras ser mordido por una araña radiactiva, el joven Peter Parker adquiere poderes asombrosos y aprende que un gran poder conlleva una gran responsabilidad.",
        equipamiento: "Lanza-telarañas, traje tecnológico", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-1024x819.png"]
    },
    {
        nombre: "Iron Man", nombreReal: "Tony Stark", anioAparicion: 1963, casa: "Marvel",
        biografia: "Genio, multimillonario, playboy y filántropo que utiliza una armadura de alta tecnología para proteger al mundo.",
        equipamiento: "Armadura Mark LXXXV", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Man-1024x819.png"]
    },
    {
        nombre: "Capitán América", nombreReal: "Steve Rogers", anioAparicion: 1941, casa: "Marvel",
        biografia: "El primer vengador, un supersoldado con un sentido inquebrantable de la justicia que luchó en la Segunda Guerra Mundial.",
        equipamiento: "Escudo de Vibranium", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/marvel-captain-america-1024x819.png"]
    },
    {
        nombre: "Thanos", nombreReal: "Thanos", anioAparicion: 1973, casa: "Marvel",
        biografia: "El Titán Loco que busca equilibrar el universo recolectando las seis Gemas del Infinito.",
        equipamiento: "Guantelete del Infinito", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Thanos-1024x819.png"]
    },
    { nombre: "Thor", nombreReal: "Thor Odinson", anioAparicion: 1962, casa: "Marvel", biografia: "Dios del Trueno y rey de Asgard.", equipamiento: "Mjolnir/Stormbreaker", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/marvel-thor-1024x819.png"] },
    { nombre: "Hulk", nombreReal: "Bruce Banner", anioAparicion: 1962, casa: "Marvel", biografia: "Científico que se transforma en un gigante verde cuando se enfurece.", equipamiento: "Ninguno", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hulk-1024x819.png"] },
    { nombre: "Black Widow", nombreReal: "Natasha Romanoff", anioAparicion: 1964, casa: "Marvel", biografia: "Espía experta y asesina altamente entrenada.", equipamiento: "Bastones eléctricos", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Black-Widow-1024x819.png"] },
    { nombre: "Doctor Strange", nombreReal: "Stephen Strange", anioAparicion: 1963, casa: "Marvel", biografia: "Hechicero Supremo y protector de la realidad.", equipamiento: "Capa de levitación", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-DrStrange-1024x819.png"] },
    { nombre: "Black Panther", nombreReal: "T'Challa", anioAparicion: 1966, casa: "Marvel", biografia: "Rey de Wakanda con un traje de vibranium.", equipamiento: "Garras de vibranium", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/marvel-black-panther-1024x819.png"] },
    { nombre: "Wolverine", nombreReal: "Logan", anioAparicion: 1974, casa: "Marvel", biografia: "Mutante con garras de adamantium y factor de curación.", equipamiento: "Garras de Adamantium", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2022/05/Marvel-Wolverine-Brown-Ver-1024x819.png"] },
    { nombre: "Scarlet Witch", nombreReal: "Wanda Maximoff", anioAparicion: 1964, casa: "Marvel", biografia: "Poderosa mutante capaz de alterar la realidad.", equipamiento: "Magia del Caos", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-Scarlet-Witch-1-1024x819.png"] },
    { nombre: "Deadpool", nombreReal: "Wade Wilson", anioAparicion: 1991, casa: "Marvel", biografia: "Mercenario bocazas con regeneración extrema.", equipamiento: "Katanas y pistolas", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Deadpool-1-1024x819.png"] },
    { nombre: "Venom", nombreReal: "Eddie Brock", anioAparicion: 1988, casa: "Marvel", biografia: "Simbionte alienígena unido a un periodista.", equipamiento: "Poderes simbióticos", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Venom-alt-1024x819.png"] },
    { nombre: "Magneto", nombreReal: "Erik Lehnsherr", anioAparicion: 1963, casa: "Marvel", biografia: "Mutante con control total sobre los metales.", equipamiento: "Casco protector", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/marvel-Magneto-1024x819.png"] },
    { nombre: "Loki", nombreReal: "Loki Laufeyson", anioAparicion: 1962, casa: "Marvel", biografia: "Dios del engaño y hermano de Thor.", equipamiento: "Cetro/Dagas", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2020/12/marvel-Loki-1024x819.png"] },
    { nombre: "Rocket Racoon", nombreReal: "89P13", anioAparicion: 1976, casa: "Marvel", biografia: "Mapache modificado genéticamente, mercenario y miembro de los Guardianes de la Galaxia.", equipamiento: "Armas de fuego", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Rocket-Raccoon-wt-gun-1024x819.png"] },
    { nombre: "Vision", nombreReal: "Vision", anioAparicion: 1968, casa: "Marvel", biografia: "Androide creado con la Gema de la Mente.", equipamiento: "Gema de la Mente", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/marvel-vision-1024x819.png"] },
    { nombre: "Ant-Man", nombreReal: "Scott Lang", anioAparicion: 1979, casa: "Marvel", biografia: "Héroe capaz de encogerse o crecer a voluntad.", equipamiento: "Partículas Pym", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2020/11/marvel-Ant-Man-1024x819.png"] },
    { nombre: "Daredevil", nombreReal: "Matt Murdock", anioAparicion: 1964, casa: "Marvel", biografia: "Abogado ciego con sentidos súper desarrollados.", equipamiento: "Bastones de pelea", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Daredevil-1024x819.png"] },
    { nombre: "Green Goblin", nombreReal: "Norman Osborn", anioAparicion: 1964, casa: "Marvel", biografia: "Archienemigo de Spider-Man, industrial trastornado.", equipamiento: "Planeador y bombas calabaza", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Green-Goblin-1024x819.png"] },

    {
        nombre: "Batman", nombreReal: "Bruce Wayne", anioAparicion: 1939, casa: "DC",
        biografia: "El caballero de la noche, protector de Gotham City.",
        equipamiento: "Batarangs, Batmóvil", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png"]
    },
    {
        nombre: "Superman", nombreReal: "Clark Kent", anioAparicion: 1938, casa: "DC",
        biografia: "El hombre de acero, último hijo de Krypton.",
        equipamiento: "Traje kriptoniano", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Superman-1024x819.png"]
    },
    {
        nombre: "Wonder Woman", nombreReal: "Diana Prince", anioAparicion: 1941, casa: "DC",
        biografia: "Princesa de las Amazonas y guerrera legendaria.",
        equipamiento: "Lazo de la Verdad, Escudo", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Wonder-Woman-1024x819.png"]
    },
    {
        nombre: "Joker", nombreReal: "Desconocido", anioAparicion: 1940, casa: "DC",
        biografia: "El príncipe payaso del crimen y némesis de Batman.",
        equipamiento: "Gas de la risa", cantidadImagenes: 1,
        imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/dc-joker-alt-1-1024x819.png"]
    },
    { nombre: "Flash", nombreReal: "Barry Allen", anioAparicion: 1956, casa: "DC", biografia: "El hombre más rápido del mundo.", equipamiento: "Anillo de traje", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/dc-flash-1024x819.png"] },
    { nombre: "Aquaman", nombreReal: "Arthur Curry", anioAparicion: 1941, casa: "DC", biografia: "Rey de los siete mares y de Atlantis.", equipamiento: "Tridente de Neptuno", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/dc-aquaman-1024x819.png"] },
    { nombre: "Green Lantern", nombreReal: "Hal Jordan", anioAparicion: 1959, casa: "DC", biografia: "Protector galáctico con un anillo de poder.", equipamiento: "Anillo de Poder", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Green-Lantern-1024x819.png"] },
    { nombre: "Harley Quinn", nombreReal: "Harleen Quinzel", anioAparicion: 1992, casa: "DC", biografia: "Antihéroe y ex-compañera del Joker.", equipamiento: "Bate de béisbol", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Harley-Queen-1024x819.png"] },
    { nombre: "Orion", nombreReal: "Orion", anioAparicion: 1971, casa: "DC", biografia: "Hijo de Darkseid y feroz defensor de New Genesis.", equipamiento: "Astro-Arnés", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Orion-1024x819.png"] },
    { nombre: "Cyborg", nombreReal: "Victor Stone", anioAparicion: 1980, casa: "DC", biografia: "Mitad hombre, mitad máquina con tecnología avanzada.", equipamiento: "Cañón sónico", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Cyborg-1024x819.png"] },
    { nombre: "Dr Fate", nombreReal: "Kent Nelson", anioAparicion: 1940, casa: "DC", biografia: "Poderoso hechicero y agente de los Señores del Orden.", equipamiento: "Casco del Destino", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Dr-Fate-1024x819.png"] },
    { nombre: "Space Ghost", nombreReal: "Thaddeus Bach", anioAparicion: 1966, casa: "DC", biografia: "Héroe intergaláctico que combate el crimen en el espacio.", equipamiento: "Bandas de Poder", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2022/04/DC-Space-Ghost-1024x819.png"] },
    { nombre: "Shazam", nombreReal: "Billy Batson", anioAparicion: 1939, casa: "DC", biografia: "Niño que se convierte en héroe al decir una palabra.", equipamiento: "Rayos mágicos", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/dc-shazam-1024x819.png"] },
    { nombre: "Peacemaker", nombreReal: "Christopher Smith", anioAparicion: 1966, casa: "DC", biografia: "Un hombre que ama la paz tanto que está dispuesto a matar por ella.", equipamiento: "Armas de fuego y casco", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2022/02/DC-Peacemaker-1024x819.png"] },
    { nombre: "Catwoman", nombreReal: "Selina Kyle", anioAparicion: 1940, casa: "DC", biografia: "Experta ladrona y aliada/enemiga de Batman.", equipamiento: "Látigo", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Catwoman-2-1024x819.png"] },
    { nombre: "Darkseid", nombreReal: "Uxas", anioAparicion: 1970, casa: "DC", biografia: "Tirano de Apokolips que busca la ecuación anti-vida.", equipamiento: "Rayos Omega", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Darkseid-1-1024x819.png"] },
    { nombre: "Deathstroke", nombreReal: "Slade Wilson", anioAparicion: 1980, casa: "DC", biografia: "El mercenario más letal del mundo.", equipamiento: "Espada y armas", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Deathstroke-1024x819.png"] },
    { nombre: "Deadman", nombreReal: "Boston Brand", anioAparicion: 1967, casa: "DC", biografia: "Fantasma que puede poseer a cualquier ser vivo para combatir el mal.", equipamiento: "Intangibilidad e invisibilidad", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2019/07/dc-deadman-1024x819.png"] },
    { nombre: "Kalibak", nombreReal: "Kalibak", anioAparicion: 1971, casa: "DC", biografia: "Hijo de Darkseid y brutal guerrero de Apokolips.", equipamiento: "Maza Beta", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Kalibak-1024x819.png"] },
    { nombre: "Martian Manhunter", nombreReal: "J'onn J'onzz", anioAparicion: 1955, casa: "DC", biografia: "Último sobreviviente de Marte con vastos poderes.", equipamiento: "Telepatía", cantidadImagenes: 1, imagenes: ["https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Martian-Manhunter-2-1024x819.png"] }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a la DB para sembrar datos...");

        const count = await Superhero.countDocuments();
        if (count === 0) {
            await Superhero.insertMany(heroes);
            console.log("¡40 Superhéroes cargados exitosamente!");
        } else {
            console.log(`La base de datos ya contiene ${count} superhéroes. Omitiendo sembrado.`);
        }

        process.exit();
    } catch (err) {
        console.error("Error sembrando datos:", err);
        process.exit(1);
    }
};

seedDB();