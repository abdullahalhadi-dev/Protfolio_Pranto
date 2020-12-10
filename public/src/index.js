import './css/main.css';

 /* import './css/fontawesome.min.css';  */



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






const setContentEditable =(element)=>{
    element.setAttribute("contentEditable",true)

}

const element = document.getElementById("changeName")
// console.log(element)

element.addEventListener("click",(e) => {
    /* e.target.setAttribute("contentEditable", true) */
    setContentEditable(e.target)
})

const element2 = document.getElementById("changeDesignation")
element2.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element3 = document.getElementById("careerGoalTitle")
element3.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element4 = document.getElementById("careerGoalDetail")
element4.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element5 = document.getElementById("mainInterestTitle")
element5.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element6 = document.getElementById("mainInterestList")
element6.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element7 = document.getElementById("contactAreaTitle")
element7.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element8 = document.getElementById("academicTitle")
element8.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element9 = document.getElementById("academicUniversity")
element9.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element10 = document.getElementById("academicSubject")
element10.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element11 = document.getElementById("academicTeam")
element11.addEventListener("click",(e) => {
    setContentEditable(e.target)
})

const element12 = document.getElementById("academicUniversity2")
element12.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element13 = document.getElementById("academicSubject2")
element13.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element14 = document.getElementById("academicTeam2")
element14.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element15 = document.getElementById("careerHistoryTitle")
element15.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element16 = document.getElementById("careerHistoryTeacher")
element16.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element17 = document.getElementById("careerHistorySchool")
element17.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element18 = document.getElementById("careerHistoryService")
element18.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element19 = document.getElementById("careerHistoryTeacher2")
element19.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element20 = document.getElementById("careerHistorySchool2")
element20.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element21 = document.getElementById("careerHistoryService2")
element21.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element22 = document.getElementById("achievementTitle")
element22.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
const element23 = document.getElementById("achievementAwards")
element23.addEventListener("click",(e) => {
    setContentEditable(e.target)
})
