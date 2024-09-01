------------1 september 2024-------Food delivery service web app------
to minify files, exclude comments, optimise images, to make prodcution ready
bundling, code splitting, compression, chunking, minification

react itself, can't do above things
above things will be done by 

npm init -> makes our project use/add Node Package Manager
npm init -y (will do a lot)
but we use just "npm init" to add configurations

package.json is configuration for npm, can have tilde caret
npm will take care of dependencies & it's versions

Importnant package => BUNDLER => WEBPACK/ PARCEL/ VITE

we use PARCEL (easy to configure)
npm i -D parcel (DEV DEPENDECY) vs Normal Dependency

package-lock.json => tracks exact version installed
what is integrity?
it's a hash, SHA512, this hash
have you heard of it is working on my local but not on production?
to avoid that package-lock keeps a HASH to verify,
whatever is present on my machine is same version deployed on PROD envt

babel was installed auto when parcel was installed.

we will use parcel to ignite our app
how?
npx parcel index.html
what will this command do?

Parcel will create SERVER for us, app will run on localhost:1234
npx means executing a package

npm i react
npm i react-dom

# PARCEL
- DEV build
- build server
- HMR
- File watching algo (written in C++)
- Caching - faster builds (.parcel-cache folder)
- Image optimisation
- when I create PROD build, Parcel will minify code
- bundle
- compress (remove white space)
- consistent Hashing 
- transitive dependency?
- code splitting
- differential bundling - app can be openend in diff browsers) older version as well
- Diagnostic
- error handling
- HTTPS (suppose in dev envt we want to test something which only works on SSL)
- tree shaking (100 functions are present but we use 5 functions parcel will tree shake files, remove unused code)
- different DEV & PROD bundles (because Prod build takes more time optimisation are more)

npx build index.html (for PROD)
when it creates PROD build where does it go?
it will bindle, minify, all of it will be placed in DIST folder
when DEV build is done => dist will have => development envt built file (more files)
when PROD build is done => dist will have => PROD envt built files (lesser files) => give 1html 1css 1js files and mappings. These 3 files will have all code of app which is prod ready.

when we run build command for DEV/PROD => dist, .parcel-cache folders are created.
so we don't need them on git

package.json => scripts
npm run start/ npm start
npm run build

JSX makes developer's life easier, we can write react without JSX
JSX is HTML like & XML like
JSX code is transpiled before it goes to engine so that browser engine can understand it=> 
Parcel is manager => Parcel asks BABEL(transpiler/ JS compiler) to do this
JSX => React.creaetElement => JS object => HTMLElement(render)

Important! JSX takes care of malicious data, it SANITIZES data present in {}

TitleComponent></TitleComponent>
            <TitleComponent/>
            {TitleComponent()}
These 3 things are same.
