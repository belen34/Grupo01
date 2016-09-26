using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.Object
{
    public class OperadorComparacionObj
    {
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
