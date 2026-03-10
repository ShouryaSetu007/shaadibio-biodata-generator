function TemplateOne({data}){

return(

<div className="border p-6 rounded shadow">

{data.photo && (
<img src={data.photo} className="w-32 h-32 rounded-full mx-auto"/>
)}

<h2 className="text-xl font-bold text-center mt-3">{data.name}</h2>

<p>Age: {data.age}</p>
<p>Education: {data.education}</p>
<p>Profession: {data.profession}</p>

<h3 className="font-bold mt-3">Family</h3>

<p>Father: {data.father}</p>
<p>Mother: {data.mother}</p>

</div>

);

}

export default TemplateOne;