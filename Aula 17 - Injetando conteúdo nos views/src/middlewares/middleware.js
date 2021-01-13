exports.middlewareGlobal = (req, res, next) => {
  console.log();

  if(req.body.cliente){
    req.body.cliente = req.body.cliente.replace('Moura', 'Não use moura')
    console.log(`Vi que vc postou ${req.body.cliente}`)
  }

  next();
}

exports.outroMiddleware = (req, res, next) => {
  console.log('Sou seu outro Middleware')
  next();
}