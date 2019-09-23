<div style="height:14px;"></div>
    <div class="w3-row">
        <div class="w3-third w3-container" style="padding:0px;" id="nav">
            <div class="w3-sidebar w3-light-gray w3-bar-block" style="overflow-y:scroll; z-index: 4;">
                <a href="#intro" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Introduction</a>
                <a href="#getstarted" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Get Started</a>
                <a href="#bexpr" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Basic Expressions and Math</a>
                <a href="#mexpr" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">More Expressions</a>
                <a href="#files" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Your First File</a>
                <a href="#vars" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Variables</a>
                <a href="#objs" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Invocations, Arrays, and Objects</a>
                <a href="#ctrlf" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Control Flow</a>
                <a href="#fintro" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Intro to Functions</a>
                <a href="#except" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Exceptions</a>
                <a href="#mds" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Modules</a>
                <a href="#pmatch" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Pattern Matching</a>
                <a href="#rtypes" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Runtime Types</a>
                <a href="#loopexpr" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Loop Expressions</a>
                <a href="#ops" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Operators</a>
                <a href="#dds" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Dollar Directives</a>
                <a href="#enums" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Enums</a>
                <a href="#acmds" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Advanced Compiler Commands</a>
                <a href="#rdoc" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Runtime Overview</a>
                <a href="#stdlib" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Standard Library</a>
                <a href="#template" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Template</a>
                <a href="#tuple" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Tuple</a>
                <a href="#uni" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Unicode Support</a>
                <a href="#fp" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Functional Programming</a>
                <a href="#con" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Concurrency</a>
                <a href="#nums" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">More Numbers</a>
                <a href="#scrape" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Web Scraping</a>
                <a href="#edu" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">EDU Modules</a>
                <a href="#exs" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Examples</a>
                <a href="#why" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">The Why of Z</a>
                <a href="#contribute" class="w3-bar-item w3-button w3-hover-blue w3-btn w3-round">Contribute</a>
                <br>
                <br>
                <br>
            </div>
        </div>
        <div class="w3-rest w3-container w3-padding" style="margin-left:200px;" id="content">
            <div class="w3-overlay" id="overlay" style="cursor:pointer"></div>
            <div id="intro">
                <img src="zlogodark.png" style="margin-left: calc(50% - 102px);">
                <h3 style="text-align:center"><em>Where your <a href="https://github.com/zlanguage/zcomp">fantaZies</a> come true</em></h3>
                <p>Z is a transpiled language that is for making small applications on the backend*. Z is dynamic and multi-paradigm. However, it leans towards dynamic functional programming. Dynamic functional programming balances the readability of the
                    declarative with the familiarity of the imperative. Z supports functional programming, and makes it enjoyable, but doesn't heap on unnecessary restrictions and complexity. While Z has plenty of features, which you'll read about below,
                    the most important one is its flexibility. Programs written in Z often jump back and forth between functional and imperative styles. To learn more about the philosophy of Z, go <a href="#why">here</a>. If you want to see Z in action,
                    check out these <a href="#exs">examples</a>. But if you like fancy features and groovy syntax, you're in the right town. Scroll down to learn about pattern matching, goroutines, and algebraic data types in Z. On top of a flexible syntax
                    and plentiful features, Z's standard library contains many modules, ranging from highly practical to extravagant and exciting. So what are you waiting for? Jump in and learn some Z!
                </p>
                <p class="footnote">*Z is still in rapid development. There may be bugs that pop up in the Z Compiler as you develop your application. Report them <a href="https://github.com/zlanguage/zcomp/issues">here</a>.</p>
                <p class="footnote">If you still have any problems with Z, or want any new features added, email <a href="mailto:n8programs@gmail.com">n8programs@gmail.com</a>.</p>
            </div>
            <div id="getstarted">
                <h1>Getting Started</h1>
                <p class="footnote">This tutorial assumes that you have both node and npm installed. If you don't, you can install node <a href="https://nodejs.org/en/download/" target="_blank">here</a> and npm comes with node. If you prefer Yarn (the faster, prettier alternative,
                    you can download it <a href="https://yarnpkg.com">here</a>)</p>
                <p>To start, enter a terminal session. Every Z package on npm is namespaced under <code>@zlanguage</code>. Install the Z compiler as so:</p>
                <pre>$ npm install -g @zlanguage/zcomp</pre> Now, in order for the compiler to function, you must also install <code>globby</code>:
                <pre>$ npm install -g globby</pre>
                <p>Or, with Yarn:</p>
                <pre>$ yarn global add @zlanguage/zcomp globby</pre>
                <p>That wasn't too hard! Now, to experiment with Z, let's launch a REPL.</p>
                <p>You can launch a Z REPL with:</p>
                <pre>$ zcomp repl</pre>
                <p>If all goes well, you should see the following:</p>
                <pre>zrepl&gt;</pre>
            </div>
            <div id="bexpr">
                <h1>Basic Expressions and Math</h1>
                <p class="footnote">All expressions defined here are meant to be executed from a REPL.</p>
                <p>Let's start by creating a simple math expression:</p>
                <pre lang="z">3 + 2</pre>
                <p>The REPL will print back 5.</p>
                <p>Order of operations works:</p>
                <pre lang="z">3 + 2 * 7</pre>
                <p>The REPL gives you back 17, not 35.</p>
                <p>The following mathematical operators are supported at the following orders of precedence:</p>
                <p><code>^ pow</code></p>
                <p><code>* / %</code></p>
                <p><code>+ -</code></p>
                <p class="footnote"><code>pow</code> is the same as <code>^</code> except that <code>^</code> is left-associative while <code>pow</code> is right-associative.</p>
                <h3>Number Extensions</h3>
                <p>Besides typical JavaScript number literals, Z supports the following extensions to them: A number can have:</p>
                <ul class="w3-large">
                    <li><code>1_000</code> Underscores</li>
                    <li><code>0x100</code> Hexadecimal, Binary, and Octal prefixes!</li>
                    <li><code>10bytes</code> Trailing characters</li>
                    <li><code>1.somePropertyHere</code> Trailing refinement</li>
                </ul>
            </div>
            <div id="mexpr">
                <h1>More Expressions</h1>
                <p>To start, you may have noticed that inputting a raw number without any math is considered an error in the Z REPL. While this may seem peculiar, this is to avoid "useless expressions", like randomly putting a string or a number on some
                    code.
                </p>
                <p>Single line Comments in Z are denoted with <code>#</code>:</p>
                <pre lang="z"># I'm a single line comment!</pre>
                <p>Block comments are denoted with <code>/*</code> and <code>*/</code></p>
                <p>Strings in Z are easy enough to reason with:</p>
                <pre lang="z">"Hello" ++ " World" # ===> "Hello World"</pre>
                <p>Z performs coercion, but its coercion rules make more sense than JavaScript's:</p>
                <pre lang="z">
"9" + 2 # ==> 11
"9" ++ 2 # ==> "92"</pre>
                <p>Booleans also make sense:</p>
                <pre lang="z">
true and false # ==> false
false or true # ==> true
</pre>
                <p>Now that you have touched the surface of Z, it's time to take it up a notch and start writing files in Z.</p>
            </div>
            <div id="files">
                <h1>Your First File</h1>
                <p>Now that you've tested Z out, create a directory, call it ztest:</p>
                <pre>$ mkdir ztest</pre>
                <p>For each directory you create that will use Z, you must install the Z Standard Library:</p>
                <pre>$ npm install @zlanguage/zstdlib --save</pre>
                <p>That really wasn't that much setup.</p>
                <p>Now, create a new file, call it <code>hello-world.zlang</code>:</p>
                <pre>$ touch hello-world.zlang</pre>
                <p>Launch your favorite IDE, open helloworld.zlang, and type:</p>
                <pre lang="z">log("Hello World")</pre>
                <p>Execute the file with:</p>
                <pre>$ zcomp run helloworld.zlang</pre>
                <p>It should print out <code>Hello World</code> to the terminal.</p>
                <p>Files can hold more advanced expressions than the REPL, and have statements in them two. From now on, all examples assume that they are being typed <em>in a file</em>. Some examples will contain features that don't work in the REPL.
                </p>
            </div>
            <div id="vars">
                <h1>Variables</h1>
                <p>Variables in Z can hold any value, they are not constrained to one type of value.</p>
                <p>Reassignable variables can be declared with <code>let</code>:</p>
                <p>Note that <code>:</code> is the assignment operator.</p>
                <pre lang="z">
let x: 5 # ==> x is now 5
x: "Hola Mundo" # ==> x has changed types
let y: undefined # ==> You must assign a variable when you initialize it.
y: Math.random() # ==> Put something in y
</pre>
                <p>Constant variables are declared with <code>def</code>. Constant variables cannot be reassigned, but their internal value can still change:</p>
                <pre lang="z">
const x: 5 # ==> This looks familiar.
x: "Hola Mundo" # ==> Runtime error.
                </pre>
                <p>Finally, hoisted variables (akin to variables declared with <code>var</code> in JavaScript) are declared with <code>hoist</code>:</p>
                <pre lang="z">
log(x) # I can see x from all the way up here!
hoist x: 5
                </pre>
                <p>So to map Z's assignment statements to their equivalents in JS:</p>
                <ul>
                    <li><code>let</code> - <code>let</code></li>
                    <li><code>def</code> - <code>const</code></li>
                    <li><code>hoist</code> - <code>var</code></li>
                </ul>
            </div>
            <div id="objs">
                <h1>Invocations, Arrays, and Objects</h1>
                <p>You've already seen some invocations in Z (of <code>log</code> and <code>Math.random</code>) </p>
                <p>As will all built-in data types in Z, Z functions map right to their JavaScript equivalents. Which means calling a function in Z with <code>()</code> transpiles to calling a function in JavaScript with <code>()</code>:</p>
                <pre lang="z">
log("Hola mundo!") # Log acts like console.log.
console.log("Hola mundo!") # Does the same thing.
Math.random() # Let's call another JS function
Date.now() # They all work fine!</pre>
                <h3>Collections in Z</h3>
                <p>Z supports numerous flexible collection literals to represent objects and arrays, the simplest being brackets:</p>
                <pre lang="z">
[1, 2, 3] # Arrays literals are just like JavaScript
let x: 5
[
    "hola": "mundo", # Objects are a bit different, object properties in Z are computed, so quotes are required.
    x # Expands to "x": 5 if there are other properties in the object
]
[] # Empty Array
[:] # Empty Object</pre>
                <p>Parentheses can also be used to denote arrays, and brackets can denote arrays or objects. Arrays constructed from parentheses and objects constructed from brackets can be used in destructuring (which will be covered later):</p>
                <pre lang="z">
(1, 2, 3) # Array Literal
{1, 2, 3} # Array Literal
{
    "x": 3
} # Object Literal
() # Empty Array Literal
{} # Empty Array Literal
</pre>
                <p>Range literals correspond to arrays. They can be written in several different fashions:</p>
                <pre lang="z">
