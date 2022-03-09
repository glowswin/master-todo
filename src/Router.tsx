import { BrowserRouter, Switch, Route } from "react-router-dom";
import Category from "./routes/Category";
import TodoList from "./routes/TodoList";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <TodoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
