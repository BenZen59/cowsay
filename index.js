const eleveInfo = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
  text : `I'm ${eleveInfo.nom} from ${eleveInfo.campus}`,
  e : "oO",
  T : "U "

}));