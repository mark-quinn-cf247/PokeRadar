using Carfinance.PokeRadar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Carfinance.PokeRadar.Services {
    public interface IPokemonService {
        Pokemon GetByNumber(int id);
        IEnumerable<Pokemon> GetByNumbers(int[] ids);
    }
}