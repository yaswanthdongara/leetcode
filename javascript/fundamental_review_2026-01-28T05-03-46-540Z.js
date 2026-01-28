/*
Title: fundamental_review_2026-01-28T05-03-46-540Z.js
Description: 
Date: 28/01/2026, 10:33:46 am
*/

<div class="challenge-title-wrap" align="center"><div class="challenge-title"><h1 id="content-start" data-playwright-test-label="challenge-title">JavaScript Fundamentals Review</h1></div></div><div class="h-[30px]"></div><div><h2>String Constructor and <code>toString()</code> Method</h2></div><div><ul><li><strong>Definition</strong>: A string object is used to represent a sequence of characters. String objects are created using the <code>String</code> constructor function, which wraps the primitive value in an object.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> greetingObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> greetingObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>
</code></pre></div><div><ul><li><strong><code>toString()</code> Method</strong>: This method 
converts a value to its string representation. It is a method you can 
use for numbers, booleans, arrays, and objects.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "10"</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "1,2,3"</span>
</code></pre></div><div><p>This method accepts an optional radix which 
is a number from 2 to 36. This radix represents the base, such as base 2
 for binary or base 8 for octal. If the radix is not specified, it 
defaults to base 10, which is decimal.</p></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "1010"(binary)</span>
</code></pre></div><div><h2>Number Constructor</h2></div><div><ul><li><strong>Definition</strong>: The <code>Number</code> constructor is used to create a number object. The number object contains a few helpful properties and methods like the <code>isNaN</code> and <code>toFixed</code> method. Most of the time, you will be using the <code>Number</code> constructor to convert other data types to the number data type.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> myNum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token string">"34"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> myNum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span>

<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">'100'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
</code></pre></div><div><h2>Best Practices for Naming Variables and Functions</h2></div><div><ul><li>
<p><strong>camelCasing</strong>: By convention, JavaScript developers 
will use camel casing for naming variables and functions. Camel casing 
is where the first word is all lowercase and the following words start 
with a capital letter. Ex. <code>isLoading</code>.</p>
</li><li>
<p><strong>Naming Booleans</strong>: For boolean variables, it's a common practice to use prefixes such as "is", "has", or "can".</p>
</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">let</span> isLoading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hasPermission <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> canEdit <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre></div><div><ul><li><strong>Naming Functions</strong>: For functions, the name should 
clearly indicate what the function does. For functions that return a 
boolean (often called predicates), you can use the same "is", "has", or 
"can" prefixes. When you have functions that retrieve data, it is common
 to start with the word "get". When you have functions that set data, it
 is common to start with the word "set". For event handler functions, 
you might prefix with "handle" or suffix with "Handler".</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">function</span> <span class="token function">getUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isValidEmail</span><span class="token punctuation">(</span><span class="token parameter">email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getProductDetails</span><span class="token punctuation">(</span><span class="token parameter">productId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setUserPreferences</span><span class="token punctuation">(</span><span class="token parameter">preferences</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
</code></pre></div><div><ul><li><strong>Naming Variables Inside Loops</strong>: When naming iterator variables in loops, it's common to use single letters like <code>i</code>, <code>j</code>, or <code>k</code>.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
</code></pre></div><div><h2>Working with Sparse Arrays</h2></div><div><ul><li><strong>Definition</strong>: It is possible to have arrays with 
empty slots. Empty slots are defined as slots with nothing in them. This
 is different than array slots with the value of <code>undefined</code>. These types of arrays are known as sparse arrays.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> sparseArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sparseArray<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre></div><div><h2>Linters and Formatters</h2></div><div><ul><li><strong>Linters</strong>: A linter is a static code analysis tool 
that flags programming errors, bugs, stylistic errors, and suspicious 
constructs. An example of a common linter would be ESLint.</li><li><strong>Formatters</strong>: Formatters are tools that automatically
 format your code to adhere to a specific style guide. An example of a 
