module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!(vuetify|@mdi/js)/)'],
  moduleNameMapper: {
    '^vuetify/components$': '<rootDir>/node_modules/vuetify/lib/components/index.js',
    '^vuetify/iconsets/mdi-svg$': '<rootDir>/node_modules/vuetify/lib/iconsets/mdi-svg.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vuetify/styles$': 'jest-transform-stub',
    '\\.(css|sass|scss)$': 'jest-transform-stub'
  }
}
