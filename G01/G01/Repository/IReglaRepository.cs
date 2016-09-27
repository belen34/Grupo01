﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;

namespace G01.Repository
{
    public interface IReglaRepository
    {
        ReglaObj Create(int operadorComparacionId, string texto1, string texto2);
        ReglaObj Delete(int ReglaId);
        ReglaObj Give(int _ReglaId);
        ICollection<ReglaObj> ListReglas();
        ReglaObj UpDate(ReglaObj _Regla);
    }
}