(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[34],{714:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(1),r=n(0),i=(n(2),n(691)),a=n(72),s=n(663),c=n(150),l=n(9),p=n(5),d=[{name:"title",type:"union",default:"",description:"Title of the section header. One of type: string, node"},{name:"align",type:"enum",default:"",description:"Header content (title, subtitle, CTAs) alignment. One of: right, left, center"},{name:"className",type:"string",default:"",description:"External classes"},{name:"ctaGroup",type:"node[]",default:"",description:"Array of the CTAs"},{name:"disableGutter",type:"bool",default:"",description:"Whether to disable bottom margin of the section"},{name:"fadeUp",type:"bool",default:"",description:"Whether to fade up on scroll"},{name:"label",type:"string",default:"",description:"Label title of the section header"},{name:"labelProps",type:"object",default:"",description:"Additional properties to pass to the label Typography component"},{name:"overline",type:"node",default:"",description:"The overline component in the section header"},{name:"subtitle",type:"union",default:"",description:"Subtitle of the section header. One of type: string, node"},{name:"subtitleColor",type:"enum",default:"",description:"SubTitle color. One of: textPrimary, textSecondary, primary, secondary"},{name:"subtitleProps",type:"object",default:"",description:"Additional properties to pass to the subtitle Typography component"},{name:"subtitleVariant",type:"enum",default:"",description:"SubTitle variant. One of: h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2"},{name:"titleClasses",type:"string",default:"",description:"Styles classes to be attached to the title from the parent component"},{name:"titleProps",type:"object",default:"",description:"Additional properties to pass to the title Typography component"},{name:"titleVariant",type:"enum",default:"h4",description:"Title variant. One of: h1, h2, h3, h4, h5, h6"}],u=function(e){var t=Object.assign({},e);return Object(r.jsxs)("div",Object(o.a)(Object(o.a)({},t),{},{children:[Object(r.jsx)(c.e,{title:"Description",gutterBottom:!0,children:Object(r.jsx)(c.b,{title:"SectionHeader",path:"src/components/molecules/SectionHeader/SectionHeader.js",description:"Component to display the section headers"})}),Object(r.jsx)(c.e,{title:"Import",gutterBottom:!0,children:Object(r.jsx)(c.a,{code:"\nimport { SectionHeader } from 'components/molecules';\n// or\nimport SectionHeader from 'components/molecules/SectionHeader';\n"})}),Object(r.jsx)(c.e,{title:"Props & Methods",gutterBottom:!0,children:Object(r.jsx)(c.d,{dataProperties:d})}),Object(r.jsx)(c.e,{title:"Basic Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{title:"We are reimagining renting to help you achieve your dreams",subtitle:"Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        title="We are reimagining renting to help you achieve your dreams"\n        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"Example With Highlighted Title",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{title:Object(r.jsxs)("span",{children:["We are reimagining renting to help you ",Object(r.jsx)(a.a,{color:"secondary",variant:"inherit",component:"span",children:"achieve your dreams"})]}),subtitle:"Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, Typography } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        title={<span>We are reimagining renting to help you <Typography color="secondary" variant="inherit" component="span">achieve your dreams</Typography></span>}\n        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"Aligned Left and with FadeUp",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{title:"We are reimagining renting to help you achieve your dreams",subtitle:"Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience.",align:"left",fadeUp:!0})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        title="We are reimagining renting to help you achieve your dreams"\n        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."\n        align="left"\n        fadeUp\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"Title only",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{title:"We are reimagining renting to help you achieve your dreams"})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        title="We are reimagining renting to help you achieve your dreams"\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"With Call to action buttons",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{title:"We are reimagining renting to help you achieve your dreams",subtitle:"Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience.",ctaGroup:[Object(r.jsx)(s.a,{color:"primary",variant:"contained",children:"Submit"}),Object(r.jsx)(s.a,{color:"primary",variant:"outlined",children:"Learn More"})]})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, Button } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        title="We are reimagining renting to help you achieve your dreams"\n        subtitle="Our mission is to help you grow your business, meet and connect with people who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."\n        ctaGroup={[(\n            <Button color="primary" variant="contained">Submit</Button>\n        ), (\n            <Button color="primary" variant="outlined">Learn More</Button>\n        )]}\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"With HTML injected title and subtitle",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{title:Object(r.jsxs)(r.Fragment,{children:["Find a job you love.",Object(r.jsx)("a",{href:"https://thefront.maccarianagency.com/",children:" Learn more"})]}),subtitle:Object(r.jsxs)(r.Fragment,{children:["Try it now.",Object(r.jsx)("a",{href:"https://thefront.maccarianagency.com/",children:" Learn more"})]}),ctaGroup:[Object(r.jsx)(s.a,{color:"primary",variant:"contained",children:"Submit"}),Object(r.jsx)(s.a,{color:"primary",variant:"outlined",children:"Learn More"})]})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        title={<>Find a job you love.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}\n        subtitle={<>Try it now.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}\n        ctaGroup={[(\n            <Button color="primary" variant="contained">Submit</Button>\n        ), (\n            <Button color="primary" variant="outlined">Learn More</Button>\n        )]}\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"With label",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{label:"our process",title:Object(r.jsxs)(r.Fragment,{children:["Find a job you love.",Object(r.jsx)("a",{href:"https://thefront.maccarianagency.com/",children:" Learn more"})]}),subtitle:Object(r.jsxs)(r.Fragment,{children:["Try it now.",Object(r.jsx)("a",{href:"https://thefront.maccarianagency.com/",children:" Learn more"})]}),ctaGroup:[Object(r.jsx)(s.a,{color:"primary",variant:"contained",children:"Submit"}),Object(r.jsx)(s.a,{color:"primary",variant:"outlined",children:"Learn More"})]})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        label="our process"\n        title={<>Find a job you love.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}\n        subtitle={<>Try it now.<a href="https://thefront.maccarianagency.com/"> Learn more</a></>}\n        ctaGroup={[(\n            <Button color="primary" variant="contained">Submit</Button>\n        ), (\n            <Button color="primary" variant="outlined">Learn More</Button>\n        )]}\n      />\n    </Box>\n  );\n}\n'})]})}),Object(r.jsx)(c.e,{title:"With Overline",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(p.e,{overline:Object(r.jsx)(l.d,{src:"https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png",alt:"rating",style:{width:120,height:"auto"},width:"auto"}),title:"Rated 5 out of 5 stars by our customers!",subtitle:"Companies from across the globe have had fantastic experiences using TheFront. Here\u2019s what they have to say.",ctaGroup:[Object(r.jsx)(s.a,{color:"primary",variant:"contained",children:"Submit"}),Object(r.jsx)(s.a,{color:"primary",variant:"outlined",children:"Learn More"})]})}),Object(r.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box } from \'@material-ui/core\';\nimport { Image } from \'components/atoms\';\nimport { SectionHeader } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <SectionHeader\n        overline={<Image src="https://assets.maccarianagency.com/the-front/illustrations/rated-by-our-customer.png" alt="rating" style={{ width: 120, height: \'auto\' }} width="auto" />}\n        title="Rated 5 out of 5 stars by our customers!"\n        subtitle="Companies from across the globe have had fantastic experiences using TheFront. Here\u2019s what they have to say."\n        ctaGroup={[(\n            <Button color="primary" variant="contained">Submit</Button>\n        ), (\n            <Button color="primary" variant="outlined">Learn More</Button>\n        )]}\n      />\n    </Box>\n  );\n}\n'})]})})]}))}}}]);