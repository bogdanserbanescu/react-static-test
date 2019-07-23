

import React from 'react'
import universal, { setHasBabelPlugin } from 'E:/git/react-static-test/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.tsx'), universalOptions)
      t_0.template = '../src/pages/404.tsx'
      
const t_1 = universal(import('../src/pages/about.tsx'), universalOptions)
      t_1.template = '../src/pages/about.tsx'
      
const t_2 = universal(import('../src/pages/blog.tsx'), universalOptions)
      t_2.template = '../src/pages/blog.tsx'
      
const t_3 = universal(import('../src/pages/index.tsx'), universalOptions)
      t_3.template = '../src/pages/index.tsx'
      
const t_4 = universal(import('../src/containers/Post'), universalOptions)
      t_4.template = '../src/containers/Post'
      

// Template Map
export default {
  '../src/pages/404.tsx': t_0,
'../src/pages/about.tsx': t_1,
'../src/pages/blog.tsx': t_2,
'../src/pages/index.tsx': t_3,
'../src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.tsx"

