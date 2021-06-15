module.exports = function(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    if(username === "andika" && password === "qwerty123"){
        next()
    }
    else{
        res.send(401)
    }
}