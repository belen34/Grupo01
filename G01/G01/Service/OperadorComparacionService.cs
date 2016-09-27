using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Service;
using G01.Object;
using G01.ObjectVO;
using G01.Repository;
using G01.Util;
namespace G01.Service
{
    
    public class OperadorComparacionService: IOperadorComparacionService
    {
        public IOperadorComparacionRepository iOperadorComparacionRepository;
        public IOperadorComparacionUtil iOperadorComparacionUtil;

        public OperadorComparacionService(IOperadorComparacionRepository _iOperadorComparacionRepository, IOperadorComparacionUtil _iOperadorComparacionUtil)
        {
            this.iOperadorComparacionRepository = _iOperadorComparacionRepository;
            this.iOperadorComparacionUtil = _iOperadorComparacionUtil;
        }

        public List<OperadorComparacionVO> ListOperadorComparacion()
        {
            ICollection<OperadorComparacionObj> l = this.iOperadorComparacionRepository.ListOperadorComparacionObj();

            return (List<OperadorComparacionVO>)this.iOperadorComparacionUtil.ConviertEntityListToVOList(l);
        }

    }
}
