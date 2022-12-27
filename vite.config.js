import path from "path";

/** @type {import("vite").UserConfig} */
export default {
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
            "~font-awesome": path.resolve(__dirname, "node_modules/font-awesome"),
        }
    }
}