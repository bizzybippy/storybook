import{j as A}from"./jsx-runtime-DKHjylq7.js";import"./iframe-DkNLbL9q.js";function w(e){var r,s,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(r=0;r<t;r++)e[r]&&(s=w(e[r]))&&(a&&(a+=" "),a+=s)}else for(s in e)e[s]&&(a&&(a+=" "),a+=s);return a}function E(){for(var e,r,s=0,a="",t=arguments.length;s<t;s++)(e=arguments[s])&&(r=w(e))&&(a&&(a+=" "),a+=r);return a}const j=({label:e,loading:r=!1,disabled:s=!1,size:a="md",variant:t="primary",onClick:D})=>{const V={sm:"px-3 py-1 text-sm",md:"px-4 py-2",lg:"px-8 py-4 text-xl"}[a],_={primary:"bg-blue-500 hover:bg-blue-600 text-white",secondary:"bg-gray-200 hover:bg-gray-300 text-gray-800"}[t];return A.jsx("button",{onClick:D,disabled:s||r,className:E("rounded font-medium transition",V,_,(s||r)&&"opacity-50 cursor-not-allowed"),children:r?"Loading...":e})};j.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const O={title:"Components/Button",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{label:"Click me"}},o={args:{label:"Submit",loading:!0}},l={args:{label:"Can't click",disabled:!0}},i={args:{label:"Small Button",size:"sm"}},c={args:{label:"Large Button",size:"lg"}},u={args:{label:"Secondary Button",variant:"secondary"}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Click me"
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Submit",
    loading: true
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,v,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Can't click",
    disabled: true
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,B,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Small Button",
    size: "sm"
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var h,k,L;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Large Button",
    size: "lg"
  }
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var T,q,z;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Secondary Button",
    variant: "secondary"
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const R=["Default","Loading","Disabled","Small","Large","Secondary"];export{n as Default,l as Disabled,c as Large,o as Loading,u as Secondary,i as Small,R as __namedExportsOrder,O as default};
