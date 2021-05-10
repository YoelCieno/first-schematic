import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, Tree, url, template } from '@angular-devkit/schematics';
import { Schema } from './schema';



// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function firstSteps(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    const sourceTemplates = url('./files');

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      })
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
