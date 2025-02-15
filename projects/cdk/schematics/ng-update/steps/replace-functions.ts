import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {Node} from 'ng-morph';
import {removeImport} from '../../utils/import-manipulations';

export function replaceFunctions() {
    replacePadStart(getNamedImportReferences('padStart', '@taiga-ui/cdk'));
    replaceFallbackValue(getNamedImportReferences('fallbackValue', '@taiga-ui/cdk'));
    replaceCustomEvent(getNamedImportReferences('tuiCustomEvent', '@taiga-ui/cdk'));
    replaceClosestElement(getNamedImportReferences('getClosestElement', '@taiga-ui/cdk'));
}

function replacePadStart(references: Node[]) {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [targetString, length, pad] = parent.getArguments();
            parent.replaceWithText(
                `${targetString.getText()}.padStart(${length.getText()}, ${
                    pad?.getText() ?? '" "'
                })`,
            );
        }
    });
}

function replaceClosestElement(references: Node[]) {
    references.forEach(ref => {
        const parent = ref.getParent();
        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();
            parent.replaceWithText(
                `${firstArg.getText()}.closest(${secondArg.getText()})`,
            );
        }
    });
}

function replaceCustomEvent(references: Node[]) {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();
            parent.replaceWithText(
                `new CustomEvent(${firstArg.getText()}, ${secondArg.getText()})`,
            );
        }
    });
}

function replaceFallbackValue(references: Node[]) {
    references.forEach(ref => {
        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        } else if (Node.isCallExpression(parent)) {
            const [firstArg, secondArg] = parent.getArguments();
            parent.replaceWithText(`${firstArg.getText()} ?? ${secondArg.getText()}`);
        }
    });
}
