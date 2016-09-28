using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using G01.ObjectVO;
using G01.Repository;
using G01.Service;
using G01.Util;
using Microsoft.Practices.Unity;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Grupo01.Controllers
{
    public class ReglaController : ApiController, IReglasController
    {
        public ReglaVO Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ReglaVO> Get()
        {
            throw new NotImplementedException();
        }

        public ReglaVO Get(int id)
        {
            throw new NotImplementedException();
        }

        public ReglaVO Post(ReglaVO r)
        {
            throw new NotImplementedException();
        }

        public void Put([FromBody] ReglaVO r)
        {
            throw new NotImplementedException();
        }

        public class ReglasController 
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

            // GET: api/Reglas
            public IEnumerable<ReglaVO> Get()
            {
                return iReglaService.ListReglas();
            }

            // GET: api/Reglas/5
            public ReglaVO Get(int id)
            {
                return iReglaService.Give(id);
            }

            // POST:api/Reglas
            public ReglaVO Post(ReglaVO r)
            {

                return iReglaService.Create(r.nombre);
            }


            public void Put([FromBody] ReglaVO r)
            {

                iReglaService.UpDate(r);
            }

            // DELETE: api/Reglas/5
            public ReglaVO Delete(int id)
            {
                ReglaVO v = iReglaService.Delete(id);
                return v;
            }
        }
    }
}