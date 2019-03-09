# ts-lib-starter

## todo

- [ ] builded `d.ts` contains line `export {};`, why?
- [ ] tsconfig.json: including `__tests__` dir is necessary for IDE (autocomplete etc.), but unwanted for dist
  - see [here](https://www.google.com/search?q=tsconfig+include+tests) and [here](https://stackoverflow.com/questions/35470511/setting-up-tsconfig-with-spec-test-folder)
  - probably solved via extending tsconfig?
- [ ] exported functions are not suggested nor autoimported when the lib is installed on a project
