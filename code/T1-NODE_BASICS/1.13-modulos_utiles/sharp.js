const sharp = require('sharp')


sharp('utiles.png')
    .resize(80)
    .grayscale()
    .toFile('resize-img.png')

