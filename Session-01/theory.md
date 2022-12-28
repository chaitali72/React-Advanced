<h1>Sesion-01 Theoty Assignments Topics:</h1>

<h3>1.  What is Emmet?</h3>
- It's a short expressions to generate HTML markup and CSS.
- Emmet is a plugin for many popular text editors which greatly improves HTML & CSS Workflow.
<h3>2.  Difference between a Library and Framework?</h3>
<h4>Library</h4> 
- Library is a collection of prewritten code that can be used to simplify tasks.
- it is a collection of code that is reused repeatedly.
- When you use the library,developer is in charge of the application.
<p>E.g  JQuery,React etc..</p>
<h4>Framework</h4> 
- Frameworks provode full flow of software application and tells the developer what is needed.
- when you use a framework, the framework us in charge of the flow
- 
<p>E.g NodeJS, AngularJs, VueJS etc...</p>

<h3>3. What is CDN? Why do we use it? </h3>
- A Content Delivery  Network links
- Both React and ReactDOM are available over a CDN.
- 
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Minified and optimized production versions of React are available at:

<h3>4. Why is React known as React? </h3>
- React is a library for building composable user interfaces.
- React approaches building user interfaces differently by breaking them into     components.
- Declarative views make your code more predictable and easier to debug.
- Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

<h3>5.  What is crossorigin in script tag? </h3>
- It enables the configuration of CORS requests for the element's fetched data.
- CORS headers and credentials flag is to 'same-origin'.
- The crossorgin attribute on a "script" tag sepcifies that CORS is supported when loading an external script file from a third party server or domain.

<h3>6. What is diference between React and ReactDOM? </h3>
- React library is resposible for creating views 
- React DOM library is to actually render UI in the browser.
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes.
- The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

<h3> 7. What is difference between react.development.js and react.production.js files via CDN?</h3>
-  The react.development.js use as the name suggests- for development reasons.
- The react.productionjs for production build that means code runing on your client's machine.

<h3>8. What is async and defer?</h3>
Async - means execute code when it is downloaded and do not block DOM construction during downloading process. async scripts load in the background and run when it's ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything.

Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process. The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
