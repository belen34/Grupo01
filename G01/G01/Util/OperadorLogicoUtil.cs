using G01.Object;
using G01.ObjectVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Util
{
    public class OperadorLogicoUtil : IOperadorLogicoUtil
    {
        public OperadorLogicoObj ConviertVOToEntity(OperadorLogicoVO _operadorlogico)
        {
            OperadorLogicoObj res = new OperadorLogicoObj();
            res.operadorlogicoId = _operadorlogico.operadorlogicoId;
            res.name = _operadorlogico.name;

            return res;
        }
        public OperadorLogicoVO ConviertEntityToVO(OperadorLogicoObj _operadorlogico)
        {
            if (_operadorlogico != null)
            {
                OperadorLogicoVO res = new OperadorLogicoVO();
                res.operadorlogicoId = _operadorlogico.operadorlogicoId;
                res.name = _operadorlogico.name;
                return res;
            }
            return null;
        }

        public ICollection<OperadorLogicoVO> ConviertEntityListToVOList(ICollection<OperadorLogicoObj> _l)
        {
            List<OperadorLogicoVO> l = new List<OperadorLogicoVO>();
            foreach (OperadorLogicoObj r in _l)
            {
                l.Add(this.ConviertEntityToVO(r));
            }
            return l;
        }
    }
}
