import { AppLayout } from "@/layout/components/app.layout";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    component: AppLayout,
    children: [
      {
        path: "",
        redirectTo: "/real-estate",
        pathMatch: "full"
      },
      {
        path: "real-estate",
        loadComponent: () =>
          import("./app/pages/real-estate/index").then((c) => c.RealEstate),
      },
      {
        path: "404",
        loadComponent: () => import("./app.error").then((c) => c.Error),
      },
      {
        path: "second-pages",
        children: [
          {
            path: "about",
            loadComponent: () =>
              import("./app/pages/second-pages/about/index").then(
                (c) => c.About
              ),
          },
          {
            path: "contact",
            loadComponent: () =>
              import("./app/pages/second-pages/contact/index").then(
                (c) => c.Contact
              ),
          },
        ],
      },
    ],
  },

  { path: "**", redirectTo: "/404" },
];
