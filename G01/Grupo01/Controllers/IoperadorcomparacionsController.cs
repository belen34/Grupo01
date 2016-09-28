using System.Collections.Generic;
using G01.ObjectVO;

namespace Grupo01.Controllers
{
    public interface IoperadorcomparacionsController
    {
        IEnumerable<OperadorComparacionVO> Get();
    }
}