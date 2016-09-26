using System.Collections.Generic;
using G01.Object;
using G01.ObjectVO;

namespace G01.Util
{
    public interface IOperadorLogicoUtil
    {
        ICollection<OperadorLogicoVO> ConviertEntityListToVOList(ICollection<OperadorLogicoObj> _l);
        OperadorLogicoVO ConviertEntityToVO(OperadorLogicoObj _operadorlogico);
        OperadorLogicoObj ConviertVOToEntity(OperadorLogicoVO _operadorlogico);
    }
}