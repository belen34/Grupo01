using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;
using System.Data.Entity;

namespace G01.Repository
{
    public class CondicionRepositorio: ICondicionRepository
    {
        public CondicionObj Give(int _CondicionId)
        {
            CondicionObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
               // r = MotorReglasDB.Condicions.Find(_Condicion);
                r = MotorReglasDB.Condiciones
                   .Include(v2 => v2.OperadorComparacionObj)
                   .Where(v3 => v3.condicionId == _CondicionId)
                   .FirstOrDefault();
            }
            return r;
        }
        public CondicionObj Create(int _operadorComparacionId, int _operadorLogico1, int _operadorLogico2, string _texto1, string _texto2)
        {
            CondicionObj r = new CondicionObj();
            r.condicionId = 0;
            r.operadorcomparacionId = _operadorComparacionId;
            r.operadorLogico1Id = _operadorLogico1;
            r.operadorLogico2Id = _operadorLogico2;
            r.texto1 = _texto1;
            r.texto2 = _texto2;
            r.OperadorComparacionObj = null;
            r.OperadorLogicoObj1 = null;
            r.OperadorLogicoObj2 = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Condiciones.Add(r);
                MotorReglasDB.SaveChanges();
            }
            return r;
        }
        public CondicionObj UpDate(CondicionObj _Condicion)
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                _Condicion = MotorReglasDB.Condiciones.Attach(_Condicion);
                MotorReglasDB.Entry(_Condicion).State = EntityState.Modified;
                MotorReglasDB.SaveChanges();
            }
            return _Condicion;
        }
        public CondicionObj Delete(int _CondicionId)
        {
            CondicionObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Condiciones.Find(_CondicionId);
                r = MotorReglasDB.Condiciones.Remove(r);
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
        public ICollection<CondicionObj> ListCondiciones()
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                return MotorReglasDB.Condiciones.ToList();
            }
        }
    }
}
