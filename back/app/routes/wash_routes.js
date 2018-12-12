var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {

    //ROUTES FOR SEARCHING entry by plate //////////////////////////////////////////////////////////////////////////////
    
    //NEW CARS DEPARTMENT
    app.get('/new/:plate', (req, res) => {
        const myId = req.params.plate;
        const details = {'plate': myId };
        db.collection('new').findOne(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

    //USED CARS DEPARTMENT
    app.get('/used/:plate', (req, res) => {
        const myId = req.params.plate;
        const details = {'plate': myId};
        db.collection('used').findOne(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

    //BODY SHOP DEPARTMENT
    app.get('/body/:plate', (req, res) => {
        const myId = req.params.plate;
        const details = {'plate': myId};
        db.collection('bodyShop').findOne(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

    //SERVICE DEPARTMENT
    app.get('/service/:plate', (req, res) => {
        const myId = req.params.plate;
        const details = {'plate': myId };
        db.collection('service').findOne(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

//ROUTES FOR DELETING AN ENTRY/////////////////////////////////////////////////////////////////////////////////////////
    
    //NEW CARS DEPARTMENT
    app.delete('/new/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('new').remove(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send('Entry '+ id + 'Deleted!');       
            }
        });
    });

    //USED CARS DEPARTMENT
    app.delete('/used/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('used').remove(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send('Entry '+ id + 'Deleted!');       
            }
        });
    });

    //BODYSHOP DEPARTMENT
    app.delete('/body/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('bodyShop').remove(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send('Entry '+ id + 'Deleted!');       
            }
        });
    });

    //SERVICE DEPARTMENT
    app.delete('/service/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('service').remove(details, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send('Entry '+ id + 'Deleted!');       
            }
        });
    });

//ROUTES FOR EDITING AN ENTRY////////////////////////////////////////////////////////////////////////////////////////
    
    // NEW CARS DEPARTMENT
    app.put('/new/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };

        db.collection('new').update(details, car, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

    // USED CARS DEPARTMENT
    app.put('/used/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };

        db.collection('used').update(details, car, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

    // BODY SHOP DEPARTEMTN
    app.put('/body/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };

        db.collection('bodyShop').update(details, car, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });

    // SERVICE DEPARTMENT
    app.put('/service/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };

        db.collection('service').update(details, car, (err, item) => {
            if(err) {
                res.send({'error': 'An error has occured.'});
            } else {
                res.send(item);       
            }
        });
    });


//ROUTES FOR ADDING AN ENTRY TO A DEPARTMENT ////////////////////////////////////////////////////////////////

    // NEW CARS DEPARTMENT
    app.post('/new', (req, res)=> {
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };
       db.collection('new').insert(car, (err,result) => {
            if(err){
                res.send({'error': 'An error has occured'});
            } else{
                res.send(result.ops[0])
            }
       });
    });

    // BODYSHOP DEPARTMENT
    app.post('/body', (req, res)=> {
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };
       db.collection('bodyShop').insert(car, (err,result) => {
            if(err){
                res.send({'error': 'An error has occured'});
            } else{
                res.send(result.ops[0])
            }
       });
    });

      // USED CARS DEPARTMENT
      app.post('/used', (req, res)=> {
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };
       db.collection('used').insert(car, (err,result) => {
            if(err){
                res.send({'error': 'An error has occured'});
            } else{
                res.send(result.ops[0])
            }
       });
    });

      // SERVICE DEPARTMENT
      app.post('/service', (req, res)=> {
        const car = { plate: req.body.plate, model: req.body.model, maschine: req.body.maschine, hand: req.body.hand };
       db.collection('service').insert(car, (err,result) => {
            if(err){
                res.send({'error': 'An error has occured'});
            } else{
                res.send(result.ops[0])
            }
       });
    });

// ROUTES FOR FINDING ALL CARS IN CERTAIN DEPARTMENT///////////////////////////////////////////////////////////////////////

        //NEW CAR DEPARTMENT
    app.get('/newAll', (req, res) => {
    const car = { plate: req.body.plate, model: req.body.model };
    db.collection('new').find({}).toArray(function(err, result){
        if(err){
            res.send({'error': 'An error has occured'});
        } else {
            res.send(result)
        }
        });
    });
        //USED CAR DEPARTMENT
        app.get('/usedAll', (req, res) => {
            const car = { plate: req.body.plate, model: req.body.model };
            db.collection('used').find({}).toArray(function(err, result){
                if(err){
                    res.send({'error': 'An error has occured'});
                } else {
                    res.send(result)
                }
                });
            });
        //BODY SHOP DEPARTMENT
        app.get('/bodyAll', (req, res) => {
        const car = { plate: req.body.plate, model: req.body.model };
        db.collection('bodyShop').find({}).toArray(function(err, result){
            if(err){
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result)
            }
            });
        });
        //SERVICE DEPARTMENT
        app.get('/serviceAll', (req, res) => {
        const car = { plate: req.body.plate, model: req.body.model };
        db.collection('service').find({}).toArray(function(err, result){
            if(err){
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result)
            }
            });
        });
};
    