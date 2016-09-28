using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.ObjectVO;

namespace G01.Controller
{
    public interface ICondicionController
    {
        CondicionVO Create(int operadorComparacionId,int reglaId, int operadorLogico1, int operadorLogico2, string texto1, string texto2);
        CondicionVO Delete(int _CondicionId);
        CondicionVO Give(int _CondicionId);
        List<CondicionVO> ListCondiciones();
        CondicionVO UpDate(CondicionVO _Condicion);

    }
}
