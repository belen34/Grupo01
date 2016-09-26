using System.Collections.Generic;
using G01.ObjectVO;

namespace G01.Controller
{
    public interface IOperadorLogicoController
    {
        OperadorLogicoVO Create(string _name);
        OperadorLogicoVO Delete(int _OperadorLogicoId);
        OperadorLogicoVO Give(int _OperadorLogicoId);
        List<OperadorLogicoVO> ListOpLogicos();
        OperadorLogicoVO UpDate(OperadorLogicoVO _OperadorLogico);
    }
}