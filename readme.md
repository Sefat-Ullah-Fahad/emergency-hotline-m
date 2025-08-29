 

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
- **getElementById**: Returns a single element that matches the given ID.  
- **getElementsByClassName**: Returns a live HTMLCollection of all elements with the specified class name.  
- **querySelector**: Returns the first element that matches a given CSS selector.  
- **querySelectorAll**: Returns a static NodeList of all elements that match a given CSS selector.  

---

## 2. How do you create and insert a new element into the DOM?  
A new element can be created using DOM methods, then attributes or text can be assigned, and finally the element can be inserted into the document. It can be placed at different positions such as at the end, at the beginning, or before/after another element.  

---

## 3. What is Event Bubbling and how does it work?  
Event Bubbling is the process where an event triggered on a child element propagates upward through its parent elements, continuing until it reaches the root element.  

---

## 4. What is Event Delegation in JavaScript? Why is it useful?  
Event Delegation is a technique where instead of adding event listeners to multiple child elements, a single event listener is added to a parent element. The parent handles the events as they bubble up from the children.  

**Benefits of Event Delegation:**  
- Reduces the number of event listeners, improving performance.  
- Works for dynamically added elements.  
- Keeps code cleaner and easier to manage.  

---

## 5. What is the difference between preventDefault() and stopPropagation()?  
- **preventDefault()**: Stops the default action of an event (e.g., stopping a link from navigating or preventing a form from submitting).  
- **stopPropagation()**: Stops the event from bubbling or propagating to parent elements.  

---
