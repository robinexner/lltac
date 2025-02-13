# lltac

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

lltac is a JavaScript library designed to manage cookie-related interactions in a user-friendly and privacy-conscious way. It features cookie consent notifications, helpful functions to access cookie functions and interactive "cookiejar" elements for gamified engagement.

See lltac in action: [robinexner.de](https://robinexner.de)

---

## Features

- Multi-language support (English and German translations included)
- Customizable cookie notification with user consent handling
- Progress tracking using cookie jars
- Easy integration with existing projects

---

## Installation

Include the repository in the root of your project.
Load the `lltac.js` script (make sure to import as module) and the css file `lltac.css` in html.

   ```html
   <script src="/lltac/lltac.js" type="module"></script>
   <link rel="stylesheet" href="/lltac/lltac.css" />
   ```

---

## Usage

Simply include the script and add elements with the `data-cookie` attribute to your HTML. The script will automatically attach cookie jars and handle user interactions.

Example:

```html
<div data-cookie="jar1">Find this cookie jar!</div>
<div data-cookie="jar2">Another cookie jar is hidden here!</div>
```

## Acknowledgments  

This project includes code from the following open-source projects:  

- **fundo_**  
Portions of the code in this project are derived from fundo_ under the MIT License.
Copyright © Robin Exner (https://robinexner.de).
You can find the source at [\[link\]](https://github.com/robinexner/fundo_).