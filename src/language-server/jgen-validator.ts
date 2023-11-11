import { ValidationAcceptor, ValidationChecks } from 'langium';
import { JgenAstType, Entity } from './generated/ast';
import type { JgenServices } from './jgen-module';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: JgenServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.JgenValidator;
    const checks: ValidationChecks<JgenAstType> = {
        Entity: validator.checkStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class JgenValidator {

    checkStartsWithCapital(component: Entity, accept: ValidationAcceptor): void {
        if (component.name) {
            const firstChar =  component.name[0];
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'keyword should start with a capital.', { node: component, property: 'name' });
            }
        }
    }

}
