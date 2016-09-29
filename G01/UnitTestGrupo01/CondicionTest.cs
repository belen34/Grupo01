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
using Microsoft.Practices.Unity;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using G01;

namespace UnitTestGrupo01
{
    [TestClass()]
    public class Condicion
    {
        private ICondicionController iCondicionController;
        private int id;
        [TestInitialize]
        public void TestSepUp()
        {
            var container = new UnityContainer();

            container.RegisterType<ICondicionRepository, CondicionRepositorio>();
            container.RegisterType<ICondicionService, CondicionService>();
            container.RegisterType<ICondicionController, CondicionController>();
            container.RegisterType<ICondicionUtil, CondicionUtil>();

            iCondicionController = container.Resolve<ICondicionController>();

        }

        [TestMethod]
        public void CondicionTest_GiveCondicion()
        {
        CondicionVO r = this.iCondicionController.Create(1, 1, 1, 2, "mayor", "igual");
            CondicionVO res = this.iCondicionController.Give(r.condicionId);           
            Assert.AreEqual(res.operadorcomparacionId, r.operadorcomparacionId);
            Assert.AreEqual(res.reglaId, r.reglaId);
            Assert.AreEqual(res.operadorLogico1Id, r.operadorLogico1Id);
            Assert.AreEqual(res.operadorLogico2Id, r.operadorLogico2Id);
            Assert.AreEqual(res.texto1, r.texto1);
            Assert.AreEqual(res.texto2, r.texto2);

        }
        [TestMethod]
        public void CondicionTest_CrearCondicion()
        {
            CondicionVO r = this.iCondicionController.Create(2, 2, 2, 3, "menor", "igual");
            Assert.AreEqual(2, r.operadorcomparacionId);
            Assert.AreEqual(2, r.reglaId);
            Assert.AreEqual(2, r.operadorLogico1Id);
            Assert.AreEqual(3, r.operadorLogico2Id);
        }
        [TestMethod]
        public void CondicionTest_UpdateCondicion()
        {
            CondicionVO r = this.iCondicionController.Create(3, 3, 1, 3, "mayor", "menor");
            r.reglaId = 1;
            CondicionVO sUpdate = this.iCondicionController.UpDate(r);
            Assert.AreEqual(sUpdate.operadorcomparacionId, r.operadorcomparacionId);
            using (var MotorCondicionsDB = new MotorReglasDB())
            {
                Assert.AreEqual(MotorCondicionsDB.Condiciones.Find(r.condicionId).reglaId, r.reglaId);
            }
        }
        [TestMethod]
        public void CondicionTest_DeleteCondicion()
        {
            CondicionVO r = this.iCondicionController.Create(4, 2, 2, 1, "igual", "igual");
            CondicionVO sDelete = this.iCondicionController.Delete(r.condicionId);
            Assert.AreEqual(sDelete.operadorcomparacionId, r.operadorcomparacionId);
            Assert.AreEqual(sDelete.reglaId, r.reglaId);
            Assert.AreEqual(sDelete.operadorLogico1Id, r.operadorLogico1Id);
            Assert.AreEqual(sDelete.operadorLogico2Id, r.operadorLogico2Id);
            Assert.AreEqual(sDelete.texto1, r.texto1);
            Assert.AreEqual(sDelete.texto2, r.texto2);
        }
        [TestMethod]
        public void CondicionTest_AllCondiciones()
        {
            List<CondicionVO> lCondicions = iCondicionController.ListCondiciones();
            Assert.IsTrue(lCondicions.Count > 0);
        }
    }
}




