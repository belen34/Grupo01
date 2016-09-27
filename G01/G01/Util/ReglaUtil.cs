using G01.Object;
using G01.ObjectVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Util
{
    public class ReglaUtil : IReglaUtil
    {
        public ReglaObj ConviertVOToEntity(ReglaVO _regla)
        {
            ReglaObj res = new ReglaObj();
            res.reglaId = _regla.reglaId;
            res.operadorcomparacionId = _regla.operadorcomparacionId;
            res.texto1 = _regla.texto1;
            res.texto2 = _regla.texto2;
            //res.OperadorComparacionObj = _regla.OperadorComparacionObj;

            return res;
        }
        public ReglaVO ConviertEntityToVO(ReglaObj _regla)
        {
            ReglaVO res = new ReglaVO();
            res.reglaId = _regla.reglaId;
            res.operadorcomparacionId = _regla.operadorcomparacionId;
            res.texto1 = _regla.texto1;
            res.texto2 = _regla.texto2;
            //res.OperadorComparacionObj = _regla.OperadorComparacionObj;
            return res;
        }

        public ICollection<ReglaVO> ConviertEntityListToVOList(ICollection<ReglaObj> _l)
        {
            List<ReglaVO> l = new List<ReglaVO>();
            foreach (ReglaObj r in _l)
            {
                l.Add(this.ConviertEntityToVO(r));
            }
            return l;
        }
    }
}
