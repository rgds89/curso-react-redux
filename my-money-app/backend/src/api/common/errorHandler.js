const _= require('lodash')

module.exports = (req, res, nex) =>{
    const bundle = res.locals.bundle

    if(bundle.errors){
        const errors = parserErrors(bundle.errors)
        res.status(500).jason({errors})
    }else{
        next()
    }
}

const parserErrors =(nodeRestful) => {
    const errors = []
    _.forIn(nodeRestful, error => errors.push(error.message))
    return errors
}