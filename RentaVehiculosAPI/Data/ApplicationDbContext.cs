using Microsoft.EntityFrameworkCore;
using RentaVehiculosAPI.Entidades;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentaVehiculosAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }



        public DbSet<Locales> Locales { get; set; }
        public DbSet<Vehiculos> Vehiculos { get; set; }

        public DbSet<Vendedores> Vendedores  { get; set; }


    }
}