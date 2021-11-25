Implements a simple photo gallery using the "masonry" layout approach. It does this by getting most of the way there with css-grid, then using a bit of javascript to move images the rest of the way, since the `grid-template-rows: masonry;` propery isn't implemented in most browsers.

TODO:
 - The algorithm works well when all images are of similar heights, but the images I've chosen have a mixture of landscape and portrait orientations. This leads to the tiling not looking right at the bottom. It would be good to figure out how to get landscape images to occupy a few columns
 - Try and add a cover photo (one that takes up all of the row).

All images taken from: https://unsplash.com
