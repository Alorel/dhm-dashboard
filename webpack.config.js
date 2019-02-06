require('ts-node').register({
  compilerOptions: {
    target: 'esnext',
    module: 'commonjs'
  }
});
const {join} = require('path');
const fs = require('fs');

const prod = !!process.env.WP_MINIMISE;

const baseConf = {
  target: 'web',
  entry: join(__dirname, 'src', 'dhm-dashboard.user.ts'),
  mode: 'production',
  optimization: {},
  devtool: false,
  output: {
    path: join(__dirname, 'dist'),
    filename: 'dhm-dashboard.user.js'
  },
  externals: {
    lodash: '_',
    'lodash-es': '_',
    moment: 'moment',
    rxjs: 'rxjs',
    bluebird: 'Promise',
    'rxjs/operators': ['rxjs', 'operators']
  },
  resolve: {
    extensions: [".ts", '.js'],
    mainFields: ['fesm5', 'esm5', 'module', 'browser', 'main']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed'
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
          options: {
            transpileOnly: false,
            configFile: 'tsconfig.json',
            context: __dirname,
            colors: true
          }
        }]
      }
    ]
  },
  plugins: []
};

const out = [baseConf];

if (prod) {
  const _ = require('lodash');
  const TerserPlugin = require('terser-webpack-plugin');
  const WrapperPlugin = require('wrapper-webpack-plugin');

  const conf = _.cloneDeep(baseConf);

  const wrap = [
    'Object',
    'Symbol',
    'document',
    'Error',
    'unsafeWindow',
    'Array'
  ].join(',');

  conf.mode = 'production';
  conf.optimization.minimizer = [
    new TerserPlugin({
      parallel: true,
      sourceMap: false,
      terserOptions: {
        output: {
          comments: false
        }
      }
    })
  ];
  conf.output.filename = 'dhm-dashboard.min.user.js';

  conf.plugins.push(
    new WrapperPlugin({
      header: `(function(${wrap}){`,
      footer: `})(${wrap});`
    })
  );

  out.push(conf);
}

const {BannerPlugin} = require('webpack');
baseConf.plugins.push(
  new BannerPlugin({
    banner: (() => {
      const path = join(__dirname, 'src', 'dhm-dashboard.meta.js');

      return () => fs.readFileSync(path, 'utf8');
    })(),
    test: /dhm-dashboard/,
    raw: true
  })
);
baseConf.optimization.minimize = false;

module.exports = out;
