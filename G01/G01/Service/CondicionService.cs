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
    public class CondicionService: ICondicionService
    {
        public ICondicionRepository iCondicionServiceRepository;
        public ICondicionUtil iCondicionUtil;

        public CondicionService(ICondicionRepository _iCondicionServiceRepository, ICondicionUtil _iCondicionUtil)
        {
            this.iCondicionServiceRepository = _iCondicionServiceRepository;
            this.iCondicionUtil = _iCondicionUtil;
        }

        public CondicionVO Create(int _operadorComparacionId, int _operadorLogico1, int _operadorLogico2, string _texto1, string _texto2)
        {
            CondicionObj r = this.iCondicionServiceRepository.Create(_operadorComparacionId,_operadorLogico1, _operadorLogico2, _texto1, _texto2);
            return this.iCondicionUtil.ConviertEntityToVO(r);
        }
        public CondicionVO Delete(int _CondicionId)
        {
            CondicionObj r = this.iCondicionServiceRepository.Delete(_CondicionId);
            return this.iCondicionUtil.ConviertEntityToVO(r);
        }
        public CondicionVO Give(int _CondicionId)
        {
            CondicionObj r = this.iCondicionServiceRepository.Give(_CondicionId);
            return this.iCondicionUtil.ConviertEntityToVO(r);
        }
        public List<CondicionVO> ListCondiciones()
        {
            ICollection<CondicionObj> l = this.iCondicionServiceRepository.ListCondiciones();

            return (List<CondicionVO>)this.iCondicionUtil.ConviertEntityListToVOList(l);
        }
        public CondicionVO UpDate(CondicionVO _Condicion)
        {
            CondicionObj r = this.iCondicionUtil.ConviertVOToEntity(_Condicion);
            r = this.iCondicionServiceRepository.UpDate(r);
            return this.iCondicionUtil.ConviertEntityToVO(r);
        }
    }
}
