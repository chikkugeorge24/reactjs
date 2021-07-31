import MainNavigation from "../layout/MainNavigation";
import classes from "../layout/MainNavigation.module.css";
const Layout = props => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};
export default Layout;
