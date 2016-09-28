using System.Collections.Generic;
using System.Web.Http;
using G01.ObjectVO;

namespace Grupo01.Controllers
{
    public interface IReglasController
    {
        ReglaVO Delete(int id);
        IEnumerable<ReglaVO> Get();
        ReglaVO Get(int id);
        ReglaVO Post(ReglaVO r);
        void Put([FromBody] ReglaVO r);
    }
}