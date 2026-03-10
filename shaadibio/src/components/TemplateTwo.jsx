function TemplateTwo({data}){

return(

<div className="bg-pink-50 p-6 rounded shadow">

<h2 className="text-2xl font-bold text-pink-600">{data.name}</h2>

{data.photo && (
<img src={data.photo} className="w-40 mt-4"/>
)}

<p>Age: {data.age}</p>
<p>{data.education}</p>
<p>{data.profession}</p>

<hr className="my-3"/>

<p>Father: {data.father}</p>
<p>Mother: {data.mother}</p>

</div>

);

}

export default TemplateTwo;