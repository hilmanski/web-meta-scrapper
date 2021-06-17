const websiteLogo = require( 'website-logo' )
module.exports = (req, res) => {
  const uri = req.query.url

  websiteLogo( uri, function( error, info ) {
    console.log( error || info )
      res.json({
      body: error || info,
    })
  })
}