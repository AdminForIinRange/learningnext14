export const sayHello = async () => {
    // If "use server" is included, your function will be executed on the server
    // and it needs to be an async function.
    // If it is not intended to be a server component, you can leave it as it is. 
    // You can remove "async" if you want. In the page.jsx, you must add "use client"
    // to tell the renderer it is a client component, so render it in the client, please.
    console.log("hello");
  };
  