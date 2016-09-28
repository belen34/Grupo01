using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;

namespace G01.Repository
{
    public interface ICondicionRepository
    {
        CondicionObj Create(int operadorComparacionId, int operadorLogico1, int operadorLogico2, string texto1, string texto2);
        CondicionObj Delete(int CondicionId);
        CondicionObj Give(int _CondicionId);
        ICollection<CondicionObj> ListCondiciones();
        CondicionObj UpDate(CondicionObj _Condicion);
    }
}
