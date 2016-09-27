using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;
using G01.ObjectVO;

namespace G01.Util
{
     public interface IOperadorComparacionUtil
    {
        ICollection<OperadorComparacionVO> ConviertEntityListToVOList(ICollection<OperadorComparacionObj> _l);
        OperadorComparacionVO ConviertEntityToVO(OperadorComparacionObj _operadorComparacion);
        OperadorComparacionObj ConviertVOToEntity(OperadorComparacionVO _operadorComparacion);
    }
}