common formatter would be Prettier.</li></ul></div><div><h2>Memory Management</h2></div><div><ul><li><strong>Definition</strong>: Memory management is the process of 
controlling the memory, allocating it when needed and freeing it up when
 it's no longer needed. JavaScript uses automatic memory management. 
This means that JavaScript (more specifically, the JavaScript engine in 
your web browser) takes care of memory allocation and deallocation for 
you.  You don't have to explicitly free up memory in your code. This 
automatic process is often called "garbage collection."</li></ul></div><div><h2>Closures</h2></div><div><ul><li><strong>Definition</strong>: A closure is a function that has access
 to variables in its outer (enclosing) lexical scope, even after the 
outer function has returned.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">function</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> innerFunction<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> closure <span class="token operator">=</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span>
</code></pre></div><div><h2><code>var</code> Keyword and Hoisting</h2></div><div><ul><li><strong>Definition</strong>: <code>var</code> was the original way to declare variables before 2015. But there were some issues that came with <code>var</code> in terms of scope, redeclaration and more. So that is why modern JavaScript programming uses <code>let</code> and <code>const</code> instead.</li><li><strong>Redeclaring Variables with <code>var</code></strong>: If you try to redeclare a variable using <code>let</code>, then you would get a <code>SyntaxError</code>. But with <code>var</code>, you are allowed to redeclare a variable.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token comment">// Uncaught SyntaxError: Identifier 'num' has already been declared </span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">19</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> myNum <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myNum <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// This is allowed and doesn't throw an error</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myNum<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre></div><div><ul><li><strong><code>var</code> and Scope</strong>: Variables declared with <code>var</code> inside a block (like an <code>if</code> statement or a <code>for</code> loop) are still accessible outside that block.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre></div><div><ul><li><strong>Hoisting</strong>: This is JavaScript's default behavior of 
moving declarations to the top of their respective scopes during the 
compilation phase before the code is executed. When you declare a 
variable using the <code>var</code> keyword, JavaScript hoists the declaration to the top of its scope.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre></div><div><p>When you declare a function using the 
function declaration syntax, both the function name and the function 
body are hoisted. This means you can call a function before you've 
declared it in your code.</p></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Hello, World!"</span>

<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div><p>Variable declarations made with <code>let</code> or <code>const</code>
 are hoisted, but they are not initialized, and you can't access them 
before the actual declaration in your code. This behavior is often 
referred to as the "temporal dead zone".</p></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Throws a ReferenceError</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre></div><div><h2>Working with Imports, Exports and Modules</h2></div><div><ul><li><strong>Module</strong>: This is a self-contained unit of code that 
encapsulates related functions, classes, or variables. To create a 
module, you write your JavaScript code in a separate file.</li><li><strong>Exports</strong>: Any variables, functions, or classes you 
want to make available to other parts of your application need to be 
explicitly exported using the <code>export</code> keyword. There are two types of export: named export and default export.</li><li><strong>Imports</strong>: To use the exported items in another part of your application, you need to import them using the <code>import</code> keyword. The types can be named import, default import, and namespace import.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token comment">// Within a file called math.js, we export the following functions:</span>

<span class="token comment">// Named export</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Default export</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Within another file, we can import the functions from math.js.</span>

<span class="token comment">// Named import - This line imports the add function.</span>
<span class="token comment">// The name of the function must exactly match the one exported from math.js.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> add <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math.js'</span><span class="token punctuation">;</span>

<span class="token comment">// Default import - This line imports the subtract function.</span>
<span class="token comment">// The name of the function can be anything.</span>
<span class="token keyword">import</span> subtractFunc <span class="token keyword">from</span> <span class="token string">'./math.js'</span><span class="token punctuation">;</span>

<span class="token comment">// Namespace import - This line imports everything from the file.</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Math <span class="token keyword">from</span> <span class="token string">'./math.js'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">subtractFunc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre></div><br>