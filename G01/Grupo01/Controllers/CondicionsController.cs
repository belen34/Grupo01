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

            container.RegisterType<IReglaRepository, ReglaRepositorio>();
            container.RegisterType<ICondicionService, CondicionService>();


            container.RegisterType<IReglaUtil, ReglaUtil>();

            iCondicionservice = container.Resolve<ICondicionService>();

        }

        // GET: api/OperardorLogicos
        public IEnumerable<CondicionVO> Get()
        {
            return iCondicionservice.ListCondiciones();
        }

        // GET: api/OperardorLogicos/5
        public CondicionVO Get(int id)
        {
            return iCondicionservice.Give(id);
        }

        // POST:api/OperardorLogicos
        public CondicionVO Post(CondicionVO r)
        {

            return iCondicionservice.Create(r.operadorcomparacionId, r.operadorLogico1Id, r.operadorLogico2Id,r.texto1, r.texto2);
        }


        public void Put([FromBody] CondicionVO r)
        {

            iCondicionservice.UpDate(r);
        }

        // DELETE: api/OperardorLogicos/5
        public CondicionVO Delete(int id)
        {
            CondicionVO v = iCondicionservice.Delete(id);
            return v;
        }
    }
}
