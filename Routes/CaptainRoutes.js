const express = require('express')

const router = express.Router()

const captainController = require('../Controllers/CaptainController')

// // I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// // Index, New, Delete, Update, Create, Edit, Show

// // Setup an "index" route for pokemonss, attach it to router along with the controller logic
// router.get('/', pokemonsController.index)
console.log(captainController)
// Setup a "new" route for creating pokemons
router.get('/', captainController.index)
router.get('/new', captainController.new)
router.delete('/clear', captainController.clear)
router.delete('/:id', captainController.delete)
router.put('/:id', captainController.update)
router.post('/logs/', captainController.seed)
router.post('/', captainController.create)
router.get('/:id/edit', captainController.edit)
router.get('/:id', captainController.show)
// router.delete('/clear', pokemonsController.delete)

// // Setup a "delete" route for removing a specific pokemons
// router.delete('/:id', pokemonsController.delete)

// // Setup a "update" route for updating a specific pokemons
// router.put('/:id', pokemonsController.update)

// router.post('/seed', pokemonsController.seed)

// Setup a "create" route for adding pokemons data
// router.post('/', pokemonsController.create)

// // Setup a "edit" route for editing a pokemons
// router.get('/:id/edit', pokemonsController.edit)

// // Setup an "show" route for pokemonss, attach it to router along with the controller logic
// router.get('/:id', pokemonsController.show)

module.exports = router;