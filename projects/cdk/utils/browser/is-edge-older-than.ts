const EDGE = 'edge/';

export function isEdgeOlderThan(version: number, userAgent: string): boolean {
    const currentVersion = parseInt(
        userAgent.slice(userAgent.toLowerCase().indexOf(EDGE) + EDGE.length),
        10,
    );

    return currentVersion < version;
}
