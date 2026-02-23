let interviewList = []
let rejectedList = []

let totalJobsCount = document.getElementById('total-jobs')
let totalJobsCount2 = document.getElementById('total-jobs2')
let totalInterviewCount = document.getElementById('total-interview')
let totalRejectedCount = document.getElementById('total-rejected')
let allCards    = document.getElementById('all-cards')
let mainContainer = document.querySelector('main')
let filteredSection = document.getElementById('filtered-section')
let currentStatus    = 'all'

// filtered button & function;
let allFilteredBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn = document.getElementById('interview-filter-btn')
let rejectedFilterBtn = document.getElementById('rejected-filter-btn')


// countAllSectionJobs()

// available jobs  count 
function calculateCount(){
    if(currentStatus === 'all-filter-btn'){
        totalJobsCount.innerText = allCards.children.length;
        // totalJobsCount2.innerText = allCards.children.length;
        totalInterviewCount.innerText = interviewList.length;
        totalRejectedCount.innerText = rejectedList.length;
    }
    else if(currentStatus === 'interview-filter-btn'){
        totalJobsCount.innerText = interviewList.length;
        totalInterviewCount.innerText = interviewList.length;
        totalRejectedCount.innerText = rejectedList.length;
        // totalJobsCount2.innerText = interviewList.length;
    }
    else if(currentStatus === 'rejected-filter-btn'){
        totalJobsCount.innerText = rejectedList.length;
        totalInterviewCount.innerText = interviewList.length;
        totalRejectedCount.innerText = rejectedList.length;
    }
}


function toggleStyle(id){
    // console.log('click', id)
    allFilteredBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white')

    let selected = document.getElementById(id)
    currentStatus = id
    // console.log(selected)

    selected.classList.add('bg-[#3B82F6]','text-white');

    if(id === 'interview-filter-btn'){
    allCards.classList.add('hidden')
    filteredSection.classList.remove('hidden');
    renderInterview();
    }
    else if (id === 'all-filter-btn'){
    allCards.classList.remove('hidden')
    filteredSection.classList.add('hidden');
    }
    else if(id === 'rejected-filter-btn'){
    allCards.classList.add('hidden')
    filteredSection.classList.remove('hidden')
    renderRejected();
    }
    
}

// main count box
function calculateCount(){
    totalJobsCount.innerText= allCards.children.length;
    totalJobsCount2.innerText= allCards.children.length;
    totalInterviewCount.innerText = interviewList.length;
    totalRejectedCount.innerText = rejectedList.length;
    
}
calculateCount()

// main part 

mainContainer.addEventListener('click', function(event){

    // console.log(event.target.classList.contains('interview-btn'))
    
    if(event.target.classList.contains('interview-btn')){
        parentNode = event.target.closest('.job-card');

    let titleName = parentNode.querySelector('.title-name').innerText
    let descriptionName = parentNode.querySelector('.description-name').innerText
    let salary = parentNode.querySelector('.salary').innerText
    let status = parentNode.querySelector('.status-btn').innerText
    let info = parentNode.querySelector('.info').innerText
    parentNode.querySelector('.status-btn').innerText ='Interview'

    // console.log(titleName, descriptionName, status, info)
    let cardInfo ={
        titleName,
        descriptionName,
        salary,
        status:'Interview',
        info
    }

    // console.log(cardInfo)
    let titleExist =interviewList.find(item=>item.titleName === cardInfo.titleName);
    
    if (!titleExist){
        interviewList.push(cardInfo)
    }
    rejectedList = rejectedList.filter(item=>item.titleName !== cardInfo.titleName);
    // console.log(interviewList)
    calculateCount()
    // renderInterview()
    calculateCount();

    if(currentStatus === 'interview-filter-btn'){
    renderInterview();
    }
    else if(currentStatus === 'rejected-filter-btn'){
    renderRejected();
}
    }

    else if(event.target.classList.contains('rejected-btn')){
        parentNode = event.target.closest('.job-card');

    let titleName = parentNode.querySelector('.title-name').innerText
    let descriptionName = parentNode.querySelector('.description-name').innerText
    let salary = parentNode.querySelector('.salary').innerText
    let status = parentNode.querySelector('.status-btn').innerText
    let info = parentNode.querySelector('.info').innerText
    parentNode.querySelector('.status-btn').innerText = 'Rejected'

    // console.log(titleName, descriptionName, status, info)
    let cardInfo ={
        titleName,
        descriptionName,
        salary,
        status:'Rejected',
        info
    }

    // console.log(cardInfo)
    let titleExist =rejectedList.find(item=>item.titleName === cardInfo.titleName);

    if (!titleExist){
        rejectedList.push(cardInfo)
    }
    interviewList = interviewList.filter(item=>item.titleName !== cardInfo.titleName);
    // console.log(interviewList)
    if(currentStatus === 'interview-filter-btn'){
    renderInterview();
    }
    else if(currentStatus === 'rejected-filter-btn'){
    renderRejected();
    }
    calculateCount()
    // renderRejected()
    }

    else if(event.target.closest('.delete-btn')){

    let parentNode = event.target.closest('.job-card');
    let titleName = parentNode.querySelector('.title-name').innerText;

    interviewList = interviewList.filter(item => item.titleName !== titleName);

    
    rejectedList = rejectedList.filter(item => item.titleName !== titleName);

    parentNode.remove();

    calculateCount();

    if(currentStatus === 'interview-filter-btn'){
        renderInterview();
    }
    else if(currentStatus === 'rejected-filter-btn'){
        renderRejected();
    }
}

})