1 to 5 # [1, 2, 3, 4, 5]
1...5 # [1, 2, 3, 4, 5]
1 til 5 # [1, 2, 3, 4]
1 to 5 by 2 # [1, 3, 5]
1 til 5 by 2 # [1, 3]
                </pre>
                <pre lang="z"></pre>
                <p>When creating range literals, you can </p>
                <p>When invoking a function, you can emulate named parameters with an implicit object (like in ruby):</p>
                <pre lang="z">
Point(x: 3, y: 4) # Is like...
Point([
    "x": 3,
    "y": 4
])</pre>
                <p>Property Access is akin to JavaScript:</p>
                <pre lang="z">
x.y # Alphanumeric property access
x["y"] # Computed property access (any expression can go in the brackets)
x..y # Conditional property access (only works if x isn't falsy, akin to x && x.y)</pre>
            </div>
            <div id="ctrlf">
                <h1>Control Flow</h1>
                <p>Z supports very simple control flow. It may seem primitive, but for most imperative constructs, it's all you need. When coding Z procedurally (rather than functionally) these control flow statements will be your best friends.
                </p>
                <p>Z supports typical <code>if</code>, <code>else if</code>, and <code>else</code> statements:</p>
                <pre lang="z">
let x: 3
if x = 3 { # Check for equality
    log("Three times is the charm!")
} else if x > 0 { # Check for positivity
    log("X is positive.")
} else {
    log("X is feeling negative today.")
}</pre>
                <p>Z also has the ternary operator, though its syntax is more readable than most programming languages:</p>
                <pre lang="z">
# An easier way to write the above example
let x: 3
log(
    if (x = 3) "Three times is the charm!"
    else if (x > 0) "X is positive."
    else "X is feeling negative today."
)</pre>
                <p>You can simplify one line if statements by putting the <code>if</code> at the end of the line (Ruby-style):</p>
                <pre lang="z">
log("I'm feeling lucky!") if Math.random() > 0.5
                </pre>
                <p>In the looping department, Z supports <code>loop</code>, which is the equivalent of a <code>while(true)</code> loop. You exit a loop with <code>break</code>:</p>
                <pre lang="z">
let i: 0
loop {
    if i > 9 {
        break
    }
    log(i)
    i: i + 1
}</pre>
            </div>
            <p>That's it. No fancy potpourri. Just one conditional structure and one type of loop. However, this section only covered Z's <em>imperative</em> control flow structures. You'll see more <em>functional</em> ones soon.</p>
            <div id="fintro">
                <h1>Intro to Functions</h1>
                <p>Functions in Z are created with the <code>func</code> keyword. Z supports anonymous functions only, like CoffeeScript. You can name functions by binding a function to a constant variable. Otherwise, parameters and return statements are
                    rather similar:</p>
                <pre lang="z">
def add: func (x, y) {
    return x + y
} # Declare a simple function
setTimeout(func () {
    log("Around one second has passed!")
}, 1000) # Passing a function as a parameter
def something: func () {
    # Return something awesome
}() # IIFE
def boundFunction: func () {

}.bind(someThisValue) # Functions can have properties accessed on them because they are just objects will an internal [[Call]] property
                </pre>
                <p>Default parameters are created with the <code>:</code> operator, and rest parameters are created with the <code>...</code> operator.</p>
                <pre lang="z">
def add: func (x: 0, y: 0) { # Defaults
    return x + y
}
def sum: func (...xs) {
    return xs.reduce(func (t, v) { # We'll make this example more concise later.
        return t + v
    })
}</pre>
                <p>If a function only consists of one return statement, the curly brackets and <code>return</code> may be omitted:</p>
                <pre lang="z">def sum: func (...xs) xs.reduce(func (t, v) t + v)</pre>
                <p>You can mark variables declared within a one-line function (a function with an implicit return statement) to be inferred, by ending them with an exclamation point:</p>
                <pre lang="z">def sum: func (...xs) xs.reduce(func t! + v!) # We'll see how to make this even more concise later.</pre>
                <p>You can pipe a value through multiple functions via <code>|></code>:</p>
                <pre lang="z">3 |> +(1) |> *(2) |> log # Logs 8</pre>
                <p>You can use <code>>></code> and <code>&lt;&lt;</code> for function composition (as in Elm).</p>
                <p>You can partially apply functions with <code>@</code></p>
                <pre lang="z">
def square: Math.pow(@, 2)
def logSquare: log >> square
logSquare(10) # Logs 100</pre>
                <p>A standalone <code>.</code> creates an implied function for property access and method invocations. Currently, implied functions and partial application via <code>@</code> cannot be mixed. For example:</p>
                <pre lang="z">
users.map(.name) # Get the name property of users
[1, 2, 3, 4, 5].map(.toString(2)) # Get the binary representation of these numbers (in string form).
                </pre>
                <p>That's pretty much all there is to know about basic functions in Z.</p>
            </div>
            <div id="except">
                <h1>Exceptions</h1>
                <p>The first thing Z clarifies is that <em>Exceptions are not baseballs</em>. For some reason, rather than "raising" an issue, you would "throw" it. That makes no sense at all. And then, to resolve the issue, someone would not "settle" it,
                    but "catch" it. You can't play a friendly game of catch with exceptions. Z's choice of keywords is more intuitive than <code>throw</code> and <code>catch</code>:</p>
                <pre lang="z">
try { # Attempt to do something
    raise "Something contrived went wrong" # String coerced into an error object
} on err { # When something bad happens
    settle err # Explicitly tell Z that the error has been settled/resolved.
}</pre>
                <p>At this point you are probably asking: why explicitly settle an error? The reason is, explicitly settling an error allows you to put time and thought into how to settle it, and what countermeasures to take. If you forget to settle an error,
                    Z will throw a runtime error. This helps with making Plan Bs when something goes wrong.
                </p>
                <p>A try can only have one <code>on</code> clause. Handle type checking of the exception in the <code>on</code> clause.</p>
                <p class="footnote">Z has exception handling for JavaScript interop, but please don't overuse it. Failing to parse an integer should not cause an exception.
                </p>
            </div>
            <div id="mds">
                <h1>Modules</h1>
                <p>Z's module system is closely related to JavaScript's. A simple example will demonstrate this. Create a file called <code>exporter.zlang</code> in your test directory, and another file called <code>importer.zlang</code> in that same directory.
                    Now, in <code>exporter.zlang</code>, type:
                </p>
                <pre lang="z">export 3</pre>
                <p>In <code>importer.zlang</code>, type:</p>
                <pre lang="z">
