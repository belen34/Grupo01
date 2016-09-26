using G01.Object;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Text;
using System.Threading.Tasks;

namespace G01.Repository
{
    public class OperadorLogicoRepository : IOperadorLogicoRepository
    {

        public OperadorLogicoObj Give(int _ol)
        {
            OperadorLogicoObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Operadoreslogicos.Find(_ol);
            }
            return r;
        }
        public OperadorLogicoObj Create(string _name)
        {
            OperadorLogicoObj r = new OperadorLogicoObj();
            r.operadorlogicoId = 0;
            r.name = _name;

            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Operadoreslogicos.Add(r);
                MotorReglasDB.SaveChanges();
            }
            return r;
        }
        public OperadorLogicoObj UpDate(OperadorLogicoObj _ol)
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                _ol = MotorReglasDB.Operadoreslogicos.Attach(_ol);
                MotorReglasDB.Entry(_ol).State = EntityState.Modified;
                MotorReglasDB.SaveChanges();
            }
            return _ol;
        }
        public OperadorLogicoObj Delete(int doctorId)
        {
            OperadorLogicoObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Operadoreslogicos.Find(doctorId);
                r = MotorReglasDB.Operadoreslogicos.Remove(r);
                try
                {
                    MotorReglasDB.SaveChanges();
                }
                catch
                {
                    r = null;
                    return r;
                }
            }
            return r;
        }
        public ICollection<OperadorLogicoObj> ListOpLogicos()
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                return MotorReglasDB.Operadoreslogicos.ToList();
            }
        }

    }
}
