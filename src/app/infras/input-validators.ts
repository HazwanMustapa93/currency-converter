import { FormControl } from '@angular/forms';

export function noWhitespace(control: FormControl) {
    const isWhitespace = /\s/.test(control.value);
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
}

export function alphanumericOnly(control: FormControl) {
    const notAlphanumericChars =/[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+/g.test(control.value);
    const isValid = !notAlphanumericChars;

    return isValid ? null : { alphanumeric: true };
}

export function noSpecialCharacter(control: FormControl) {
    const hasSpecialChars = /[$-/:-?{-~!"^_`\[\]]/.test(control.value);
    const isValid = !hasSpecialChars;

    return isValid ? null : { specialcharacter: true };
}