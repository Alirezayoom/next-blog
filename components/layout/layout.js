import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <section>
      <MainNavigation />
      <main>{props.children}</main>
    </section>
  );
}

export default Layout;
