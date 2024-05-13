import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const args = process.argv.slice(2) // The first two arguments are node and the script filename
const isDev = args[0];

// await esbuild
// .build({

const config = {
  entryPoints: ["./src/main.tsx"],
  bundle: true,
  sourcemap: true,
  plugins: [
    sassPlugin({type: "style", sourcemap: true}),
  ],
  tsconfig: "tsconfig.json",
  // loader: {".ts": "ts"},
  outfile: "dist/out.js",
};

const run = async (_isDev) => {
  // If more efficiency is needed on rebuild (and not attempting to hot-swap into a docker container) - can use the esbuild.rebuild
  // if (isDev){
  //   const ctx = await esbuild.context(config);
  //   await ctx.rebuild();
  //   ctx.dispose();
  //   console.log("Done rebuilding");
  //   return;
  // }

  await esbuild.build(config);
}

run(isDev);
