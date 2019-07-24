
import React from 'react'
import { Helmet } from 'react-helmet'


export default () => (
  <div>
    <Helmet>
      <meta property="fb:app_id" content="277341966096239" />
      <html prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# game: http://ogp.me/ns/game#" />
      <meta property="og:type" content="game.achievement" />
      <meta property="og:title" content="Free Spins!" />
      <meta property="og:description" content="I just won Free Spins! Come join the adventure in LuckyLand Slots, where you can win real cash prizes!" />
      <meta property="og:image" content="https://play.luckylandslots.com/loader/facebook/assets/freespins.png" />
      <meta property="og:image:width" content="480" />
      <meta property="og:image:height" content="248" />
    </Helmet>
    <h1>This is what we're all about.</h1>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
  </div>
)
