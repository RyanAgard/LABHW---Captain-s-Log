
// const captain = require("../Models/Captain");

// Load the pokemon model
const Logs = require("../Models/CaptainModels");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
    try {
      // Use the pokemon model to interact with the database
      // find will get all documents from the pokemon collection
      const log = await Logs.find();
      console.log(log);
  
      // Looks in the views folder for "pokemons/Index" and passes {captain } data to the view (kind of like a server props object)
      res.render("CaptainsLogs/Index", { log });

    } catch (err) {
      console.log(err);
      res.send(err);
    }
  };


  module.exports.new = (req, res) => {
    res.render('CaptainsLogs/New')
}



// POST /pokemons
module.exports.create = async (req, res) => {

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        console.log(req.body)
        // use the model to interact with db and create a new document in the log collection
        const result = await Logs.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/captain')

}
// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    try {
      const log = await Logs.findById(req.params.id);
      res.render("CaptainsLogs/Show", { log });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  

// DELETE /logs/:id
module.exports.delete = async (req, res) => {
  
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.redirect('/captain')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 
// GET /logs/:name/edit
module.exports.edit = async (req, res) => {
  
    try {
        const log = await Logs.findById(req.params.id)
        res.render('captain/Edit', { log })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.shipIsBroken ) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

   try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Logs.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/captain/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}


// POST /logs/seed
module.exports.seed = async (req, res) => {
    console.log("POST /log");
    try {
        await Logs.deleteMany({})
        await Logs.create(req.body)
        res.redirect('/captain/')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}
// DELETE /logs/clear
module.exports.clear = async (req, res) => {

    try {
        await Logs.deleteMany({})
        res.redirect('/captain/')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

