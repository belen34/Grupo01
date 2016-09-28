using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace G01.Object
{
    public class CondicionObj
    {
        [Key]
        public int condicionId { get; set; }
        public int operadorcomparacionId { get; set; }
        public int operadorLogico1Id { get; set; }
        public int operadorLogico2Id { get; set; }
        public string texto1 { get; set; }
        public string texto2 { get; set; }

        [ForeignKey("operadorcomparacionId")]
        public virtual OperadorComparacionObj OperadorComparacionObj { get; set; }
        [ForeignKey("operadorLogico1Id")]
        public virtual OperadorLogicoObj OperadorLogicoObj1 { get; set; }
        [ForeignKey("operadorLogico2Id")]
        public virtual OperadorLogicoObj OperadorLogicoObj2 { get; set; }

        public CondicionObj()
        {

        }

        public CondicionObj(int _condicionId,int _operadorcomparacionId, int _operadorLogico1, int _operadorLogico2, string _texto1, string _texto2)
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

