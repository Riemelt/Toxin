# Toxin Hotel

Toxin is a hotel website for room reservations, which is an educational project for learning front-end development, a part of [MetaLamp's](https://www.metalamp.io/education) Education Program. It is based on [Figma's design](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/MetaLamp-(former-FSD)-frontend-education-program.-The-2nd-task), which was made specifically for studying purposes.

## Goals

* Learn and understand how to build relatively big and complicated projects from scratch, using Pug, Scss, Js
* Search, install and implement jQuery plugins into project 
* Work with Webpack and Figma
* Code with BEM methodology
* Use [PixelPerfect](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) extension to match web elements according to the design
* Create responsive and flexible web-pages

## Pages

### UI-kit

* [Colors & Type](https://riemelt.github.io/Toxin/colors-and-type.html)
* [Form Elements](https://riemelt.github.io/Toxin/form-elements.html)
* [Cards](https://riemelt.github.io/Toxin/cards.html)
* [Headers & Footers](https://riemelt.github.io/Toxin/headers-and-footers.html)

### Web-site

* [Landing](https://riemelt.github.io/Toxin/landing.html)
* [Landing / Dates Dropdown](https://riemelt.github.io/Toxin/landing-dates-dropdown.html)
* [Landing / Guests Dropdown](https://riemelt.github.io/Toxin/landing-guests-dropdown.html)
* [Search room / Filter](https://riemelt.github.io/Toxin/search-room-filter.html)
* [Search room / Filter / Preferences Dropdown](https://riemelt.github.io/Toxin/search-room-filter-preferences-dropdown.html)
* [Search room / Filter / Preferences Expandable Checkbox list](https://riemelt.github.io/Toxin/search-room-filter-preferences-expandable-checkbox-list.html)
* [Room details](https://riemelt.github.io/Toxin/room-details.html)
* [Registration](https://riemelt.github.io/Toxin/registration.html)
* [Sign in](https://riemelt.github.io/Toxin/sign-in.html)

## Dependencies

* [webpack](https://github.com/webpack/webpack)
* [material-icons](https://github.com/marella/material-icons#readme)
* [FortAwesome-Free](https://github.com/FortAwesome/Font-Awesome)
* [air-datepicker](https://github.com/t1m0n/air-datepicker)
* [chart-js](https://github.com/chartjs/Chart.js)
* [imask](https://github.com/uNmAnNeR/imaskjs)
* [jquery](https://github.com/jquery/jquery)
* [moment](https://github.com/moment/moment)
* [noUiSlider](https://github.com/leongersen/noUiSlider)
* [paginationjs](https://github.com/superRaytin/paginationjs)

## Install


```sh
git clone https://github.com/Riemelt/Toxin.git
cd Toxin
npm i
```

## Commands

Run on dev-server

```sh
npm start
```
Build in development mode

```sh
npm run dev
```

Build in production mode

```sh
npm run build
```

## Project structure

```sh
├───dist                         # built web-pages
├───pixel-perfect                # exported png images of figma's design for pixel-perfect
└───src
    ├───assets                   # image, font, favicon files
    ├───components               # bem blocks, one folder per component
    ├───layouts                  # layouts with general page structure
    ├───main-styles              # scss variables, global styles, fonts loading
    ├───pages                    # final web-pages and all entry points, one folder per page
    ├───utilities                # js helper functions
    ├───.eslintrc.js             # eslint rules for js
    ├───.gitignore               # list of folders to ignore to commit such as node_modules and dist
    ├───package-lock.json        # node_modules dependencies
    ├───package.json             # project info and dependencies
    ├───README.md                # project info and documentation
    ├───webpack.config.js        # bundler config
```
