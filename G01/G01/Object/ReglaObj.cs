using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace G01.Object
{
    public class ReglaObj
    {
        [Key]
        public int reglaId { get; set; }
        public string nombre{ get; set; }

        public ReglaObj()
        {

        }

        public ReglaObj(int _reglaId, int _operadorcomparacionId, string _nombre)
        {
            this.reglaId = _reglaId;
            this.nombre = _nombre;
        }
    }
}

