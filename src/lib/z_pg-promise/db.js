// @ts-nocheck

import pgPromise from 'pg-promise' // pg-promise core library
import * as pgLib from 'pg-promise'
//import { Diagnostics } from './diagnostics'; // optional diagnostics

import { dbConfig } from './db-config.js'
import Bookings from './repos/bookings.js'
import Bikes from './repos/bikes'
//console.log('=================== dbConfig ===================', dbConfig)
// pg-promise initialization options:
const initOptions = {
   noWarnings: true,
   // Extending the database protocol with our custom repositories;
   // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
   extend(obj, dc) {
      //  //console.log('$ dc -> ', dc)
      dc = 'probando'
      // Database Context (dc) is mainly useful when extending multiple databases with different access API-s.
      //  //console.log('$ initial obj -> ', obj)
      // Do not use 'require()' here, because this event occurs for every task and transaction being executed,
      // which should be as fast as possible.

      obj.bookings =
         //     //console.log('1 ### Llamada new Bookings db.js') ||
         new Bookings(obj, pgp)
      obj.bikes =
         //        //console.log('1 ### Llamada new Bikes db.js') ||
         new Bikes(obj, pgp)
      // //console.log('$ then calls obj -> ', obj)
   },

   //imprimir query usando event en lugar de pg monitor
   //https://vitaly-t.github.io/pg-promise/global.html#event:query
   query(ev) {
      //console.log('QUERY ------>', ev.query)
   },
}
// Initializing the library:
const pgp = pgLib(initOptions)

//https://stackoverflow.com/questions/34382796/where-should-i-initialize-pg-promise

// Initializing optional diagnostics:
//Diagnostics.init(initOptions);

// Creating the database instance:
//Esto da problemas porque crea db en cada peticion: lo meto en singleton
//const db = pgp(dbConfig) // database instance;

//explicame este codigo

//const pgp = pgPromise();

const createSingleton = (name, create) => {
   const s = Symbol.for(name)
   let scope = global[s]
   // //console.log('scope @@@@@@@@@@@@@@@@@-> ', scope)
   if (!scope) {
      scope = { ...create() }
      global[s] = scope
   }
   return scope
}
/*
export const client = () =>
  //console.log('############# LLAMADA client() ############') ||
   createSingleton('db-space', () => pgp(dbConfig))
   */
export function getDB() {
   return createSingleton('my-app-db-space', () => {
      return {
         db: pgp(dbConfig),
         pgp,
      }
   })
}

/*
const { db, pgp: a } = getDB()

export default db
*/
/**
 * //////////////////////////////// Symbol ////////////////////////////////////////
 * Symbol es un tipo de dato primitivo introducido en ECMAScript 2015 (ES6) que se
 * utiliza para crear identificadores únicos. Un símbolo es un valor único e inmutable
 * que se puede utilizar como clave de propiedad en objetos.
 *
 * Los símbolos se crean utilizando la función Symbol(). Cada símbolo creado es único
 * y no se puede replicar. Los símbolos se pueden utilizar como claves de propiedad en
 * objetos, lo que garantiza que no habrá conflictos con otras claves de propiedad.
 *
 * Por ejemplo, en el código que me mostraste, se utiliza Symbol.for() para crear un
 * símbolo global con el nombre name. Luego, se utiliza este símbolo como clave de propiedad
 * en el objeto global para almacenar el objeto singleton. Al utilizar un símbolo como clave
 * de propiedad, se garantiza que no habrá conflictos con otras claves de propiedad que puedan
 * existir en el objeto global.
 *
 * En resumen, Symbol es un tipo de dato primitivo que se utiliza para crear identificadores
 *  únicos y se puede utilizar como clave de propiedad en objetos para evitar conflictos con
 *  otras claves de propiedad.
 */

/**
 * //////////////////////////////// global ////////////////////////////////////////
 * global es un objeto global en Node.js que contiene variables y funciones globales que están
 * disponibles en todo el programa. global es similar al objeto window en navegadores web.
 *
 * En el código que me mostraste, global[s] se utiliza para acceder a una variable global utilizando
 *  un símbolo s como clave de propiedad. El símbolo s se crea utilizando la función Symbol.for(name),
 * donde name es una cadena que se utiliza como identificador para el objeto singleton.
 * Si la variable global no existe, se crea un nuevo objeto singleton utilizando la función create()
 * y se asigna al objeto global utilizando el símbolo creado anteriormente. Si la variable global ya
 *  existe, se devuelve ese objeto.
 * En resumen, global[s] se utiliza para acceder a una variable global utilizando un símbolo como clave de propiedad. En el código que me mostraste, se utiliza para almacenar y recuperar un objeto singleton que representa una conexión a la base de datos.
 */
