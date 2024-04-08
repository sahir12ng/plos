const express = require('express');
const passport = require('passport');
const app = express();

const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/**
 * Importar rutas
 */
const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev')); // log requests to the console DEBUG
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.disable('x-powered-by'); // disable the X-Powered-By header in responses

app.set('port', port);

/**
 * Llamar a las rutas
 */
usersRoutes(app);

// Rutas
app.get('/', (req, res) => {
  res.send('Estás en la ruta raíz del backend.');
});

app.get('/test', (req, res) => {
  res.send('Estás en la ruta TEST');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.stack);
});

// Iniciar el servidor
server.listen(port, '192.168.10.19' || 'localhost', () => {
  console.log(`App Node.js ${process.pid} ejecutando en ${server.address().address}:${server.address().port}`);
});
