// Require Node modules in the browser thanks to Browserify: http://browserify.org
let bespoke = require('bespoke')
let classes = require('bespoke-classes')
let nav = require('bespoke-nav')
let scale = require('bespoke-scale')
let bullets = require('bespoke-bullets')
let hash = require('bespoke-hash')
let prism = require('bespoke-prism')
let multimedia = require('bespoke-multimedia')
let extern = require('bespoke-extern')
let progress = require('bespoke-progress')
let backdrop = require('bespoke-backdrop')
let nebula = require('bespoke-theme-nebula')

// Bespoke.js
bespoke.from({
  parent: 'article.deck',
  slides: 'section'
}, [
  classes(),
  nav(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  prism(),
  multimedia(),
  extern(bespoke),
  nebula(),
  progress(),
  backdrop(),
]);
