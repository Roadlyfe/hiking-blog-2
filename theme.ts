import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",    
    "--papafam-brand": "#ff9f1c",    
    "--my-red": "#ffbf69",
    "--my-yellow": "#cbf3f0",
    "--my-green": "#2ec4b6",
};

export const myTheme = buildLegacyTheme({
    
    /* Base Colors theme */

    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    /* Brand */
    "--brand-primary": props["--papafam-brand"],

    //Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--papafam-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    /* State */ 
    "--state-info-color": props["--papafam-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    /* NavBAr */
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--papafam-brand"],
});