// function to update totalJobsCount2

function countAllSectionJobs() {
    const updateCount = function() {
        if(currentStatus === 'all-filter-btn') {
            totalJobsCount2.innerText = allCards.children.length;
        } else if(currentStatus === 'interview-filter-btn') {
            totalJobsCount2.innerText = interviewList.length;
        } else if(currentStatus === 'rejected-filter-btn') {
            totalJobsCount2.innerText = rejectedList.length;
        }
    };

    updateCount();
    allFilteredBtn.addEventListener('click', updateCount);
    interviewFilterBtn.addEventListener('click', updateCount);
    rejectedFilterBtn.addEventListener('click', updateCount);

    // job delete / status change or update
    mainContainer.addEventListener('click', updateCount);
}
// page load call
countAllSectionJobs();


// render part
function renderInterview (){

    filteredSection.innerHTML ='';

    if (interviewList.length === 0) {
    filteredSection.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20">
            <img src="./jobs.png" alt="No Rejected Jobs" class="w-40 h-40 mb-4">
            <p class="text-gray-500 text-lg">No Interview Jobs Yet!</p>
            <p class="text-gray-500 text-lg">Check Back Soon for new job Opportunities</p>
        </div>
    `;
    return;
}



    for (let interviewCard of interviewList ){
        
        // console.log(interviewCard)

        let div = document.createElement('div');
        div.className ='job-card bg-white rounded-lg border border-[#F1F2F4] p-6 flex justify-between';

        div.innerHTML =`
                    <div>

                    <div>
                        <p class="title-name text-[#002C5C] font-semibold text-[18px]">${interviewCard.titleName}</p>
                        <p class="description-name text-[#64748B]">${interviewCard.descriptionName}</p>
                    </div>
                    
                    <p class="text-[#64748B] text-[14px] mb-5 salary">
                        ${interviewCard.salary}
                    </p>

                    <p class="status-btn btn btn-soft btn-primary text-[#002C5C] bg-[#EEF4FF] mb-2 ">
                        ${interviewCard.status}
                    </p>

                    <p class="info text-[#323B49] text-[14px] mb-5">
                         ${interviewCard.info}
                    </p>

                    <button
                        class="interview-btn btn btn-neutral btn-outline text-[#10B981] border-[#10B981] font-semibold mr-2">
                        Interview
                    </button>
    
                    <button
                        class="rejected-btn btn btn-neutral btn-outline text-[#EF4444] border-[#EF4444] font-semibold">
                        Rejected
                    </button>

                </div>

                <button class="delete-btn btn btn-circle">
                    <img src="./Group 1.png" alt="" class="cursor-pointer">
                </button>
        
        `

                filteredSection.appendChild(div)
    }
}


function renderRejected (){

    filteredSection.innerHTML ='';

    if (rejectedList.length === 0) {
    filteredSection.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20">
            <img src="./jobs.png" alt="No Rejected Jobs" class="w-40 h-40 mb-4">
            <p class="text-gray-500 text-lg">No Rejected Jobs Yet!</p>
            <p class="text-gray-500 text-lg">Check Back Soon for new job Opportunities</p>
        </div>
    `;
    return;
}



    for (let rejectedCard of rejectedList ){
        
        // console.log(interviewCard)

        let div = document.createElement('div');
        div.className ='job-card bg-white rounded-lg border border-[#F1F2F4] p-6 flex justify-between';

        div.innerHTML =`
                    <div>

                    <div>
                        <p class="title-name text-[#002C5C] font-semibold text-[18px]">${rejectedCard.titleName}</p>
                        <p class="description-name text-[#64748B]">${rejectedCard.descriptionName}</p>
                    </div>
                    
                    <p class="text-[#64748B] text-[14px] mb-5 salary">
                        ${rejectedCard.salary}
                    </p>

                    <p class="status-btn btn btn-soft btn-primary text-[#002C5C] bg-[#EEF4FF] mb-2 ">
                        ${rejectedCard.status}
                    </p>

                    <p class="info text-[#323B49] text-[14px] mb-5">
                         ${rejectedCard.info}
                    </p>

                    <button
                        class="interview-btn btn btn-neutral btn-outline text-[#10B981] border-[#10B981] font-semibold mr-2">
                        Interview
                    </button>
    
                    <button
                        class="rejected-btn btn btn-neutral btn-outline text-[#EF4444] border-[#EF4444] font-semibold">
                        Rejected
                    </button>

                </div>

                <button class="delete-btn btn btn-circle">
                    <img src="./Group 1.png" alt="" class="cursor-pointer">
                </button>
        
        `

                filteredSection.appendChild(div)
    }
}

