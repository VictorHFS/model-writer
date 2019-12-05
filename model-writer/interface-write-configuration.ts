import { Attribute } from "./attribute";

export  interface InterfaceWriteConfiguration {
    path: string;
    name: string;
    attributes: Attribute[];
}