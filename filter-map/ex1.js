/* Array.prototype.map ET filter - Exercice 1

Il s'agit d'écrire une fonction getJediNames, qui reçoit en argument un tableau
de personnages de Star Wars (objets), chacun ayant deux propriétés :
- name: nom du personnage
- side: le côté de la Force où il se situe ('light' ou 'dark')

En utilisant filter puis map, la fonction doit renvoyer les noms des Jedis, c'est-à-dire les personnages du côté lumineux (pour ceux qui auraient passé les 40 dernières années dans une caverne en Lozère !)

Tableau en entrée:
[
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]

Sortie attendue:
['Yoda', 'Obiwan Kenobi', 'Mace Windu']

*/

// const getJedisNames = (characters) => {
//   return characters.filter(jedi => {
//     const test = jedi.name
//     if(jedi.side == 'light'){
//       return test.map(merde =>{
//         return merde
//       })
      
//     }
//   })
// }

const getJedisNames = (characters) => {
    return characters
    .filter(jedi => {
      return jedi.side == 'light'
    }).map(goodSide =>{
      return goodSide.name
    })
  }

module.exports = getJedisNames;
