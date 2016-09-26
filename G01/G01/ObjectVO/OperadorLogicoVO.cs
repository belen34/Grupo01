using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.ObjectVO
{
    public class OperadorLogicoVO
    {
       
        public int operadorlogicoId { get; set; }
        public string name { get; set; }

        public OperadorLogicoVO()
        {

        }

        public OperadorLogicoVO(int _operadorlogicoId, string _name)
        {
            this.operadorlogicoId = _operadorlogicoId;
            this.name = _name;

        }
    }
}
