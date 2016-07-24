using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using System.Threading.Tasks;

[assembly: OwinStartupAttribute(typeof(PokeRadar.Startup))]

namespace PokeRadar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
        }
    }
}
