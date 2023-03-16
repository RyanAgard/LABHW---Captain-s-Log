
const { log } = require("console");
// const captain = require("../Models/Captain");

// Load the pokemon model
const logs = require("../Models/CaptainModels");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
    try {
      // Use the pokemon model to interact with the database
      // find will get all documents from the pokemon collection
      const logs = await logs.find();
      console.log(logs);
  
      // Looks in the views folder for "pokemons/Index" and passes {captain } data to the view (kind of like a server props object)
      res.render("/Index", { log :logsData  });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    try {
      const logsData= await logs.findById(req.params.id);
      res.render("/Show", { log :logsData });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  
// POST /pokemons
module.exports.create = async (req, res) => {

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await logs.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/')
}
