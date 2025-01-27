# Aavegotchi JSON game schemas.

## Supported games

Following games are currently supported:

- [Spirit Force Arena](https://dapp.aavegotchi.com/games/spirit-force-arena?utm_source=aavegotchi)
- [Strategotchi](https://strategotchi.io/)
- [DROPT](https://web.playdropt.io/)
- [GotchiBattler](https://gotchibattler.com/)

## Repository content 

There are 3 main sections in this repository.

### Game traits

All the game traits are stored in the /src/games folder. 
Each game has its own folder.
As the schema is common to all games, the structure is common to all games. 
Not all the games use all the mecanisms implemented in the schema.
In order to implement some logic inside the json files I used [jsonlogic](https://jsonlogic.com/).
Main implementation is a js package but there are several other languages available.

Here  are some details regarding the overall implementation.

#### Helpers
All games reuse the same logic many times during their trait computation. Most common case is to transform a trait value into a normalized version. 
Here is the gotchi battler implementation of the helper:

```json
{
  "if": [
    { "<": [{ "var": "value" }, 50] },
    { "-": [50, { "var": "value" }] },
    { "-": [{ "var": "value" }, 49] }
  ]
}
```
Helpers are stored in the /src/games/{game}/helpers folder.

#### Classes
Some of the games uses a class mecanism (SFA, Battler). All the schemas related to classes are stored in the /src/games/{game}/classes folder. In the folder you will find a json file for each class, using the name of the class as filename. Each file contains a jsonlogic expression that will be used to decide if a gotchi is eligible to that class. Those logics just return trus if the gotchi is eligible or false if not.

#### Traits
Main traits are stored in the /src/games/{game}/traits folder. Each file contains the trait definition using jsonlogic also. Each file returns a numeric value.

#### Wearables
Wearables are stored in the /src/games/{game}/wearables folder. In most games wearables modify the game traits of the gotchi. and also grants some special abilities or unlock some type of attacks (ranged, grenade, etc...). Because all those files are generated and not manually edited, i decided to use only one large json file and put all data in it. 

And because wearables properties are kind of a mix bag between logic and description i decided to use a hybrid approach. Here is an example of a wearable definition:

```json
  {
    "id": "57",
    "name": "Aagent Shades",
    "rarity": 3,
    "attack_rate": 1,
    "gameTraitsModifiers": {
      "traitName": "ads_view",
      "value": { "+": [{ "var": "ads_view" }, "0.3"] }
    }
  },
```
As you can see most of the data is simple description data. But some of the properties are logic related. The logic is stored in the gameTraitsModifiers section.

#### Order of execution

The most common order of execution to get all the traits of a gotchi for a game is the following:
1. Check which classes the gotchi is eligible to.
2. Compute each game traits value for the gotchi
3. If the gotchi has wearable equipped, apply the logic of the wearable to the game traits as modifiers and append all other wearables data to the gotchi.

### Scripts

There are 2 type of scripts in the /src/scripts folder. Each type has its own folder

#### Generators

For some games, data, especially regarding wearables was stored inside GSheet files. Because there are many wearables in the ecosystem, I decided to extract the data i needed from GSHeet to csv files and write ts scripts called generators to generate the json files from the csv files.
Generators are stored in the /src/scripts/generators folder.

#### Test scripts

Each game has its own test script. all those scripts are referenced in the package.json file.
I used them to test my code and all the logic while coding.

### Games lib files

Each game has its own logic resolver. They are stored in the /src/lib/{game} folder.
This files are the interface betwwen the dapp and the json logic files. 
If someone wants to reuse the schema using another language, those files are the part that will need to be rewritten.

## Build process

I decided to use rollup to build the dist folder as it was the easiest way to transpile all the json files into js code. 
In the end the only file the dapp relies on when calling the package is the dist/index.js file.

## Maintaining the schema

Now that the schema is publicly available, each game team can maintain its own json files.
I will stay in charge of managing the incoming pull requests and I will make myself available in case of issues or questions.

## Adding new games. 

If you want to add a new game, you will need to create a new folder in the /src/games folder.
You will need to create the following files:
- A lib file in the /src/lib/{game} folder.
- A test script in the /src/scripts/test/{game} folder.
- A generator script in the /src/scripts/generators/{game} folder.

