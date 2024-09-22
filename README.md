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

--------------------------19 SEPTEMBER 2024-----------------------
Class based components
class User extends React.Component/Component {
    constructor(props) {
        super(props)
    }
    render() { return {}}
}
why do we call super(props)?
without passing props to super, this.props reference would be undefined in the constructor

create STATE
F) Fn comp => useState
C) Class comp => this.state = {}

F) invoking a Fn comp means MOUNT it
C) creating instance of class comp constructor is called, 
this is best place to receive props and create STATE variables

F) setCount()
C) this.setState = {}

LIFECYCLE of CLASS C.
MOUNT
batch => first constructor is called then render of all (Parent then SIBLINGS)

COMPONENT DID MOUNT - API call made in it (SIBLINGS then parent)

OPTIMISATION
RENDER phase => batch 1 (constructor, render)
COMMIT phase => batch 2 (compDidMount) [DOM manipulation SINGLE BATCH]

------MOUNT------
constructor (MOCK data)
render      (MOCK data)
    HTML    (MOCK data)
Component Did Mount
    <API call>
    this.seState -> variable is updated

------UPDATE------
render(API data)
<HTML new API data>
Component Did Update

------UNMOUNT------
when comp is removed from UI

----------20 SEPT 2024--------
L-9 OPTIMISING our App

Single responsibility principle/ Sepeartion of concerns
custom hooks => utility function, modular, abstract functionality, reuasable, readable

--------21 sept 2024--------
Parcel is a bundler
it bundles all code into 1 file
check file => web-dev tools > network tab > JS tab > 1 file
put under DIST folder (DISTRIBUTABLE)

break app down in smaller JS files (smaller bundles)
CHUNKING/ CODE-SPLITTING/ LAZY LOADING/ DYANMIC BUNDLING/ on-demand loading

REMOVE THIS
import Grocery from "./components/Grocery";
ADD THIS
const Grocery = lazy(() => import("./components/Grocery")); 

check file => web-dev tools > network tab > JS tab > 2 files

A component suspended while responding to synchronous input.
React is fast, grocery comp, might take time to load, to handle this state
SUSPENSE comp is used.
-------L 10
UI Frameworks:-
normal css      scss, sass          styled-comp
CHAKRA UI       MATERIAL UI          ANT DESIGN

using TAILWIND CSS style comp-
tailwindcss.com
install > framework guide > parcel

npm install -D tailwindcss postcss
npx tailwindcss init => creates tailwind.config.js (for configuring tailwind)
create => .postcssrc file also (for configuring PostCSS)

POSTCSS => a tool for transforming css with JS
BTS tailwindcss uses POSTCSS

what will .postcssrc do?
parcel will use .postcssrc to understand TAILWIND

slight modification in tailwind.config.js for "content"
it takes list of files where I can use TAILWIND CSS

in index.css put 
@tailwind base;
@tailwind components;
@tailwind utilities;

after this we won't  be adding anuthing to css files
tailwind gives classNames for all css that we want to write

tailwind intelliSense will siggest classes in VS code

con of tailwind => in JS file the className becomes really long
pro of tailwind => "lightweight"
it will only import css required for app and
not the rest of the large number of classes it has
if we write 100 times m-4 still it will have single m-4

dark-mode is easy with this
------------------22 sept 2024---------------------
Higher order C.
takes C. as i/p and gives C. as o/p
HOC => enhances the C.

Controlled C. & Un-controlled C.
Rest-Category, ItemList
build accordion

React dev tools extension for CHROME

Rest-Menu is parent of Rest-Category
parent can control to collapse Rest-Category all accrordions

Rest-Category is controlled C. (controlled by parent C.)
when Rest-Category had it's own state => un-controlled c.
now state is controlled by parent

can we modify "showIndex" state variable of parent from child?

=> LIFTING STATE UP (to control child C.)
whenever state needs to be shared with sibling, we lift state up to closest ANCESTOR

what is PROPS DRILLING?
React is 1 way data flow
one direction of data flow from parent to child

AVOID PROP DRILLING

Global data which could be accessed from anywhere
REACT CONTEXT API
fn CREATE CONTEXT (by R.)

In class based C. we don't have HOOKs
how to access CONTEXT inside CLASS c.
contextName.CONSUMER
UserContext.Consumer

R. gives power of consumer when we create context
two ways to access CONTEXT
1) HOOKS
2) CONSUMER => JSX code, callback fn, access to data

How to pass new info to my whole app
in App.js we wrap the entire app code in Context.Provider
and according to use case instead of wrapping entire app we can wrap specific c. as well