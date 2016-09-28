using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Object;
using System.Data.Entity;

namespace G01.Repository
{
    public class ReglaRepositorio: IReglaRepository
    {
        public ReglaObj Give(int _ReglaId)
        {
            ReglaObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
               // r = MotorReglasDB.Reglas.Find(_Regla);
                r = MotorReglasDB.Reglas
                   //.Include(v2 => v2.OperadorComparacionObj)
                   .Where(v3 => v3.reglaId == _ReglaId)
                   .FirstOrDefault();
            }
            return r;
        }
        public ReglaObj Create(int reglaId, string _nombre)
        {
            ReglaObj r = new ReglaObj();
            r.reglaId = 0;
            r.nombre = _nombre;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Reglas.Add(r);
                MotorReglasDB.SaveChanges();
            }
            return r;
        }
        public ReglaObj UpDate(ReglaObj _Regla)
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                _Regla = MotorReglasDB.Reglas.Attach(_Regla);
                MotorReglasDB.Entry(_Regla).State = EntityState.Modified;
                MotorReglasDB.SaveChanges();
            }
            return _Regla;
        }
        public ReglaObj Delete(int _ReglaId)
        {
            ReglaObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Reglas.Find(_ReglaId);
                r = MotorReglasDB.Reglas.Remove(r);
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
        public ICollection<ReglaObj> ListReglas()
        {
            using (var MotorReglasDB = new MotorReglasDB())
            {
                return MotorReglasDB.Reglas.ToList();
            }
        }
    }
}
