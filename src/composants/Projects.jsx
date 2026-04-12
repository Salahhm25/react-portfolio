import { useState} from 'react';
import './styles/project.css'
  const projects = [
  { id: 1, title: "Quiz App",        category: "Web App",description: "تطبيق أسئلة تفاعلي لتقييم الطلاب",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAAC6CAMAAACHgTh+AAABdFBMVEUoLDQBcpb9v0P///8AbpNwrcwAdJkCTGeNvdb8kwIAbZL/lAApKTApJy397TIzhqhfosJSmblFkLEAbpgVeJz/wz4AABEAAAAAbJr/9Cf9tzkAcZgdSV1np8YKSGEAaJsSXnsLaIgXV3AAQ2mPpLImMjwARmeSsGz26zMeISkiPUwVWXQmMDncq0XKizl/s86KrHDXrlMpfo7NqljWjS7Eplx0d1weRlni3kEAAxr/+exHZ366ydVsWEyllYUAAAvg4OEEDxwAIDbPfhbKgSZjln/DzVTgr0Y9hokxgYxzrtTB0pdbqMzbl0aawscrgql+sLgAX5/P00/fuGbbjil0bFMbYGxheG2vwGAycY3c3EJET1ybn6N6dXF6hpVKQToeExqLe2dALyZqYl/KvK4cNVFOT1ITHy3R4vBIJhaxxtaImq1/dnfs4NPLxcgnGhfq+v8AACRDGQBeanZUQjQwAAAzTmixoZRAODxhZGlfSTV5amNtB09iAAAH30lEQVR4nO2cjVfTVhTAG1+axpCQpo21rC20laJpcdl0GwITDerGnBubTjaVsTmxZQIOP+bnP7/78t02Lek5sOjr/R3PIXwUkx/33nffe2lSKQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEOTDRpZlxQGOkj6ZhAETqWa53qpWa9Vqq15upsBK0ieVFLKSWqjWhG5q1YXUWCpR5DJ1wfVCnZRBVcA42FHmW1EyfCWtec+I3FxI9Ez/D5RGa6AMT0mrYRsxpjOZ6aTP93iRlfohNhwjdagjq9euzzEuRGnyh9uwjUjN1WsTE9fPMC0EgiOWDSokf33i5MmJ8wxHiJyqxdbB5T8FHSc/OcWuELnBjazjxAlmhcjNQZc+TIcrZIG5PkRuDgiO4o1+ISEdjhDmfECyePASwHufzXw29U1xmA4Q8m2ZNR2pee9aJV1Lm6aZzfG8q2OyV0iPDvDBnA7FHVl4PS16aJKjY3JyrTRUx/nVpE//qPH6DikHHtKaquay9MDV8V1+zHR4tVTSQIJOawckCxzfpDrO2Tp4jz4dnxebrKWL4lZPVRSzfiWV1Jvf+zr0isutH3p15Eu8cvh/8THhd+mmWJGCxJg56+vg9LRDvw4otTC5S/oSjpSGW0s10eTzXDGsw68dKmV9PUoHCGkkfQlHiVJ1q4cpasW1qbMzIR0/rrvp49SOL/qSxf6mUGUpQNzw4HRRFNYmJx0hjo6fRM3xIeQofTq8WGIpQLzw4KGa5tfOOUKc2nEhJ1YcH/qg2sGxFyDevEUVTSl/wRbys6MjnxPTToHVNS03WAcISfoijgy57PrgqQ/OEXLb0QEV1vXBRdSOcBMvMDODUWreNUH9oO0nFTJp6+D4rJh166neq+NiSdf1QEiNlYRp+NN83hRzvCeE6rC/4uroTZY7t2g7sh4ECCMV1U8XjkaDKTkRMuXogNmMEx59yXLnFm1W00GAsJIw3ujiJozmCLlNdXCC6aZLqS9ZinY/Ei4gjIwwSuiaoHyKOSqkVLQn+KZoRkfHxd4FIgobPhrhVUKpAhHi/tkl1RRFnY+tg40CIi90rZryIMTUVEidHF0XUvnoZInQwQlMLKGGyqkTFTl/eUxMCwNqR5QORgpq34Ycz2n2iqGZVaVRdDAy6Q8PL54RiRd0zl0WKv0SUwcjA0yEjzCxo4MZH0N3bEfQwQlMdOzB7CVKR+xkoTDiY3B89On4cpgORuJjQP2g1XQkHazUj1b/+MLrqqoKpbsj6eCEFhM+evsPSa043VhrDoTE18FI/9Hbn/K2DdM0q9OZubun4utgpD/tuesDZvhiWoVmDHRkMme+OhXo4KMIv5SNXcv5sA8edNhtutDKZEJCQIcaSejFwnzSl3IkhBsQOt23Z/gwWGRCQkCHt1/Zgxq8mInhtnvAVd0ZPiUTCKG1Q89GElovZGK47VoAgVrq7i6UuI1MIMQupZHlI1Q/2Fj+oAQ+IDwcHaWNuYwv5Fd7j3ZoLeUY2pAKOnbdW00v3r6U8YRMV+2l1P76UekSwka3TunZn6M6fpua9ITM3XO+e6gPZtIlWGH3fdD9qEtz0xtc9V7FdPcr9T6684WV8Ai17DC8OEuEzn7lhkA3ICrh+z8G1hA2mnUPr4BA9+H7mDoLo4qU9u7/0LVIvCBhpppS/Jst0852XP7+pUv3b8w4FdbtuIb3Y2yFRyrl/pVzboDMAHSQhX7VKx/O/UF9ePGR9AUcLd4QA9MXMzRq0L2YUEM+GDamtiG8HkSn9yT795/m6N2ocXQw03v4eHdcwhBj5ngJRg5Jh8ldJY4ORnZuu1DKgRDRrGhaFmb+8aIDsoW58AhPczV/+1aNp4ORiW0P/jSG51WtUsnmdIkfLsLVwV7xcJCDnZiI6etgHYwNLSFivhO5SwfHxiphFCO9+9aLDqaf7yCPKITlZLEZ4e3qHCs7ckNRmrHfoi1wC8zrgJSZH36DTKCjOs94srgozRhVROCbYxAcDrJSPmTkFfjyWD1VSVYWakOeH1RbGCsbFFlp1CMeMAVfkeqNsbNhoyiNclXqevyYVC03lLGpG/3QB9Q1muVyvV4vl5uNcX48XYBMH2Eo49MLEQRBEARBkESQjY4RfGZYoWOj/6eZx3qwufm7L8HYuvqHd/xg79H4CSnMEmD/T/dTa4c8dCUUdgj5K6nTSgpjiyw9erBDti2rAAoWU1YbjoCO/JhcJSudlFGwGm2Lfui02U8gGg8d4zFZOr1D/l6FD1+Td09oxKxYu2SP7C8as+QpxM8/y2CHkMusCykc0Jx4dkCe+z4uv9jcJUtvruwQcPTSmiVLb78mK8uE7M2SfevwX/lRAz5e2j7+DXx0oHJc7rwi++1Z8hrqy0phmWzDvwJ8fzHpEz5mLPjTF6xXdr48f3Zg+7jyhKwsWnadJfunx8uHAXmwuUnIQ0iPlV0nPqDE7m29OSDv37Z3yDtIkrdQZODnHj2Bspv0CR83MMBQ3hdeEKiYdj09oF94SvYLBgTJ611aSLev2PV06U3Sp3v8GIvt9hYdT2BUpeNtwaDDbcEq0FCA41nysNm2II62O23mo8NGNgxr4JXCeAtNCM0r9nMlDtDAv4emQ16++rqT9Ll8EBiW3YPJFupAEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBUv8BgOX++JKA4yYAAAAASUVORK5CYII=",
      link: "#" },
  { id: 2, title: "Portfolio",       category: "UI", description: "معرض أعمال شخصي يعرض مشاريعي البرمجية",
      image: "data:image/png;base64,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",
      link: "#" },
  { id: 3, title: "Grade Tracker",   category: "Web App", description: "نظام لتتبع علامات الطلاب وحساب المعدلات",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-CGcK8W-Q9NDxPjGxFUqahaJMRtS3eawng&s",
      link: "#" },
  { id: 4, title: "Pomodoro Timer",  category: "Tool" ,description: "تطبيق مؤقت بومودورو لزيادة الإنتاجية وتنظيم وقت الدراسة",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst1mrkG0pg-xbuG9yA8V4V3ilT4qZ9nytWg&s",
      link: "#"},
  { id: 5, title: "Flashcard App",   category: "Tool",description: "تطبيق بطاقات تعليمية للمراجعة والحفظ السريع",
      image: "data:image/png;base64,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",
      link: "#" },
  { id: 6, title: "Landing Page",    category: "UI",description: "تصميم واجهة مستخدم حديثة لصفحة هبوط متجاوبة",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJbbOHLVirFWacFeFdGoTQpm9d9dfQF7fiw&s",
      link: "#" },
];
function ProjectCard({pro}){
  return (
  <div className='project-card' key={pro.id}>
    <p>{pro.title}</p> 
    <img className='img1' src={pro.image} alt={pro.title} /> 
    <h3>{pro.category}</h3>
    <p style={{textAlign:'center'}}>{pro.description}</p>
    <a href={pro.link}>شاهد المشروع</a></div>
  )
}
export default function Projects() {

const[isOpen, setIsOpen]=useState(true)

const uniquecategory=[... new Set(projects.map((project)=>{
      return project.category;
  }))]
const [newcat,setNewcat]=useState("");
const fileredtitle= projects.filter((project)=>{
  return newcat === "" ?  true : project.category === newcat
  })

  return (
    <>
      <div className='Projectsbody'>
        <div style={{display:"flex", justifyContent:"center"}} >
           <button   className='All'   onClick={()=>{ setIsOpen(!isOpen); setNewcat('');}}>{isOpen ? "Close Projects" :"View All Projects"}</button>
        </div>
        {isOpen &&(
          <div style={{display:"flex", flexDirection:"column",justifyContent:'center', alignItems:'center', gap:"30px"}}>
            <div>
            <button
             className="categories"
             onClick={()=>setNewcat('')}
             style={{ background: newcat === "" ? "#007bff" : "white" }}
            >
              All
            </button>
            {uniquecategory.map((category,index)=>(
               <button onClick={()=>{setNewcat(category)}} 
                        className='categories'
                         style={{background: newcat===category?"#007bff":"white" }}
                         key={index}>
                {category}
               </button>
            ))}
           </div>
           <div className={newcat===""?"four-cards":"two-cards"}>
            {fileredtitle.map((pro)=>(
                 <ProjectCard key={pro.id} pro={pro} />
            )
            )}
           </div>   
          </div>
        )}
        
      </div>
                  
    </>
  )
}
