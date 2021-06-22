const websiteLogo = require( 'website-logo' )
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  const uri = req.query.url

  websiteLogo( uri, function( error, info ) {
    console.log( error || info )
      res.json({
      body: error || info,
    })
  })
}