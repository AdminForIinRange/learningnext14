/* In React, when you define a form with an onSubmit event handler, 
    React automatically passes the event object to the event handler function when the form is submitted.
    Therefore, in your addPost function, you can access the event object if needed. */

/* //so when i use Action, i am directing the location of where the data event will be sent to.
     BTW: React automatically passes the event object to the event handler function
     */

// action attribute: Specifies the URL for form data processing.
// It directs the browser to send a request to this URL when the form is submitted.
// This traditional HTML attribute predates React and defines where the form data should be submitted.

// onSubmit attribute: Specifies a JavaScript function to handle form submissions in React.
// When the form is submitted, React calls the specified function (e.g., handleSubmit)
// with the event object as its argument (if included).
// Using event.preventDefault() within this function prevents default submission behavior,
// enabling form submission handling within your React component.

/* 
onSubmit is a client-side event handler for form submissions, while action is an HTML 
attribute that defines the server-side endpoint where form data should be sent.
 */

export const addPost = async (formData) => {
  "use server";

  // he get() method of FormData allows you to retrieve the value associated with a specific
  //name/key. So, when you call formData.get("title"), it retrieves the value entered into
  // the input field with the name "title". Similarly, you use the other names to retrieve the respective values entered into the input fields.

  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  // const userId = formData.get("userId");

  const { title, desc, slug, userId } = Object.fromEntries(formData); 

  // this line above  essentially converts the FormData object into a regular JavaScript 
  // object and then extracts specific properties from it, making them available
  //  as variables in the current scope. This approach is often used to simplify 
  //  accessing form data in JavaScript.

  console.log(title, desc, slug, userId);
};

// If "use server" is included, your function will be executed on the server
// and it needs to be an async function.
// If it is not intended to be a server component, you can leave it as it is.
// You can remove "async" if its not intended to bt asynchronous. In the page.jsx, you must add "use client"
// to tell the renderer it is a client component, so render it in the client, please.
