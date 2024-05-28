// create a variable to hold your NFT's
const NFTs = [];

// this functions takes the metadata of NFTs as parameters
function mintNFT (_name, _type, _habitat, _Xpower) {
   const pokemonNFT = {
      "name": _name,
      "type": _type,
      "habitat": _habitat,
      "Xpower": _Xpower
   }
   NFTs.push(pokemonNFT);
   console.log("Minted:", _name);
}

// The metadata is printed to console using the for-loop inside the function
function listNFTs () {
   for (let i = 0; i < NFTs.length; i++) {
      console.log("\nID:\t",(i+1));      
      console.log("Name:\t",NFTs[i].name);      
      console.log("Type:\t",NFTs[i].type);      
      console.log("Habitat:",NFTs[i].habitat);      
      console.log("Xpower:\t",NFTs[i].Xpower);      
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nNo. of NFTs minted:",NFTs.length); //length returns the elements 
}

// calling functions
mintNFT("Pikachu", "Electric", "Veridian Forest", "ThunderBolt");
mintNFT("Bulbasaur", "Grass", "Veridian Forest", "FloraWarrior");
mintNFT("Charmander", "Fire", "Cerulean City", "Amber");
mintNFT("Squirtle", "Water", "Vermillion City", "AquaBlast");
listNFTs();
getTotalSupply();
