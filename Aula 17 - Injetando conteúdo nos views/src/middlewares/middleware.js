exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este e o valor da variável local'
  next();
}

exports.outroMiddleware = (req, res, next) => {
  console.log('Sou seu outro Middleware')
  next();
}