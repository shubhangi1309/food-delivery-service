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

-------------------------- 2 SEPTEMBER 2024----------1-------------
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

-------------------------- 2 SEPTEMBER 2024----------2-------------
Header
    logo
    nav-items
Body
    search
    restaurant container
        restaurant card
            - img
            - name, rating, cuisine, etc, delivery time
footer
    copyright
    links
    address
    contact

Passing props (JS object) to component is just like passing arguments to functional component
-------------------------- 3  SEPTEMBER 2024-----------------------
unique key when mapping component so that the only newly added one is rendered & existing one is not re-rendered.

re-structure app create src folder (source code)
seperate file for each component 

export default can be written only once in a file
NAMED export & DEFAULT export

React Hooks
useState(), useEffect() named imports
whenever state variable updates React re-renders component
in React 16 React Fibre came up to update the DOM to find difference old vs new
first it finds difference then it updates actual DOM
finding out diff b/w 2 objects is fast than b/w html
React Fiber Architecture READ from git link 
in useState set method 2nd argument because as soon as it is called the DIFF is called

Virtual DOM representation of actual DOM
-------------------ep6-------------------------
Monolith architecture, microservice
Q) two approaches how UI app fetch data from BE?
Approach 1.
app loads -> API call(500ms) -> render data on UI
Approach 2.
app loads -> render -> API call -> re-render app with data
In React we only use 2nd approach
render cycles are very fast

useEffect Hook
when does it get called?
app loads -> render -> useEffect hook's callBack fn gets called -> API call -> re-render app with data
todo -> useEffect, callback fn, return html debug when is it called?

fetch is given by BROWSER's JS ENGINE

browser's blockers are not allowing to call API from one origin to another

-------------------------- 4 SEPTEMBER 2024-----------------------
--------------------------5  SEPTEMBER 2024-----------------------
whenever state variables update, react triggers a reconciliation cycle (re-renders component)
JSON VIEWER plugin to view API response pretty
npm i react-router-dom
const appRouter = createBrowserRouter(); // define what will happen at a specific route

it takes a list of path
an object => {path : "/", element: component}

RouterProvider will provide this routing configuration (createBrowserRouter) to our APP.
earlier, we were => root.render(<AppLayout/>)
now, => root.render(<RouterProvider router={appRouter}/>) herre configuration will be added to RouterProvider component.

react-router-dom =>  gives good error page instead of giving ugly red error in code lines
react-router-dom => gives HOOK useRouteError => gives more info about error


To make a functionality where we want header to come on every page and 
the rest of the component to replace BODY component.
=> we will make CHILDREN routes of Applayout
OUTLET will be filled according to children

<a href=""> </a> => anchor tag refreshes entire page
navigate to diff page without reloading page we use => <Link></Link> (by react-router-dom) PERFORMANCE

re-loads the page vs refreshes the component(changes the comp)
SPA SINGLE PAGE APP

2 types of routing in React
+ Client side routing => UI app has all components
+ server side routing => make network call, page is coming from server

