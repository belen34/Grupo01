using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.ObjectVO;

namespace G01.Service
{
    public interface ICondicionService
    {
        CondicionVO Create(int operadorComparacionId,int reglaId, int _operadorLogico1, int _operadorLogico2, string texto1, string texto2);
        CondicionVO Delete(int _CondicionId);
        CondicionVO Give(int _CondicionId);
        List<CondicionVO> ListCondiciones();
        CondicionVO UpDate(CondicionVO _Condicion);
    }
}
