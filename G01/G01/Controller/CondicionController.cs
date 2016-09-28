using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Service;
using G01.ObjectVO;

namespace G01.Controller
{
   public  class CondicionController: ICondicionController
    {

        public ICondicionService iCondicionService;
        public CondicionController(ICondicionService _iCondicionService)
        {
            this.iCondicionService = _iCondicionService;
        }

        public CondicionVO Create(int _operadorComparacionId,int _reglaId, int _operadorLogico1, int _operadorLogico2, string _texto1, string _texto2)
        {
            return this.iCondicionService.Create(_operadorComparacionId, _reglaId, _operadorLogico1, _operadorLogico2, _texto1, _texto2);
        }
        public CondicionVO Delete(int _CondicionId)
        {
            return this.iCondicionService.Delete(_CondicionId);
        }
        public CondicionVO Give(int _CondicionId)
        {
            return this.iCondicionService.Give(_CondicionId);
        }
        public List<CondicionVO> ListCondiciones()
        {
            return this.iCondicionService.ListCondiciones();
        }
        public CondicionVO UpDate(CondicionVO _CondicionId)
        {
            return this.iCondicionService.UpDate(_CondicionId);
        }
    }
}
