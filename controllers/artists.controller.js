const Artist = require('../models/artist.model');
const createError = require('http-errors');
const passport = require('passport');

module.exports.list = (req, res, next) => {
  Artist.find()
    .then(cards => res.json(cards))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  const artist = new Artist(req.body);
  artist.save()
    .then (artist => res.json(artist))
    .catch(next)
}

module.exports.update = (req, res, next) => {
  Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(artist => {
      if(!artist){
        throw createError(404, 'Artist not found')
        console.info('ARTIST => ', artist)
      }else{
        res.json(artist)
      }
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Artist.findByIdAndDelete(req.params.id)
    .then(artist => {
      if(!artist){
        throw createError(404, 'Artist not found')
      }else{
        res.status(204).json();
      }
    })
    .catch(next)
}