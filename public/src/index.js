import './css/main.css';

 /* import './css/fontawesome.min.css';  */

 const setContentEditable =(element)=>{
    element.setAttribute("contentEditable",true)
}

/*  const setContentEditable =(element)=>{
    element.setAttribute("contentEditable",true)
}

const attributeSetter=(element, attributeName, attributeValue)=>{
    element.setAttribute(attributeName, attributeValue)
}

const element=document.getElementById("click")
console.log(element)

element.addEventListener("click",(e)=>{
    setContentEditable(e.target)
     attributeSetter(e.target, "data-value", "pranto")
})

attributeSetter(element, "data-value", "pranto") */






// const setContentEditable =(element)=>element.setAttribute("contentEditable",true)

// const element = document.getElementById("changeName")

// element.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })

// const element2 = document.getElementById("changeDesignation")
// element2.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element3 = document.getElementById("careerGoalTitle")
// element3.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element4 = document.getElementById("careerGoalDetail")
// element4.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element5 = document.getElementById("mainInterestTitle")
// element5.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element6 = document.getElementById("mainInterestList")
// element6.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element7 = document.getElementById("contactAreaTitle")
// element7.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element8 = document.getElementById("academicTitle")
// element8.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element9 = document.getElementById("academicUniversity")
// element9.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element10 = document.getElementById("academicSubject")
// element10.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element11 = document.getElementById("academicTeam")
// element11.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })

// const element12 = document.getElementById("academicUniversity2")
// element12.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element13 = document.getElementById("academicSubject2")
// element13.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element14 = document.getElementById("academicTeam2")
// element14.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element15 = document.getElementById("careerHistoryTitle")
// element15.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element16 = document.getElementById("careerHistoryTeacher")
// element16.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element17 = document.getElementById("careerHistorySchool")
// element17.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element18 = document.getElementById("careerHistoryService")
// element18.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element19 = document.getElementById("careerHistoryTeacher2")
// element19.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element20 = document.getElementById("careerHistorySchool2")
// element20.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element21 = document.getElementById("careerHistoryService2")
// element21.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element22 = document.getElementById("achievementTitle")
// element22.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })
// const element23 = document.getElementById("achievementAwards")
// element23.addEventListener("click",(e) => {
//     setContentEditable(e.target)
// })



//element selector section
 const body = document.querySelector('body')

 const root = document.createElement('div')
       root.setAttribute('id','root')
       root.setAttribute('class','portfolio-main-area mt-3')
       body.appendChild(root)
 const container = document.createElement('div')
       container.setAttribute('id','container')
       container.setAttribute('class',"container border p-5")
       root.appendChild(container)
 const row = document.createElement('div')
       row.setAttribute('id','row')
       row.setAttribute('class','row')
       container.appendChild(row)
 const section_1 = document.createElement('div')
       section_1.setAttribute('id','section-1')
       section_1.setAttribute('class','col-xl-6 pr-5')
       row.appendChild(section_1)
 const image_area = document.createElement('div')
       image_area.setAttribute('id','image-area')
       image_area.setAttribute('class','image-area')
       section_1.appendChild(image_area)
 const portfolio_image = document.createElement('div')
       portfolio_image.setAttribute('id','portfolio-image')
       image_area.appendChild(portfolio_image)
  const image = document.createElement('img')
        image.setAttribute('id','profile-image')
        image.setAttribute('src', 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg')
        image.setAttribute('alt','profile-image')
        image_area.appendChild(image)
   const image_text = document.createElement('div')
         image_text.setAttribute('id','image-text')
         image_text.setAttribute('class','image-text')
         image_text.innerHTML="Hello"
         image_text.addEventListener('click',(e)=>setContentEditable(e.target))
         image_area.appendChild(image_text)



//     const image_area = document.getElementById('image-area')
//       const portfolio_image = document.getElementById('portfolio-image')
//         const profile_image = document.getElementById('profile-image')
//         const image_text = document.getElementById('image-text')
//  const section_2= document.getElementById('section-2')






//     image_area.setAttribute('class','image-area')
//         portfolio_image.setAttribute('class','portfolio-image')
//             // profile_image.setAttribute('src','/portfolio-img.767382ce.jpg')
//             image_text.setAttribute('class','image-text')

//  section_2.setAttribute('class','col-xl-6 pl-5')

 
