import Navbar from "./navbar";
import LoginForm from "./login";
import SignupForm from "./signup";
import Test from "./test";
import Test2 from "./test2";

export default ({ children, getPath, firebase }) => (
  <div>
    <header>
      <Navbar getPath={getPath} />
    </header>

    <SignupForm firebase={firebase} />
    <LoginForm firebase={firebase} />
    <Test />
    <Test2 />
    {children}
    <footer></footer>
  </div>
);
