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
  
## Deployment on Firebase
  
  - npm install -g firebase-tools
  - firebase login
  - firebase init
  - Choose **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**
  - Choose **build** as the public directory
  - Configure as a single-page app (rewrite all urls to /index.html)
  - Set up automatic builds and deploys with GitHub? No
  - File build/index.html already exists. Overwrite? No
  - firebase deploy
  - To disable hosting -> firebase hosting:disable

## React Transition Group

- React Transition Group is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways
- **npm install react-transition-group --save**
- Transition Component

     - The Transition component lets you describe a transition from one component state to another over time with a simple declarative API.
     - It's used to animate the mounting and unmounting of a component, but can also be used to describe in-place transition states as well.
     - By default the Transition component does not alter the behavior of the component it renders, it only tracks "enter" and "exit" states for the components.
     - There are 4 main states a Transition can be in:
     
          - entering
          - entered
          - exiting
          - exited
     - Transition events:
           
          - onEnter
          - onEntering
          - onEntered
          - onExit
          - onExiting
          - onExited
        
 - CSSTransition Component
      
      - CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition.
      - The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state. 
      - It's built upon the Transition component, so it inherits all of its props.
      - The animation classNames applied to the component as it appears, enters, exits or has finished the transition. A single name can be provided, which will be suffixed for each stage. Eg:classNames="fade" applies:

           - fade-appear, fade-appear-active, fade-appear-done
           - fade-enter, fade-enter-active, fade-enter-done
           - fade-exit, fade-exit-active, fade-exit-done

- TransitionGroup Component

     - The TransitionGroup component manages a set of transition components (Transition and CSSTransition) in a list. 
     - TransitionGroup renders a div by default. You can change this behavior by providing a component prop.
      
## React Animation Packages

- React Motion

     - npm i react-motion
 
- React Move
      
     - npm i react-move
- React Router Transition

     - npm i react-router-transition


