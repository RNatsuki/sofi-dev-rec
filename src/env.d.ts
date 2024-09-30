declare namespace NodeJS {
  interface ProcessEnv {
    readonly YT_API: string;
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
