using RentaVehiculosAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RentaVehiculosAPI.DTO
{
    public class VehiculoCreacionDTO
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        [PrimeraLetraMayuscula]
        public string Placa { get; set; }
        public string Marca { get; set; }
        public string Nombre { get; set; }
        public string Modelo { get; set; }
        public string Color { get; set; }
        public int ValorAlquiler { get; set; }
        public string Foto { get; set; }
    }
}
