
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
    [Route("api/locales")]
    [ApiController]
    public class LocalesController : Controller
    {

        private readonly ILogger<LocalesController> logger;

        private readonly ApplicationDbContext context;


        public LocalesController(ILogger<LocalesController> logger,
            ApplicationDbContext context)
        {
            this.logger = logger;
            this.context = context;

        }

        [HttpGet] 
        public async Task<ActionResult<List<Locales>>> Get()
        {
            return await context.Locales.ToListAsync();

        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Locales>> Get(int id)
        {
            var locales = await context.Locales.FirstOrDefaultAsync(x => x.Id == id);

            if (locales == null)
            {
                return NotFound();
            }

            return locales;
        }


        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Locales locales)
        {

            context.Add(locales);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")] 
        public async Task<ActionResult> Put(int id, [FromBody] Locales locales)
        {


            var existe = await context.Locales.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Update(locales);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Locales.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Locales() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
