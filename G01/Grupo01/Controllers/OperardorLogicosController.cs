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
    public class OperardorLogicosController : ApiController, IOperardorLogicosController
    {

        private IOperadorLogicoService iOperardorLogicoService;

        public OperardorLogicosController()
        {


            var container = new UnityContainer();

            container.RegisterType<IOperadorLogicoRepository, OperadorLogicoRepository>();
            container.RegisterType<IOperadorLogicoService, OperadorLogicoService>();


            container.RegisterType<IOperadorLogicoUtil, OperadorLogicoUtil>();

            iOperardorLogicoService = container.Resolve<IOperadorLogicoService>();

        }

        // GET: api/OperardorLogicos
        public IEnumerable<OperadorLogicoVO> Get()
        {
            return iOperardorLogicoService.ListOpLogicos();
        }

        // GET: api/OperardorLogicos/5
        public OperadorLogicoVO Get(int id)
        {
            return iOperardorLogicoService.Give(id);
        }

        // POST:api/OperardorLogicos
        public OperadorLogicoVO Post(OperadorLogicoVO r)
        {

            return iOperardorLogicoService.Create(r.name);
        }


        public void Put([FromBody] OperadorLogicoVO r)
        {

            iOperardorLogicoService.UpDate(r);
        }

        // DELETE: api/OperardorLogicos/5
        public OperadorLogicoVO Delete(int id)
        {
            OperadorLogicoVO v = iOperardorLogicoService.Delete(id);
            return v;
        }
    }
}
