using G01.Controller;
using G01.ObjectVO;
using G01.Repository;
using G01.Service;
using G01.Util;
using Microsoft.Practices.Unity;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01;

namespace UnitTestGrupo01
{
    [TestClass()]
    public class ReglaTest
    {
        private IReglaController iReglaController;
        private int id;
        [TestInitialize]
        public void TestSepUp()
        {
            var container = new UnityContainer();

            container.RegisterType<IReglaRepository, ReglaRepositorio>();
            container.RegisterType<IReglaService, ReglaService>();
            container.RegisterType<IReglaController, ReglaController>();
            container.RegisterType<IReglaUtil, ReglaUtil>();

            iReglaController = container.Resolve<IReglaController>();

        }

        [TestMethod]
        public void ReglaTest_GiveRegla()
        {
            ReglaVO r = this.iReglaController.Create(1, "superior");

            ReglaVO res = this.iReglaController.Give(r.reglaId);
            Assert.AreEqual(res.reglaId, r.reglaId);
            Assert.AreEqual(res.nombre, r.nombre);

        }
        [TestMethod]
        public void ReglaTest_CrearRegla()
        {
            ReglaVO r = this.iReglaController.Create(2,"inferior");
            Assert.AreEqual(2, r.reglaId);

        }
        [TestMethod]
        public void ReglaTest_UpdateRegla()
        {
            ReglaVO r = this.iReglaController.Create(3, "igual");
            r.nombre = "igualdad";
            ReglaVO sUpdate = this.iReglaController.UpDate(r);
            Assert.AreEqual(sUpdate.nombre, r.nombre);
            using (var MotorReglasDB = new MotorReglasDB())
            {
                Assert.AreEqual(MotorReglasDB.Reglas.Find(r.reglaId).nombre, r.nombre);
            }
        }
        [TestMethod]
        public void ReglaTest_DeleteRegla()
        {
            ReglaVO r = this.iReglaController.Create(4, "distinto");
            ReglaVO sDelete = this.iReglaController.Delete(r.reglaId);
            Assert.AreEqual(sDelete.reglaId, r.reglaId);
            Assert.AreEqual(sDelete.nombre, r.nombre);

        }
        [TestMethod]
        public void ReglaTest_AllRglas()
        {
            List<ReglaVO> lReglas = iReglaController.ListReglas();
            Assert.IsTrue(lReglas.Count > 0);
        }
    }
}