import num: "./exporter"         
log(num)</pre>
                <p>Now, to transpile <code>exporter.zlang</code>, and not immediately run it via the compiler, use the command:</p>
                <pre>$ zcomp transpile exporter.zlang</pre>
                <p>And:</p>
                <pre>$ zcomp transpile importer.zlang</pre>
                <p>To run the code:</p>
                <pre>$ node importer.zlang</pre>
                <p>You should see a 3 printed out.</p>
                <p>To further elaborate, each module in Z can export one thing, which is implicitly stoned (Z's version of <code>Object.freeze</code>) when exported.
                </p>
                <p>Imports in Z are similar to JavaScript ones, except that <code>from</code> is replaced with <code>:</code>:</p>
                <pre lang="z">
    import something: "./somewhere"
    import fs # This shorthand becomes:
    import fs: "fs"
    import ramda.src.identity # Becomes:
    import identity: "rambda/src/identity"</pre>
                <p>In order to export multiple things, you can just export an object:</p>
                <pre lang="z">
export [
    "something": cool,
    "very": cool,
    cool,
    "some": other.thing
]</pre>
                <p>As you can see, Z modules are (pretty) easy to work with. We'll see a cool way to import multiple things from a module that exports an object in the next section.</p>
            </div>
            <div id="pmatch">
                <h1>Pattern Matching</h1>
                <p>Z comes with a default ternary operator:</p>
                <pre lang="z">
let happy = true
let mood = if (happy) "good" else "bad" # if (cond) result2 else result2
let moodMessage = 
    if (mood = "good") "My mood is good."
    else if (mood = "bad") "I'm not feeling good today."
    else "Unknown mood." # Chaining ternary operators.</pre>
                <p>However, for advanced conditional checks, this fails to be sufficient. That's where Z's pattern matching comes into play. The <code>match</code> expression at its simplest can match simplest can match simple values:
                </p>
                <pre lang="z">
let moodMessage = match mood {
    "good" => "My mood is good",
    "bad" => "My mood is bad",
    _ => "Unknown mood" # _ is a catch-all
}</pre>
                <p>Patten matching is more powerful than this though. It's not limited to matching primitives. You can also match exact values that are arrays and objects:</p>
                <pre lang="z">
let whatItIs: match thing {
    [1, 2, 3] => "An array of [1, 2, 3]",
    ["x": 3] => "An object with an x value of 3",
    _ => "I don't know what thing is."
}</pre>
                <p>You can also match types with pattern matching:</p>
                <pre lang="z">
let contrived: match someExample {
    number! => "A number.",
    string! => "A string.",
    array! => "An array",
    _ => "Something else."
}</pre>
                <p>If you want to capture the value of a certain type, use <code>!</code> like an infix operator:</p>
                <pre lang="z">
let times2: match thing {
    number!n => n * 2,
    string!s => s ++ s,
    _ => [_, _]
}</pre>
                <p>Now, to capture elements of arrays, use <code>(</code> and <code>)</code>:</p>
                <pre lang="z">
def arrResult: match arr {
    (number!) => "An array that starts with a number.",
    (string!s, string2!s2) => s ++ s2,
    (x, ...xs) => xs, # xs represents the rest of the array, which excludes the first element in the array
    _ => []
}</pre>
                <p>Objects can be matched with the <code>{</code> and <code>}</code> characters:</p>
                <pre lang="z">
def objResult: match obj {
    { x: number!, y: number! } => "A point-like object.", # Match an objects with x and y properties
    { 
        name: string!name, 
        age: number!age, 
        car: { 
            cost: number!, 
            brand: string!brand
        }
    } => "A person named " ++ name ++ " that is " ++ age ++ " years old. He/She owns a " ++ brand ++ " type of car.",
    _ => "Some other thing"
}</pre>
                <p>To match a number in between other numbers, use range literals:</p>
                <pre lang="z">
def typeOfSquare: match square {
    { size: 1...10 } => "A small square.",
    { size: 11...20 } => "A medium square.",
    { size: number! } => "A big square.",
    _ => "Something else."
}</pre>
                <p>The object and array delimiters in pattern matching work as destructuring too: </p>
                <pre lang="z">
def (x, y): [3, 4] # x is 3, y is 4
def {x, y}: [
    "x": 3,
    "y": 4
] # x is 3, y is 4
                </pre>
                <p>You can define <code>blocks</code> to be associated with different patterns, for example:</p>
                <pre lang="z">
match num {
    1 => {
        log("Num is 1.")
        log ("I love the number 1.") # You can put multiple lines in a "block"
        return "YAY!" # Blocks are wrapped into functions, so you can return from them.
    },
    _ => "Not 1 :("
}
                </pre>
                <p>You can define your own custom pattern matching conditions with <code>predicates</code>. To start, define some functions that return a booleans:</p>
                <pre lang="z">
def even: func x! % 2 = 0
def odd: func x! % 2 = 1</pre>
                <p>Then, use the <code>?</code> at the end of the function name inside a <code>match</code> body to use the predicate:</p>
                <pre lang="z">
match num {
    even? => "An even number.",
    odd? => "An odd number.",
    number! => "Some other number.",
    _ => "Something else."
}
                </pre>
                <p>The most advanced form of custom pattern matching is the <code>extractor</code>. It allows you to not only perform a conditional check on data, but to perform custom matching on it.</p>
                <p>Let's start by defining a simple email function:</p>
                <pre lang="z">
def Email: func user! ++ "@" ++ domain!
                </pre>
                <p>Then, we can defined a <code>extract</code> method on <code>email</code>. This <code>extract</code> method should return an array if there is a pattern to be matched, or <code>undefined</code>, if there is no match:</p>
                <pre lang="z">
Email.extract: func (str) if (str.includes("@")) str.split("@") else undefined
                </pre>
                <pre lang="z">
def myEmail: "programmer@cloud.com"

match myEmail {
    Email(user, domain) => log(user, domain), # Logs programmer, cloud.com
    _ => log("Invalid email.")
}
                </pre>
                <p>As you can see <code>extractors</code> and <code>predicates</code> add greater flexibility and power to pattern matching.</p>
            </div>
            <div id="rtypes">
                <h1>Runtime Types</h1>
                <p>Z supports numerous ways to create runtime type checks. Each object in Z can specify its "type" by having a function called <code>type</code>:</p>
                <pre lang="z">
[
    "x": 5,
    "y": 5,
    "type": func "Point"
]</pre>
                <p>You can find out something's type using the built-in <code>typeOf</code> function:</p>
                <pre lang="z">
typeOf(3) # ==> "number"
typeOf([1, 2, 3]) # ==> "array"
typeOf([
    "x": 5,
    "y": 5,
    "type": func "Point"
]) # ==> "Point"</pre>
                <p>You can check that a parameter passed to a function is of a certain type at runtime (checking is done behind the scenes with <code>typeOf</code>):</p>
                <pre lang="z">
def add: func (x number!, y number!) { # Note that you can't mix type annotations with default values and rest/spread
    def res: x + y
    return res
}</pre>
                <p><code>!</code> isn't actually part of the type. It just denotes that a type is present.</p>
                <p>You can also add return type annotations:</p>
                <pre lang="z">
def add: func (x number!, y number!) number! {
    def res: x + y
    return res
}</pre>
                <p>You can also validate that the right-hand side of an assignment is of a certain type:</p>
                <pre lang="z">
def add: func (x number!, y number!) number! {
    def res number!: x + y
    return res
}</pre>
                <p>This works great for simple functions, however you may need to implement more complex ones. This is made possible by the <code>enter</code> and <code>exit</code> statements:</p>
                <pre lang="z">
def readPrefs: func (prefs string!) {
    enter {
        prefs.length &lt; 25
    }
    def fileHandler: file.getHandler(prefs) # Some imaginary file system.
    # Do some stuff
    return something
    exit {
        fileHandler.close() # Clean up the file handler, exit is like finally and must be the last statement in a function.
    }
}</pre>
                <p><code>enter</code> is a block of code that contains comma-separated conditions, all of which must be true when the function starts:</p>
                <pre lang="z">
def readBytes(bytestream Bytestream!, amount number!) { # fictional type Bytestream
    enter {
        bytestream.size &lt; amount,
        amount &lt; 100,
        amount &gt; 0,
    }
    # Do stuff...
}</pre>
                <p><code>exit</code> pretty much the same as enter, except it is executed at the end of the function, to see if certain conditions have been met. <code>exit</code> must be the last statement in a function.</p>
                <p>A function may only have one
                    <code>enter</code> statement and one
                    <code>exit</code> statement.</p>
            </div>
            <div id="loopexpr">
                <h1><code>loop</code> Expressions</h1>
                <p><code>loop</code> expressions are directly inspired by Scala. They are based on Scala's <code>for</code> expressions, and they may resemble list comprehensions in some languages.</p>
                <p>To start, use the operator <code>&lt;-</code> to map over a list:</p>
                <pre lang="z">
def xs: [1, 2, 3]
def result: loop (x &lt;- xs) x * 2 # Result is [2, 4, 6]</pre>
                <p>You can add predicates using a form of <code>if</code>:</p>
                <pre lang="z">
def xs: [1, 2, 3]
def result: loop (x &lt;- xs, if x % 2 = 0) x * 2 # Result is [2, 6]</pre>
                <p>You can iterate over multiple lists by inserting multiple <code>&lt;-</code>s:</p>
                <pre lang="z">
# Range literals: 1...5 is [1, 2, 3, 4, 5]
def result: loop (x &lt;- 1...10, y &lt;- 1...10) [x, y] # Matrix of numbers 1 to 10
                </pre>
                <p>Using all of this, you could define a <code>flatMap</code> function:</p>
                <pre lang="z">
def flatMap: func (f, xs) {
    return loop (
        x &lt;- xs,
        y &lt;- f(x)
    ) y
}</pre>
                <p>Note that you cannot start a line with a <code>loop</code> expression, as it will be confused with the imperative <code>loop</code> statement.</p>
                <p>The final ability of the <code>loop</code> expression is that you can place assignments in it. For example:</p>
                <pre lang="z">
def strs: ["Hello", "World"]
def res: loop (s &lt;- strs, l: s.length) l * 2 # res is [10, 10]</pre>
            </div>
            <div id="ops">
                <h1>Operators</h1>
                <p>You've already seen use of plenty of operators in Z. You've seen addition, subtraction, comparison, equality, and more. But for complete reference, below is a list of operators that come with the Z runtime, and their precedence:
                </p>
                <p>The Left Overload is a method you can define on an object to overload the operator on the left-hand side:
                    <pre lang="z">x + y</pre> becomes <pre lang="z">x.+(y)</pre> if <code>x</code> defines a <code>+</code> method.
                </p>
                <p>The Right Overload is a method you can define on an object to overload the operator on the right-hand side:
                    <pre lang="z">x + y</pre> becomes <pre lang="z">y.r+(x)</pre> if <code>y</code> defines a <code>r+</code> method.
                </p>
                <table class="w3-table">
                    <tr>
                        <th>Operator</th>
                        <th>Associativity</th>
                        <th>Precedence</th>
                        <th>Function</th>
                        <th>Left Overload</th>
                        <th>Right Overload</th>
                    </tr>
                    <tr>
                        <td>pow</td>
                        <td>Right</td>
                        <td>Infinity</td>
                        <td>Performs exponentiation</td>
                        <td>NA (overload * instead)</td>
                        <td>NA (overload r* instead)</td>
                    </tr>
                    <tr>
                        <td>til</td>
                        <td>Left</td>
                        <td>555</td>
                        <td>Exclusive range</td>
                        <td>prev & succ & &lt;</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>to</td>
                        <td>Left</td>
                        <td>555</td>
                        <td>Inclusive range</td>
                        <td>prev & succ & &lt;</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>by</td>
                        <td>Left</td>
                        <td>444</td>
                        <td>Used to specify the step of ranges</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>^</td>
                        <td>Left</td>
                        <td>333</td>
                        <td>Performs exponentiation</td>
                        <td>NA (overload * instead)</td>
                        <td>NA (overload r* instead)</td>
                    </tr>
                    <tr>
                        <td>%</td>
                        <td>Left</td>
                        <td>222</td>
                        <td>Performs modulus</td>
                        <td>%</td>
                        <td>r%</td>
                    </tr>
                    <tr>
                        <td>/</td>
                        <td>Left</td>
                        <td>222</td>
                        <td>Performs division</td>
                        <td>/</td>
                        <td>r/</td>
                    </tr>
                    <tr>
                        <td>*</td>
                        <td>Left</td>
                        <td>222</td>
                        <td>Performs multiplication</td>
                        <td>*</td>
                        <td>r*</td>
                    </tr>
                    <tr>
                        <td>+</td>
                        <td>Left</td>
                        <td>111</td>
                        <td>Performs addition</td>
                        <td>+</td>
                        <td>r+</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>Left</td>
                        <td>111</td>
                        <td>Performs subtraction</td>
                        <td>-</td>
                        <td>r-</td>
                    </tr>
                    <tr>
                        <td>++</td>
                        <td>Left</td>
                        <td>111</td>
                        <td>Performs concatenation</td>
                        <td>concat</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>>></td>
                        <td>Left</td>
                        <td>1</td>
                        <td>Left-to-right composition</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>&lt;&lt;</td>
                        <td>Left</td>
                        <td>1</td>
                        <td>Right-to-left composition</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>|></td>
                        <td>Left</td>
                        <td>1</td>
                        <td>Pipe</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>&lt;</td>
                        <td>Left</td>
                        <td>-111</td>
                        <td>Less-than</td>
                        <td>&lt;</td>
                        <td>r&lt;</td>
                    </tr>
                    <tr>
                        <td>&lt;=</td>
                        <td>Left</td>
                        <td>-111</td>
                        <td>Less-than or Equal-to</td>
                        <td>NA (Define &lt; instead)</td>
                        <td>NA (Define r&lt; instead)</td>
                    </tr>
                    <tr>
                        <td>&gt;</td>
                        <td>Left</td>
                        <td>-111</td>
                        <td>Greater-than</td>
                        <td>NA (Define &lt; instead)</td>
                        <td>NA (Define r&lt; instead)</td>
                    </tr>
                    <tr>
                        <td>&gt;=</td>
                        <td>Left</td>
                        <td>-111</td>
                        <td>Greater-than or Equal-to</td>
                        <td>NA (Define &lt; instead)</td>
                        <td>NA (Define r&lt; instead)</td>
                    </tr>
                    <tr>
                        <td>=</td>
                        <td>Left</td>
                        <td>-222</td>
                        <td>Compares Structural Equality</td>
                        <td>=</td>
                        <td>r=</td>
                    </tr>
                    <tr>
                        <td>and</td>
                        <td>Left</td>
                        <td>-333</td>
                        <td>And boolean comparison</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>
                    <tr>
                        <td>or</td>
                        <td>Left</td>
                        <td>-333</td>
                        <td>Or boolean comparison</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>
                </table>
                <p>The negative precedence and non-consecutive precedence numbers will be explained soon.</p>
                <h3>First Class Operators</h3>
                <p>Z has first-class operators, meaning the operators aren't special. They can be created, stored in variables, and in fact, are just ordinary functions.</p>
                <p><code>+</code> is just defined as an ordinary function! Functions (like <code>+</code>) can then be called with infix syntax:</p>
                <pre lang="z">
def add: func x! + y!
3 add 4 # ==> 7</pre>
                <p>At parse time, long chains of operators are transformed back into invocations. To start, operators than do not consist only of symbols cannot have precedence: they are evaluated before any other operators in the chain, and are right associative:</p>
                <pre lang="z">
def add: func x! + y!
3 add 4 * 2 # ==> 11, not 14
                </pre>
                <p>However, operators that are defined using all symbols are left associative and can have custom precedence:</p>
                <pre lang="z">
def +': func x! + y!
3 +' 4 * 2 # ==> 11 +' has no precedence, defaults to 1, evaluates after multiplication
                </pre>
                <p>You can define a custom precedence for your operators:</p>
                <pre lang="z">
# Continuing from the last example:
operator +': 1000 # Give it a high Precedence
3 +' 4 * 2 # ==> 14
</pre>
                <p>Now, all the large precedence numbers should make sense. Operators having large gaps in precedence allows for insertion of operators in between precedence levels.</p>
                <p>Since operators are functions, they can be curried. All the built-in operators actually are:</p>
                <pre lang="z">3 |> *(2) |> +(1) |> to(1) # [1, 2, 3, 4, 5, 6, 7]</pre>
                <p>The following symbol characters are allowed in identifiers: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>^</code>, <code>?</code>, <code>&lt;</code>, <code>&gt;</code>, <code>=</code>, <code>!</code>, <code>\</code>,
                    <code>&</code>, <code>|</code>, <code>%</code>, <code>'</code></p>
                <p>Since operators are just functions, you can use them like ordinary functions:</p>
                <pre lang="z">
# Add function from before:
def add: +
# Sum an array
[1, 2, 3].reduce(+)
                </pre>
            </div>
            <div id="dds">
                <h1>Dollar Directives</h1>
                <p><strong><em>Dollar Directives are confusing and poorly implemented. They are deprecated, and will be removed in an upcoming implementation of Z.</em></strong></p>
                <p>Dollar directives are Z's form of compile-time reflection. To start, let's talk about compile-time metadata:</p>
                <h3>Metadata:</h3>
                <p>Metadata is declared with the <code>meta</code> keyword. It is known only at compile time, not at runtime. It's used to alter the behavior of dollar directives. Example:</p>
                <pre lang="z">
meta something: "cool" # Metadata must be strings only
meta config: "also cool" # config isn't available at runtime.
                </pre>
                <h3>Now Introducing: Dollar Directives</h3>
                <p>First, specify the metadata for <code>ddsdir</code>, the directory where the dollar directives will be coming from:</p>
                <pre lang="z">
meta ddsdir: "../dollar-directives"</pre>
                <p>A dollar directive is fed an AST of the next expression or statement at compile-time, meaning dollar directives must be compiled before hand. For example, the following dollar directive makes a for-of statement (sort of) possible:
                </p>
                <pre lang="z">
export func(forloop) {
    def assignment: forloop[0]
    def body: forloop[1]
    body.zeroth.push(assignment.zeroth)
    return [
        "type": "refinement",
        "zeroth": assignment.wunth,
        "wunth": "forEach",
        "twoth": [
            "type": "invocation",
            "zeroth": "forEach",
            "wunth": [body]
        ]
    ]
}</pre>
                <p>Assuming that dollar directive was in the same directory as the following example, you could use it like:</p>
                <pre lang="z">
$for (x: [1, 2, 3]) {
    log(x)
}</pre>
                <p>While making dollar directives does require advanced knowledge of how the Z Compiler works, using dollar directives is pretty easy, and can make your code more readable.</p>
                <p class="footnote">Dollar directives can take an optional second parameter, all the metadata defined up to the point where the dollar directive was called.</p>
                <p class="footnote">Arrays denoted with <code>()</code> that are followed by a block just add a function containing the block to the end of the array, as seen in the example above.</p>
            </div>
            <div id="enums">
                <h1>Enums</h1>
                <h3>A note: Enums are only available in Z 0.3.1+. A stable, non-buggy implementation of enums is only available in 0.3.5+.</h3>
                <p>While Z doesn't support classical OOP, Z mixes OOP and FP in Rust-Style enums, which are akin to the algebraic data types of functional languages.
                </p>
                <p>We are going to create a classic cons-list. You may also know this as a linked list.</p>
                <p>The general idea of a cons-list is that each "node" of the list could either be <code>Nil</code>, the empty/end of a list, or a value, and the rest of the cons-list. For example, the cons-list equivalent of
                    <code>[1, 2, 3]</code> would be:</p>
                <pre lang="z">Cons(1, Cons(2, Cons(3, Nil())))</pre>
                <p>To implement this, let's look at <code>enum</code>s. Enums in Z aren't a special new kind of type, they're just a special way to define certain types of functions. To start, let's make a simple enum representing a color:</p>
                <pre lang="z">
enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Purple
}</pre>
                <p>We can construct new members of an enum simply by calling its possible states:</p>
                <pre lang="z">
