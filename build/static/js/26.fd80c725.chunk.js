(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[26],{707:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return p}));var n=o(1),s=o(0),c=(o(2),o(691)),r=o(6),a=o(150),i=o(9),l=[{name:"fontIconClass",type:"string",default:"",description:"The classes of the font icon"},{name:"className",type:"string",default:"",description:"External classes"},{name:"color",type:"string",default:"",description:"Source set for the responsive images"},{name:"title",type:"string",default:"",description:"Title of the icon-text"},{name:"iconProps",type:"object",default:"",description:"Additional properties to pass to the Icon component"},{name:"typographyProps",type:"object",default:"",description:"Additional properties to pass to the Typography component"}],p=function(t){var e=Object.assign({},t);return Object(s.jsxs)("div",Object(n.a)(Object(n.a)({},e),{},{children:[Object(s.jsx)(a.e,{title:"Description",gutterBottom:!0,children:Object(s.jsx)(a.b,{title:"IconText",path:"src/components/atoms/IconText/IconText.js",description:"Component to display the icon text"})}),Object(s.jsx)(a.e,{title:"Import",gutterBottom:!0,children:Object(s.jsx)(a.a,{code:"\nimport { IconText } from 'components/atoms';\n// or\nimport IconText from 'components/atoms/IconText';\n"})}),Object(s.jsx)(a.e,{title:"Props & Methods",gutterBottom:!0,children:Object(s.jsx)(a.d,{dataProperties:l})}),Object(s.jsx)(a.e,{title:"Example",gutterBottom:!0,children:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(s.jsxs)(c.a,{display:"flex",justifyContent:"space-between",alignItems:"center",minWidth:"650px",children:[Object(s.jsx)(i.c,{fontIconClass:"fas fa-users",color:r.a.pink[50],title:"Users Icon Text"}),Object(s.jsx)(i.c,{fontIconClass:"far fa-address-book",color:r.a.purple[500],title:"Book Icon Text"}),Object(s.jsx)(i.c,{fontIconClass:"fab fa-angellist",color:r.a.blue[500],title:"Cool Icon Text"}),Object(s.jsx)(i.c,{fontIconClass:"fas fa-phone-alt",color:r.a.green[500],title:"Phone Icon Text"})]})}),Object(s.jsx)(a.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { IconText } from \'components/atoms\';\n\nexport default function IconExample() {\n  return (\n    <Box padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">\n      <Box display="flex" justifyContent="space-between" alignItems="center" minWidth="650px">\n        <IconText fontIconClass="fas fa-users" color={colors.pink[50]} title="Users Icon Text" />\n        <IconText fontIconClass="far fa-address-book" color={colors.purple[500]} title="Book Icon Text" />\n        <IconText fontIconClass="fab fa-angellist" color={colors.blue[500]} title="Cool Icon Text" />\n        <IconText fontIconClass="fas fa-phone-alt"  color={colors.green[500]} title="Phone Icon Text" />\n      </Box>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);