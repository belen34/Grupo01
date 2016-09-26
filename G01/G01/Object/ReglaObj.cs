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
        public int operadorcomparacionId { get; set; }
        public string texto1 { get; set; }
        public string texto2 { get; set; }

        [ForeignKey("operadorcomparacionId")]
        public virtual OperadorComparacionObj OperadorComparacionObj { get; set; }


        public ReglaObj()
        {

        }

        public ReglaObj(int _reglaId, int _operadorcomparacionId, string _texto1, string _texto2)
        {
            this.reglaId = _reglaId;
            this.operadorcomparacionId = _operadorcomparacionId;
            this.texto1 = _texto1;
            this.texto2 = _texto2;
        }
    }
}
}
