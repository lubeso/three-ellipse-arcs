import { esbuildPlugin } from '@web/dev-server-esbuild';

/** @type {import("@web/test-runner").TestRunnerConfig } */
const config = {
    files: 'test/**/*.ts',
    nodeResolve: true,
    plugins: [
        esbuildPlugin({
            ts: true,
            target: 'esnext',
        })
    ]
};

export default config;