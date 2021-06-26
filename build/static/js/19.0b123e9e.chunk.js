(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[19],{730:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return m}));var n=o(1),i=o(0),r=(o(2),o(691)),s=o(6),c=o(150),a=o(4),p=o(9),d=o(5),l=[{name:"icon",type:"node",default:"",description:"Whether should show the alternate icon"},{name:"title",type:"string",default:"",description:"The title"},{name:"align",type:"enum",default:"center",description:"The alignment of the items. One of: left, right, center"},{name:"subtitle",type:"string",default:"",description:"The subtitle"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"subtitleVariant",type:"string",default:"body1",description:"Subtitle variant"},{name:"titleProps",type:"object",default:"body1",description:"Additional props to pass to the title Typography component"},{name:"titleVariant",type:"string",default:"h6",description:"Title variant"},{name:"className",type:"string",default:"",description:"External classes"}],m=function(e){var t=Object.assign({},e);return Object(i.jsxs)("div",Object(n.a)(Object(n.a)({},t),{},{children:[Object(i.jsx)(c.e,{title:"Description",gutterBottom:!0,children:Object(i.jsx)(c.b,{title:"DescriptionListIcon",path:"src/components/organisms/DescriptionListIcon/DescriptionListIcon.js",description:"Component to display the description list with icon"})}),Object(i.jsx)(c.e,{title:"Import",gutterBottom:!0,children:Object(i.jsx)(c.a,{code:"\nimport { DescriptionListIcon } from 'components/organisms';\n// or\nimport DescriptionListIcon from 'components/organisms/DescriptionListIcon';\n"})}),Object(i.jsx)(c.e,{title:"Props & Methods",gutterBottom:!0,children:Object(i.jsx)(c.d,{dataProperties:l})}),Object(i.jsx)(c.e,{title:"Basic Example",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(i.jsx)(a.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:Object(i.jsx)(p.b,{fontIconClass:"far fa-address-book",size:"large",fontIconColor:s.a.purple[500]})})}),Object(i.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { Icon } from "components/atoms";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<Icon fontIconClass="far fa-address-book" size="large" fontIconColor={colors.purple[500]} />}\n      />\n    </Box>\n  );\n}\n'})]})}),Object(i.jsx)(c.e,{title:"Custom Shadow Example",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(i.jsx)(a.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:Object(i.jsx)(d.c,{fontIconClass:"far fa-address-book",size:"medium",color:s.a.purple})})}),Object(i.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { IconAlternate } from "components/molecules";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.purple} />}\n      />\n    </Box>\n  );\n}\n'})]})}),Object(i.jsx)(c.e,{title:"LiftUp Effect Example",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(i.jsx)(a.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:Object(i.jsx)(d.c,{fontIconClass:"far fa-address-book",size:"medium",color:s.a.blue}),align:"left"})}),Object(i.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { IconAlternate } from "components/molecules";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.blue} />}\n        align="left"\n      />\n    </Box>\n  );\n}\n'})]})}),Object(i.jsx)(c.e,{title:"Basic Card with No Border and No Shadow Example",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(i.jsx)(a.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:Object(i.jsx)(d.c,{fontIconClass:"far fa-address-book",size:"medium",color:s.a.blue}),align:"right"})}),Object(i.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { IconAlternate } from "components/molecules";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.blue} />}\n        align="right"\n      />\n    </Box>\n  );\n}\n'})]})})]}))}}}]);