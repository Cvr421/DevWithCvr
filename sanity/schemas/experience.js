export default{
  name:"experience",
  title:"Experience",
  type:"document",
  fields:[
    {
      name:"company",
      title:"Company",
      type:"text",
    },
    {
      name:"companyImage",
      title:"Company Image",
      type:"image",
    },
    {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of:[{type:"reference", to: {type: "skill" }}],
    //  {type:"reference", to: [{type: "skill" }]},

    },
    {
      name:"points",
      title:"Points",
      type:"array",
      of:[{type:"string"}],
  },
 {
  name:"linkToBuild",
  title:"LinkToBuild",
  type:"url",

 }
  ],
};