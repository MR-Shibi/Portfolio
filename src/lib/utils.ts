/**
 * Joins class names together, ignoring falsy values.
 * 
 * @param classes - List of class names (string, undefined, null, or false)
 * @returns A single string of class names separated by spaces
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}
