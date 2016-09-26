using System.Collections.Generic;
using G01.ObjectVO;

namespace G01.Service
{
    public interface IOperadorLogicoService
    {
        OperadorLogicoVO Create(string _name);
        OperadorLogicoVO Delete(int _doctorId);
        OperadorLogicoVO Give(int _doctorId);
        List<OperadorLogicoVO> ListOpLogicos();
        OperadorLogicoVO UpDate(OperadorLogicoVO _doctor);
    }
}