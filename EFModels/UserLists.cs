using System;
using System.Collections.Generic;

namespace Avocet.Ship.Operation.EFModels
{
    public partial class UserLists
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Rank { get; set; }
        public string Joined { get; set; }
        public string LastLogin { get; set; }
        public string Pincode { get; set; }
        public string Recovery { get; set; }
        public string Email { get; set; }
        public string Started { get; set; }
        public decimal? Finished { get; set; }
        public decimal? Edithydro { get; set; }
        public decimal? Emailreport { get; set; }
        public decimal? Directories { get; set; }
        public decimal? Newcondition { get; set; }
        public decimal? Deletecondition { get; set; }
        public decimal? Draftsurvey { get; set; }
        public decimal? Canprint { get; set; }
        public bool? IsValid { get; set; }
        public string Transaction { get; set; }
        public string History { get; set; }
    }
}
