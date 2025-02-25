# project-Calculator
Project: Calculator from The Odin Project


<p>Don’t forget to commit early &amp; often! You can reference the <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages" target="_blank" rel="noopener noreferrer">Commit Messages lesson</a> here!</p>

<p>Here are some use cases (expectations about your project):</p>

<ol>
<li>Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
<ul>
<li>add</li>
<li>subtract</li>
<li>multiply</li>
<li>divide</li>
</ul>
</li>
<li>A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.</li>
<li>Create a new function <code>operate</code> that takes an operator and two numbers and then calls one of the above functions on the numbers.</li>
<li>Create a basic HTML calculator with buttons for each digit and operator (including <code>=</code>).
<ul>
<li>Don’t worry about making them functional just yet.</li>
<li>There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.</li>
<li>Add a “clear” button.</li>
</ul>
</li>
<li>Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.</li>
<li>Make the calculator work! You’ll need to store the first and second numbers input by the user and then <code>operate()</code> on them when the user presses the <code>=</code> button, according to the operator that was selected between the numbers.
<ul>
<li>You should already have the code that can populate the display, so once <code>operate</code> has been called, update the display with the result of the operation.</li>
<li>This is the hardest part of the project. You need to figure out how to store all the values and call the <code>operate</code> function with them. Don’t feel bad if it takes you a while to figure out the logic.</li>
</ul>
</li>
<li>Gotchas: watch out for and fix these bugs if they show up in your code:
<ul>
<li><strong>Your calculator should not evaluate more than a single pair of numbers at a time.</strong> Example: you enter a number (<code>12</code>), followed by an operator button (<code>+</code>), a second number button (<code>7</code>), and a second operator button (<code>-</code>). Your calculator should then do the following: first, evaluate the initial pair of numbers (<code>12 + 7</code>), then display the result of that calculation (<code>19</code>). Finally, use that result (<code>19</code>) as the first number in a new calculation, along with the next operator (<code>-</code>). An example of the behavior we’re looking for can be seen in this <a href="https://mrbuddh4.github.io/calculator/" target="_blank" rel="noopener noreferrer">student’s calculator live preview</a>.</li>
<li>You should round answers with long decimals so that they don’t overflow the display.</li>
<li>Pressing <code>=</code> before entering all of the numbers or an operator could cause problems!</li>
<li>Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.</li>
<li>Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!</li>
<li>Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (<code>2</code>), followed by an operator button (<code>+</code>). You press the operator button (<code>+</code>) a second consecutive time. Your calculator should not evaluate this as (<code>2 + 2</code>) and should not display the result (<code>4</code>). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.</li>
<li>When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result. Check whether this is the case on your calculator!</li>
</ul>
</li>
</ol>

<h4 id="extra-credit"><a href="#extra-credit" class="anchor-link">Extra credit</a></h4>

<ul>
<li>Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a <code>.</code> button and let users input decimals! Make sure you don’t let them type more than one though, like: <code>12.3.56.5</code>. Disable the <code>.</code> button if there’s already a decimal separator in the display.</li>
<li>Add a “backspace” button, so the user can undo their last input if they click the wrong number.</li>
<li>Add keyboard support!</li>
</ul>

