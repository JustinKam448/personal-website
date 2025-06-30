import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * Classname Function to use tailwind merge to allow us to easily combine classnames without writing
 * tons of lines of class names on the component
 */
export const cn = (...inputs : ClassValue[]) => {
    return twMerge(clsx(inputs));
}