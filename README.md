# Vulnogram icon set

A simple CSS based SVG icon set used in Vulnogram. [See all the icons here.](https://vulnogram.github.io/vg-icons/dist/).

## To use

Include the generated CSS file vg-icons.css in the HTML.

Example: 
`<link rel="stylesheet" type="text/css" href="https://vulnogram.github.io/vg-icons/dist/vg-icons.css"/>`

Use the class names of the form vgi-_name_ add an image icon to any text.

## build the stylesheet and an index of icons

`$ npm run dist`

It creates an optimzed CSS page with all SVGs embedded as base64 encoded data URLs. It also creates an index file showing all the icons in the set.

## Add or remove icons

Simply drop or delete the SVG files in the src directory and run the `npm run dist` command.

