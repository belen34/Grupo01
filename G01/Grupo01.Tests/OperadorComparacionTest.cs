using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using G01;
using Microsoft.Practices.Unity;
using G01;
using G01.Controller;
using G01.Object;
using G01.ObjectVO;
using G01.Repository;
using G01.Service;
using G01.Util;

namespace Grupo01.Tests
{
    [TestClass()]
    public class DoctorTest
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
            using (var recetaElectronicaDB = new MotorReglasDB())
            {
                operadorComparacion = new OperadorComparacionObj();
                operadorComparacion.operadorComparacionId = 0;
                operadorComparacion.name = "Cuenta";

                operadorComparacion = recetaElectronicaDB.Doctors.Add(operadorComparacion);
                recetaElectronicaDB.SaveChanges();
            }
            id = operadorComparacion.operadorComparacionId;
        }

        //[TestMethod]
        //public void DoctorTest_GiveDoctor()
        //{
        //    OperadorComparacionVO r = this.iOperadorComparacionController.Create("Patricia Ruiz");

        //    OperadorComparacionVO res = this.iOperadorComparacionController.Give(r.doctorId);
        //    Assert.AreEqual(res.doctorId, r.doctorId);
        //    Assert.AreEqual(res.name, r.name);

        //}
        //[TestMethod]
        //public void DoctorTest_CrearDoctor()
        //{
        //    OperadorComparacionVO r = this.iOperadorComparacionController.Create("Teresa Ruiz");

        //    Assert.AreEqual("Teresa Ruiz", r.name);

        //}
        //[TestMethod]
        //public void DoctorTest_UpdateDoctor()
        //{
        //    OperadorComparacionVO r = this.iOperadorComparacionController.Create("Mar Pardo");
        //    r.name = "Fran Santiago";
        //    OperadorComparacionVO sUpdate = this.iOperadorComparacionController.UpDate(r);
        //    Assert.AreEqual(sUpdate.name, r.name);
        //    using (var recetaElectronicaDB = new MotorReglasDB())
        //    {
        //        Assert.AreEqual(recetaElectronicaDB.Doctors.Find(r.doctorId).doctorId, r.doctorId);
        //    }
        //}
        //[TestMethod]
        //public void DoctorTest_DeleteDoctor()
        //{
        //    OperadorComparacionVO r = this.iOperadorComparacionController.Create("Ana Perojo");
        //    OperadorComparacionVO sDelete = this.iOperadorComparacionController.Delete(r.doctorId);
        //    Assert.AreEqual(sDelete.doctorId, r.doctorId);
        //    Assert.AreEqual(sDelete.name, r.name);

        //}
        [TestMethod]
        public void DoctorTest_AllDoctors()
        {
            List<OperadorComparacionVO> lOperadorComparacion = iOperadorComparacionController.ListOperadorComparacion();
            Assert.IsTrue(lOperadorComparacion.Count > 0);
        }
    }
}
