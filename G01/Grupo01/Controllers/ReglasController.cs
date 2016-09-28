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
    public class ReglasController : ApiController, IReglasController
    {
        private IReglaService iReglaService;

        public ReglasController()
        {


            var container = new UnityContainer();

            container.RegisterType<IReglaRepository, ReglaRepositorio>();
            container.RegisterType<IReglaService, ReglaService>();


            container.RegisterType<IReglaUtil, ReglaUtil>();

            iReglaService = container.Resolve<IReglaService>();

        }

        // GET: api/OperardorLogicos
        public IEnumerable<ReglaVO> Get()
        {
            return iReglaService.ListReglas();
        }

        // GET: api/OperardorLogicos/5
        public ReglaVO Get(int id)
        {
            return iReglaService.Give(id);
        }

        // POST:api/OperardorLogicos
        public ReglaVO Post(ReglaVO r)
        {

            return iReglaService.Create(r.operadorcomparacionId, r.texto1, r.texto2);
        }


        public void Put([FromBody] ReglaVO r)
        {

            iReglaService.UpDate(r);
        }

        // DELETE: api/OperardorLogicos/5
        public ReglaVO Delete(int id)
        {
            ReglaVO v = iReglaService.Delete(id);
            return v;
        }
    }
}
