1. The request/response cycle refers to how a client interfaces with another domain/site. We first send a request (from the client) to the server - the server will then respond with the appropriate data specified by the request. This repeats as the user performs client side actions (requests) and the server replies (responses).

2. Common code groupings are:
  1. 100's: Informational, these response codes are used when a request has been received and understood, and offers info as to the state of the requests (still processing, 102)
  2. 200's: Successfully received, understood, and accepted from the client - these codes refer to when some action has been taken on the server side - such as sending back a result for a ```GET``` request
  3. 300's: Redirection - this is the result when the request can continue, but may be moved to search a different option to complete the request and send a response/resource.
  4. 400's: Client errors - these errors are sent back to a request when it appears to be a client-side error, such as 404(page not found, the requested resource was not found) or 408 (timeout, the client took to long to request to the server).
  5. 500's: Server errors - the server fails to respond to a request, and the server knows it has failed to do so.

3. GET - this verb can modify a request to a URL, and asks to retrieve something from the server (a page, usually).
POST - this verb will create a new object on the server.
PATCH - this verb will update an existing object on the server - we should use this when we want to update a part of an object.
PUT - this verb is similar to PATCH, but should be used when we want to *replace* an already existing object
DELETE - this will delete/remove an object on the server

4. Synchronous code is code that will run chronologically/iteratively - it will go through step-by-step, and wait for responses. Asynchronous code is code that will run simultaneously with other code, usually requests that are being sent and completed in varying timeframes, without necessarily being dependent on other steps to complete before being sent/completed.

5. A JavaScript promise is used in asynchronous requests to give a condition flow to the action - if the action completes successfully, it will return the desired info and move onto the next promise (or asynchronous action), however, if it fails, it will be *caught* (using the ```catch()``` method) and signify an error at that promise or asynchronous request. Thus, the promise can have multiple states depending on whether the request was resolved - it can be **fulfilled**, where the action for the promise succeeded; it can be **rejected**, where the action failed; it can be **pending**, where the promise is still being resolved; and it can be **settled**, where the promise has resolved, either fulfilled or rejected.
[(source: wikipedia.org)](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

6. CORS, or Cross-origin resource sharing, allows resources on a specific domain to be accessed/requested from foreign/other sites outside the original domain. One could use CORS for malicious activity, so to avoid that, we use proxies to ensure our requested/response data is not altered, by requesting to the proxy, which then requests to the true target, then sends back to the proxy, then back through to the original requester.

7. ```javascript
fetch(url)
  .then(response =>{
    return response.json();
  })
  .then(
    // stuff we want to do with the response data
  )
  .catch(error=>{
    console.log(`An error occurred: ${error}`);
  });
```
8. See myHackerNews.js
