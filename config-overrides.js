const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#C51F29' },
         }),
);

// const { override, addWebpackPlugin } = require('customize-cra');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

// module.exports = override(addWebpackPlugin(new AntdDayjsWebpackPlugin()));