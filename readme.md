1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById:
              Selects only one element by it's unique id.
              Returns a single element.
              Example:  document.getElementById("header");

getElementsByClassName:
             Selects all elements with the given class name.
             returns multiple elements
             Example: document.getElementsByClassName("item");

querySelector:
             Selects the first element that matches the CSS selector.
             Example: document.querySelector(".item");

2.How do you create and insert a new element into the DOM?

            Create a new element : document.createElement()
            Add content :.innerHTML , .innerText
            Insert into DOM :  .appendChild()
            Example:  let Apple = document.createElement("div");  
                      Apple.textContent = "Hello World!";        
                      document.body.appendChild(Apple); 

3.What is Event Bubbling and how does it work?

            Bubbling means when an event happens on a child element, it automatically bubbles up to its parent.
            Example:
            //html er,

            <div id="parent" style="padding:20px; background:lightblue;">
            Parent
            <button id="child">Click Me</button>
            </div>

            //js er,

            document.getElementById("child").addEventListener("click", function() {
            console.log("Child button clicked!");
             });

4.What is Event Delegation in JavaScript? Why is it useful?
            
            Event Delegation means adding one event listener to a parent element to handle events for all of its child elements.

            Its usefull because,
            Fewer event listeners to better performance.
            Works for dynamically added child elements
            Example: 
            //html er,

            <ul id="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>

            //js er,

            document.getElementById("menu").addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
            console.log("Clicked:", e.target.textContent);
            }
            });


5.What is the difference between preventDefault() and stopPropagation() methods?
            
preventDefault() :
            Prevents the browser’s default action for an event.
            Example:

            //js er,
            document.querySelector("a").addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Link click blocked!");
            });

stopPropagation() :
            
            Stops the event from bubbling up to parent elements.
            Example:

              //js er,
               document.getElementById("child").addEventListener("click", (e) => {
               e.stopPropagation();
               console.log("Only child clicked");
               });




 
