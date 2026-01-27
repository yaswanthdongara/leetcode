/*
Title: loops_review_2026-01-27T06-34-17-328Z.js
Description: 
Date: 27/01/2026, 12:04:17 pm
*/

<div class="challenge-title-wrap" align="center"><div class="challenge-title"><h1 id="content-start" data-playwright-test-label="challenge-title">JavaScript Loops Review</h1></div></div><div class="h-[30px]"></div><div><h2>Working with Loops</h2></div><div><ul><li><strong><code>for</code> Loop</strong>: This type of loop is used to
 repeat a block of code a certain number of times. This loop is broken 
up into three parts: the initialization statement, the condition, and 
the increment/decrement statement. The initialization statement is 
executed before the loop starts. It is typically used to initialize a 
counter variable. The condition is evaluated before each iteration of 
the loop. An iteration is a single pass through the loop. If the 
condition is <code>true</code>, the code block inside the loop is executed. If the condition is <code>false</code>,
 the loop stops and you move on to the next block of code. The 
increment/decrement statement is executed after each iteration of the 
loop. It is typically used to increment or decrement the counter 
variable.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div><ul><li><strong><code>for...of</code> Loop</strong>: This type of loop is used when you need to loop over values from an iterable. Examples of iterables are arrays and strings.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div><ul><li><strong><code>for...in</code> Loop</strong>: This type of loop is 
best used when you need to loop over the properties of an object. This 
loop will iterate over all enumerable properties of an object, including
 inherited properties and non-numeric properties.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">const</span> fruit <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'apple'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">0.99</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> prop <span class="token keyword">in</span> fruit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruit<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div><ul><li><strong><code>while</code> Loop</strong>: This type of loop will run a block of code as long as the condition is <code>true</code>.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  i<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div><ul><li><strong><code>do...while</code> Loop</strong>: This type of loop will execute the block of code at least once before checking the condition.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token keyword">let</span> userInput<span class="token punctuation">;</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
  userInput <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"Please enter a number between 1 and 10"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>userInput<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> <span class="token function">Number</span><span class="token punctuation">(</span>userInput<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"You entered a valid number!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div><h2><code>break</code> and <code>continue</code> Statements</h2></div><div><ul><li><strong>Definition</strong>: A <code>break</code> statement is used to exit a loop early, while a <code>continue</code> statement is used to skip the current iteration of a loop and move to the next one.</li></ul></div><div><pre class="language-js" role="region" aria-label="JavaScript code example"><code class="language-js"><span class="token comment">// Example of break statement</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output: 0, 1, 2, 3, and 4</span>

<span class="token comment">// Example of continue statement </span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">continue</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output: 0, 1, 2, 3, 4, 6, 7, 8, and 9</span>
</code></pre></div><br>