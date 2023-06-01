const axios = require("axios");
const fs = require("fs");

const fetchPicturesById = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemonList = response.data.results;

    const pictures = [];
    for (const pokemon of pokemonList) {
      const { name, url } = pokemon;
      const id = url.split("/").slice(-2, -1)[0];

      const pictureResponse = await axios.get(
        `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        {
          responseType: "arraybuffer",
        }
      );
      const pictureData = Buffer.from(pictureResponse.data, "binary");

      const filename = `utils/${id}-${name}.png`;
      fs.writeFileSync(filename, pictureData);

      pictures.push(filename);
    }

    return pictures;
  } catch (error) {
    console.error("Error fetching pictures:", error);
    return [];
  }
};

module.exports = {
  fetchPicturesById,
};
