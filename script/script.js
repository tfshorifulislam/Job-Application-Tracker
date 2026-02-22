let totalJobs           = document.getElementById('total-jobs')
let totalJobs2          = document.getElementById('total-jobs2')
let interviewJobBox     = document.getElementById('total-interview')
let rejectedJobBox      = document.getElementById('total-rejected')
let allBtn              = document.getElementById('all-btn')
let allFilterBtn        = document.getElementById('all-filter-btn')
let interviewFilterBtn  = document.getElementById('interview-filter-btn')
let rejectedFilterBtn   = document.getElementById('rejected-filter-btn')
let allJobCard          = document.getElementById('all-job-card')
let mainContainer       = document.querySelector('main')

let interviewBox = []
let rejectedBox = []

function totalCount(){
    totalJobs.innerText = allJobCard.children.length;
    totalJobs2.innerText = allJobCard.children.length;

    interviewJobBox.innerText = interviewBox.length;
    rejectedJobBox.innerText =  rejectedBox.length;

}
totalCount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allFilterBtn.classList.add('bg-transparent', 'text-black')
    interviewFilterBtn.classList.add('bg-transparent', 'text-black')
    rejectedFilterBtn.classList.add('bg-transparent', 'text-black')

    let selected =document.getElementById(id)
    selected.classList.remove('bg-transparent', 'text-black')
    selected.classList.add('bg-[#3B82F6]','text-white')
}


let allJobsCard = document.geet