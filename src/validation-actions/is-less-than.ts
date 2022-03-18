import { FieldState, FieldValidationResult } from '../types';

export const useLessThan = <TModel extends Record<string, any>, TArgument>(
    model: TModel,
    propertyName: string,
    comparer: TArgument,
): FieldValidationResult => {
    const property = model[propertyName];

    return {
        rule: `${propertyName} is invalid.`,
        field: propertyName,
        state: property && property < comparer ? FieldState.Valid : FieldState.Invalid,
    };
};
