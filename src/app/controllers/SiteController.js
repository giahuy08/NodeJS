const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
  // [GET] /news
  index(req, res, next) {
    // res.render('home');
    // Callback
    // Course.find({}, function (err, courses) {
    //   if (!err) res.json(courses);
    //   else {
    //       next(err)
    //     res.status(400).json({ error: "Error" });
    //   }
    // });
    // Promise
    Course.find({})
      .then((courses) => {
       
        res.render("home", {
          courses:multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  // [GET] /news/:slug

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
