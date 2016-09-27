﻿using System;
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
        public ReglaObj Give(int _Regla)
        {
            ReglaObj r = null;
            using (var MotorReglasDB = new MotorReglasDB())
            {
                r = MotorReglasDB.Reglas.Find(_Regla);
            }
            return r;
        }
        public ReglaObj Create(int operadorComparacionId, string _texto1, string _texto2)
        {
            ReglaObj r = new ReglaObj();
            r.reglaId = 0;
            r.operadorcomparacionId = 1;
            r.texto1 = _texto1;
            r.texto2 = _texto2;

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