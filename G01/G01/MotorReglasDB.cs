using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Entity;
using G01.Object;

namespace G01
{
    public class MotorReglasDB : DbContext
    {

        public MotorReglasDB() : base("DatosDB")
        {
        }

        public DbSet<ReglaObj> Recipes { get; set; }
        public DbSet<OperadorLogicoObj> Doctors { get; set; }
        public DbSet<OperadorComparacionObj> Farmacos { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }

    }
}
