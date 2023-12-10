import { AstNode, ValidationAcceptor, ValidationChecks } from 'langium';
import { JgenAstType, Entity, isProject, reflection, Enum, Relationship, Repository, Service, Controller } from './generated/ast';
import type { JgenServices } from './jgen-module';

const allowedCombinations: Record<string, string[]> = {
    'OneToMany': ['ManyToOne'],
    'ManyToOne': ['OneToMany'],
    'ManyToMany': ['ManyToMany']
};

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: JgenServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.JgenValidator;

    const checks: ValidationChecks<JgenAstType> = {
        Enum: (component: Enum, accept: ValidationAcceptor) => {
            validator.checkStartsWithCapital(component, accept);
            validator.checkEnumLiterals(component, accept);
        },
        Entity: (component: Entity, accept: ValidationAcceptor) => {
            validator.checkStartsWithCapital(component, accept);
            validator.checkEntityAttributes(component, accept);
        },
        Relationship: validator.checkRelationship,
        Repository: validator.checkRepository,
        Service: validator.checkService,
        Controller: validator.checkController,
        Project: validator.checkProject
    };

    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class JgenValidator {

    checkStartsWithCapital(component: Entity | Enum, accept: ValidationAcceptor): void {
        if (component.name) {
            const firstChar = component.name[0];
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'keyword should start with a capital.', { node: component, property: 'name' });
            }
        }
    }

    checkEntityAttributes(component: Entity, accept: ValidationAcceptor): void {
        if (component.attributes.length === 0) {
            accept('error', 'Entity must contain at least one attribute.', { node: component, property: 'name' });
        }
    }

    checkEnumLiterals(component: Enum, accept: ValidationAcceptor): void {
        if (component.literals.length === 0) {
            accept('error', 'Enum must contain at least one literal.', { node: component, property: 'name' });
        }
    }

    checkRelationship(component: Relationship, accept: ValidationAcceptor): void {
        if (component.from && component.to) {
            if (component.from === component.to) {
                accept('error', 'Relationship from and to the same entity.', { node: component, property: 'type' });
            }
        }
    }

    checkRepository(component: Repository, accept: ValidationAcceptor): void {
        component.queries.forEach(q => {
            q.parameters.forEach(p => {
                if (!component.entity.ref?.attributes.some(attr => attr.name === p.attribute)) {
                    accept('error', `Parameter attribute '${p.attribute}' not found in entity '${component.entity.ref?.name}'.`, { node: p, property: 'attribute' });
                }
            });
        });
    }

    checkService(component: Service, accept: ValidationAcceptor): void {
        component.methods.forEach(m => {
            m.parameters.forEach(p => {
                if (!component.entity.ref?.attributes.some(attr => attr.name === p.attribute)) {
                    accept('error', `Parameter attribute '${p.attribute}' not found in entity '${component.entity.ref?.name}'.`, { node: p, property: 'attribute' });
                }
            });
        });
    }

    checkController(component: Controller, accept: ValidationAcceptor): void {
        component.routes.forEach(r => {
            if(r.requestParameters.length > 0) {
                r.requestParameters.forEach(p => {
                    if (!component.entity.ref?.attributes.some(attr => attr.name === p.attribute)) {
                        accept('error', `Parameter attribute '${p.attribute}' not found in entity '${component.entity.ref?.name}'.`, { node: p, property: 'attribute' });
                    }
                });
            }
            if(r.requestBody) {
                r.requestBody.parameters.forEach(p => {
                    if (!component.entity.ref?.attributes.some(attr => attr.name === p.attribute)) {
                        accept('error', `Parameter attribute '${p.attribute}' not found in entity '${component.entity.ref?.name}'.`, { node: p, property: 'attribute' });
                    }
                });
            }
        });
    }

    checkProject(project: AstNode, accept: ValidationAcceptor): void {
        if (!isProject(project)) {
            throw new Error('Retrieve a non-model in validation');
        }

        const entities = new Set();
        const enums = new Set();
        const relationships: {
            from: string;
            to: string;
            type: string;
        }[] = [];

        // enums
        project.structuralComponents.forEach(d => {
            if (isEnum(d)) {
                if (enums.has(d.name)) {
                    accept('error', `Enum has non-unique name '${d.name}'.`, { node: d, property: 'name' });
                }
                enums.add(d.name);
            }
        });

        // entities
        project.structuralComponents.forEach(d => {
            if (isEntity(d)) {
                if (entities.has(d.name)) {
                    accept('error', `Entity has non-unique name '${d.name}'.`, { node: d, property: 'name' });
                }
                entities.add(d.name);
            }
        });

        // relationships
        project.structuralComponents.forEach(d => {
            if (isRelationship(d)) {
                const fromEntityName = d.from.ref?.name;
                const toEntityName = d.to.ref?.name;
                const relationshipType = d.type;

                if (!fromEntityName || !toEntityName) {
                    accept('error', 'Relationship must have both "from" and "to" entities defined.', { node: d, property: 'type' });
                    return;
                }

                if (relationships.some(r => r.from === fromEntityName && r.to === toEntityName && r.type === relationshipType)) {
                    accept('error', `Duplicate relationship type '${relationshipType}' between '${fromEntityName}' and '${toEntityName}'.`, { node: d, property: 'type' });
                }

                if (relationships.some(r => r.from === fromEntityName && r.to === toEntityName && r.type !== relationshipType)) {
                    accept('warning', `Different relationship type '${relationshipType}' between '${fromEntityName}' and '${toEntityName}'.`, { node: d, property: 'type' });
                }

                if (relationships.some(r => r.from === toEntityName && r.to === fromEntityName && !allowedCombinations[r.type]?.includes(relationshipType))) {
                    accept('warning', `Invalid relationship type combination '${relationshipType}' between '${fromEntityName}' and '${toEntityName}'.`, { node: d, property: 'type' });
                }

                relationships.push({ from: fromEntityName, to: toEntityName, type: relationshipType });
            }
        });

    }
}

function isEnum(item: unknown): item is Enum {
    return reflection.isInstance(item, Enum);
}

function isEntity(item: unknown): item is Entity {
    return reflection.isInstance(item, Entity);
}

function isRelationship(item: unknown): item is Relationship {
    return reflection.isInstance(item, Relationship);
}
