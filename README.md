## reactjs

## React Router

npm i --save react-router-dom

## Lazy Loading

- React apps are bundled with the preinstalled bundlers like webpack before making the React application to be production ready. 
- When this bundled project is loaded, it loads the whole source code at once, even those pages which are rarely visited by the user. 
- So, to prevent the entire loading of the application at once, we use the concept of lazy loading to decrease the DOM load time and to increase the speed of the application

      const OtherComponent = React.lazy(() => import('./OtherComponent'));

- When the components are lazily loaded, it requires a fallback to be shown to indicate that the component is being loaded in the DOM.
- **Suspense** is a component required by the lazy function basically used to wrap lazy components.

  Multiple lazy components can be wrapped with the suspense component.
  
  It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.
