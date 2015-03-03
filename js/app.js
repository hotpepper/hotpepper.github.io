
var model = {
	"work" : {
		"jobs": [
		{
			"employer": "New York City Department of Transportation",
			"title": "City Planner",
			"location":"New York",
			"dates":"8/1/2009 - Present",
			"description" : "Play with data on maps, in databases, and in code"
		},
		{
			"employer": "New York City Department of City Planning",
			"title": "City Planner",
			"location":"New York",
			"dates":"1/1/2007 - 7/31/2009",
			"description" : "Play with data on maps, in databases, and in code"
		}
		]
	},
	projects:{
		"project": [
		{
			"title": "Project Number 1",
			"dates": "yesturday - today",
			"description": "awesome project that is temporarily represented by phillip j fry",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		},
		{
			"title": "Project Number 2",
			"dates": "today - tomorrow",
			"description": "yet another awesome project from seth",
			"images":["images/fry.jpg", "images/fry.jpg"]
			//"display": function taking no parameters
		}
		]
	},
	education:{
		"schools": [
		{
			"name": "Columbia University",
			"location": "New York, NY",
			"degree": "Master of Science",
			"majors": "Urban Planning",
			"minors": ["Transportation"],
			"dates": "2006 - 2007",
			"url": "http://www.columbia.edu/"
     	},
     	{
			"name": "New School University",
			"location": "New York, NY",
			"degree": "Master of Science (Incompleate)",
			"majors": "Urban Policy and Management",
			"minors": ["Transportation"],
			"dates": "2004 - 2005",
			"url": "http://www.columbia.edu/"
     	},
     	{
     		"name": "SUNY Buffalo",
     		"location": "Buffalo, NY",
     		"degree": "Bachlor of Arts",
     		"majors": "Urban Planning",
     		"minors": ["Spanish","Japanese"],
     		"dates": "2000 - 2004",
     		"url": "http://www.buffalo.edu/"
     	}
     	],
     	"onlineCourses":
     	[
     	{
	     	"title": "JavaScript Design Patterns",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud989"
	     },
	      {
	     	"title": "Intro to AJAX",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud110"
	     },
	     {
	     	"title": "Intro to jQuery",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud245"
	     },
	     {
	     	"title": "JavaScript Basics",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud804"
	     },
	     {
	     	"title": "HTML5 Canvas",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud292"
	     },
	     {
	     	"title": "Intro to HTML and CSS",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud304"
	     },
	     {
	     	"title": "Programming Foundations with Python",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud036"
	     },
	    {
	     	"title": "Intro to Hadoop and MapReduce",
	        "school": "Udacity",
	        "date": 2014,
	        "url": "https://www.udacity.com/course/ud617"
	     },
	     {
	     	"title": "Intro to Algorithms",
	        "school": "Udacity",
	        "date": 2013,
	        "url": "https://www.udacity.com/course/cs215"
	     },
	      {
	     	"title": "Intro to Computer Science",
	        "school": "Udacity",
	        "date": 2013,
	        "url": "https://www.udacity.com/course/cs101"
	     }
	     ]
    //"display": function taking no 
	}
};


var controller = {
	workLength: function(){
		return	model.work.jobs.length;
	},
	formatWork: function(job){
		console.log("adding job: "+ model.work.jobs[job].employer)
		return HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer) +
			HTMLworkTitle.replace("%data%", model.work.jobs[job].title)+
			HTMLworkLocation.replace("%data%", model.work.jobs[job].location)+
			HTMLworkDates.replace("%data%", model.work.jobs[job].dates)+
			HTMLworkDescription.replace("%data%", model.work.jobs[job].description)
	},
	schoolLength: function(){
		return	model.education.schools.length;
	},
	formatSchool: function(school){
		console.log("adding school: "+  model.education.schools[school].name)
		return HTMLschoolName.replace("%data%", model.education.schools[school].name) +
			HTMLschoolDegree.replace("%data%", model.education.schools[school].degree)+
			HTMLschoolDates.replace("%data%", model.education.schools[school].dates)+
			HTMLschoolLocation.replace("%data%", model.education.schools[school].location)+
			HTMLschoolMajor.replace("%data%", model.education.schools[school].majors)+
			HTMLschoolMinor.replace("%data%", model.education.schools[school].minors)
	},

	onlineLength: function(){
		return	model.education.onlineCourses.length;
	},
	formatOnline: function(c){
		console.log("adding class: "+  model.education.onlineCourses[c].name)
		return HTMLonlineTitle.replace("%data%", model.education.onlineCourses[c].title).replace("#", model.education.onlineCourses[c].url)+
			HTMLonlineSchool.replace("%data%", model.education.onlineCourses[c].school)+
			HTMLonlineDates.replace("%data%", model.education.onlineCourses[c].date)
			+"<br>"
			//+HTMLonlineURL.replace("%data%", model.education.onlineCourses[c].url)
	},
};

var view = {
	showWork: function(){
		for (i = 0; i < controller.workLength(); i++){
			$("#workExperience").append(HTMLworkStart );
			$(".work-entry:last").append(controller.formatWork(i))
		}
		
	},
	showSchool: function(){
		for (i=0;i<controller.schoolLength();i++){
			$("#education").append(HTMLschoolStart );
			$(".education-entry:last").append(controller.formatSchool(i))
		}
	},
	showOnline: function(){
		$(".education-entry:last").append(HTMLonlineClasses)
		for (i=0; i<controller.onlineLength();i++){
			$(".education-entry:last").append(controller.formatOnline(i))
		}
	},
	render: function(){
		this.showWork();
		this.showSchool();
		this.showOnline();
	}
};

view.render();
