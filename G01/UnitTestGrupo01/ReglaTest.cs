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
            ReglaVO r = this.iReglaController.Create(1, "juan", "jonatan");

            ReglaVO res = this.iReglaController.Give(r.reglaId);
            Assert.AreEqual(res.reglaId, r.reglaId);
            Assert.AreEqual(res.operadorcomparacionId, r.operadorcomparacionId);
            Assert.AreEqual(res.texto1, r.texto1);
            Assert.AreEqual(res.texto2, r.texto2);

        }
        [TestMethod]
        public void ReglaTest_CrearRegla()
        {
            ReglaVO r = this.iReglaController.Create(2, "rojo", "verde");
            Assert.AreEqual(2, r.operadorcomparacionId);

        }
        [TestMethod]
        public void ReglaTest_UpdateRegla()
        {
            ReglaVO r = this.iReglaController.Create(3, "azul", "amarillo");
            r.operadorcomparacionId = 5;
            ReglaVO sUpdate = this.iReglaController.UpDate(r);
            Assert.AreEqual(sUpdate.operadorcomparacionId, r.operadorcomparacionId);
            using (var MotorReglasDB = new MotorReglasDB())
            {
                Assert.AreEqual(MotorReglasDB.Reglas.Find(r.reglaId).operadorcomparacionId, r.operadorcomparacionId);
            }
        }
        [TestMethod]
        public void ReglaTest_DeleteRegla()
        {
            ReglaVO r = this.iReglaController.Create(4, "negro", "blanco");
            ReglaVO sDelete = this.iReglaController.Delete(r.reglaId);
            Assert.AreEqual(sDelete.reglaId, r.reglaId);
            Assert.AreEqual(sDelete.operadorcomparacionId, r.operadorcomparacionId);
            Assert.AreEqual(sDelete.texto1, r.texto1);
            Assert.AreEqual(sDelete.texto2, r.texto2);

        }
        [TestMethod]
        public void ReglaTest_AllRglas()
        {
            List<ReglaVO> lReglas = iReglaController.ListReglas();
            Assert.IsTrue(lReglas.Count > 0);
        }
    }
}
