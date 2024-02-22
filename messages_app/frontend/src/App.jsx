import { Route, Switch } from "wouter";
import { Navbar } from "./components/Navbar";
import { routes } from "./Routes";

function App() {
  const appRoutes = routes.map((route, index) => {
    return <Route key={index} path={route.href} component={route.component} />
  })

  return (
    <>
      <Navbar />

      <main className="my-12 p-10">
        <Switch>
          { appRoutes }
          <Route>404: Page not found</Route>
        </Switch>
      </main>
    </>
  )
}

export default App
