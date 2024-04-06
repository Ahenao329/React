
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using RentaVehiculosAPI.Entidades;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RentaVehiculosAPI.Data;

namespace RentaVehiculosAPI.Controllers
{
    [Route("api/vehiculos")]
    [ApiController]
    public class VehiculosController : Controller
    {
       private readonly ILogger<VehiculosController> logger;

        private readonly ApplicationDbContext context;


        public VehiculosController(ILogger<VehiculosController> logger,
            ApplicationDbContext context)
        {
            this.logger = logger;
            this.context = context;


        }

        [HttpGet] 
        public async Task<ActionResult<List<Vehiculos>>> Get()
        {
            return await context.Vehiculos.ToListAsync();

        }


        [HttpGet("{id:int}")]
        public async Task<ActionResult<Vehiculos>> Get(int id)
        {
            var vehiculos = await context.Vehiculos.FirstOrDefaultAsync(x => x.Id == id);

            if (vehiculos == null)
            {
                return NotFound();
            }

            return vehiculos;
        }


        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Vehiculos vehiculos)
        {

            context.Add(vehiculos);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")] 
        public async Task<ActionResult> Put(int id, [FromBody] Vehiculos vehiculos)
        {


            var existe = await context.Vehiculos.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Update(vehiculos);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Vehiculos.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Vehiculos() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
