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
                   .Include(v2 => v2.OperadorLogicoObj1)
                   .Include(v2 => v2.OperadorLogicoObj2)
                   .Include(v2 => v2.ReglaObj)
                   .Where(v3 => v3.condicionId == _CondicionId)
                   .FirstOrDefault();
            }
            return r;
        }
        public CondicionObj Create(int _operadorComparacionId,int _reglaId, int _operadorLogico1, int _operadorLogico2, string _texto1, string _texto2)
        {
            CondicionObj r = new CondicionObj();
            r.condicionId = 0;
            r.operadorcomparacionId = _operadorComparacionId;
            r.reglaId = _reglaId;
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
            _Condicion.OperadorComparacionObj = null;
            _Condicion.OperadorLogicoObj1 = null;
            _Condicion.ReglaObj = null;
            _Condicion.OperadorLogicoObj2 = null;
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
                return MotorReglasDB.Condiciones.Include("OperadorComparacionObj").Include("OperadorLogicoObj1").Include("OperadorLogicoObj2").Include("ReglaObj").ToList();
            }
        }
    }
}
