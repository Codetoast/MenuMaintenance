using Autofac;
using System.Configuration;

namespace backend
{
    public static class AutofacConfig
    {
        public static IContainer ConfigureDependencies() {
            var builder = new ContainerBuilder();
            builder.RegisterType<MenuItemRepository>().AsImplementedInterfaces();
            builder.RegisterType<DatabaseCrudWrapper>().As<IDatabaseCrudWrapper>()
                .WithParameter("endpoint", ConfigurationManager.AppSettings["databaseEndpoint"])
                .WithParameter("token", ConfigurationManager.AppSettings["databaseToken"]);
            return builder.Build();
        }
    }
}
