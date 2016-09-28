using G01.Object;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.ObjectVO
{
    public class ReglaVO
    {

        public int reglaId { get; set; }
        public string nombre { get; set; }


        public ReglaVO()
        {

        }

        public ReglaVO(int _reglaId, string _nombre)
        {
            this.reglaId = _reglaId;
            this.nombre = _nombre;
        }

    }
}
