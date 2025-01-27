<p>The Web Storage API provides mechanisms by which browsers can store key-value pairs on the client side. This API is comprised of two main storage objects: <strong><code>window.localStorage</code></strong> and <strong><code>window.sessionStorage</code></strong>. Both provide a simple way to store data, but they differ in scope and lifetime of the data.</p>
<h3><strong>window.localStorage</strong></h3>
<ul>
<li><strong>Scope</strong>: Data is stored per origin (protocol + domain + port) and is accessible across all pages under the same origin.</li>
<li><strong>Lifetime</strong>: Data persists even after the browser is closed and reopened.</li>
<li><strong>Use Case</strong>: Ideal for storing long-term data like user settings, preferences, or any state that should persist beyond a single session.</li>
</ul>
<h3><strong>window.sessionStorage</strong></h3>
<ul>
<li><strong>Scope</strong>: Data is stored per origin and per window (or tab). Data from different tabs or windows is not shared, even if they are from the same origin.</li>
<li><strong>Lifetime</strong>: Data is available only for the duration of the page session. Once the tab or window is closed, the data is cleared.</li>
<li><strong>Use Case</strong>: Suitable for storing temporary data specific to a particular window or tab session, such as form inputs during a multi-step form process.</li>
</ul>
<p>After adding a few items. Open the Developer Tools in your Browser and look for Storage under Application (Chrome) or a similar term in another browser. Check how the data is stored for both local and session storage.&nbsp;<br><br>To test data persistance, click the reload button? See? Session storage is gone!</p>