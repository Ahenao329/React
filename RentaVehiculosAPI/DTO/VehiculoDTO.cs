namespace RentaVehiculosAPI.DTO
{
    public class VehiculoDTO
    {
        public int Id { get; set; }
        public string Placa { get; set; }
        public string Marca { get; set; }
        public string Nombre { get; set; }
        public string Modelo { get; set; }
        public string Color { get; set; }
        public int ValorAlquiler { get; set; }
        public string Foto { get; set; }
    }
}
