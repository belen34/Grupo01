using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;

namespace G01.Repository
{
    public interface IOperadorComparacionRepository
    {
        ICollection<OperadorComparacionObj> ListOperadorComparacionObj();
    }
}
