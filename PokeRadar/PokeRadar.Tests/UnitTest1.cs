using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using Carfinance.PokeRadar.Services;
using Carfinance.PokeRadar.Models;

namespace PokeRadar.Tests {
    [TestClass]
    public class UnitTest1 {

        [TestMethod]
        public void TestMethod1() {
            PokemonService service = new PokemonService("pokemons.json");
            Pokemon p = service.GetByNumber(1);
        }
    }
}
