import { useState } from "react";
import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";

function CreateBio(){

const [template,setTemplate] = useState("one");

const [form,setForm] = useState({
name:"",
dob:"",
age:"",
father:"",
mother:"",
education:"",
profession:"",
horoscope:"",
photo:null
});

const handleDOB = (e)=>{

const dob = new Date(e.target.value);
const age = new Date().getFullYear() - dob.getFullYear();

setForm({...form,dob:e.target.value,age});

};

const handlePhoto = (e)=>{

const file = e.target.files[0];
setForm({...form,photo:URL.createObjectURL(file)});

};

return(

<div className="grid md:grid-cols-2 gap-10 p-10">

<div>

<h2 className="text-2xl font-bold mb-4">Create Biodata</h2>

<input
placeholder="Name"
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
type="date"
className="border p-2 w-full mb-3"
onChange={handleDOB}
/>

<p>Age: {form.age}</p>

<input
placeholder="Father Name"
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,father:e.target.value})}
/>

<input
placeholder="Mother Name"
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,mother:e.target.value})}
/>

<input
placeholder="Education"
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,education:e.target.value})}
/>

<input
placeholder="Profession"
className="border p-2 w-full mb-3"
onChange={(e)=>setForm({...form,profession:e.target.value})}
/>

<input type="file" onChange={handlePhoto}/>

<select
className="border p-2 w-full mt-3"
onChange={(e)=>setTemplate(e.target.value)}
>
<option value="one">Template 1</option>
<option value="two">Template 2</option>
</select>

</div>

<div>

<h2 className="text-xl font-bold mb-4">Preview</h2>

{template==="one" ?
<TemplateOne data={form}/>
:
<TemplateTwo data={form}/>
}

</div>

</div>

);

}

export default CreateBio;