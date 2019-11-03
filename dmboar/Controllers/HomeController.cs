using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using dmboar.Models;


namespace dmboar.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Index";

            return View();
        }

        [HttpPost]
        public ActionResult PageMover(int  user_id)
        {


            // do processing of model

            // redirect to page two
            return Json(new { url = Url.Action("UserPage") + "?user_id=" + user_id });
        }

        public ActionResult UserPage(int user_id)
        {
            ViewBag.Title = "UserPage";
           ViewBag.user_id = user_id;

            return View();
        }

       

        public ActionResult Login()
        {


            ViewBag.Title = "Login";
            return View();
           
        }

        public ActionResult Register()
        {


            ViewBag.Title = "Register";
            return PartialView("~/Views/Home/Register.cshtml");

        }

        public ActionResult Menu()
        {
            ViewBag.Title = "Menu";

            return View();
        }

    }
}
