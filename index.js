// based on https://github.com/alexerlandsson/svg-css-icons.js

function svgCssIcons() {

    // Settings
    var input = 'svg/';
    var output = 'dist/';
  
    // html
    var iconIndex = `<html><head><link rel="stylesheet" type="text/css" href="vg-icons.css"/>
    <style>
    body {
        font-family: sans-serif;
        background-color: #ddd;
    }
    #iconlist {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(6em, 1fr));
        grid-gap: 0.5em;
    }
    #iconlist div {
        background-color:#fff;
        padding:0.5em;
        text-align: center;
        min-height: 4em;
        vertical-align:middle;
    }
    #iconlist i {
        margin: 0 auto;
        font-size: 32px;
        display: block;
    }
    #iconlist span {
        margin-top:1em;
    }    
    </style>
    </head>
    <body><h1>Vulnogram Icon Set</h1>. <a href="https://vulnogram.github.io/vg-icons/">More details.</a> <div id=iconlist>`
    // Base css
    var baseCss =
      '[class^="vgi-"], ' +
      '[class*=" vgi-"] {' +
        'display: inline-flex;' +
        'vertical-align: middle;' +
        'min-width: 1em;' +
        'min-height: 1em;' +
        'background-position: 0% 50%;' +
        'background-repeat: no-repeat;padding-left:1.4em;background-size: 1em 1em' +
      '\n}'
    ;
  
    function createSvgCss(className, svgData) {
      // Create css class for each icon
      var name = className.replace(/\.[^/.]+$/, "");
      baseCss +=
        '.vgi-' + name + ' {' +
        'background-image: url(data:image/svg+xml;base64,' + svgData + ');' +
        '}\n'
      ;
      iconIndex += `<div title="class=vgi-${name}"><i class=vgi-${name}></i><span class=vgi-${name}>${name}</span></div>`
    }
  
    function createCss() {
      // Writes the output to a css file
      fs.writeFile(output + 'vg-icons.css', baseCss, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(output + 'vg-icon.css successfully created.');
      });
      fs.writeFile(output + 'index.html', iconIndex + '</body></html>', function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(output + 'index.html successfully created.');
      });
    }
  
    function getSvgSource(item, index) {
      // Only create icon class if it is a svg
      var extension = item.substr(item.lastIndexOf('.') + 1);
  
      if (extension === 'svg') {
        // Get svg source code and encode it to base64
        var data = fs.readFileSync(input + item, 'base64');
        createSvgCss(item, data);
      }
    }
  
    fs = require('fs');
  
    // Loop through svg files
    var svgFiles = fs.readdirSync(input);
    svgFiles.sort().forEach(getSvgSource);
    createCss();
  }
  svgCssIcons();
