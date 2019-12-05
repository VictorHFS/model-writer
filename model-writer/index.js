function writeHeader(name) {
    return "export interface " + name;
}
function writeLine(attribute) {
    return attribute.name + " : " + attribute.value + ";";
}
function writeBody(attributes) {
    var content = attributes.map(function (attribute) {
        return writeLine(attribute) + "\n";
    });
    return "{\n" + content + "\n}";
}
function writeInterface(configuration) {
    return writeHeader(configuration.name) + " " + writeBody(configuration.attributes);
}
var result = writeInterface({
    path: '',
    name: 'ClasseTeste',
    attributes: [
        { name: 'attrTest', value: 'string' }
    ]
});
console.log(result);
