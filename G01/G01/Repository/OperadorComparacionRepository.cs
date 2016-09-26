using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;

namespace G01.Repository
{
    public class OperadorComparacionRepository: IOperadorComparacionRepository
    {
        public ICollection<OperadorComparacionObj> ListOperadorComparacionObj()
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                return MotorReglasDB.OperadorComparacionObj.ToList();
            }
        }
    }
}
