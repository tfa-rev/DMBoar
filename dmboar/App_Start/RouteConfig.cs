using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace dmboar
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
              name: "MenuRoute",
              url: "{controller}/{action}/{id}",
              defaults: new { controller = "Home", action = "Menu", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "LoginRoute",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Login", id = UrlParameter.Optional }
            );            
            routes.MapRoute(
                name: "UserRoute",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "UserPage", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "MovePageRoute",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "PageMover", id = UrlParameter.Optional }
         );

            routes.MapRoute(
         name: "UserRegisterRoute",
         url: "{controller}/{action}/{id}",
         defaults: new { controller = "Home", action = "Register", id = UrlParameter.Optional }
         );




        }
    }
}
