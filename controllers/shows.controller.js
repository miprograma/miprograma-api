const Show = require("../models/show.model");
const createError = require("http-errors");
const passport = require("passport");

module.exports.getByDate = (req, res, next) => {
  const { date } = req.query
  if (!date) {
    next(createError(400, 'Date query parameter is requiered'))
  } else {
    Show.findOne({ date: date })
      .populate('sessions.artist')
      .populate('sessions.performance')
      .populate('current.artist')
      .populate('current.performance')
      .then(show => {
        if (show) {
          res.json(show)
        } else {
          return new Show({ date: req.query.date })
            .save()
            .then(show => res.json(show))
        }
      })
      .catch(next);
  }
};

module.exports.list = (req, res, next) => {
  Show.find()
    .then(shows => res.json(shows))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  const show = new Show(req.body);
  show
    .save()
    .then(show => res.json(show))
    .catch(next);
};


module.exports.updateSession = (req, res, next) => {
  let sessions = [];
  for (i in req.body.showBlockList){
    const { artist, performance } = req.body.showBlockList[i];
    if ((artist != "") && (performance != "")){
      sessions.push({
        artist,
        performance
      });
    }
  }
  Show.findByIdAndUpdate(req.params.id, { $set: { sessions: sessions } }, { new: true })
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        res.status(200).json(show);
      }
    })
    .catch(next);

/*

  Show.findById(req.params.id)
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        const sessions = show.sessions;
        const sessionIndex = parseInt(req.params.sessionIndex,10);
        sessions[sessionIndex] = req.body.showBlockList;
        console.log(sessions);
        show.sessions = sessions;
        console.log(show.sessions);
        return show.save()
          .then(show => {
          res.json(show);
          
          console.log(show);
        });
      }
    })
    .catch(next);
    */
};

module.exports.update = (req, res, next) => {
  Show.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        res.json(show);
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Show.findByIdAndDelete(req.params.id)
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        res.status(204).json();
      }
    })
    .catch(next);
};

module.exports.setCurrent = (req, res, next) => {
  const { artist, performance } = req.body;
  const current = {
    artist,
    performance
  }
  Show.findByIdAndUpdate(req.params.id, { $set: { current: current } }, { new: true })
    .then(show => {
      if (!show) {
        throw createError(404, "Show not found");
      } else {
        res.status(200).json(show);
      }
    })
    .catch(next);
}
