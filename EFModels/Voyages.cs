using System;
using System.Collections.Generic;

namespace Avocet.Ship.Operation.EFModels
{
    public partial class Voyages
    {
        public int Id { get; set; }
        public string Shipname { get; set; }
        public string VoyNo { get; set; }
        public string UserId { get; set; }
        public int? ShipId { get; set; }
        public string Dated { get; set; }
        public string Timed { get; set; }
        public string Port { get; set; }
        public string Lightship { get; set; }
        public string Cargotoload { get; set; }
        public string Fordmark { get; set; }
        public string Fordcorr { get; set; }
        public string Fordcorrd { get; set; }
        public string Fordmean { get; set; }
        public string Aftmark { get; set; }
        public string Aftcorr { get; set; }
        public string Aftcorrd { get; set; }
        public string Aftmean { get; set; }
        public string Midmark { get; set; }
        public string Midcorr { get; set; }
        public string Midcorrd { get; set; }
        public string Midmean { get; set; }
        public string Keel { get; set; }
        public string Meandraft { get; set; }
        public string Hogsag { get; set; }
        public string Hogorsag { get; set; }
        public string Meanofmean { get; set; }
        public string Displ { get; set; }
        public string Trimcorr1 { get; set; }
        public string Trimcorr2 { get; set; }
        public string Dispwcorr { get; set; }
        public string Listcorr { get; set; }
        public string Densitycorr { get; set; }
        public string Displatdensity { get; set; }
        public string Deductible { get; set; }
        public string Cargo { get; set; }
        public string Ballast { get; set; }
        public string Fuel { get; set; }
        public string Hydraulicoil { get; set; }
        public string Slopl { get; set; }
        public string Bilge { get; set; }
        public string Environment { get; set; }
        public string Treated { get; set; }
        public string Diesel { get; set; }
        public string Gas { get; set; }
        public string Luboil { get; set; }
        public string Engineoil { get; set; }
        public string Freshwater { get; set; }
        public string Misc { get; set; }
        public string Constant { get; set; }
        public string Truetrim { get; set; }
        public string Lcf { get; set; }
        public string Tpc { get; set; }
        public string Mctc1 { get; set; }
        public string Mctc2 { get; set; }
        public string Tpc1 { get; set; }
        public string Tpc2 { get; set; }
        public string Tanks { get; set; }
        public string Observed { get; set; }
    }
}
