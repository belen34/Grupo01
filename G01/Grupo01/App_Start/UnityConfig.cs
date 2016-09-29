using Grupo01.Controllers;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace Grupo01
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IoperadorcomparacionsController, operadorcomparacionsController>();
            container.RegisterType<ICondicionsController, CondicionsController>();
            container.RegisterType<IReglasController, ReglaController>();
            container.RegisterType<IOperardorLogicosController, OperardorLogicosController>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}