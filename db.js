/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const pg = require('pg');
const url = require('url');

let configs;

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true,
  };
} else {
  configs = {
    user: 'claucanchin',
    host: '127.0.0.1',
    database: 'recipe_db',
    port: 5432,
  };
}

const pool = new pg.Pool(configs);

pool.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log('idle client error', err.message, err.stack);
});

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

const userModelsFunction = require('./models/users');

const userModelsObject = userModelsFunction(pool);

const recipeModelsFunction = require('./models/recipes');

const recipeModelsObject = recipeModelsFunction(pool);

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

module.exports = {
  // make queries directly from here
  queryInterface: (text, params, callback) => pool.query(text, params, callback),

  // get a reference to end the connection pool at server end
  pool,

  /*
   * ADD APP MODELS HERE
   */
  recipes: recipeModelsObject,
  users: userModelsObject,
};
