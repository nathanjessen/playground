import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{I as r}from"./InputField-C3SMEbZ-.js";import"./index-D2MAbzvX.js";import"./clsx-B-dksMZM.js";const g={title:"Base/InputField",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Input field name attribute",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},label:{control:"text",description:"Label text for the input field"},error:{control:"text",description:"Error message to display"},type:{control:"select",options:["text","email","password","number","tel","url"],description:"HTML input type"},required:{control:"boolean",description:"Whether the field is required"},disabled:{control:"boolean",description:"Whether the field is disabled"},placeholder:{control:"text",description:"Placeholder text"}}},s={args:{name:"username",placeholder:"Enter username"}},l={args:{name:"username",label:"Username",placeholder:"Enter username"}},t={args:{name:"email",label:"Email",type:"email",required:!0,placeholder:"Enter email"}},n={args:{name:"phone",label:"Phone Number",type:"tel",required:!1,placeholder:"Enter phone number"}},o={args:{name:"email",label:"Email",type:"email",required:!0,value:"invalid-email",error:"Please enter a valid email address"}},d={args:{name:"username",label:"Username",disabled:!0,value:"johndoe"}},i={args:{name:"password",label:"Password",type:"password",required:!0,placeholder:"Enter password"}},p=a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{...a,name:"default",label:"Default",placeholder:"Default input"}),e.jsx(r,{...a,name:"required",label:"Required",required:!0,placeholder:"Required input"}),e.jsx(r,{...a,name:"error",label:"With Error",error:"This field has an error",placeholder:"Error state"}),e.jsx(r,{...a,name:"disabled",label:"Disabled",disabled:!0,value:"Disabled input"})]}),m={render:p,args:{name:"allStates",placeholder:"All states input",label:"All States"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'username',
    placeholder: 'Enter username'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter username'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Enter email'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: false,
    placeholder: 'Enter phone number'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    value: 'invalid-email',
    error: 'Please enter a valid email address'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'username',
    label: 'Username',
    disabled: true,
    value: 'johndoe'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    placeholder: 'Enter password'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: AllStatesTemplate,
  args: {
    name: 'allStates',
    placeholder: 'All states input',
    label: 'All States'
  }
}`,...m.parameters?.docs?.source}}};const E=["Default","WithLabel","Required","Optional","WithError","Disabled","Password","AllStates"];export{m as AllStates,s as Default,d as Disabled,n as Optional,i as Password,t as Required,o as WithError,l as WithLabel,E as __namedExportsOrder,g as default};