Red() # Constructs the "Red" member of the color enum.
Orange() # Constructs the "Orange" member of the color enum.
                </pre>
                <p>You can also refer to the enum collectively via its name:</p>
                <pre lang="z">
# This is the same as the example above.
Color.Red()
Color.Orange()
                </pre>
                <p>The <code>=</code> operator is automatically defined on each state of <code>Color</code>. For example:</p>
                <pre lang="z">
def col: Red()
col = Red() # true
col = Color.Red() # Also true
col = Orange() # false
                </pre>
                <p>Now that you've seen the basics of enums, let's start defining our cons-list enum. We'll call it <code>List</code> and give it two possible states: <code>Cons</code> and <code>Nil</code>:</p>
                <pre lang="z">
enum List {
    Cons,
    Nil
}</pre>
                <p>However, there's a problem. <code>Cons</code> needs to store two pieces of data: the first value and the rest of the list. In order to do this, we need fields. Let's look at a simple example of fields with a <code>Point</code> enum:</p>
                <pre lang="z">
enum Point {
    Point(x, y)
}
# This could also be written as the following:
enum Point(x, y)
# Because the Point enum has only one constructor with the same name as it</pre>
                <p>Now, we can construct point objects using <code>Point</code>, or even <code>Point.Point</code>. They will have read-only <code>x</code> and <code>y</code> properties defined on them:</p>
                <pre lang="z">
def myPoint: Point(3, 4)
log(myPoint.x) # 3
log(myPoint.y) # 4
def anotherPoint: Point(x: 3, y: 4) # Named fields can be used to increase readability.
def thirdPoint: Point(y: 4, x: 3) # Named fields can be in any order.
log(myPoint = anotherPoint) # This is true, fields are taken into account in equality too.</pre>
                <p>We can also use pattern matching to extract fields:</p>
                <pre lang="z">
match something {
    Point(x, y) => x + y, # Only runs if object is constructed via Point.
    _ => "Not a point"
}
                </pre>
                <p>Using fields, we can create a working implementation of the cons-list:</p>
                <pre lang="z">
enum List {
    Cons(val, rest),
    Nil
}</pre>
                <p>Now, we can create cons-lists, and test if they are equal:</p>
                <pre lang="z">
def li1: Cons(1, Cons(2, Nil()))
def li2: Cons(1, Cons(3, Cons(4, Nil())))
def li3: Cons(val: 1, rest: Cons(val: 2, rest: Nil()))
li1 = li2 # False
li1 = li3 # True
                </pre>
                <p>Now, to easily iterate and apply transformations to cons-lists, let's define a consForEach function that takes a function and a cons-list as a parameter and will pass the function each value in the cons-list:</p>
                <pre lang="z">
def consForEach: func (f, list) {
    loop {
        if list = Nil() {
            break
        }
        f(list.val)
        list: list.rest
    }
}</pre>
                <p>However, shouldn't we be able to associate <code>consForEach</code> with <code>List</code> itself. Say hello to the <code>where</code> block. Add the following to your <code>List</code> definition:</p>
                <pre lang="z">
enum List {
    Cons(val, rest),
    Nil
} where {
    forEach(f, list) {
        loop {
            if list = Nil() {
                break
            }
            f(list.val)
            list: list.rest
        }
    }
}</pre>
                <p>Now, you can use <code>forEach</code> like this:</p>
                <pre lang="z">List.forEach(log, Cons(1, Cons(2, Cons(3, Nil()))))</pre>
                <p>It will print out the elements of the cons-list, one by one.</p>
                <p>Now, how can we add types to the fields of <code>Cons</code>? Let's start by observing types of fields in action:</p>
                <pre lang="z">
enum Point(x: number!, y: number!)
Point(3, 4) # All good!
Point("hola", 4) # Error!
enum Line(start: Point!, end: Point!) # Enums can also be used as types
Line(Point(3, 4), Point(3, 4)) # All good!
Line(3, 4) # Error!</pre>
                <p>Because of this, you'll probably try something like:</p>
                <pre lang="z">
enum List {
    Cons(val, rest: List!),
    Nil
}</pre>
                <p>However, you'll get an error. Currently, all of an enum constructors must be typed or all must be untyped. There's no in-between. To get around this, you can use the <code>_!</code> type, which is a work-around for enums:</p>
                <pre lang="z">
enum List {
    Cons(val: _!, rest: List!),
    Nil
}</pre>
                <p>Now, you'll receive an error (at runtime) when <code>rest</code> is not of type <code>List</code>, but <code>val</code> can be of any type.</p>
                <p class="footnote">Note that <code>_!</code> only works with enums. In function definitions, you just leave out the type to imply <code>_!</code>.</p>
                <p>While the <code>forEach</code> functioned defined above is useful, what if we wanted to print out the cons-list as a whole? If you were programming in JavaScript, you might write a custom implementation of the <code>toString</code> method.
                    However, enums can derive traits, and unlike in other languages traits/interfaces/protocols in Z are just normal functions given context via the <code>derives</code> keyword. Let's look at how this works. Start by importing the standard
                    library's traits module <code>traits</code>:</p>
                <pre lang="z">importstd traits</pre>
                <p>Now, extract the <code>Show</code> trait from <code>traits</code>:</p>
                <pre lang="z">def {Show}: traits</pre>
                <p>Now, alert your definition of <code>List</code> to use the <code>derives</code> keyword:</p>
                <pre lang="z">
enum List {
    Cons(val: _!, rest: List!),
    Nil
} derives (Show) where {
    forEach(f, list) {
        loop {
            if list = Nil() {
                break
            }
            f(list.val)
            list: list.rest
        }
    }
}</pre>
                <p>Now, you'll find that any cons-list constructed has a <code>toString</code> method:</p>
                <pre lang="z">
log(Cons(1, Cons(2, Cons(3, Nil()))).toString()) 
# Logs "Cons(val: 1, rest: Cons(val: 2, rest: Cons(val: 3, rest: Nil())))"</pre>
                <p>Now let's look at another kind of way to implement a trait: statically. Traits implemented with the <code>static</code> keyword are automatically applied to each instance of an enum, but to the enum itself. To demonstrate, take the <code>Curry</code>                    trait from the <code>trait</code> module</p>:
                <pre lang="z">def {Show, Curry}: traits</pre>
                <p>Now, add <code>static Curry</code> to the <code>derives</code> expression in the definition of list:</p>
                <pre lang="z">
enum List {
    Cons(val: _!, rest: List!),
    Nil
} derives (Show, static Curry) where {
    forEach(f, list) {
        loop {
            if list = Nil() {
                break
            }
            f(list.val)
            list: list.rest
        }
    }
}</pre>
                <p><code>Curry</code> makes all of an objects methods curried, and sicne we derived <code>Curry</code> on <code>List</code>, we can do:</p>
                <pre lang="z">
def logger: List.forEach(log)

