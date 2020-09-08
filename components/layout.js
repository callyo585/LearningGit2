import Navbar from "./navbar";
import LoginForm from "./login";
import SignupForm from "./signup";
import Test from "./test";

export default ({ children, getPath, firebase }) => (
  <div>
    <header>
      <Navbar getPath={getPath} />
    </header>

    <SignupForm firebase={firebase} />
    <LoginForm firebase={firebase} />
    <Test />
    {children}
    <footer></footer>
  </div>
);
