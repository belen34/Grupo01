using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.ObjectVO;

namespace G01.Controller
{
    public interface IReglaController
    {
        ReglaVO Create(int reglaId, string nombre);
        ReglaVO Delete(int _ReglaId);
        ReglaVO Give(int _ReglaId);
        List<ReglaVO> ListReglas();
        ReglaVO UpDate(ReglaVO _Regla);

    }
}
