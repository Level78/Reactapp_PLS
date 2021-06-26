(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[29],{735:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var e=a(1),o=a(0),i=(a(2),a(691)),r=a(150),s=a(4),c=[{name:"center",type:"array",default:"[0, 0]",description:"Map center"},{name:"pins",type:"array",default:"",description:"data of the locations. Example: [{ location: { x: number, y: number } }]"},{name:"zoom",type:"number",default:"10",description:"Map zoom"},{name:"className",type:"string",default:"",description:"External classes"}],d=[{location:{y:45.453211,x:9.248383,address:"Via A.G. Alaimo 147, 55027"}},{location:{y:45.419211,x:9.021383,address:"Via Rocca de Baldi 95, 440368"}},{location:{y:45.473211,x:9.298383,address:"Via Firenze 134, 45588"}},{location:{y:45.461211,x:9.000383,address:"Via Cavour 29, 201558"}},{location:{y:45.413211,x:9.398383,address:"Via Bologna 33, 220156"}},{location:{y:45.569211,x:9.128383,address:"Vicolo Tre Marchetti 127, 350125"}},{location:{y:45.483211,x:9.148383,address:"Via Lombardi 146, 45830"}},{location:{y:45.313211,x:9.012383,address:"Via Guantai Nuovi 99, 56989"}}],p=function(n){var t=Object.assign({},n);return Object(o.jsxs)("div",Object(e.a)(Object(e.a)({},t),{},{children:[Object(o.jsx)(r.e,{title:"Description",gutterBottom:!0,children:Object(o.jsx)(r.b,{title:"Map",path:"src/components/organisms/Map/Map.js",description:"Component to display the map"})}),Object(o.jsx)(r.e,{title:"Import",gutterBottom:!0,children:Object(o.jsx)(r.a,{code:"\nimport { Map } from 'components/organisms';\n// or\nimport Map from 'components/organisms/Map';\n"})}),Object(o.jsx)(r.e,{title:"Props & Methods",gutterBottom:!0,children:Object(o.jsx)(r.d,{dataProperties:c})}),Object(o.jsx)(r.e,{title:"Basic Example",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",position:"relative",height:"400px",children:Object(o.jsx)(s.s,{pins:d,center:[45.464211,9.011383]})}),Object(o.jsx)(r.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { Map } from 'components/organisms';\n\nconst mapData = [\n  {\n    location: {\n      y: 45.453211,\n      x: 9.248383,\n      address: 'Via A.G. Alaimo 147, 55027',\n    },\n  },\n  {\n    location: {\n      y: 45.419211,\n      x: 9.021383,\n      address: 'Via Rocca de Baldi 95, 440368',\n    },\n  },\n  {\n    location: {\n      y: 45.473211,\n      x: 9.298383,\n      address: 'Via Firenze 134, 45588',\n    },\n  },\n  {\n    location: {\n      y: 45.461211,\n      x: 9.000383,\n      address: 'Via Cavour 29, 201558',\n    },\n  },\n  {\n    location: {\n      y: 45.413211,\n      x: 9.398383,\n      address: 'Via Bologna 33, 220156',\n    },\n  },\n  {\n    location: {\n      y: 45.569211,\n      x: 9.128383,\n      address: 'Vicolo Tre Marchetti 127, 350125',\n    },\n  },\n  {\n    location: {\n      y: 45.483211,\n      x: 9.148383,\n      address: 'Via Lombardi 146, 45830',\n    },\n  },\n  {\n    location: {\n      y: 45.313211,\n      x: 9.012383,\n      address: 'Via Guantai Nuovi 99, 56989',\n    },\n  },\n];\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <Map pins={mapData} center={[45.464211, 9.011383]} />\n    </Box>\n  );\n}\n"})]})})]}))}}}]);