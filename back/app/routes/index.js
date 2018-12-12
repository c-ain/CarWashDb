const carRoutes = require('./wash_routes');

module.exports = function(app, db){
    carRoutes(app,db)
}