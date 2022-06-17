import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";
export const Page2Routes = [
  {
    path: "/page2",
    children: <Page2 />
  },
  {
    path: "/:id",
    children: <UrlParameter />
  }
];
