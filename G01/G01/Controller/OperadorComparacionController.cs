using G01.Service;
using G01.ObjectVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Controller
{
    public class OperadorComparacionController: IOperadorComparacionController
    {
        public IOperadorComparacionService iOperadorComparacionService;
        public OperadorComparacionController(IOperadorComparacionService _iOperadorComparacionService)
        {
            this.iOperadorComparacionService = _iOperadorComparacionService;
        }
        public List<OperadorComparacionVO> ListOperadorComparacion()
        {
            return this.iOperadorComparacionService.ListOperadorComparacion();
        }
    }
}
