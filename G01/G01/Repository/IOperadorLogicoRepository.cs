using System.Collections.Generic;
using G01.Object;

namespace G01.Repository
{
    public interface IOperadorLogicoRepository
    {
        OperadorLogicoObj Create(string _name);
        OperadorLogicoObj Delete(int doctorId);
        OperadorLogicoObj Give(int _ol);
        ICollection<OperadorLogicoObj> ListOpLogicos();
        OperadorLogicoObj UpDate(OperadorLogicoObj _ol);
    }
}