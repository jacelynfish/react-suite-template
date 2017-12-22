module.exports = {
  prompts: {
    name: {
      type: 'input',
      required: true,
      default: 'new_redux_proj',
      message: 'Project name'
    },
    author: {
      type: 'input',
      required: true,
      default: '',
      message: 'Author'
    },
    description: {
      type: 'input',
      required: true,
      default: 'A redux project',
      message: 'Project description'
    },
    unit: {
      type: 'confirm',
      message: 'Support unit test with jest'
    }
  },
  filters: {
    '__jest__/**/*': 'unit'
  }
};
