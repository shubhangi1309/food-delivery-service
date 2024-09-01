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























