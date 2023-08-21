const week = [
    {
        id: 'day-1',
        title: 'Monday',
        exerciseTitle1: 'Pushups',
        exerciseTitle2: 'Leg Raises',
        exerciseInfo1: '3 sets of 30 | Full Pushups',
        exerciseInfo2: '2 sets of 30 | Advanced Knee Raises',
    },
    {
        id: 'day-2',
        title: 'Tuesday',
        exerciseTitle1: 'Pullups',
        exerciseTitle2: 'Squats',
        exerciseInfo1: '1 sets of 12 | Full Pullups',
        exerciseInfo2: '2 sets of 30 | Full Squats',
    },
    {
        id: 'day-3',
        title: 'Wednesday',
        exerciseTitle1: 'Bridges',
        exerciseTitle2: 'Twists',
        exerciseInfo1: '3 sets of 30 | Straight Bridges',
        exerciseInfo2: '3 holds of 60s (both sides) | Full Twists',
    },
    {
        id: 'day-4',
        title: 'Thursday',
        exerciseTitle1: 'Pushups',
        exerciseTitle2: 'Leg Raises',
        exerciseInfo1: '3 sets of 30 | Full Pushups',
        exerciseInfo2: '2 sets of 30 | Advanced Knee Raises',
    },
    {
        id: 'day-5',
        title: 'Friday',
        exerciseTitle1: 'Pullups',
        exerciseTitle2: 'Squats',
        exerciseInfo1: '1 sets of 12 | Full Pullups',
        exerciseInfo2: '2 sets of 30 | Full Squats',
    },
    {
        id: 'day-6',
        title: 'Saturday',
        exerciseTitle1: 'Bridges',
        exerciseTitle2: 'Twists',
        exerciseInfo1: '3 sets of 30 | Straight Bridges',
        exerciseInfo2: '3 holds of 60s (both sides) | Full Twists',
    },
    {
        id: 'day-7',
        title: 'Sunday',
        exerciseInfo1: 'Rest and Stretching day :)',
    }
];

//* Week element
const weekElement = document.querySelector('.week_wrapper');

//* Dynamically displaying the week elements
function displayDays(week) {
    let getDays = week.map(day => {
        return (
            `<div class="day" id=${day.id}>
                <div class="day_title">
                    <span>${day.title}</span>
                </div>
                <div class="exercise_wrapper">
                    ${day.exerciseInfo1 && !day.exerciseInfo2
                        ? ` <div class='day_exercise'>
                                <div class="exercise_info">
                                    <span>${day.exerciseInfo1}</span>
                                    <div class="exercise_ranking">
                                        <button class="btn success-btn"></button>
                                    </div>
                                </div>
                            </div>`
                        : day.exerciseInfo1 && day.exerciseInfo2
                            ? ` <div class='day_exercise'>
                                        <div class="exercise_title">
                                            <span>${day.exerciseTitle1}</span>
                                        </div>
                                        <div class="exercise_info">
                                            <span>${day.exerciseInfo1}</span>
                                            <div class="exercise_ranking">
                                                <button class="btn failure-btn"></button>
                                                <button class="btn difficult-btn"></button>
                                                <button class="btn success-btn"></button>
                                            </div>
                                        </div>
                                </div>`
                            : ''
                    }
                    ${day.exerciseTitle2 && day.exerciseInfo2
                        ? ` <div class="day_exercise">
                                <div class="exercise_title">
                                    <span>${day.exerciseTitle2}</span>
                                </div>
                                <div class="exercise_info">
                                    <span>${day.exerciseInfo2}</span>
                                    <div class="exercise_ranking">
                                        <button class="btn failure-btn"></button>
                                        <button class="btn difficult-btn"></button>
                                        <button class="btn success-btn"></button>
                                    </div>
                                </div>
                            </div>`
                        : ''
                    }
                </div>
            </div>`
        )
    });
    getDays = getDays.join('')
    weekElement.innerHTML = getDays
}


window.addEventListener('DOMContentLoaded', () => {
    displayDays(week)

    //* Toggle buttons & navbar elements
    const headerToggleBtn = document.querySelector('.header_toggle-btn');
    const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
    const navbar = document.querySelector('.navbar');
    
    //* Exercise buttons elements
    const successBtn = document.querySelectorAll('.success-btn');
    const difficultBtn = document.querySelectorAll('.difficult-btn');
    const failureBtn = document.querySelectorAll('.failure-btn');
    
    //* Toggle elements events
    headerToggleBtn.addEventListener('click', showNavbar);
    navbarToggleBtn.addEventListener('click', hideNavbar);
    
    // //* Exercise buttons events
    successBtn.forEach(sBtn => {
        sBtn.addEventListener('click', selectRank)
    });
    difficultBtn.forEach(dBtn => {
        dBtn.addEventListener('click', selectRank)
    });
    failureBtn.forEach(fBtn => {
        fBtn.addEventListener('click', selectRank)
    })
    
    //* Toggle functions
    function showNavbar() {
        navbar.classList.add('active')
    }
    
    function hideNavbar() {
        navbar.classList.remove('active')
    }
    
    // //* Ranking selection function
    function selectRank(e) {
        const currentBtn = e.target;
        const currentClasses = [...currentBtn.classList];
        const currentBtnParent = currentBtn.parentNode
        const childButtons = currentBtnParent.querySelectorAll('.btn');

        childButtons.forEach(button => {
            if (button !== currentBtn) {
                const buttonClasses = [...button.classList];
    
                if (buttonClasses.includes('success-btn')) {
                    button.classList.remove('success');
                }
                if (buttonClasses.includes('difficult-btn')) {
                    button.classList.remove('difficult');
                }
                if (buttonClasses.includes('failure-btn')) {
                    button.classList.remove('failure');
                }
            }
        });

        if (currentClasses.includes('success-btn')) {
            currentBtn.classList.toggle('success');
        }
        if (currentClasses.includes('difficult-btn')) {
            currentBtn.classList.toggle('difficult');
        }
        if (currentClasses.includes('failure-btn')) {
            currentBtn.classList.toggle('failure');
        }
    }
})