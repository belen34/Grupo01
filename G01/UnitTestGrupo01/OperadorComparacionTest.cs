using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01.Controller;
using G01.ObjectVO;
using G01.Repository;
using G01.Service;
using G01.Util;
using G01.Object;
using Microsoft.Practices.Unity;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using G01;

namespace UnitTestGrupo01
{
    [TestClass()]
    public class OperadorComparacionTest
    {

        private IOperadorComparacionController iOperadorComparacionController;
        private int id;
        [TestInitialize]
        public void TestSepUp()
        {
            var container = new UnityContainer();

            container.RegisterType<IOperadorComparacionRepository, OperadorComparacionRepository>();
            container.RegisterType<IOperadorComparacionService, OperadorComparacionService>();
            container.RegisterType<IOperadorComparacionController, OperadorComparacionController>();
            container.RegisterType<IOperadorComparacionUtil, OperadorComparacionUtil>();

            iOperadorComparacionController = container.Resolve<IOperadorComparacionController>();

            OperadorComparacionObj operadorComparacion;
            OperadorComparacionObj operadorComparacion1;
            OperadorComparacionObj operadorComparacion2;
            OperadorComparacionObj operadorComparacion3;
            OperadorComparacionObj operadorComparacion4;
            OperadorComparacionObj operadorComparacion5;
            OperadorComparacionObj operadorComparacion6;
            OperadorComparacionObj operadorComparacion7;
            OperadorComparacionObj operadorComparacion8;

            using (var MotorReglasDB = new MotorReglasDB())
            {
                operadorComparacion = new OperadorComparacionObj();
                operadorComparacion1 = new OperadorComparacionObj();
                operadorComparacion2 = new OperadorComparacionObj();
                operadorComparacion3 = new OperadorComparacionObj();
                operadorComparacion4 = new OperadorComparacionObj();
                operadorComparacion5 = new OperadorComparacionObj();
                operadorComparacion6 = new OperadorComparacionObj();
                operadorComparacion7 = new OperadorComparacionObj();
                operadorComparacion8 = new OperadorComparacionObj();
                operadorComparacion.operadorComparacionId = 0;
                operadorComparacion1.operadorComparacionId = 1;
                operadorComparacion2.operadorComparacionId = 2;
                operadorComparacion3.operadorComparacionId = 3;
                operadorComparacion4.operadorComparacionId = 4;
                operadorComparacion5.operadorComparacionId = 5;
                operadorComparacion6.operadorComparacionId = 6;
                operadorComparacion7.operadorComparacionId = 7;
                operadorComparacion8.operadorComparacionId = 8;

                operadorComparacion.name = "=";
                operadorComparacion1.name = ">";
                operadorComparacion2.name = "<";
                operadorComparacion3.name = ">=";
                operadorComparacion4.name = "<=";
                operadorComparacion5.name = "<>";
                operadorComparacion6.name = "!=";
                operadorComparacion7.name = "<!";
                operadorComparacion8.name = "!>";
 

                operadorComparacion = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion);
                MotorReglasDB.SaveChanges();
                operadorComparacion1 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion1);
                MotorReglasDB.SaveChanges();
                operadorComparacion2 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion2);
                MotorReglasDB.SaveChanges();
                operadorComparacion3 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion3);
                MotorReglasDB.SaveChanges();
                operadorComparacion4 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion4);
                MotorReglasDB.SaveChanges();
                operadorComparacion5 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion5);
                MotorReglasDB.SaveChanges();
                operadorComparacion6 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion6);
                MotorReglasDB.SaveChanges();
                operadorComparacion7 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion7);
                MotorReglasDB.SaveChanges();
                operadorComparacion8 = MotorReglasDB.OperadoresComparacion.Add(operadorComparacion8);
                MotorReglasDB.SaveChanges();
            }
            id = operadorComparacion.operadorComparacionId;
            id = operadorComparacion1.operadorComparacionId;
            id = operadorComparacion2.operadorComparacionId;
            id = operadorComparacion3.operadorComparacionId;
            id = operadorComparacion4.operadorComparacionId;
            id = operadorComparacion5.operadorComparacionId;
            id = operadorComparacion6.operadorComparacionId;
            id = operadorComparacion7.operadorComparacionId;
            id = operadorComparacion8.operadorComparacionId;
        }

        [TestMethod]
        public void OperadorComparacionTest_AllOperadorComparacion()
        {
            List<OperadorComparacionVO> lOperadorComparacion = iOperadorComparacionController.ListOperadorComparacion();
            Assert.IsTrue(lOperadorComparacion.Count > 0);
        }
    }
}
