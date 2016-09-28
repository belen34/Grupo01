using G01.Object;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace G01.ObjectVO
{
    public class CondicionVO
    {

        public int condicionId { get; set; }
        public int operadorcomparacionId { get; set; }
        public int operadorLogico1Id { get; set; }
        public int operadorLogico2Id { get; set; }
        public string texto1 { get; set; }
        public string texto2 { get; set; }

        public virtual OperadorComparacionObj OperadorComparacionObj { get; set; }
        public virtual OperadorLogicoObj OperadorLogicoObj1 { get; set; }
        public virtual OperadorLogicoObj OperadorLogicoObj2 { get; set; }

        public CondicionVO()
        {

        }

        public CondicionVO(int _condicionId, int _operadorcomparacionId, int _operadorLogico1, int _operadorLogico2, string _texto1, string _texto2)
        {
            this.condicionId = _condicionId;
            this.operadorcomparacionId = _operadorcomparacionId;
            this.operadorLogico1Id = _operadorLogico1;
            this.operadorLogico2Id = _operadorLogico2;
            this.texto1 = _texto1;
            this.texto2 = _texto2;
        }

    }
}
