module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{lowerCase name}}.module.css',
        templateFile: 'templates/module.css.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      // {
      //   type: 'add',
      //   path: '../src/components/{{pascalCase name}}/test.tsx',
      //   templateFile: 'templates/test.tsx.hbs'
      // },
      {
        type: 'append',
        path: '../src/index.tsx',
        template: 'export * from "./components/{{pascalCase name}}";'
      }
    ]
  });
}