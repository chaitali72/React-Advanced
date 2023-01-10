<h2>is jsx mandatory for React?</h2>
<p> JSX is not a requirement for using jsx. </p>
<p>It is just a syntatic sugar for callng React.createElement(component,props,...children)</p>
<p> anything you write w/o jsx is a plain javascript.</p>
<p> using reacr without jsx is pretty convenient when you don’t want to set up compilation in your build environment.</p>
<hr/>
<h2>What is <React.Fragment></React.Fragment> and <></>?</h2>
<p>Its a Javascript component that lets you return multiple elements in render() method w/o creating an additional DOM element</p>
<p><></> shorthand syntax</p>
<hr/>
<h2>What is React Fiber?</h2>
<p>It's new reconciliation engine in React16.</p>
<p> its enable increamental rendering of the vitual DOM</p>
<hr/>
<h2>what is virtual DOM?</h2>
<p>React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). </p>
<p> the virtual DOM gets updated first instead of the real DOM.</p>
<h3>How Virtual DOM actually make things faster: </h3>
<p>When anything new is added to the application, a virtual DOM is created and it is represented as a tree.</p>
<p>Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created.</p>
<p> This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes.</p>
<p> After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again. </p>
<h3>How Virtual DOM helps React:</h3>
<p> In react, everything is treated as a component be it a functional component or class component. A component can contain a state.</p>
<p>Each time we change something in our JSX file,react updates its Virtual DOM tree.</p>
<p>React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM. Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as <strong>‘diffing’</strong></p>
<p>This entire process of transforming changes to the real DOM is called <strong>Reconciliation</strong></p>
<hr/>

<h2>Why do we use keys in react? When do we use ?</h2>
<p>Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity</p>
<p> keys must used within arrays should be unique.</p>
<hr/>

<h2>Props</h2>
<p> props => properties</p>
<p> react components use toprops to communicate with each other.</p>
<p>it is like a HTML attributes.</p>
<p>you can pass any javascript value through them, including objects,arrays and functions.</p>
<p>Recap</p>
<p>To pass props, add them to the JSX, just like you would with HTML attributes.</p>
<p>To read props, use the function Avatar({ person, size }) destructuring syntax.
You can specify a default value like size = 100, which is used for missing and undefined props.</p>
<p>You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!</p>
<p>Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.</p>
<p>Props are read-only snapshots in time: every render receives a new version of props.</p>
<p>You can’t change props. When you need interactivity, you’ll need to set state.</p>
