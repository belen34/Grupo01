﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Service;
using G01.ObjectVO;

namespace G01.Controller
{
   public  class ReglaController: IReglaController
    {

        public IReglaService iReglaService;
        public ReglaController(IReglaService _iReglaService)
        {
            this.iReglaService = _iReglaService;
        }

        public ReglaVO Create(int _operadorComparacionId, string _texto1, string _texto2)
        {
            return this.iReglaService.Create(_operadorComparacionId, _texto1, _texto2);
        }
        public ReglaVO Delete(int _ReglaId)
        {
            return this.iReglaService.Delete(_ReglaId);
        }
        public ReglaVO Give(int _ReglaId)
        {
            return this.iReglaService.Give(_ReglaId);
        }
        public List<ReglaVO> ListReglas()
        {
            return this.iReglaService.ListReglas();
        }
        public ReglaVO UpDate(ReglaVO _ReglaId)
        {
            return this.iReglaService.UpDate(_ReglaId);
        }
    }
}
