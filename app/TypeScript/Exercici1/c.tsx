function formatearId(id: number | string): string {
    if (typeof id === "number") {
        return `ID-${id.toFixed(0)}`;
    }
    return `ID-${id.toUpperCase()}`;
}    