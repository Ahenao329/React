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
    [Route("api/vendedores")]
    [ApiController]
    public class VendedoresController : Controller
    {
        private readonly ILogger<VendedoresController> logger;

        private readonly ApplicationDbContext context;


        


        public VendedoresController(ILogger<VendedoresController> logger,
            ApplicationDbContext context)
        {
            this.logger = logger;
            this.context = context;


        }

        [HttpGet]
        public async Task<ActionResult<List<Vendedores>>> Get()
        {
            return await context.Vendedores.ToListAsync();

        }


        [HttpGet("{id:int}")]
        public async Task<ActionResult<Vendedores>> Get(int id)
        {
            var vendedores = await context.Vendedores.FirstOrDefaultAsync(x => x.Id == id);

            if (vendedores == null)
            {
                return NotFound();
            }

            return vendedores;
        }




        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Vendedores vendedores)
        {

            context.Add(vendedores);
            await context.SaveChangesAsync();
            return NoContent();//204
        }





        [HttpPut("{id:int}")] 
        public async Task<ActionResult> Put(int id, [FromBody] Vendedores vendedores)
        {


            var existe = await context.Vendedores.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Update(vendedores);
            await context.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id:int}")] 
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Vendedores.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Vendedores() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
