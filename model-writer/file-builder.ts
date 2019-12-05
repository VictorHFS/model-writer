import { Attribute } from "./attribute";
import { InterfaceWriteConfiguration } from "./interface-write-configuration";

function writeHeader(name: string) {
    return `export interface ${name}`
}

function writeLine(attribute: Attribute) {
    return `${attribute.name} : ${attribute.value};`
}

function writeBody(attributes: Attribute[]) {
    const content = attributes.map(attribute => {
        return '\t' + writeLine(attribute) + `\n`;
    })

    return `{\n${content}\n}`;
}

function writeInterface(configuration: InterfaceWriteConfiguration) {
    return `${writeHeader(configuration.name)} ${writeBody(configuration.attributes)}`;
}
