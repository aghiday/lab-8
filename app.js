
console.log('JavaScript is connected');

const studyGroupData = {
    "studyGroups": [
        {
            "id": 1,
            "major": "Computer Science",
            "courses": ["Introduction to Programming", "Data Structures"],
            "studyTimes": ["Wednesday 3pm-5pm", "Friday 2pm-4pm"],
            "groupSize": 4
        },
        {
            "id": 2,
            "major": "Engineering",
            "courses": ["Calculus II", "Physics I"],
            "studyTimes": ["Monday 10am-12pm", "Thursday 1pm-3pm"],
            "groupSize": 3
        },
        {
            "id": 3,
            "major": "Biology",
            "courses": ["Molecular Biology", "Genetics"],
            "studyTimes": ["Tuesday 9am-11am", "Thursday 4pm-6pm"],
            "groupSize": 5
        },
        // Other groups as above...
    ]
};

function handleFormData() {
    const major = document.getElementById('major').value;
    if (!major) {
        alert('Please select a major.');
        return;
    }
    const courses = document.getElementById('courses').value;
    if (!courses) {
        alert('Please select a course.');
        return;
    }
    const studyTimes = document.getElementById('studyTimes').value;
    if (!studyTimes) {
        alert('Please enter preferred study times.');
        return;
    }
    const groupSize = document.getElementById('groupSize').value;
    if (!groupSize) {
        alert('Please enter a group size.');
        return;
    }

    const matchingGroups = studyGroupData.studyGroups.filter(group =>
        group.major === major &&
        group.courses.includes(courses) &&
        group.studyTimes.includes(studyTimes) &&
        group.groupSize == groupSize
    );

    if (matchingGroups.length > 0) {
        const resultsSection = document.createElement('div');
        resultsSection.id = 'resultsSection';
        document.body.appendChild(resultsSection);

        const resultsList = document.createElement('ul');
        resultsList.id = 'resultsList';
        resultsSection.appendChild(resultsList);

        matchingGroups.forEach(group => {
            addResultItem(group, resultsList);
        });
    } else {
        alert('No matching groups found.');
    }
}

document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the default form submission behavior
    handleFormData();
});

function addResultItem(group, resultsList) {
    const item = document.createElement('div');
    item.classList.add('resultItem');
    item.innerHTML = `
        <h3>${group.major} Study Group</h3>
        <p>Courses: ${group.courses.join(', ')}</p>
        <p>Study Times: ${group.studyTimes.join(', ')}</p>
        <p>Group Size: ${group.groupSize}</p>
    `;

    const joinButton = document.createElement('button');
    joinButton.textContent = 'Join Group';
    joinButton.addEventListener('click', function() {
        alert('Joined the group!');
    });

    item.appendChild(joinButton);
    resultsList.appendChild(item);
}


console.log(studyGroupData);
