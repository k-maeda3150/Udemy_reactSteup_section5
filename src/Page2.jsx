import { Link, Outlet } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="/page2/200">URL Parameter</Link>
      <br />
      <Link to="/page2/200?name=hogehoge&location=japan">Query Parameter</Link>
    </div>
  );
};

export const Page2Layout = () => {
  return <Outlet />;
};
