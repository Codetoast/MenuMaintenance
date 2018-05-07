using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Autofac;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;

namespace backend
{
    public static class MenuItemsService
    {

        static IContainer container = AutofacConfig.ConfigureDependencies();

        [FunctionName("MenuItemsService")]
        public static async Task<IEnumerable<string>> Get([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "MenuItems")]HttpRequestMessage req, TraceWriter log)
        {
            log.Verbose("Requesting Menu Items.");
            var repo = container.Resolve<IMenuItemRepository>();


            return repo.GetItemsList();
        }
    }
}
