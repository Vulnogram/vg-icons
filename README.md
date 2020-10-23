# Vulnogram icon set

An independent CSS based SVG icon set used in Vulnogram.

## To use

Include the generated css file.

Use the class names of the form vgi-_name_ add an image icon to any text.

## build the stylesheet and an index of icons

`$ npm run dist`

It creates an optimzed CSS page with all SVGs embedded as base64 encoded data urls. It also creates an index file showing all the icons in the set.

## Add or remove icons

Simply drop or delete the SVG files in the src directory and run the `npm run dist` command.