logger(Cons(1, Cons(2, Cons(3, Nil()))))         
                </pre>
                <p>Below is a list of all the traits defined by the <code>traits</code> module:</p>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Show</code></h3>
                    <p>Defines a <code>toString</code> method on an instance of an enum, which provides a more meaningful string to work with than <code>"[object Object]"</code>.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Read</code></h3>
                    <p>Defines a <code>read</code> method on an enum that attempts to parse a string and return an instance of that enum. However, parsing is limited and only numbers and built-in constants will be converted to their equivalents. Should be
                        implemented with <code>static</code>.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Ord</code></h3>
                    <p>Makes an enum comparable by overloading <code>&lt;</code>. Starts by comparing constructor order:</p>
                    <pre lang="z">
enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Purple
} derives (Ord)
Yellow() &lt; Blue() # True
Orange() &gt; Red() # True
Yellow() &lt;=  Orange() # False
                    </pre>
                    <p>If both the left-hand operand and the right-hand operand have the same constructor, it will check to see if the left-hand operand's field is less than the right-hand operand's field:</p>
                    <pre lang="z">
enum Maybe {
    Just(thing),
    None
} derives (Ord)
Just(3) &lt; Just(5) # True</pre>
                    <p>It is not recommended to use <code>Ord</code> on enums that have constructors that have more than one field.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Copy</code></h3>
                    <p>Copy defines a <code>copy</code> method on each instance of an enum:</p>
                    <pre lang="z">
enum Point(x: number!, y: number!) derives (Show, Copy)
log(Point(3, 4).copy(y: 2).toString()) # Logs Point(x: 3, y: 2)
                    </pre>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Enum</code></h3>
                    <p>Enum defines the methods <code>prev</code>, <code>succ</code>, and <code>to</code> on each instance of an enum to allow for creation of ranges and the like:</p>
                    <pre lang="z">
enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Purple
} derives (Show, Enum)
log(Red().succ().succ().succ().prev().toString()) # "Yellow()"
log(Red().to(Yellow()).toString()) # "Red(),Orange(),Yellow()"
log(Yellow().to(Red()).toString()) # "Yellow(),Orange(),Red()"</pre>
                    <p>By deriving both <code>Enum</code> and <code>Ord</code> you can overload range literals (the <code>to</code> type, not the <code>...</code> type):</p>
                    <pre lang="z">
enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Purple
} derives (Show, Ord, Enum)
log((Red() to Yellow()).toString()) # Red(),Orange(),Yellow()
log((Purple() til Red() by 2).toString()) # Purple(),Green(),Orange()</pre>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>PlusMinus</code></h3>
                    <p>PlusMinus overloads the <code>+</code> and <code>-</code> operators for every instance of an enum. If both operands have the same constructor, and returns a new instance of that constructor with all the fields added. Otherwise, it
                        adds/subtracts the relative order of the constructors in the enum declaration, and returns an instance of the constructor at that index.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Json</code></h3>
                    <p>Makes each instance of an enum JSON serializable.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>Curry</code></h3>
                    <p>Curries each method of a certain object. That means if it's implemented with <code>static</code> it curries the methods of an enum. If it's implemented without <code>static</code>, it will curry every method on every instance of the
                        enum.
                    </p>
                </div>
                <p>All the traits above are great, but what if we wanted to build our own trait? We're going to be constructing a <code>Sum</code> trait that defines a <code>sum</code> method to add all of a traits fields together.</p>
                <p>The implementation of the trait is below:</p>
                <pre lang="z">
def Sum: func (obj) {
    obj.sum: func () {
        let sum: 0
        obj.fields.forEach(func (field) {
            sum: sum + obj[field]
        })
        return sum
    }
    return obj
}</pre>
                <p>First off, you may notice there's no new <code>trait</code> keyword. It's just a function. First, the function takes an object representing the newly constructed instance of an enum. It then adds a method to that object: sum. Every instance
                    of an enum has a read-only <code>fields</code> property which holds an array containing the string names of every property defined by the enum constructor. By iterating over that array, we can pull out each field name, and then the
                    value of each field. It adds them, and then returns the object, which now has a sum method. Now, to use this, let's revisit the <code>Point</code> enum from earlier, and derive <code>Sum</code> on it:</p>
                <pre lang="z">
enum Point(x: number!, y: number!) derives (Sum)
                    </pre>
                <p>Try using a sum method on a point instance:</p>
                <pre lang="z">log(Point(3, 4).sum())</pre>
                <p>It should log 7.</p>
                <p>When you derive a trait statically, the object passed to the function is the enum itself, for example the <code>Point</code> object would be passed to the <code>Read</code> trait if it were derived statically.</p>
                <p>To add "reflection" to each enum instance, every instance contains the following metadata:</p>
                <pre lang="z">
