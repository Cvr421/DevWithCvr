

export default ({
  
    
    name:"pageInfo",
    title: "PageInfo",
    type: "document",
    fields: [
      {
        name:"name",
        title:"Name",
        type:"string",
      },
      {
       name:"role",
       title:"Role",
       type:"string",
      },
      {
        name:"heroImage",
        title:"Image",
        type:"image",
        options:{
          hotspot:true,
        },
      },
      {
        name:"profilePic",
        title:"ProfilePic",
        type:"image",
        options:{
          hotspot:true,
        },
      },
      {
        name:"email",
        title:"Email",
        type:"string",
      },
      {
        name:"backgroundInfo",
        title:"About",
        type:"text",
      },
      {
        name:"socials",
        title:"Socials",
        type:"array",
        of:[{type:"reference",to: {type:"social"}}]
      },
    ],
 

 
})
