using G01.Object;
using G01.ObjectVO;
using G01.Repository;
using G01.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Service
{
    public class OperadorLogicoService : IOperadorLogicoService
    {
        public IOperadorLogicoRepository iOLServiceRepository;
        public IOperadorLogicoUtil iOperadorLogicoUtil;

        public OperadorLogicoService(IOperadorLogicoRepository _iOLServiceRepository, IOperadorLogicoUtil _iOperadorLogicoUtil)
        {
            this.iOLServiceRepository = _iOLServiceRepository;
            this.iOperadorLogicoUtil = _iOperadorLogicoUtil;
        }

        public OperadorLogicoVO Create(string _name)
        {
            OperadorLogicoObj r = this.iOLServiceRepository.Create(_name);
            return this.iOperadorLogicoUtil.ConviertEntityToVO(r);
        }
        public OperadorLogicoVO Delete(int _doctorId)
        {
            OperadorLogicoObj r = this.iOLServiceRepository.Delete(_doctorId);
            return this.iOperadorLogicoUtil.ConviertEntityToVO(r);
        }
        public OperadorLogicoVO Give(int _doctorId)
        {
            OperadorLogicoObj r = this.iOLServiceRepository.Give(_doctorId);
            return this.iOperadorLogicoUtil.ConviertEntityToVO(r);
        }
        public List<OperadorLogicoVO> ListOpLogicos()
        {
            ICollection<OperadorLogicoObj> l = this.iOLServiceRepository.ListOpLogicos();

            return (List<OperadorLogicoVO>)this.iOperadorLogicoUtil.ConviertEntityListToVOList(l);
        }
        public OperadorLogicoVO UpDate(OperadorLogicoVO _doctor)
        {
            OperadorLogicoObj r = this.iOperadorLogicoUtil.ConviertVOToEntity(_doctor);
            r = this.iOLServiceRepository.UpDate(r);
            return this.iOperadorLogicoUtil.ConviertEntityToVO(r);
        }
    }
}
