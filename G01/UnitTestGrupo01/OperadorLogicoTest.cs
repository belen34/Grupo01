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
        public class OperadorLogicoTest
        {
            private IOperadorLogicoController iOperadorLogicoController;
            private int id;
            [TestInitialize]
            public void TestSepUp()
            {
                var container = new UnityContainer();

                container.RegisterType<IOperadorLogicoRepository, OperadorLogicoRepository>();
                container.RegisterType<IOperadorLogicoService, OperadorLogicoService>();
                container.RegisterType<IOperadorLogicoController, OperadorLogicoController>();
                container.RegisterType<IOperadorLogicoUtil, OperadorLogicoUtil>();

                iOperadorLogicoController = container.Resolve<IOperadorLogicoController>();

            }

            [TestMethod]
            public void DoctorTest_GiveOpeLogico()
            {
                OperadorLogicoVO r = this.iOperadorLogicoController.Create("&&");

                OperadorLogicoVO res = this.iOperadorLogicoController.Give(r.operadorlogicoId);
                Assert.AreEqual(res.operadorlogicoId, r.operadorlogicoId);
                Assert.AreEqual(res.name, r.name);

            }
            [TestMethod]
            public void DoctorTest_CrearOpeLogico()
            {
                 OperadorLogicoVO r = this.iOperadorLogicoController.Create("||");

                Assert.AreEqual("||", r.name);

            }
            [TestMethod]
            public void DoctorTest_UpdateOpeLogico()
            {
                OperadorLogicoVO r = this.iOperadorLogicoController.Create("!=");
                r.name = "Negacion";
                OperadorLogicoVO sUpdate = this.iOperadorLogicoController.UpDate(r);
                Assert.AreEqual(sUpdate.name, r.name);
                using (var MotorReglasDB = new MotorReglasDB())
                {
                    Assert.AreEqual(MotorReglasDB.Operadoreslogicos.Find(r.operadorlogicoId).operadorlogicoId, r.operadorlogicoId);
                }
            }
            [TestMethod]
            public void DoctorTest_DeleteOpeLogico()
            {
                OperadorLogicoVO r = this.iOperadorLogicoController.Create("no valido");
                OperadorLogicoVO sDelete = this.iOperadorLogicoController.Delete(r.operadorlogicoId);
                Assert.AreEqual(sDelete.operadorlogicoId, r.operadorlogicoId);
                Assert.AreEqual(sDelete.name, r.name);

            }
            [TestMethod]
            public void DoctorTest_AllOpeLogico()
            {
                List<OperadorLogicoVO> lOL = iOperadorLogicoController.ListOpLogicos();
                Assert.IsTrue(lOL.Count > 0);
            }
        }
}
