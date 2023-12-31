// const heading=React.createElement("h1",{id:"Heading"},"Hello World from React!");






//  How to create Nested type structure

/* 
    <div id="parent">
        <div id="child"> 
         <h1>I'm an H1 tag</h1>
         <h2>I'm an H2 tag</h2>
        </div>
    </div>


const parent=React.createElement( "div",{id:"parent"},
React.createElement( "div",{id:"child"},
[React.createElement("h1",{},"I'm H1 tag"), 
React.createElement("h1",{},"I'm H2 tag")])
);
 */

/*
<div id="parent">
<div id="child"> 
 <h1>I'm an H1 tag</h1>
 <h2>I'm an H2 tag</h2>
</div>
<div id="child2"> 
 <h1>I'm an H1 tag</h1>
 <h2>I'm an H2 tag</h2>
</div>
</div>
if we want to create this type of structure 
*/

const parent=React.createElement( "div",{id:"parent"},
[React.createElement( "div",{id:"child"},
React.createElement("h1",{},"I'm H1 tag"), 
React.createElement("h1",{},"I'm H2 tag")),
React.createElement( "div",{id:"child2"},
React.createElement("h1",{},"I'm H1 tag"), 
React.createElement("h1",{},"I'm H2 tag"))]
);




console.log(parent);
  const root=ReactDOM.createRoot(document.getElementById("root"));
  
 root.render(parent);






 
