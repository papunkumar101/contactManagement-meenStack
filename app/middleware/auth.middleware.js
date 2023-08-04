
const publicRoute = (req, res, next) => {
    if (!req.session.user) {
        next();
      } else {
        res.redirect('/dashboard');
      }
}

const privateRoute = (req, res, next) => {
    if (req.session.user){
        next();
      } else {
        res.redirect('/login');
      }
}

module.exports = { publicRoute,privateRoute };