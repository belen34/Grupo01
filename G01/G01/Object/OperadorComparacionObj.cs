using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace G01.Object
{
    public class OperadorComparacionObj
    {
        [Key]
        public int operadorComparacionId;
        public string name;

        public OperadorComparacionObj()
        {

        }

        public OperadorComparacionObj(int _operadorComparacionId, string _name)
        {
            this.operadorComparacionId = _operadorComparacionId;
            this.name = _name;
        }
    }
}
