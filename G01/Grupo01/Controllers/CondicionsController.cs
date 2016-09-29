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
    public class CondicionsController : ApiController, ICondicionsController
    {
        private ICondicionService iCondicionservice;

        public CondicionsController()
        {


            var container = new UnityContainer();

            container.RegisterType<ICondicionRepository, CondicionRepositorio>();
            container.RegisterType<ICondicionService, CondicionService>();


            container.RegisterType<ICondicionUtil, CondicionUtil>();

            iCondicionservice = container.Resolve<ICondicionService>();

        }

        // GET: api/Condiciones
        public IEnumerable<CondicionVO> Get()
        {
            return iCondicionservice.ListCondiciones();
        }

        // GET: api/Condiciones/5
        public CondicionVO Get(int id)
        {
            return iCondicionservice.Give(id);
        }

        // POST:api/Condiciones
        public CondicionVO Post(CondicionVO r)
        {

            return iCondicionservice.Create(r.operadorcomparacionId, r.reglaId, r.operadorLogico1Id, r.operadorLogico2Id, r.texto1, r.texto2);
        }


        public void Put([FromBody] CondicionVO r)
        {

            iCondicionservice.UpDate(r);
        }

        // DELETE: api/Condiciones/5
        public CondicionVO Delete(int id)
        {
            CondicionVO v = iCondicionservice.Delete(id);
            return v;
        }
    }
}
