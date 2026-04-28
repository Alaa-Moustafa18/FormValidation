import { helper } from "./helper";
import { validationStrategy } from "./validationStrategy";

export const inputFiltration = (input) => {
  let el = document.querySelector(`input[name=${input.name}]`);
  input.rules.forEach((rule) => {
    let validationError = validationStrategy[rule.name](el.value, rule);
    if (validationError) {
      helper.errorHandler({
        name: input.name,
        
        rules: [{ name: rule.name, errMsg: validationError }],
      });
    }
  });
};
