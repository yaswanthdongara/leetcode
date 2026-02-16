/*
Title: favorite_icon_toggler_project_2026-02-16T12-35-57-593Z.js
Description: 
Date: 16/02/2026, 6:05:57 pm
*/

<div>You should have an unordered list with three items.<br>The unordered list should have the class item-list.<br>The three list items should contain the item name followed by a button element with the class favorite-icon.<br>The button element should contain the code &amp;#9825; initially to represent an empty heart.<br>When a button element containing a heart is clicked, you should add a class named filled to the clicked button if it's not already present, and remove it, if it is.<br>You should have a class selector that targets the filled class and sets some CSS properties.<br>When a button element containing a heart is clicked, the heart symbol should toggle between &amp;#9825; (empty heart) and &amp;#10084; (filled heart), depending on its current state.</div><div><br></div><div><br></div><div><br></div><div>&lt;ul class="item-list"&gt;<br>  &lt;li&gt;<br>    Item 1 <br>    &lt;button class="favorite-icon"&gt;&amp;#9825;&lt;/button&gt;<br>  &lt;/li&gt;<br>  &lt;li&gt;<br>    Item 2 <br>    &lt;button class="favorite-icon"&gt;&amp;#9825;&lt;/button&gt;<br>  &lt;/li&gt;<br>  &lt;li&gt;<br>    Item 3 <br>    &lt;button class="favorite-icon"&gt;&amp;#9825;&lt;/button&gt;<br>  &lt;/li&gt;<br>&lt;/ul&gt;</div><div><br></div><div><br></div><div><br></div><div>.favorite-icon {<br>  font-size: 20px;<br>  cursor: pointer;<br>  background: none;<br>  border: none;<br>}<br><br>.favorite-icon.filled {<br>  color: red; /* makes filled hearts stand out */<br>}</div><div><br></div><div><br></div><div><br></div><div>// Select all favorite buttons
</div>const favButtons = document.querySelectorAll(".favorite-icon");

favButtons.forEach((btn) =&gt; {
  btn.addEventListener("click", () =&gt; {
    // Toggle the 'filled' class
    btn.classList.toggle("filled");

    // Toggle the heart symbol
    if (btn.classList.contains("filled")) {
      btn.innerHTML = "&amp;#10084;"; // filled heart
    } else {
      btn.innerHTML = "&amp;#9825;"; // empty heart
    }
  });
});