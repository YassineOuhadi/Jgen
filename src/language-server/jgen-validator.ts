import { AstNode, ValidationAcceptor, ValidationChecks } from 'langium';
import { JgenAstType, Entity, isProject, reflection, Enum, Relationship } from './generated/ast';
import type { JgenServices } from './jgen-module';

interface RelationshipStruct {
	from: string;
	to: string;
	type: string;
}

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: JgenServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.JgenValidator;

    const checks: ValidationChecks<JgenAstType> = {
        Project: validator.checkProject,
        Entity: validator.checkStartsWithCapital,
        Relationship: validator.checkRelationship
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

    checkRelationship(component: Relationship, accept: ValidationAcceptor): void {
        if (component.from && component.to) {
            if (component.from === component.to) {
                accept('error', 'Relationship from and to the same entity.', { node: component, property: 'type' });
            }
        }
    }

    checkProject(project: AstNode, accept: ValidationAcceptor): void {
        if (!isProject(project)) {
            throw new Error('Retrieve a non-model in validation');
        }
    
        const entities = new Set();
        const enums = new Set();
        const relationships : RelationshipStruct[] = [];

        project.structuralComponents.forEach(d => {
            if (isEnum(d)) {
                if (enums.has(d.name)) {
                    accept('error', `Enum has non-unique name '${d.name}'.`, { node: d, property: 'name' });
                }
                enums.add(d.name);
            }
        });

        project.structuralComponents.forEach(d => {
            if (isEntity(d)) {
                if (entities.has(d.name)) {
                    accept('error', `Entity has non-unique name '${d.name}'.`, { node: d, property: 'name' });
                }
                entities.add(d.name);
            }
        });

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

                if (relationships.some(r => r.from === toEntityName && r.to === fromEntityName && r.type === "OneToMany" && relationshipType !== "ManyToOne")) {
                    accept('warning', `Relationship type OneToMany'.`, { node: d, property: 'type' });
                }
        
                relationships.push({ from: fromEntityName, to: toEntityName, type: relationshipType });
                console.log(relationships);
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
