using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.ObjectVO;
using G01.Object;

namespace G01.Util
{
    public class OperadorComparacionUtil : IOperadorComparacionUtil
    {
        public OperadorComparacionObj ConviertVOToEntity(OperadorComparacionVO _operadorComparacionVO)
        {
            OperadorComparacionObj res = new OperadorComparacionObj();
            res.operadorComparacionId = _operadorComparacionVO.operadorComparacionId;
            res.name = _operadorComparacionVO.name;

            return res;
        }
        public OperadorComparacionVO ConviertEntityToVO(OperadorComparacionObj _operadorComparacionObj)
        {
            if (_operadorComparacionObj != null)
            {
                OperadorComparacionVO res = new OperadorComparacionVO();
                res.operadorComparacionId = _operadorComparacionObj.operadorComparacionId;
                res.name = _operadorComparacionObj.name;
                return res;
            }
            return null;
        }

        public ICollection<OperadorComparacionVO> ConviertEntityListToVOList(ICollection<OperadorComparacionObj> _l)
        {
            List<OperadorComparacionVO> l = new List<OperadorComparacionVO>();
            foreach (OperadorComparacionObj r in _l)
            {
                l.Add(this.ConviertEntityToVO(r));
            }
            return l;
        }


    }
}
