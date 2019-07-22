using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avocet.Ship.Operation.EFModels;
using Avocet.Ship.Operation.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Avocet.Ship.Operation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : Controller
    {
      #region instances
      private IRepository _aushipbank;
      #endregion

      public UserProfileController(IRepository repository)
      {
        _aushipbank = repository;
      }

      [HttpPost("Signin")]
      public UserLists Signin()
      {
        var id= Request.Form["username"].First().ToString();
        var data  = Request.Form["password"].First().ToString();

        UserLists founduser = _aushipbank.AllSearchBy<UserLists>(x => x.Pincode == data && x.Email == id).FirstOrDefault();
        if (founduser == null)
        {
          return new UserLists();
        }
        else
          return founduser;
      }
  }

}
