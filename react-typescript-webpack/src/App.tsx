import './styles.css'
import IMAGE from './react-table.png'
import GUITAR from './guitar.svg'
import ClickCounter from './ClickCounter'
export const App = () => {
  return (
    <>
      <h1>
        Edited React Typescript Webpack Starter Template -{' '}
        {process.env.NODE_ENV}
      </h1>
      <img src={IMAGE} alt="React Table Logo" width="200" height="200" />
      <img src={GUITAR} alt="Guitar Logo" width="200" height="200" />
      <ClickCounter />
    </>
  )
}
