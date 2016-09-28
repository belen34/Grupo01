using G01.ObjectVO;
using G01.Repository;
using G01.Service;
using G01.Util;
using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Grupo01.Controllers
{
    public class operadorcomparacionsController : ApiController, IoperadorcomparacionsController
    {
        private IOperadorComparacionService iOCService;

        public operadorcomparacionsController()
        {


            var container = new UnityContainer();


            container.RegisterType<IOperadorComparacionRepository, OperadorComparacionRepository>();
            container.RegisterType<IOperadorComparacionService, OperadorComparacionService>();


            container.RegisterType<IOperadorComparacionUtil, OperadorComparacionUtil>();

            iOCService = container.Resolve<IOperadorComparacionService>();

           

        }

        // GET: api/OperardorLogicos
        public IEnumerable<OperadorComparacionVO> Get()
        {
            return iOCService.ListOperadorComparacion();
        }

      
    }
}
