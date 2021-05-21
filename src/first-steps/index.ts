import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, Tree, url, template, SchematicsException, move } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { buildDefaultPath } from '@schematics/angular/utility/workspace';
import { parseName } from '@schematics/angular/utility/parse-name';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.

export function firstSteps(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not an Angular CLI workspace');
    }

    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];


    const defaultProjectPath = buildDefaultPath(project);


    const parsePath = parseName(defaultProjectPath, _options.name);

    const { name, path } = parsePath;

    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}


