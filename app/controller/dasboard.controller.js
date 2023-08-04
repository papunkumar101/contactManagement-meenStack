const userDasboard = async(req,res) =>{   
       res.status(200).render('dashboard',{userData: req.session.user});
}

module.exports = {userDasboard};