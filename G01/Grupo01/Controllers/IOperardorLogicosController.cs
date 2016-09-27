using System.Collections.Generic;
using System.Web.Http;
using G01.ObjectVO;

namespace Grupo01.Controllers
{
    public interface IOperardorLogicosController
    {
        OperadorLogicoVO Delete(int id);
        IEnumerable<OperadorLogicoVO> Get();
        OperadorLogicoVO Get(int id);
        OperadorLogicoVO Post(OperadorLogicoVO r);
        void Put([FromBody] OperadorLogicoVO r);
    }
}