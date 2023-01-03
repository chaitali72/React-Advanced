<h1>Laying the Foundation</h1>
# Topics:

1.  Pollyfills

- A code which is a replacement of a new version.  
  when we write code line const let (es6) newer version of JS
  our sbrowser is very old so browser doesnot understand the code
  so there is a replacement code that is of a newer versions
- that is called pollyfills and babel converts the whole process

2 Babel - javscript library
node package
taking some cde
spitting out some code

3.how did the gitgnore came fromm?

- when you initialize your repo with git
- git comes with this feature.
  all github features like git push,pull,origin master and gitignore

4 superpowers of parcel (how can you build performnat scalable app?)

-> parcel is a bundler

- file watchers
- minification
- image optimazation
- cleaning up our code
- transitive dependancies
- tree shaking(remove unwanted code)
- caching while development
- HMR - hot module replacement
- handles port number
- zero config
- compression
- campatible with older browser

5. Babel
   babel.rc

6. Keys reconciliation

- whenever you have multiple children <ul><li>red</li><li>yellow</li></ul>
  react will have to rerender eveything when add or top up the childeren so react have to render whole DOM tree
  "Render"
  - updating somethong / loading in brpwser called render
- it will not give you good performanace
- in large applications there are so many dhidren so in this case, you have to - assign "keys" to the children.
- you cangives a keys as a "passing it as a props"
- react tracks a key as a unique thing
- can't assign same key to the difrent children

8.  React.createElement()

- React.createElement => object => HTML

9.  JSX

- Javascript XML
- whenever we want to update html using javascript
- To create big html codes in react,

  const heading = <h1 key="h1" id="title" >Hello </h1>

  here, <h1>Hello </h1> is jsx
  Q. Is jsx html inside javascript?

- no, its html like syntax.nut its not html inside javascript.
- it just a fancy ways of writing javsscript.
