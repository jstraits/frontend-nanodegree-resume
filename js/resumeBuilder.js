var bio = {
	"name": "Jessica Straits",
	"role": "Web Developer",
	"contacts": {
		"mobile": "734-716-5279",
		"email": "ladyorenda@gmail.com",
		"github": "jstraits",
		"twitter": "@ladyorenda",
		"location": "Pinckney, Michigan"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc",
	"skills": [
    "HTML", "CSS", "Javascript", "Photoshop"
	],
	"biopic": "images/fry.jpg"
};

var displayBio = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
};
displayBio();

function inName(name) {
	name  = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}


var work = {
	"jobs": [
	{
		"employer": "Zingermans Bakehouse",
		"title": "Pastry Chef",
		"location": "Ann Arbor, MI",
		"dates": "July 2008 - Present",
		"description": "Bacon ipsum dolor amet cupim prosciutto pork belly, quis hamburger filet mignon pork chop tempor mollit et."
	},
	{
		"employer": "Stonehouse Cafe",
		"title": "Barista",
		"location": "Hamburg, MI",
		"dates": "August 2007 - January 2008",
		"description": "Bacon ipsum dolor amet cupim prosciutto pork belly, quis hamburger filet mignon pork chop tempor mollit et."
	}
	]
};

displayWork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		
		var formattedEmployerTitle = formattedEmployer + formattedTitle; 
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		
		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate); 
		
		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDesc); 
 }
}
displayWork();


var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "Bacon ipsum dolor amet cupim prosciutto pork belly, quis hamburger filet mignon pork chop tempor mollit et.",
		"images": ["http://lorempixel.com/output/cats-q-c-400-200-9.jpg", "http://lorempixel.com/output/cats-q-c-400-200-10.jpg"]
	},
	{
		"title": "Sample Project 2",
		"dates": "2014",
		"description": "Bacon ipsum dolor amet cupim prosciutto pork belly, quis hamburger filet mignon pork chop tempor mollit et.",
		"images": ["http://lorempixel.com/output/cats-q-c-400-200-6.jpg", "http://lorempixel.com/output/cats-q-c-400-200-5.jpg"]
	}
	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

var education = {
	"schools": [
	{
		"name": "New Horizons Computer Learning Center",
		"location": "Livonia, MI",
		"degree": "N/A",
		"major": ["Web Design"],
		"date": "2013"		
		},
	{
		"name": "Schoolcraft College",
		"location": "Livonia, MI",
		"degree": "Associates",
		"major": ["Culinary Arts"],
		"date": "2008"
	}
	],
	
	"onlineCourses": [
	{
		"title": "Front End Web Development Nanodegree",
		"school": "Udacity.com",
		"date": "2015",
		"url": "https://www.udacity.com/course/nd001"
	},
	{
		"title": "Web Development",
		"school": "Treehouse",
		"date": "2014",
		"url": "http://teamtreehouse.com/jessicastraits"
	}
	]
};

displayEducation = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(formattedDate);
	};	
	
	$("#education").append(HTMLonlineClasses);
	
	for (course in education.onlineCourses) {		
	    $("#education").append(HTMLschoolStart);
	
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDate);
		
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedUrl);
	}
};
displayEducation();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

