const map = new Map([
    ['components/select', [5]],
    ['components/multi-select', [4]],
    ['components/mobile-calendar', [2]], // flaky test, need investigate
    ['components/table', [4, 5]], // randomly generated data
    ['components/preview', [1, 2, 3]],
]);

export function tuiExcluded(path: string, sample: number): boolean {
    const exclusions = map.get(path);

    return !!exclusions && exclusions.includes(sample);
}
