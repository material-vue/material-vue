import * as MColor from '@material/material-color-utilities'
// import {CorePalette} from "@material/material-color-utilities/palettes/core_palette";

export const MaterialColor  = MColor;

export function applyTheme(themeLight={}, themeDark={}, element=null) {
    let styleStringDark = '.dark {'
    let styleStringLight = ':root {'
    let styleStringLightClass = '.light {'

    for (const [key, value] of Object.entries(themeLight)) {
        styleStringLight += `--md-sys-color-${key}:` + "#" + (parseInt(value) & 0x00FFFFFF).toString(16).padStart(6, '0') + ';\n';
        styleStringLightClass += `--md-sys-color-${key}:` + "#" + (parseInt(value) & 0x00FFFFFF).toString(16).padStart(6, '0') + ';\n';
        // element.style.setProperty(`--md-sys-color-${key}`, "#" + (parseInt(value) & 0x00FFFFFF).toString(16).padStart(6, '0'))
    }
    styleStringLight += '}';

    for (const [key, value] of Object.entries(themeDark)) {
        styleStringDark += `--md-sys-color-${key}:` + "#" + (parseInt(value) & 0x00FFFFFF).toString(16).padStart(6, '0') + ';\n';
        // element.style.setProperty(`--md-sys-color-${key}`, "#" + (parseInt(value) & 0x00FFFFFF).toString(16).padStart(6, '0'))
    }
    styleStringDark += '}';

    const style = document.createElement('style');
    style.innerHTML = styleStringLight + '\n' + styleStringDark + '\n' + styleStringLightClass;
    document.head.appendChild(style);
}

export function lightFromCorePalette(source) {
    const core = MColor.CorePalette.contentOf(source)
    return {
        primary: core.a1.tone(40),
        onPrimary: core.a1.tone(100),
        primaryContainer: core.a1.tone(90),
        onPrimaryContainer: core.a1.tone(10),
        secondary: core.a2.tone(40),
        onSecondary: core.a2.tone(100),
        secondaryContainer: core.a2.tone(90),
        onSecondaryContainer: core.a2.tone(10),
        tertiary: core.a3.tone(40),
        onTertiary: core.a3.tone(100),
        tertiaryContainer: core.a3.tone(90),
        onTertiaryContainer: core.a3.tone(10),
        error: core.error.tone(40),
        onError: core.error.tone(100),
        errorContainer: core.error.tone(90),
        onErrorContainer: core.error.tone(10),
        background: core.n1.tone(99),
        onBackground: core.n1.tone(10),
        surface: core.n1.tone(99),
        onSurface: core.n1.tone(10),
        surfaceVariant: core.n2.tone(90),
        onSurfaceVariant: core.n2.tone(30),
        outline: core.n2.tone(50),
        outlineVariant: core.n2.tone(80),
        shadow: core.n1.tone(0),
        scrim: core.n1.tone(0),
        inverseSurface: core.n1.tone(20),
        inverseOnSurface: core.n1.tone(95),
        inversePrimary: core.a1.tone(80),

        surfaceDim: core.n1.tone(87),
        surfaceBright: core.n1.tone(98),

        surfaceContainerLowest: core.n1.tone(100),
        surfaceContainerLow: core.n1.tone(96),
        surfaceContainer: core.n1.tone(94),
        surfaceContainerHigh: core.n1.tone(92),
        surfaceContainerHighest: core.n1.tone(90),
    };
}


export function darkFromCorePalette(source) {
    const core = MColor.CorePalette.contentOf(source)
    return {
        primary: core.a1.tone(80),
        onPrimary: core.a1.tone(20),
        primaryContainer: core.a1.tone(30),
        onPrimaryContainer: core.a1.tone(90),
        secondary: core.a2.tone(80),
        onSecondary: core.a2.tone(20),
        secondaryContainer: core.a2.tone(30),
        onSecondaryContainer: core.a2.tone(90),
        tertiary: core.a3.tone(80),
        onTertiary: core.a3.tone(20),
        tertiaryContainer: core.a3.tone(30),
        onTertiaryContainer: core.a3.tone(90),
        error: core.error.tone(80),
        onError: core.error.tone(20),
        errorContainer: core.error.tone(30),
        onErrorContainer: core.error.tone(80),
        background: core.n1.tone(10),
        onBackground: core.n1.tone(90),
        surface: core.n1.tone(10),
        onSurface: core.n1.tone(90),
        surfaceVariant: core.n2.tone(30),
        onSurfaceVariant: core.n2.tone(80),
        outline: core.n2.tone(60),
        outlineVariant: core.n2.tone(30),
        shadow: core.n1.tone(0),
        scrim: core.n1.tone(0),
        inverseSurface: core.n1.tone(90),
        inverseOnSurface: core.n1.tone(20),
        inversePrimary: core.a1.tone(40),

        surfaceDim: core.n1.tone(6),
        surfaceBright: core.n1.tone(24),

        surfaceContainerLowest: core.n1.tone(4),
        surfaceContainerLow: core.n1.tone(10),
        surfaceContainer: core.n1.tone(12),
        surfaceContainerHigh: core.n1.tone(17),
        surfaceContainerHighest: core.n1.tone(22),
    };
}