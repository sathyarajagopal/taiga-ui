import {isNativeFocused} from './is-native-focused';
import {setNativeFocused} from './set-native-focused';

/**
 * @deprecated: use {@link tuiMoveFocus} instead
 * Utility method for moving focus in a list of elements
 *
 * @param currentIndex currently focused index
 * @param elements array of focusable elements
 * @param step a step to move focus by, typically -1 or 1
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function moveFocus(
    currentIndex: number,
    elements: readonly HTMLElement[],
    step: number,
): void {
    currentIndex += step;

    while (currentIndex >= 0 && currentIndex < elements.length) {
        setNativeFocused(elements[currentIndex]);

        if (isNativeFocused(elements[currentIndex])) {
            return;
        }

        currentIndex += step;
    }
}

export const tuiMoveFocus = moveFocus;
