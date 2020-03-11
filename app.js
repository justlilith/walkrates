let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

const express = require('express');
const path = require('path');
const cors = require('cors');


/*

We're going to use the Google Maps API so that we can keep our API keys secret.
Some of the things commented out are brought over for reference from tiltr; no big.

*/

express()
  .use(cors())
  .use(express.static(path.join(__dirname, 'build')))
//   .use(express.static(path.join(__dirname, 'frontend')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '/build')))
  .get('/testing', (req, res) => console.log('woo!')) //just to make sure the routing is working
  
  // .get('/frontend/', (req, res) => res.sendFile(path.join(__dirname, 'frontend/index.html')))

  // .get('/tiltrartist/:ausername', cors(), (req, res) =>
  //   client.get
  //     ( '/statuses/user_timeline/' //note -- this is the Twitter endpoint, NOT the node url
  //     , {screen_name : req.params.ausername, count : 50}
  //     , function(error, tweets, response)
  //       { if (!error)
  //           { res.json(tweets);}
  //         else
  //           { console.log("oh no; we couldn't get tweets for that user");}
  //       }
  //     )
  //   )

  //   .get('/tiltrterm/:aterm', cors(), (req, res) =>
  //     client.get
  //       ( '/search/tweets/' //note -- this is the Twitter endpoint, NOT the node url
  //       , {q : req.params.aterm, count : 50}
  //       , function(error, tweets, response)
  //         { if (!error)
  //             { res.json(tweets);}
  //           else
  //             { console.log("oh no; we couldn't get tweets for that search term");}
  //         }
  //       )
  //     )


  // // .get('/search/:search', (req,res) => res.json())
  // // .get('/search/:artist')
  .listen(port, () => console.log(`Live! Listening on ${ port }`))