using G01.Object;
using G01.ObjectVO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Util
{
    public class CondicionUtil : ICondicionUtil
    {
        public CondicionObj ConviertVOToEntity(CondicionVO _condicion)
        {
            CondicionObj res = new CondicionObj();
            res.condicionId = _condicion.condicionId;
            res.operadorcomparacionId = _condicion.operadorcomparacionId;
            res.reglaId = _condicion.reglaId;
            res.operadorLogico1Id = _condicion.operadorLogico1Id;
            res.operadorLogico2Id = _condicion.operadorLogico2Id;
            res.texto1 = _condicion.texto1;
            res.texto2 = _condicion.texto2;
            res.OperadorComparacionObj = _condicion.OperadorComparacionObj;
            res.OperadorLogicoObj1 = _condicion.OperadorLogicoObj1;
            res.OperadorLogicoObj2 = _condicion.OperadorLogicoObj2;

            return res;
        }
        public CondicionVO ConviertEntityToVO(CondicionObj _condicion)
        {
            CondicionVO res = new CondicionVO();
            res.condicionId = _condicion.condicionId;
            res.operadorcomparacionId = _condicion.operadorcomparacionId;
            res.reglaId = _condicion.reglaId;
            res.operadorLogico1Id = _condicion.operadorLogico1Id;
            res.operadorLogico2Id = _condicion.operadorLogico2Id;
            res.texto1 = _condicion.texto1;
            res.texto2 = _condicion.texto2;
            res.OperadorComparacionObj = _condicion.OperadorComparacionObj;
            res.OperadorLogicoObj1 = _condicion.OperadorLogicoObj1;
            res.OperadorLogicoObj2 = _condicion.OperadorLogicoObj2;
            return res;
        }

        public ICollection<CondicionVO> ConviertEntityListToVOList(ICollection<CondicionObj> _l)
        {
            List<CondicionVO> l = new List<CondicionVO>();
            foreach (CondicionObj r in _l)
            {
                l.Add(this.ConviertEntityToVO(r));
            }
            return l;
        }
    }
}
