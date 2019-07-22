using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Avocet.Ship.Operation.EFModels;
using Avocet.Ship.Operation.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Avocet.Ship.Operation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipWorksController : Controller
  {
    private IRepository _aushipbank;

    public ShipWorksController(IRepository repository )
      {
      _aushipbank = repository;
    }

[HttpGet("getShipList/{Id}")]
    public List<ShipBanks> getShipList(string id)
    {
      var shiplist = _aushipbank.AllSearchBy<ShipBanks>(x => x.UserId == id).ToList(); //..ShipBanks.ToList();
      return shiplist;
      //JsonConvert.SerializeObject(shiplist); // "{\"bpbby\",\"tola\",\"bola\"}";
    }

    [HttpGet("getShip/{Id}")]
    public ShipBanks getShip(int id)
    {
      var shiplist = _aushipbank.AllSearchBy<ShipBanks>(x => x.Id == id).FirstOrDefault(); //..ShipBanks.ToList();
      return shiplist;
      //JsonConvert.SerializeObject(shiplist); // "{\"bpbby\",\"tola\",\"bola\"}";
    }


    [HttpGet("getVoyages/{Id}/{data}")]
    public List<Voyages> getVoyages(string id, string data)
    {
      var shipvoy = _aushipbank.AllSearchBy<Voyages>(x => x.Shipname == id && x.UserId == data).ToList();// .Voyages.ToList();
      //do not add any
      //if (shipvoy.Count == 0)
      //{
      //  Voyages newVoyage = new Voyages()
      //  {
      //    Shipname = id,
      //    VoyNo = "000",
      //    Port = "Default",
      //    Dated = DateTime.UtcNow.ToShortDateString(),
      //    Timed = "00:00"
      //  };
      //  _aushipbank.Add<Voyages>(newVoyage);
      //  shipvoy = new List<Voyages>();
      //  shipvoy.Add(newVoyage);
      //}

      return shipvoy;
    }



  }
}
