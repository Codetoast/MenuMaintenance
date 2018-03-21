using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;

namespace backend
{
    public static class MenuItemsService
    {
        [FunctionName("MenuItemsService")]
        public static async Task<IEnumerable<string>> Get([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "MenuItems")]HttpRequestMessage req, TraceWriter log)
        {
            log.Verbose("Requesting Menu Items.");

            return new string[] { "Michael Burger", "Fries", "Soda" };
        }
    }
}
