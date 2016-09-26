using System.Collections.Generic;
using G01.Object;
using G01.ObjectVO;

namespace G01.Util
{
    public interface IReglaUtil
    {
        ICollection<ReglaVO> ConviertEntityListToVOList(ICollection<ReglaObj> _l);
        ReglaVO ConviertEntityToVO(ReglaObj _regla);
        ReglaObj ConviertVOToEntity(ReglaVO _regla);
    }
}