instance.fields # Array of all fields the constructor defined on the instance
instance.constructor # Reference to the constructor of the instance (which is just a function)
instance.parent # Reference to the overarching enum that the point's constructor belongs to (which is just an object)
parent.order # Array of the order in which the constructors for an enum were defined. Useful for creating traits like "Ord" and "Enum"
                </pre>
            </div>
            <div id="acmds">
                <h3>Advanced Compiler Commands</h3>
                <p>There are three commands in the compiler that have not yet been covered: <code>dirt</code>, <code>watch</code>, and <code>wdir</code>:</p>
                <h3><strong><em>Di</em></strong>rectory <strong><em>R</em></strong>ecursive <strong><em>T</em></strong>ranspilation or <strong><em>DIRT</em></strong>:</h3>
                <p>The dirt command will transpile an entire directory to an "out" directory, maintaining file structure. So if you have a directory called <code>src</code>, and you want to transpile everything in it to <code>dist</code>, use:</p>
                <pre>$ zcomp dirt src dist</pre>
                <p>That's it.</p>
                <h3>Watching Files</h3>
                <p>If you have a file, say <code>iwillchange.z</code>, use the <code>watch</code> command to monitor it for changes, and transpile the file when changed:</p>
                <pre>$ zcomp watch iwillchange.z ../dist/iwillchange.js</pre>
                <h3>Directory Watching</h3>
                <p>The <code>wdir</code> command will watch a directory for changes, and then use <code>dirt</code> to transpile it when changes occur. This is useful for production, where you have complex nested directories that you need to transpile all
                    at once. For example:</p>
                <pre>$ zcomp wdir src dist</pre>
                <p>In 0.3.8+, the Z REPL has additional capabilities. First off, it will allow you to enter multiline statements when the first statement ends in <code>{</code>, <code>(</code> or <code>[</code>. When you close the block, invocation, or array/object
                    literal, all that code will be evaluated via the repl.</p>
                <p>You can also load and gain access to the functions in a Z file using the <code>:l</code> command. If you have a file called <code>add.zlang</code>, which contains a function that adds two numbers, load it via:</p>
                <pre>zrepl>:l add</pre>
                <p>And then you can use it as if you had typed it into the REPL yourself.</p>
            </div>
            <div id="rdoc">
                <h3>Runtime Overview</h3>
                <p>Below is a list of all the built-in non operator functions included in the Z runtime:</p>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>isObject(val)</code></h4>
                    <p>Returns <code>true</code> if <code>val</code> is not a scalar primitive. Otherwise, returns <code>false</code>.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>typeOf(val)</code></h4>
                    <p>Returns the type of <code>val</code> according to the following algorithm:</p>
                    <ol>
                        <li>Is <code>val</code> <code>undefined</code>? If so, return <code>"undefined"</code>.</li>
                        <li>Is <code>val</code> <code>null</code>? If so, return <code>"null"</code>. </li>
                        <li>Does <code>val</code> have a
                            <type> function? Does that function return a <code>string</code>? If so, return the result of calling <code>val</code>'s <code>type</code> function.</li>
                        <li>Is <code>val</code> <code>NaN</code>? If so, return <code>"NaN"</code>.</li>
                        <li>Does <code>Array.isArray</code> return <code>true</code> for <code>val</code>? If so, return <code>"array"</code>.</li>
                        <li>Return the result of calling <code>typeof</code> on <code>val</code>.</li>
                    </ol>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>typeGeneric(val)</code></h4>
                    <p>Returns the type of <code>val</code> according to the following algorithm:</p>
                    <ol>
                        <li>Does <code>val</code> define <code>typeGeneric</code> function? Does that function return a <code>string</code>? If so, return the result of calling that function.</li>
                        <li>Is <code>val</code> an <code>array</code>? If so, return a <code>string</code> in the format <code>"array&lt;types&gt;"</code>, where types is equal the result of joining a unique set of calling <code>typeGeneric</code> on all
                            the elements in <code>val</code> with <code>"|"</code></li>
                    </ol>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>stone(val)</code></h4>
                    <p>Returns the result of recursively calling <code>Object.freeze</code> on an object and its properties. Returns the object, which is now deeply immutable.</p>
                    <p class="footnote"><code>throws</code> when passed a circular data structure.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>copy(val)</code></h4>
                    <p>Returns a deep copy of <code>val</code>, except for functions, for which it will return <code>val</code> itself.</p>
                    <p class="footnote"><code>throws</code> when passed a circular data structure.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>log(...vals)</code></h4>
                    <p>Alias for <code>console.log</code>.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>not(val)</code></h4>
                    <p>Coerces <code>val</code> to a <code>boolean</code>, then returns the negation of that.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>both(val1, val2)</code></h4>
                    <p>Applies the JavaScript <code>&&</code> to val1 and val2, coerces the result to a <code>boolean</code>, and then returns that.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>either(val1, val2)</code></h4>
                    <p>Applies the JavaScript <code>||</code> to val1 and val2, coerces the result to a <code>boolean</code>, and then returns that.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>m(...vals)</code></h4>
                    <p>Returns the result of calling <code>vals.join("\n")</code></p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>chan()</code></h4>
                    <p>Makes a channel.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>send(val, ch)</code></h4>
                    <p>Sends a value to a channel.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>curry(f)</code></h4>
                    <p>Curries a function (loosely).</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h4><code>JS</code></h4>
                    <p>The following methods are defined on the global <code>JS</code> object:</p>
                    <table class="w3-table">
                        <tr>
                            <th>Method</th>
                            <th><code>JS</code> Equivalent</th>
                        </tr>
                        <tr>
                            <td><code>JS.new(constructor, ...args)</code></td>
                            <td><code>new (constructor)(...args)</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.typeof(val)</code></td>
                            <td><code>typeof val</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.instanceof(val, class)</code></td>
                            <td><code>val instanceof class</code>/td>
                        </tr>
                        <tr>
                            <td><code>JS.+(x)</code></td>
                            <td><code>+x</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.+(x, y)</code></td>
                            <td><code>x + y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.-(x)</code></td>
                            <td><code>-x</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.-(x, y)</code></td>
                            <td><code>x - y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.*(x, y)</code></td>
                            <td><code>x * y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS./(x, y)</code></td>
                            <td><code>x / y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.**(x, y)</code></td>
                            <td><code>x ** y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.%(x, y)</code></td>
                            <td><code>x % y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.==(x, y)</code></td>
                            <td><code>x == y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.===(x, y)</code></td>
                            <td><code>x === y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.!=(x, y)</code></td>
                            <td><code>x != y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.!==(x, y)</code></td>
                            <td><code>x !== y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.>(x, y)</code></td>
                            <td><code>x > y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.&lt;(x, y)</code></td>
                            <td><code>x &lt; y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.&lt;=(x, y)</code></td>
                            <td><code>x &lt;= y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.>=(x, y)</code></td>
                            <td><code>x >= y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.&&(x, y)</code></td>
                            <td><code>x && y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.||(x, y)</code></td>
                            <td><code>x || y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.!(x)</code></td>
                            <td><code>!x</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.&(x, y)</code></td>
                            <td><code>x & y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.|(x, y)</code></td>
                            <td><code>x | y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.^(x, y)</code></td>
                            <td><code>x ^ y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS["~"](x)</code></td>
                            <td><code>~x</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.&lt;&lt;(x, y)</code></td>
                            <td><code>x &lt;&lt; y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.>>(x, y)</code></td>
                            <td><code>x >> y</code></td>
                        </tr>
                        <tr>
                            <td><code>JS.>>>(x, y)</code></td>
                            <td><code>x >>> y</code></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="stdlib">
                <h1>Standard Library</h1>
                <p>Z's standard library is small, but growing. It contains 15 modules, detailed below. Each module (except the <code>matcher</code> and <code>constructs</code> modules) also has its own section, after this one.</p>
                <p>Modules in Z's Standard Library</p>
                <ul>
                    <li><code>Template</code> - A module that performs string templating, complete with encoding functions and nested object templating.</li>
                    <li><code>Tuple</code> - An implementation of fixed-size immutable collections (i.e. Tuples) in Z.</li>
                    <li><code>constructs</code> - A module containing multiple control flow structures implemented as functions.</li>
                    <li><code>matcher</code> - The behind-the-scenes implementation of Z's pattern matching. Not for use. Use <code>match</code> expression instead</li>
                    <li><code>utf32</code> - An implementation of Unicode in Z, with proper character indexing, Unicode-aware slicing, and more.</li>
                    <li><code>actors</code> - A (primitive) recreation of the Actor Model in Z.</li>
                    <li><code>F</code> - A functional utility module that is akin to Rambda.</li>
                    <li><code>gr</code> - Utility methods for goroutines.</li>
                    <li><code>traits</code> - Traits to derive on enums.</li>
                    <li><code>Decimal</code> - A big decimal implementation for Z.</li>
                    <li><code>Rational</code> - A bigrational number implementation for Z.</li>
                    <li><code>Complex</code> - A complex number implementation for Z.</li>
                    <li><code>taylor</code> - Taylor series used to approximate irrational numbers.</li>
                    <li><code>mercen</code> - A web scraper that asynchronously fetches a list of all discovered Mersenne primes.</li>
                    <li><code>scrapy</code> - A web scraper designed to extract a webpage's text content, and then allow you to execute queries on it.</li>
                </ul>
            </div>
            <div id="template">
                <h1>Template</h1>
                <p>Template is Z's way to perform advanced string interpolation. To start, you use the <code>Template</code> constructor to make a <code>Template</code>. Then, you resolve the template by calling <code>resolve</code> with data:</p>
                <pre lang="z">
importstd Template
def nameTemplate: Template("{{person.name:upper}} is a nice name.", [
    "upper": func (str) {
        return str.toUpperCase()
    }
])
log(nameTemplate.resolve([
    "person": [
        "name": "Joe"
    ]
])) # ==> "JOE is a nice name."</pre>
            </div>
            <div id="tuple">
                <h1>Tuple</h1>
                <p>Z's Tuple module allows you to create Tuples not exceeding 4 elements:</p>
                <pre lang="z">
importstd Tuple
def red: Tuple(255, 0, 0)
def green: Tuple(0, 255, 0)
def yellow: ++(red, green)
log(yellow._1, yellow._2, yellow._3) # ==> 255 255 0</pre>
            </div>
            <div id="uni">
                <h1>Unicode Support</h1>
                <p>Z's <code>utf32</code> module allows for basic Unicode support. It exports three things:</p>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>utf32.quote</code></h3>
                    <p><code>utf32</code> provides a <code>quote</code> constant that contains the character <code>"</code>.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>utf32.points(...points)</code></h3>
                    <p>Creates a <code>string</code> from the code points specified by <code>points</code>, then passes that string to <code>utf32.string</code>.</p>
                </div>
                <div class="w3-card w3-padding w3-margin-bottom">
                    <h3><code>utf32.string(str)</code></h3>
                    <p>Returns an immutable <code>ustr</code>, an immutable string capable of accurately representing Unicode characters. Documentation for methods of <code>ustr</code> is below:</p>
                    <h5><code>ustr#type()</code></h5>
                    <p>Returns <code>"ustr"</code></p>
                    <h5><code>ustr#toString()</code></h5>
                    <p>Returns <code>u"str"</code>, where <code>str</code> is a <code>string</code> consisting of the <code>ustr's</code> code points.</p>
                    <h5><code>ustr#toJSON()</code></h5>
                    <p>Returns the result of calling <code>toString</code>, but without the <code>"u"</code>.</p>
                    <h5><code>ustr#at(index)</code></h5>
                    <p>Returns a new <code>ustr</code> representing the code point found at <code>index</code></p>
                    <h5><code>ustr#codeAt(index)</code></h5>
                    <p>Returns the code point found at <code>index</code>.</p>
                    <h5><code>ustr#points()</code></h5>
                    <p>Returns a list of the <code>ustr</code>'s code points.</p>
                    <h5><code>ustr#concat(other)</code></h5>
                    <p>Returns the result of concatenating the <code>ustr</code> with <code>other</code> by joining their code points.</p>
                    <h5><code>ustr#length(other)</code></h5>
                    <p>Returns the amount of code points the <code>ustr</code> has.</p>
                    <h5><code>ustr#=(other)</code></h5>
                    <p>Returns true if the <code>ustr</code>'s code points are equal to <code>other's</code> code points, otherwise returns false. Coerces <code>arrays</code> and <code>strings</code> into <code>ustr</code>s for comparison.</p>
                </div>
                <div id="fp">
                    <h1>Functional Programming</h1>
                    <p>Z's <code>F</code> module has plenty of available functional programming constructs: 99 in fact.</p>
                    <p>There are too many to cover here in detail, but here is the full list of all the functions the <code>F</code> module exports:</p>
                    <ul>
                        <li><code>curry</code></li>
                        <li><code>unary</code></li>
                        <li><code>map</code></li>
                        <li><code>filter</code></li>
                        <li><code>reject</code></li>
                        <li><code>reduce</code></li>
                        <li><code>flatMap</code></li>
                        <li><code>&gt;&gt;</code></li>
                        <li><code>&lt;&lt;</code></li>
                        <li><code>|&gt;</code></li>
                        <li><code>|</code></li>
                        <li><code>prop</code></li>
                        <li><code>invoke</code></li>
                        <li><code>reverse</code></li>
                        <li><code>reduceRight</code></li>
                        <li><code>every</code></li>
                        <li><code>some</code></li>
                        <li><code>constant</code></li>
                        <li><code>add</code></li>
                        <li><code>sub</code></li>
                        <li><code>mul</code></li>
                        <li><code>div</code></li>
                        <li><code>mod</code></li>
                        <li><code>neg</code></li>
                        <li><code>append</code></li>
                        <li><code>cat</code></li>
                        <li><code>inc</code></li>
                        <li><code>dec</code></li>
                        <li><code>T</code></li>
                        <li><code>F</code></li>
                        <li><code>N</code></li>
                        <li><code>U</code></li>
                        <li><code>I</code></li>
                        <li><code>NN</code></li>
                        <li><code>id</code></li>
                        <li><code>predArrayTest</code></li>
                        <li><code>all</code></li>
                        <li><code>any</code></li>
                        <li><code>bothTwo</code></li>
                        <li><code>complement</code></li>
                        <li><code>contains</code></li>
                        <li><code>count</code></li>
                        <li><code>zero</code></li>
                        <li><code>one</code></li>
                        <li><code>allButOne</code></li>
                        <li><code>methodInvoke</code></li>
                        <li><code>startsWith</code></li>
                        <li><code>endsWith</code></li>
                        <li><code>indexOf</code></li>
                        <li><code>find</code></li>
                        <li><code>findIndex</code></li>
                        <li><code>eitherTwo</code></li>
                        <li><code>equals</code></li>
                        <li><code>flatten</code></li>
                        <li><code>forEach</code></li>
                        <li><code>fromEntries</code></li>
                        <li><code>entries</code></li>
                        <li><code>has</code></li>
                        <li><code>head</code></li>
                        <li><code>tail</code></li>
                        <li><code>double</code></li>
                        <li><code>triple</code></li>
                        <li><code>indentical</code></li>
                        <li><code>identity</code></li>
                        <li><code>ifElse</code></li>
                        <li><code>init</code></li>
                        <li><code>isNil</code></li>
                        <li><code>join</code></li>
                        <li><code>keys</code></li>
                        <li><code>last</code></li>
                        <li><code>lastIndexOf</code></li>
                        <li><code>length</code></li>
                        <li><code>max</code></li>
                        <li><code>merge</code></li>
                        <li><code>min</code></li>
                        <li><code>pipe</code></li>
                        <li><code>compose</code></li>
                        <li><code>prepend</code></li>
                        <li><code>propEq</code></li>
                        <li><code>range</code></li>
                        <li><code>sort</code></li>
                        <li><code>sortBy</code></li>
                        <li><code>split</code></li>
                        <li><code>sum</code></li>
                        <li><code>take</code></li>
                        <li><code>takeLast</code></li>
                        <li><code>test</code></li>
                        <li><code>toLower</code></li>
                        <li><code>toUpper</code></li>
                        <li><code>trim</code></li>
                        <li><code>toPairs</code></li>
                        <li><code>toString</code></li>
                        <li><code>unique</code></li>
                        <li><code>values</code></li>
                        <li><code>without</code></li>
                        <li><code>takeWhile</code></li>
                        <li><code>dropWhile</code></li>
                        <li><code>zip</code></li>
                        <li><code>zipWith</code></li>
                    </ul>
                </div>
                <div id="con">
                    <h1>Concurrency</h1>
                    <h4>In recent versions of Z (0.2.20+) the <code>go</code> keyword is inferred and you do not explicitly have to type it.</h4>
                    <p>Z implements a dynamic and event-loop based form of Go-style concurrency. To start, all asynchronous actions in Z start with a <code>go</code> function, short for <code>goroutine</code>, which is capable of using <code>channels</code>                        to perform <code>async</code> actions: </p>
                    <pre lang="z">
def main: go func () { # Note the "go" keyword

}
main() # Returns a promise, like an async function.</pre>
                    <p>Now, import the <code>gr</code> module from the standard library:</p>
                    <pre lang="z">
importstd gr
def main: go func () {
                            
}
main() # Returns a promise, like an async function.</pre>
                    <p>Use destructuring assignment to get the <code>line</code> function out of <code>gr</code>:</p>
                    <pre lang="z">
importstd gr
def {line}: gr
def main: go func () {

}
main()</pre>
                    <p>Use the <code>get</code> keyword with <code>line</code> to get a line from <code>process.stdin</code>:</p>
                    <pre lang="z">
importstd gr
def {line}: gr
def main: go func () {
    def someLine: get line
    log(someLine)                
}
main()</pre>
                    <p>That wasn't too hard. Now, let's talk about channels, and how they work. To start, construct a channel with the <code>chan()</code> function:</p>
                    <pre lang="z">
def channel: chan()
def main: go func () {

}
main()</pre>
                    <p>A channel can <code>send</code> and <code>receive</code> values. The <code>send</code> function sends values to a channel. The <code>get</code> keyword blocks in a <code>goroutine</code> until a value is sent to the channel, where
                        <code>get</code> will return the sent value. If there are already values in the channel, <code>get</code> will give you the first. In this way, channels can act like queues:</p>
                    <pre lang="z">
def channel: chan()
def main: go func () {
    log(get channel) # Logs 3
    # Don't forget that get is asynchronous   
}
send(3, channel) # Send is synchronous
channel.pending() # Number of values still waiting (not received with get) in the channel
main()</pre>
                    <p>This, for example, uses the <code>gr</code> module to feed a line to a channel:</p>
                    <pre lang="z">
importstd gr
def channel: chan()
def main: go func () {
    log(get channel) # Logs whatever line you entered
}
gr.line(channel) # Send is synchronous
main()</pre>
                    <p><code>gr</code> uses <code>readline</code> behind the scenes to <code>send</code> to a channel.</p>
                    <p>Because <code>chan</code> is just a normal function, you can return a channel from a function and then proceed to use it in a <code>get</code> expression. So you can do:</p>
                    <pre lang="z">
importstd gr
def channel: chan()
def main: go func () {
    log(get gr.line()) # gr.line() implicitly creates and then returns a new channel, and then, after you have entered a line into stdin, sends the line to that channel, prompting get to return that line.
}
main()</pre>
                    <p>You can design a custom <code>_from</code> method that returns a promise to overload the <code>get</code> operator. This is the custom <code>_from</code> method defined by <code>gr.line</code>:</p>
                    <p class="footnote">To understand this example you should be familiar with the <code>readline</code> module in node. If not, check it out <a href="https://nodejs.org/api/readline.html">here</a>.</p>
                    <pre lang="z">
import readline
line._from: func JS.new(Promise, func (resolve) {
    def rl: readline.createInterface([
        "input": process.stdin,
        "output": process.stdout
    ])
    rl.question("", func (line) {
        rl.close()
        resolve(line)
    })
})</pre>
                    <p>This is the actual <code>line</code> function defined by <code>gr</code>:</p>
                    <pre lang="z">
import readline
def line: func (prompt: "", ch: chan()) {
    def rl: readline.createInterface([
        "input": process.stdin,
        "output": process.stdout
    ])
    rl.question(prompt, func (line) {
        rl.close()
        send(line, ch)
    })
    return ch
}</pre>
                    <p>If you're writing a small script, you can omit the <code>go</code> wrapper function and use <code>get</code> at the top level. However, if you are using <code>get</code> at the top level, the <code>export</code> statement is not allowed.
                        Also note that top-level <code>get</code> does not work too well in the REPL. For example:</p>
                    <pre lang="z">
import gr
def ln: get gr.line("What's your name?")
log(ln ++ " is a nice name.")</pre>
                    <p>To launch a standalone block of code asynchronously, use <code>go</code> in statement position:</p>
                    <pre lang="z">
go {
    # You can use "get" in here without turning the outside function into a goroutine.
}</pre>
                    <p>You can also handle failure of asynchronous code that sends a <code>gr.gerror</code> to a channel, with <code>else</code> after the <code>get</code> expression:</p>
                    <pre lang="z">
get myAwesomeChannel else {
    log("Something went wrong " ++ err)
}</pre>
                    <p>Here's a list of all the functions defined by <code>gr</code>:</p>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.gerror(err, ch)</code></h3>
                        <p>Sends a wrapped error containing <code>err</code> to <code>ch</code>.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.wrapNodeCB(context, f)</code></h3>
                        <p>Returns a function that takes any number of arguments. The channel is the last argument. If only one argument is provided, the channel is set to <code>chan()</code>. Then, <code>f</code>, bound to <code>context</code> is called
                            on the new arguments, and a callback function which sends the result (or error) to the channel.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.readfile</code></h3>
                        <p>Equivalent to <code>gr.wrapNodeCB(fs, fs.readFile)</code></p>
                        <p>Example: <pre lang="z">get gr.readfile("doodad.txt") # Gets the content of doodad.txt</pre></p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.writefile</code></h3>
                        <p>Equivalent to <code>gr.wrapNodeCB(fs, fs.writeFile)</code></p>
                        <p>Example: <pre lang="z">get gr.writefile("doodad.txt", "doodad", ch()) # Writes "doodad" to doodad.txt.</pre></p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.json(url, ch: chan())</code></h3>
                        <p>Gets the json at the specified <code>url</code>.</p>
                        <p>Example: <pre lang="z">get json("https://yesno.wtf/api") # Gets a JSON object that contains an answer property equal to "yes" or "no".</pre></p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.page(url, ch: chan())</code></h3>
                        <p>Gets the HTML at the specified <code>url</code>.</p>
                        <p>Example: <pre lang="z">get page("https://www.google.com/") # Gets the HTML at google.com.</pre></p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.line(prompt: "", ch: chan())</code></h3>
                        <p>Reads a line from <code>stdin</code>, using <code>prompt</code> as input. If called with no arguments, its parentheses may be omitted. (as in <code>get line</code>)</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.wrapPromise(prom, ch: chan())</code></h3>
                        <p>Wraps <code>prom</code> so that:</p>
                        <pre lang="z">get gr.wrapPromise(prom)</pre>
                        <p>Is like (in JS):</p>
                        <pre><span style="color:#0000ff">await</span> prom</pre>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.all(chs, ch: chan())</code></h3>
                        <p>Like <code>Promise.all</code>, but for goroutines.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.race(chs, ch: chan())</code></h3>
                        <p>Like <code>Promise.race</code>, but for goroutines.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.status(chs, ch: chan())</code></h3>
                        <p>With <code>get</code>, it gives back an array of the results of chs. Each result will contain a <code>state</code> property that is either
                            <code>"succeeded"</code> or <code>"failed"</code>. If it has succeeded, the result will be inside the <code>result</code> property. If it failed, the error will be inside the <code>error</code> property.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.any(chs, ch: chan())</code></h3>
                        <p>Will send the first channel in <code>chs</code> to succeed, or a list of errors if none succeed.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.wait(ms, ch: chan())</code></h3>
                        <p>Waits <code>ms</code> milliseconds before sending <code>Symbol()</code> to <code>ch</code>.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.waitUntil(cond, ch: chan())</code></h3>
                        <p>Waits until <code>cond()</code> is true before sending <code>Symbol()</code> to <code>ch</code>.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.give(ch: chan())</code></h3>
                        <p>Equivalent to <code>gr.wait(10)</code>. Useful for passing control between goroutines.</p>
                    </div>
                    <div class="w3-card w3-padding w3-margin-bottom">
                        <h3><code>gr.select(chs, ch: chan())</code></h3>
                        <p>For each <code>element</code> of <code>chs</code>, will see which <code>element[0]</code> resolves first, and when it does, executes <code>element[1](what element[0] resolved to)</code></p>
                        <pre lang="z">
get gr.select([
    [
        first,
        func (val) log("First " ++ val) # If first channel recieves a value first.
    ],
    [
        second,
        func (val) log("Second" ++ val) # If second channel recieves a value first.
    ]
])</pre>
                    </div>
                </div>
                <div id="nums">
                    <h1>More Numbers</h1>
                    <p>Z's standard library has support for a numerous amount of Number types, which all implement the following methods:</p>
                    <code>+, r+, -, r-, *, r*, /, r/, =, r=, &lt;, r&lt;</code>
                    <p class="footnote">Note that <code>Complex</code> numbers do not implement <code>&lt;</code> nor <code>r&lt;</code></p>
                    <p>This allows you to use these number types in place of everyday IEEE floating point numbers seamlessly. Because all of these number types rely on <code>BigInt</code>, they'll only work in Node 10+. Let's start with the Big Decimal number
                        type:
                    </p>
                    <h3>Big Decimals</h3>
                    <p>Big Decimals are contained within the <code>Decimal</code> module. Here is a sample of their use:</p>
                    <pre lang="z">
importstd Decimal
def myBigDecimal: Decimal(3) # Decimals can be ordinary numbers
def myBiggerDecimal: Decimal("3.238142194382154234120973481276") # Decimals can be parsed from strings.
log(myBigDecimal + myBiggerDecimal |> .toString()) # Logs "6.238142194382154234120973481276"
log(myBigDecimal + "0.238142194382154234120973481276" = myBiggerDecimal) # Logs "true". Decimal can be compared for equality. Operations with decimals coerce their operands.
                    </pre>
                    <p>Decimals also support all other common operations that you can do with numbers, so they can be added, subtracted, multiplied, divided, and compared. When doing division with decimals, you can specify a precision to divide to:</p>
                    <pre lang="z">
decimal1 / decimal2 # Default precision of 20 digits
decimal1./(decimal2, -100digits) # One hundred digit precision
                    </pre>
                    <p>The <code>Decimal</code> object also defines the following constants and methods, which are equivalent to their <code>Math</code> object counterparts:</p>
                    <code>E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2, abs, ceil, floor, round, sign, random</code>
                    <h3>Big Rationals</h3>
                    <p>Like Big Decimals, Big Rationals support all the common numerical operations. They are represented with a numerator and a denominator, and they can be constructed via the <code>//</code> operator:</p>
                    <pre lang="z">
importstd Rational
def { // }: Rational
operator //: 1000
log(3 // 4 |> .toString()) # Logs "3 // 4"
                    </pre>
                    <p>Common operations with Rationals:</p>
                    <pre lang="z">
importstd Rational
def { // }: Rational
operator //: 1000
log(2 // 6 = 1 // 3) # true
log(1 // 3 + 1 // 2 |> .toString()) # 5 // 6
log(2 // 3 > 5 // 6) # false
log("0.5" = 1 // 2) # true, because strings containing decimal values can be coerced into Rationals.
                    </pre>
                    <p>In addition to supporting common operations, like <code>Decimal</code>, <code>Rational</code> defines several constants and functions akin to their <code>Math</code> counterparts:</p>
                    <code>E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2, abs, sign, random</code>
                    <h3>Complex Numbers</h3>
                    <p>Complex numbers are essential parts of some mathematical applications. For this reason, Z provides minimal complex number support.</p>
                    <p>Complex numbers support all basic arithmetic operations and equality checking, however, they do not support <code>&lt;</code> nor <code>r&lt;</code>. See an example of complex numbers below:</p>
                    <pre lang="z">
importstd Complex
log(Complex("12 + 7i") + "8 - 2i" |> .toString()) # 20 + 5i
log(Complex(12, 7) = "12 + 7i") # true
                    </pre>
                    <p>Complex trigonometry may be added at some point in the future.</p>
                    <p>The <code>Complex</code> object also comes with a static <code>random</code> method that generates a random Complex number.</p>
                </div>
                <div id="scrape">
                    <h1>Web Scraping</h1>
                    <p>Z's web scraping module, <code>scrapy</code> is a powerful way to extract text data in sentence form from webpages. Let's get all the sentences from the Wikipedia page about London:</p>
                    <pre lang="z">
importstd scrapy
def text: get scrapy("https://en.wikipedia.org/wiki/London")
log(text.sentences()) # This will print out an array of all the sentences on the London Wikipedia page
                    </pre>
                    <p>While there's plenty of sentences about London that pop up, there's also sentences that are completely unrelated. Let's find the first 30 sentences with only the string "London" in them:</p>
                    <pre lang="z">
importstd scrapy
def text: get scrapy("https://en.wikipedia.org/wiki/London")
text.thingsAbout("London").slice(0, 30).forEach(func log("- " ++ x!))
                    </pre>
                    <p>The <code>thingsAbout</code> method takes a string which it then coerces into a regular expression, and returns an array of all sentences contained within the source text that match that regular expression.</p>
                </div>
                <div id="edu">
                    <h1>EDU Modules</h1>
                    <p>Some modules in the Z compiler exist for educational purposes only. They are documented here.</p>
                    <h3>Taylor Series</h3>
                    <p>Taylor series are effective ways for approximating rational numbers. The <code>taylor</code> module comes with all you need to build Taylor series and several built-in ones. To start, you can create an infinite series via <code>taylor.sum</code>                        or <code>taylor.product</code>:</p>
                    <pre lang="z">
importstd taylor
def factorial: taylor.prod(1, func x!) # This multiplies all the numbers up to the number specified by the approx function.
factorial.approx(5) # 120 (in Decimal form)
                    </pre>
                    <p>Taylor series can also be used to approximate irrational numbers like <code>e</code>. In fact, <code>taylor</code> has a prepackaged <code>e</code> series:</p>
                    <pre lang="z">
taylor.E.approx(100tries, -40digits).toString() # "2.7182818284590452353602874713526624977552"
                    </pre>
                    <p>If you're interested in how more irrational numbers and functions can be implemented as Taylor series, check out the source code <a href="https://github.com/zlanguage/zstdlib/blob/master/src/z/taylor.zlang">here</a>.</p>
                    <h3>Mersenne Primes</h3>
                    <p>The <code>mercen</code> module dynamically fetches a list of all known Mersenne primes for you. A Mersenne prime is a prime number that can be represented as two raised to an integer power minus one. For example:</p>
                    <pre lang="z">
importstd mercen
def primes: get mercen()
log(primes.count()) # Returns the number of Mersenne primes
log(get primes.number(3)) # Get the third Mersenne prime, which is 31
def aBigOne: get primes.biggest() # Get the largest Mersenne prime in the list
log(aBigOne.slice(0, 10)) # Display the first 10 digits of the biggest Mersenne prime
                    </pre>
                    <p>If you wish, you can verify the answers Z gives you on <a href="https://www.mersenne.org/primes/">this website</a>.</p>
                </div>
                <div id="exs">
                    <h1>Examples</h1>
                    <p>This section compares, Z, CoffeeScript, and JavaScript code side by side in common examples.
                    </p>
                    <h3>Hello World:</h3>
                    <p>Z:</p>
                    <pre lang="z">log("Hello World")</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">console.log "Hello World"</code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">console.log("Hello World")</code></pre>
                    <h3>Fibbonaci:</h3>
                    <p>Z:</p>
                    <pre lang="z">
def fib: func (n)
    if (n &lt; 2) n
    else fib(n - 1) + fib(n - 2)</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">fib = (n) -> if n &lt; 2 then n else fib(n - 1) + fib(n - 2)</code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">function fib(n) {
    if (n &lt; 2) return n;
    return fib(n - 1) + fib(n - 2);
}</code></pre>
                    <h3>First 25 Squares:</h3>
                    <p>Z:</p>
                    <pre lang="z">log(loop(i &lt- 1...25) i ^ 2)</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">console.log([i ** 2 for i in 1..25])</code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">const squares = [];
for(let i = 0; i &lt 26; i++) {
    squares.push(i ** 2);
}
console.log(squares)</code></pre>
                    <h3>Parameter Type Checking (Runtime):</h3>
                    <p>Z:</p>
                    <pre lang="z">
def sum: func (init number!, list array!) {
    return list.reduce(+, init)
}</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">sum = (init, list) ->
    throw new Error("Init must be number") if typeof init isnt "number"
    throw new Error("List must be array") if not Array.isArray(list)
    list.reduce (t, v) -> 
        t + v
    , init</code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">function sum(init, list) {
    if (typeof init !== "number") throw new Error("Init must be number.");
    if (!Array.isArray(list)) throw new Error("List must be array.");
    return list.reduce((t, v) => t + v, init);
}</code></pre>
                    <h3>Runtime Polymorphic Functions:</h3>
                    <p>Z:</p>
                    <pre lang="z">
def double: func (val) match val {
    { value: number! } => v * 2,
    { number: number! } => n * 2,
    (number!n) => n * 2,
    number! => val * 2
    string! => val ++ val,
    array! => val ++ val,
    _ => [_, _]
}</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">double = (val) -> 
	if Array.isArray(val)
		if typeof val[0] is "number"
			return val[0] * 2
		else
			return val.concat(val)
	if typeof val is "object"
		if val.number isnt undefined
			return val.number * 2
		else if val.value isnt undefined
			return val.value * 2
	if typeof val is "string"
		return val.concat(val)
	if typeof val is "number"
		return val * 2
	return [val, val]
        </code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">function double(val) {
	if (Array.isArray(val)) {
		if (typeof val[0] === "number") {
			return val[0] * 2;
		} else {
			return val.concat(val);
		}
	}
	if (typeof val === "object") {
		if (val.number !== undefined) {
			return val.number * 2;
		} else if (val.value !== undefined) {
			return val.value * 2;
		}
	}
	if (typeof val === "string") {
		return val.concat(val);
	}
	if (typeof val === "number") {
		return val * 2;
	}
	return [val, val];
};</code></pre>
                    <h3>Point Objects via Classes/Enums:</h3>
                    <p>Z:</p>
                    <pre lang="z">
importstd traits
def {Show, PlusMinus}: traits

enum Point(x: number!, y: number!) derives (Show, PlusMinus) where {
    dist(p1, p2) {
        return Math.sqrt(-(p1.x, p2.x) ^ 2 + -(p1.y, p2.y) ^ 2)
    }
}</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">class Point
	constructor: (x, y) ->
		throw new Error("Point.x must be number") if typeof x isnt "number"
		throw new Error("Point.y must be number") if typeof y isnt "number"
		@x = x
		@y = y
	equals: (p) ->
		p instanceof Point and @x is p.x and @y is p.y
	plus: (p) ->
		new Point @x + p.x, @y + p.y
	minus: (p) ->
		new Point @x - p.x, @y - p.y
	toString: ->
		"Point(x: #{@x}, y: #{@y}"
	@dist: (p1, p2) ->
        Math.sqrt (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2</code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">class Point {
	constructor(x, y) {
		if (typeof x !== "number") {
			throw new Error("Point.x must be number");
		}
		if (typeof y !== "number") {
			throw new Error("Point.y must be number");
		}
		this.x = x;
		this.y = y;
	}

	equals(p) {
		return p instanceof Point && this.x === p.x && this.y === p.y;
	}

	plus(p) {
		return new Point(this.x + p.x, this.y + p.y);
	}

	minus(p) {
		return new Point(this.x - p.x, this.y - p.y);
	}

	toString() {
		return `Point(x: ${this.x}, y: ${this.y}`;
	}

	static dist(p1, p2) {
		return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
	}

}</code></pre>
                    <p>Concurrently fetching JSON from an API (on node):</p>
                    <p>Z:</p>
                    <pre lang="z">
importstd gr
importstd F
def results: F.map(
    func result!.answer, 
    get gr.all(
        Array.from(Array(10), func gr.json("https://yesno.wtf/api"))
    )
)
log(results)</pre>
                    <p>CS:</p>
                    <pre><code class="language-coffee">https = require 'https'
results = []

getAnswer = ->
	https.get 'https://yesno.wtf/api', (res) ->
		body = ''
		res.on 'data', (chunk) ->
			body += chunk
			return
		res.on 'end', ->
			results.push JSON.parse(body).answer
			if results.length is 10
				console.log results

for i in [1..10]
	getAnswer()</code></pre>
                    <p>JS:</p>
                    <pre><code class="language-js">const https = require("https");
const results = [];

function getAnswer() {
    https.get("https://yesno.wtf/api", res => {
        let body = "";
        res.on("data", chunk => {
            body += chunk;
        });
        res.on("end", () => {
            results.push(JSON.parse(body).answer);
            if (results.length === 10) {
                console.log(results);
            }
        });
    })
}

for (let i = 0; i &lt; 10; i++) {
    getAnswer();
}</code></pre>
                </div>
                <div id="why">
                    <h3>The Why of Z</h3>
                    <p>Why Z? There are already plenty of functional languages out there that transpile to JS. Z provides an alternative if you're looking for something more multi-paradigm. Some languages take the functional paradigm so far that the imperative
                        version is actually more readable in certain simple cases. For example, let's look at a "Hello World" program in Elm:
                    </p>
                    <pre><code class="language-elm">import Html exposing (text)
main = 
    text "Hello World"</code></pre>
                    <p>This is a relatively simple example. However, you can see some things that don't have anything to do with logging <code>"Hello World"</code>. First off, the import statement is clutter. Why can't the <code>text</code> function be built-in,
                        perhaps? And why can't we just place our call to the <code>text</code> function inside of <code>main</code>?</p>
                    <p>These questions all have satisfactory answers. However, in a simple program, it makes a lot more sense to drop the clutter. For example, "hello world" in Z is very simple:</p>
                    <pre lang="z">
log("Hello World")
                    </pre>
                    <p>In more complex cases, there would be obvious reason to have modules, and a main function. But in simple cases, an imperative script would be easier. You'll encounter the this situation with many different constructs: there are times
                        when loops make more sense than their recursive counterpart and when references are easier than pass-by-value.</p>
                    <p>Z is about letting you choose between functional and imperative, taking whichever one suits you current needs. If you look through the Z standard library, you'll see that it's predominantly functional on a line-by-line basis, but uses
                        imperative constructs now and then.</p>
                    <p>Z is about balance. About equilibrium. About letting you create modules just for the fun of it. About letting you choose the paradigm best for the situation.</p>
                </div>
                <div id="contribute">
                    <h1>Contribute</h1>
                    <p>If you want to contribute to Z, you should check out the following links:</p>
                    <p class="footnote">
                        <a href="https://github.com/zlanguage/zcomp">Z Compiler</a><br>
                        <a href="https://github.com/zlanguage/zlanguage.github.io">Z Website</a><br>
                        <a href="https://github.com/zlanguage/zstdlib">Z Standard Library</a>
                    </p>
                </div>
            </div>
        </div>
        <a href="https://clustrmaps.com/site/1att5" title="Visit tracker" hidden><img src="https://clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=ezT2F6Spj1y2K1J1CxfgklT1PMWEKsRID0SPaqnUmbE" /></a>
        <script src="main.js" type="module"></script>
        <script src="prism.js"></script>
</body>
</body>

</html>