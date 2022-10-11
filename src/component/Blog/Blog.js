import React from "react";

const Blog = () => {
  return (
    <div className="mx-6 pb-6">
      <header>
        <h1 className="mt-[40px] text-xl">
          Some important question about React.
        </h1>
      </header>
      <main>
        <div className="mt-[20px] p-6 bg-[#AAC4FF] border-2 rounded-xl">
          <h3 className="font-bold">
            Question 01: what is the purpose of react router?
          </h3>
          <p>
            <strong>Ans</strong>: React Router is a standard library for routing
            in React. It enables the navigation among views of various
            components in a React Application, allows changing the browser URL,
            and keeps the UI in sync with the URL. Let us create a simple
            application to React to understand how the React Router works. The
            application will contain three components: home component, about a
            component, and contact component. We will use React Router to
            navigate between these components.At its heart, React Router is a
            state container for the current location , or URL. It keeps track of
            the location and renders different Route s as it changes, and it
            also gives you tools to update the location using Link s and the
            history API.
          </p>
        </div>
        <div className="mt-[20px] p-6 bg-[#AAC4FF]  border-2 rounded-xl">
          <h3 className="font-bold">Question 02 : how context api works ?</h3>
          <p>
            <strong>Ans</strong>: The React Context API is a way for a React app
            to effectively produce global variables that can be passed around.
            This is the alternative to "prop drilling" or moving props from
            grandparent to child to parent, and so on. Context is also touted as
            an easier, lighter approach to state management using
            Redux.React.createContext is all you need. It returns a consumer and
            a provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state. More information can be found on React's documentation page.
          </p>
        </div>
        <div className="mt-[20px] p-6 bg-[#AAC4FF]  border-2 rounded-xl">
          <h3 className="font-bold">Question 03 : what is useRef in react?</h3>
          <p>
            <strong>Ans</strong>: The useRef hook is the new addition in React
            16.8. Before proceeding to this article there is a prerequisite to
            know about the ref in react. The useRef is a hook that allows to
            directly create a reference to the DOM element in the functional
            component. The useRef returns a mutable ref object. This object has
            a property called .current. The value is persisted in the
            refContainer.current property. These values are accessed from the
            current property of the returned object. The .current property could
            be initialised to the passed argument initialValue e.g.
            useRef(initialValue). The object can persist a value for a full
            lifetime of the component.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
