/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
