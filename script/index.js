const currentTab = 'all'
const activeBtn =['bg-[#3B82F6]', 'text-white']

const allCardSection = document.getElementById('all-card-section');
const interviewSection =document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');
const emptyContainer = document.getElementById('empty-container')
const availableJobs = document.getElementById('available-jobs')

// section hide show & switch all tabs
function switchTab (id){

    const allTabBtn = ['all','interview','rejected']

    for(const tab of allTabBtn){
        const btnSwitch = document.getElementById('tab-'+tab)
        
        if(tab === id){
            btnSwitch.classList.add(...activeBtn)
        }
        else{
            btnSwitch.classList.remove(...activeBtn)
        }
    }

    const allPages = [allCardSection, interviewSection, rejectedSection]

    for(const section of allPages){
        section.classList.add('hidden')
    }

    if(id === 'all'){
        allCardSection.classList.remove('hidden')
    }

    else if( id === 'interview'){
        interviewSection.classList.remove('hidden')
    }

    else if(id === 'rejected'){
        rejectedSection.classList.remove('hidden')
    }


    checkEmpty()
    availableJobsCounter()

}
    switchTab(currentTab)

// all section switch cards;
    document.getElementById('main-container').addEventListener('click',function(event){
    const targetElement = event.target;
    const card = targetElement.closest('.card-container')
    if(!card){
        return;
    }
    const status = card.querySelector('.status-icon')
    const parent = card.parentNode;
    if(targetElement.classList.contains('interview')){
        interviewSection.appendChild(card)
        status.innerText = 'Interview'
    }
    else if(targetElement.classList.contains('rejected')){
        rejectedSection.appendChild(card)
        status.innerText = 'Rejected'
    }
    else if(targetElement.classList.contains('delete-btn')){
        parent.removeChild(card)
    }
    updateCounter()
})

// total interview & rejected counter update;
    const jobsCounter = document.getElementById('total-job-count');
    const interviewCounter = document.getElementById('total-interview-count');
    const rejectedCounter = document.getElementById('total-rejected-count');

function updateCounter(){

    jobsCounter.innerText = allCardSection.querySelectorAll('.card-container').length;
    interviewCounter.innerText = interviewSection.querySelectorAll('.card-container').length;
    rejectedCounter.innerText = rejectedSection.querySelectorAll('.card-container').length;

    checkEmpty()
    availableJobsCounter()
    }
    updateCounter()

// empty section;
function checkEmpty() {
    emptyContainer.classList.add('hidden');

    if(!allCardSection.classList.contains('hidden')){
        if(allCardSection.querySelectorAll('.card-container').length === 0){
            emptyContainer.classList.remove('hidden')
        }
    }

    if(!interviewSection.classList.contains('hidden')){
        if(interviewSection.querySelectorAll('.card-container').length === 0){
            emptyContainer.classList.remove('hidden')
        }
    }

    if(!rejectedSection.classList.contains('hidden')){
        if(rejectedSection.querySelectorAll('.card-container').length === 0){
            emptyContainer.classList.remove('hidden')
        }
    }

}

// available Jobs counter
function availableJobsCounter(){
    if(!allCardSection.classList.contains('hidden')){
        availableJobs.innerText = allCardSection.querySelectorAll('.card-container').length;
    }

    else if(!interviewSection.classList.contains('hidden')){
        availableJobs.innerText = interviewSection.querySelectorAll('.card-container').length;
    }

    else if( !rejectedSection.classList.contains('hidden')){
        availableJobs.innerText = rejectedSection.querySelectorAll('.card-container').length;
    }
}

availableJobsCounter()