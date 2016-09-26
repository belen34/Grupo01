using G01.ObjectVO;
using G01.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Controller
{
    public class OperadorLogicoController : IOperadorLogicoController
    {
        public IOperadorLogicoService iOperadorLogicoService;
        public OperadorLogicoController(IOperadorLogicoService _iOperadorLogicoService)
        {
            this.iOperadorLogicoService = _iOperadorLogicoService;
        }

        public OperadorLogicoVO Create(string _name)
        {
            return this.iOperadorLogicoService.Create(_name);
        }
        public OperadorLogicoVO Delete(int _OperadorLogicoId)
        {
            return this.iOperadorLogicoService.Delete(_OperadorLogicoId);
        }
        public OperadorLogicoVO Give(int _OperadorLogicoId)
        {
            return this.iOperadorLogicoService.Give(_OperadorLogicoId);
        }
        public List<OperadorLogicoVO> ListOpLogicos()
        {
            return this.iOperadorLogicoService.ListOpLogicos();
        }
        public OperadorLogicoVO UpDate(OperadorLogicoVO _OperadorLogico)
        {
            return this.iOperadorLogicoService.UpDate(_OperadorLogico);
        }
    }
}
