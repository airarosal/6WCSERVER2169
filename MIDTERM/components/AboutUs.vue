
<template>
    <div id="about-us">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary" role="alert">
                    <h1>{{  msg6 }}</h1>
                </div>
            </div>
        </div>
    </div>
<div class="card p-3">
    <h2>Profile</h2>
        <p><strong>Name:</strong> Aira Mae T. Rosal</p>
        <p><strong>Birthday:</strong> May 14, 2005</p>
        <p><strong>Address:</strong> Fortuna, Floridablanca, Pampanga</p>
        <p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
        <p><strong>Specialization:</strong> Web Development</p>
        <p><strong>Objective:</strong> To apply my skills in programming and continuously grow as a web developer.</p>
    </div>

    <div class="card p-3">
        <h2>Education</h2>
        
        <li><strong>Elementary:</strong> San Fernando Elementary School</li>
        <li><strong>JHS/SHS:</strong> Information and Communication Technology High School</li>
        <li><strong>College:</strong> Holy Angel University - BSIT</li>
        
    </div>

    <div class="card p-4 skills-card">
<h2>Skills</h2>
<li><strong>Training:</strong> Web Development Bootcamp</li>
<li><strong>Seminars:</strong> IT Trends Conference</li>
<li><strong>Technologies:</strong> HTML, CSS, JavaScript, Vue</li>
<li><strong>Programming Languages:</strong> Java, Python, PHP</li>
<li><strong>Certifications</strong> Simplilearn, Free Code Camp, HubSpot</li>
</div>



</template>

<script>
export default {
    name: 'about-us',
    data() {
    return {
        msg6: 'RESUME'
        }
    }
}
</script>