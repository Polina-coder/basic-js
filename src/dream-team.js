const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) 
  return false;

let dream_team = [];
for(i = 0; i < members.length; i++)
if(typeof members[i] !== 'string') continue
else
dream_team[i]=members[i].trim()[0].toUpperCase()	
return dream_team.sort().join(''); 
};
