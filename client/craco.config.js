const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
                 '@primary-color':'#1067EA',
                 '@body-background':'#3C6C98',
                },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};