using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.ObjectVO
{
     public class OperadorComparacionVO
    {
        public int operadorComparacionId { get; set; }
        public string name { get; set; }

        public OperadorComparacionVO()
        {

        }

        public OperadorComparacionVO(int _operadorComparacionId, string _name)
        {
            this.operadorComparacionId = _operadorComparacionId;
            this.name = _name;

        }

    }
}
