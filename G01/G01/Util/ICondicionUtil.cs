using System.Collections.Generic;
using G01.Object;
using G01.ObjectVO;

namespace G01.Util
{
    public interface ICondicionUtil
    {
        ICollection<CondicionVO> ConviertEntityListToVOList(ICollection<CondicionObj> _l);
        CondicionVO ConviertEntityToVO(CondicionObj _regla);
        CondicionObj ConviertVOToEntity(CondicionVO _regla);
    }
}