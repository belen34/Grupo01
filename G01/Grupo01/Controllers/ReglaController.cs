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
        private IReglaService iOperardorLogicoService;

        public ReglaController()
        {


            var container = new UnityContainer();

            container.RegisterType<IReglaRepository, ReglaRepositorio>();
            container.RegisterType<IReglaService, ReglaService>();


            container.RegisterType<IReglaUtil, ReglaUtil>();

            iOperardorLogicoService = container.Resolve<IReglaService>();

        }

        // GET: api/OperardorLogicos
        public IEnumerable<ReglaVO> Get()
        {
            return iOperardorLogicoService.ListReglas();
        }

        // GET: api/OperardorLogicos/5
        public ReglaVO Get(int id)
        {
            return iOperardorLogicoService.Give(id);
        }

        // POST:api/OperardorLogicos
        public ReglaVO Post(ReglaVO r)
        {

            return iOperardorLogicoService.Create(r.nombre);
        }


        public void Put([FromBody] ReglaVO r)
        {

            iOperardorLogicoService.UpDate(r);
        }

        // DELETE: api/OperardorLogicos/5
        public ReglaVO Delete(int id)
        {
            ReglaVO v = iOperardorLogicoService.Delete(id);
            return v;
        }
    }
    }