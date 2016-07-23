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
            string json = File.ReadAllText("pokemons.json");
            PokemonService service = new PokemonService(json);

            Pokemon p = service.GetById(1);


        }
    }
}
