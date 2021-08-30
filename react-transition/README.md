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


