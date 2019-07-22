using System;
using System.Collections.Generic;

namespace Avocet.Ship.Operation.EFModels
{
    public partial class ShipBanks
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Shipname { get; set; }
        public string Callsign { get; set; }
        public decimal? Df { get; set; }
        public decimal? Dm { get; set; }
        public decimal? Da { get; set; }
        public decimal? Lbm { get; set; }
        public decimal? Lbb { get; set; }
        public decimal? Lightship { get; set; }
        public string Por { get; set; }
        public string Flag { get; set; }
        public string Classification { get; set; }
        public string Imono { get; set; }
        public decimal? Dwt { get; set; }
        public decimal? Grt { get; set; }
        public decimal? Nrt { get; set; }
        public decimal? Sdraft { get; set; }
        public decimal? DepthMoulded { get; set; }
        public decimal? DepthExtreme { get; set; }
        public string Owners { get; set; }
        public string Charterers { get; set; }
        public decimal? Keelplate { get; set; }
        public string Managers { get; set; }
        public string Operators { get; set; }
        public decimal? Breadth { get; set; }
        public string Hydro { get; set; }
        public string Tanks { get; set; }
        public string Notes { get; set; }
        public string Uom { get; set; }
        public string Master { get; set; }
        public string Mate { get; set; }
    }
}
