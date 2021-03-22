module.exports.getLogin = (req,res,next)=>{

  
    res.render('auth/login',{
        path: 'Login',
        pageTitle: 'Login',
        logged: req.isLogged

    })

}

module.exports.postLogin= (req,res,next)=>{

    req.session.isLogged = true;
    res.redirect('/')
    
}