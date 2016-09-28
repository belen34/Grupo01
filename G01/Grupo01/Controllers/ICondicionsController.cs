using System.Collections.Generic;
using System.Web.Http;
using G01.ObjectVO;

namespace Grupo01.Controllers
{
    public interface ICondicionsController
    {
        CondicionVO Delete(int id);
        IEnumerable<CondicionVO> Get();
        CondicionVO Get(int id);
        CondicionVO Post(CondicionVO r);
        void Put([FromBody] CondicionVO r);
    }
}