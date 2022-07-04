import type { ViewerConfig, EllipseConfig } from './mod.js';
import { Viewer, Ellipse } from './mod.js';

function getAppDimensions(): { width: number, height: number } {
    const app = document.body.querySelector('.app')!;
    const bbox = app.getBoundingClientRect();
    return {
        width: bbox.width,
        height: bbox.height,
    };
}

const appDimensions = getAppDimensions();

const viewerConfig: ViewerConfig = {
    width: appDimensions.width,
    height: appDimensions.height,
};

const defaultEllipseConfig: EllipseConfig = {
    center: {
        x: viewerConfig.width / 2,
        y: viewerConfig.height / 2,
    },
    rx: viewerConfig.width / 16,
    ry: viewerConfig.height / 4,
    rotation: 0
};

const ellipseConfigs: EllipseConfig[] = [
    {
        ...defaultEllipseConfig,
        center: { 
            x: viewerConfig.width / 2,
            y: viewerConfig.height / 2,
        },
    },
    {
        ...defaultEllipseConfig,
        center: { 
            x: viewerConfig.width / 6,
            y: 2 * viewerConfig.height / 3,
        },
    },
    {
        ...defaultEllipseConfig,
        center: { 
            x: 5 * viewerConfig.width / 6,
            y: 2 * viewerConfig.height / 3,
        },
    },
];

export function main(): void {
    const viewer = Viewer.make(
        viewerConfig, 
        { parent: document.body.querySelector('.app > .viewer')! }
    );
    const ellipses = ellipseConfigs
        .map(ellipseConfig => {
            return Ellipse.make(
                ellipseConfig,
                { parent: viewer.pointer }
            );
        });
}

main();
