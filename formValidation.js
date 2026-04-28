import { helper } from "./helper";
import { inputFiltration } from "./inputFiltration";

export const myFormValidation = (inputs) => {
  inputs.forEach((element) => {
    inputFiltration(element);
  });
  return helper.buildSchema();
  
};
