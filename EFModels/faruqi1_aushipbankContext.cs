using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Avocet.Ship.Operation.EFModels
{
    public partial class faruqi1_aushipbankContext : DbContext
    {
        public faruqi1_aushipbankContext()
        {
        }

        public faruqi1_aushipbankContext(DbContextOptions<faruqi1_aushipbankContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ShipBanks> ShipBanks { get; set; }
        public virtual DbSet<UserLists> UserLists { get; set; }
        public virtual DbSet<Voyages> Voyages { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=198.38.83.200;Database=faruqi1_aushipbank;persist security info=True;user id=faruqi1_bobby1;password=jordana1;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:DefaultSchema", "faruqi1_bobby1");

            modelBuilder.Entity<ShipBanks>(entity =>
            {
                entity.ToTable("ShipBanks", "dbo");

                entity.Property(e => e.Breadth)
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Callsign)
                    .HasMaxLength(10)
                    .HasDefaultValueSql("(' ')");

                entity.Property(e => e.Charterers)
                    .HasMaxLength(25)
                    .HasDefaultValueSql("('  ')");

                entity.Property(e => e.Classification)
                    .HasMaxLength(35)
                    .HasDefaultValueSql("(' ')");

                entity.Property(e => e.Da)
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.DepthExtreme)
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.DepthMoulded)
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Df)
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Dm)
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Dwt)
                    .HasColumnName("DWT")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Flag)
                    .HasMaxLength(20)
                    .HasDefaultValueSql("(' ')");

                entity.Property(e => e.Grt)
                    .HasColumnName("GRT")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Hydro).HasDefaultValueSql("('[{}]')");

                entity.Property(e => e.Imono)
                    .HasColumnName("IMONo")
                    .HasMaxLength(9)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Keelplate)
                    .HasColumnName("KEELPLATE")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Lbb)
                    .HasColumnName("LBB")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Lbm)
                    .HasColumnName("LBM")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Lightship)
                    .HasColumnName("LIGHTSHIP")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Managers)
                    .HasMaxLength(10)
                    .HasDefaultValueSql("('  ')");

                entity.Property(e => e.Master)
                    .HasMaxLength(150)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Mate)
                    .HasMaxLength(150)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Notes).HasDefaultValueSql("('  ')");

                entity.Property(e => e.Nrt)
                    .HasColumnName("NRT")
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Operators)
                    .HasMaxLength(10)
                    .HasDefaultValueSql("('  ')");

                entity.Property(e => e.Owners)
                    .HasMaxLength(25)
                    .HasDefaultValueSql("('  ')");

                entity.Property(e => e.Por)
                    .HasColumnName("POR")
                    .HasMaxLength(20)
                    .HasDefaultValueSql("(' ')");

                entity.Property(e => e.Sdraft)
                    .HasColumnType("numeric(12, 3)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Shipname)
                    .HasMaxLength(25)
                    .HasDefaultValueSql("(' ')");

                entity.Property(e => e.Tanks).HasDefaultValueSql("('[{}]')");

                entity.Property(e => e.Uom)
                    .HasColumnName("UOM")
                    .HasMaxLength(10)
                    .HasDefaultValueSql("('METRIC')");

                entity.Property(e => e.UserId).HasMaxLength(128);
            });

            modelBuilder.Entity<UserLists>(entity =>
            {
                entity.ToTable("UserLists", "dbo");

                entity.Property(e => e.Canprint)
                    .HasColumnName("CANPRINT")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Code).HasMaxLength(120);

                entity.Property(e => e.Deletecondition)
                    .HasColumnName("DELETECONDITION")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Directories)
                    .HasColumnName("DIRECTORIES")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Draftsurvey)
                    .HasColumnName("DRAFTSURVEY")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Edithydro)
                    .HasColumnName("EDITHYDRO")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Email)
                    .HasMaxLength(120)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Emailreport)
                    .HasColumnName("EMAILREPORT")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Finished)
                    .HasColumnType("numeric(30, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.History).HasMaxLength(300);

                entity.Property(e => e.IsValid).HasDefaultValueSql("((0))");

                entity.Property(e => e.Joined)
                    .HasMaxLength(120)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.LastLogin).HasColumnType("text");

                entity.Property(e => e.Name).HasMaxLength(120);

                entity.Property(e => e.Newcondition)
                    .HasColumnName("NEWCONDITION")
                    .HasColumnType("numeric(18, 0)")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Pincode).HasMaxLength(12);

                entity.Property(e => e.Rank)
                    .HasMaxLength(120)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Recovery)
                    .HasMaxLength(120)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Started)
                    .HasMaxLength(120)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.UserId).HasMaxLength(128);
            });

            modelBuilder.Entity<Voyages>(entity =>
            {
                entity.ToTable("Voyages", "dbo");

                entity.Property(e => e.Aftcorr)
                    .HasColumnName("aftcorr")
                    .HasMaxLength(50);

                entity.Property(e => e.Aftcorrd)
                    .HasColumnName("aftcorrd")
                    .HasMaxLength(50);

                entity.Property(e => e.Aftmark)
                    .HasColumnName("aftmark")
                    .HasMaxLength(50);

                entity.Property(e => e.Aftmean)
                    .HasColumnName("aftmean")
                    .HasMaxLength(50);

                entity.Property(e => e.Ballast)
                    .HasColumnName("ballast")
                    .HasMaxLength(50);

                entity.Property(e => e.Bilge)
                    .HasColumnName("bilge")
                    .HasMaxLength(50);

                entity.Property(e => e.Cargo)
                    .HasColumnName("cargo")
                    .HasMaxLength(50);

                entity.Property(e => e.Cargotoload)
                    .HasColumnName("cargotoload")
                    .HasMaxLength(50);

                entity.Property(e => e.Constant)
                    .HasColumnName("constant")
                    .HasMaxLength(50);

                entity.Property(e => e.Dated).HasMaxLength(25);

                entity.Property(e => e.Deductible)
                    .HasColumnName("deductible")
                    .HasMaxLength(50);

                entity.Property(e => e.Densitycorr)
                    .HasColumnName("densitycorr")
                    .HasMaxLength(50);

                entity.Property(e => e.Diesel)
                    .HasColumnName("diesel")
                    .HasMaxLength(50);

                entity.Property(e => e.Displ)
                    .HasColumnName("displ")
                    .HasMaxLength(50);

                entity.Property(e => e.Displatdensity)
                    .HasColumnName("displatdensity")
                    .HasMaxLength(50);

                entity.Property(e => e.Dispwcorr)
                    .HasColumnName("dispwcorr")
                    .HasMaxLength(50);

                entity.Property(e => e.Engineoil)
                    .HasColumnName("engineoil")
                    .HasMaxLength(50);

                entity.Property(e => e.Environment)
                    .HasColumnName("environment")
                    .HasMaxLength(50);

                entity.Property(e => e.Fordcorr)
                    .HasColumnName("fordcorr")
                    .HasMaxLength(50);

                entity.Property(e => e.Fordcorrd)
                    .HasColumnName("fordcorrd")
                    .HasMaxLength(50);

                entity.Property(e => e.Fordmark)
                    .HasColumnName("fordmark")
                    .HasMaxLength(50);

                entity.Property(e => e.Fordmean)
                    .HasColumnName("fordmean")
                    .HasMaxLength(50);

                entity.Property(e => e.Freshwater)
                    .HasColumnName("freshwater")
                    .HasMaxLength(50);

                entity.Property(e => e.Fuel)
                    .HasColumnName("fuel")
                    .HasMaxLength(50);

                entity.Property(e => e.Gas)
                    .HasColumnName("gas")
                    .HasMaxLength(50);

                entity.Property(e => e.Hogorsag)
                    .HasColumnName("hogorsag")
                    .HasMaxLength(50);

                entity.Property(e => e.Hogsag)
                    .HasColumnName("hogsag")
                    .HasMaxLength(50);

                entity.Property(e => e.Hydraulicoil)
                    .HasColumnName("hydraulicoil")
                    .HasMaxLength(50);

                entity.Property(e => e.Keel)
                    .HasColumnName("keel")
                    .HasMaxLength(50);

                entity.Property(e => e.Lcf)
                    .HasColumnName("lcf")
                    .HasMaxLength(50);

                entity.Property(e => e.Lightship)
                    .HasColumnName("LIGHTSHIP")
                    .HasMaxLength(50);

                entity.Property(e => e.Listcorr)
                    .HasColumnName("listcorr")
                    .HasMaxLength(50);

                entity.Property(e => e.Luboil)
                    .HasColumnName("luboil")
                    .HasMaxLength(50);

                entity.Property(e => e.Mctc1)
                    .HasColumnName("mctc1")
                    .HasMaxLength(50);

                entity.Property(e => e.Mctc2)
                    .HasColumnName("mctc2")
                    .HasMaxLength(50);

                entity.Property(e => e.Meandraft)
                    .HasColumnName("meandraft")
                    .HasMaxLength(50);

                entity.Property(e => e.Meanofmean)
                    .HasColumnName("meanofmean")
                    .HasMaxLength(50);

                entity.Property(e => e.Midcorr)
                    .HasColumnName("midcorr")
                    .HasMaxLength(50);

                entity.Property(e => e.Midcorrd)
                    .HasColumnName("midcorrd")
                    .HasMaxLength(50);

                entity.Property(e => e.Midmark)
                    .HasColumnName("midmark")
                    .HasMaxLength(50);

                entity.Property(e => e.Midmean)
                    .HasColumnName("midmean")
                    .HasMaxLength(50);

                entity.Property(e => e.Misc)
                    .HasColumnName("misc")
                    .HasMaxLength(50);

                entity.Property(e => e.Observed).HasColumnName("observed");

                entity.Property(e => e.Port).HasMaxLength(25);

                entity.Property(e => e.Shipname).HasMaxLength(120);

                entity.Property(e => e.Slopl)
                    .HasColumnName("slopl")
                    .HasMaxLength(50);

                entity.Property(e => e.Tanks).HasColumnName("tanks");

                entity.Property(e => e.Timed).HasMaxLength(10);

                entity.Property(e => e.Tpc)
                    .HasColumnName("tpc")
                    .HasMaxLength(50);

                entity.Property(e => e.Tpc1)
                    .HasColumnName("tpc1")
                    .HasMaxLength(50);

                entity.Property(e => e.Tpc2)
                    .HasColumnName("tpc2")
                    .HasMaxLength(50);

                entity.Property(e => e.Treated)
                    .HasColumnName("treated")
                    .HasMaxLength(50);

                entity.Property(e => e.Trimcorr1)
                    .HasColumnName("trimcorr1")
                    .HasMaxLength(50);

                entity.Property(e => e.Trimcorr2)
                    .HasColumnName("trimcorr2")
                    .HasMaxLength(50);

                entity.Property(e => e.Truetrim)
                    .HasColumnName("truetrim")
                    .HasMaxLength(50);

                entity.Property(e => e.UserId).HasMaxLength(128);

                entity.Property(e => e.VoyNo).HasMaxLength(128);
            });
        }
    }
}
