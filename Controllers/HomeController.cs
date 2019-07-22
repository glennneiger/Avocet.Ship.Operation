using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Avocet.Ship.Operation.EFModels;
using Microsoft.AspNetCore.Mvc;
using Avocet.Ship.Operation.Models;
using Avocet.Ship.Operation.Services;

namespace Avocet.Ship.Operation.Controllers
{
    public class HomeController : Controller
    {
    #region instances
    private IRepository _aushipbank;
    #endregion
    public HomeController(IRepository repository)
    {
      _aushipbank = repository;
    }
    
        public IActionResult Index()
        {
            return View();
        }

        public UserLists Signin(string id, string data)
        {
          UserLists founduser = _aushipbank.AllSearchBy<UserLists>(x => x.Pincode == data && x.Email == id).FirstOrDefault();
          if (founduser == null)
          {
            return new UserLists();
          }
          else
            return founduser;
          //return new UserLists() ;{Name="Bobby Faruqi", Email="Bfaruqi@gmail.com" }; 
        }

        public IActionResult GetShipList(int id)
        {
          return Ok("sd");

        }
    public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}


//appsettings
//{
//"ConnectionStrings": {
//  "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=aspnet-Avocet.Ship.Operation-83537CB8-DF56-442B-927E-4469B5E49564;Trusted_Connection=True;MultipleActiveResultSets=true"
//},
//"Logging": {
//  "LogLevel": {
//    "Default": "Warning"
//  }
//},
//"AllowedHosts": "*"
//}
