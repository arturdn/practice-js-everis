//var hola = `Hello, ${process.argv[2]}!
//Your name lowercased is "${process.argv[2].toLowerCase()}".`

//var inputs = process.argv.slice(2);
//var result = inputs.map(str => str[0])
//                    .reduce((soFar, s) => soFar + s);

//var foot = {
//    kick: function () {
//        this.yelp = "Ouch!";
//        setImmediate(() => console.log(this.yelp));
//    }
//};
//foot.kick();

//var usuari = {};
//[ , usuari.username, usuari.email] = process.argv.slice(2);

//var numero = process.argv.slice(2);
//var min = Math.min(...numero);

module.exports = function makeImportant(str, long = str.length) {
    var exclamations = '';
    for(let i=0; i<long; i++) {
        exclamations += '!';
    }
    var result = `${str}${exclamations}`;

    return result;
};