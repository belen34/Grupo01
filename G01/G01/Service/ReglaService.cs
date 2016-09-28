using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;
using G01.ObjectVO;
using G01.Repository;
using G01.Util;

namespace G01.Service
{
    public class ReglaService: IReglaService
    {
        public IReglaRepository iReglaServiceRepository;
        public IReglaUtil iReglaUtil;

        public ReglaService(IReglaRepository _iReglaServiceRepository, IReglaUtil _iReglaUtil)
        {
            this.iReglaServiceRepository = _iReglaServiceRepository;
            this.iReglaUtil = _iReglaUtil;
        }

        public ReglaVO Create( string _nombre)
        {
            ReglaObj r = this.iReglaServiceRepository.Create(_nombre);
            return this.iReglaUtil.ConviertEntityToVO(r);
        }
        public ReglaVO Delete(int _ReglaId)
        {
            ReglaObj r = this.iReglaServiceRepository.Delete(_ReglaId);
            return this.iReglaUtil.ConviertEntityToVO(r);
        }
        public ReglaVO Give(int _ReglaId)
        {
            ReglaObj r = this.iReglaServiceRepository.Give(_ReglaId);
            return this.iReglaUtil.ConviertEntityToVO(r);
        }
        public List<ReglaVO> ListReglas()
        {
            ICollection<ReglaObj> l = this.iReglaServiceRepository.ListReglas();

            return (List<ReglaVO>)this.iReglaUtil.ConviertEntityListToVOList(l);
        }
        public ReglaVO UpDate(ReglaVO _Regla)
        {
            ReglaObj r = this.iReglaUtil.ConviertVOToEntity(_Regla);
            r = this.iReglaServiceRepository.UpDate(r);
            return this.iReglaUtil.ConviertEntityToVO(r);
        }
    }
}
