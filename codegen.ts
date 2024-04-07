import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:80/graphql",
  documents: ["src/**/*.query.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/app/_types/": {
      preset: "client",
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
