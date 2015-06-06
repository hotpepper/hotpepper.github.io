
var model = {
	"work" : {
		"jobs": [
		{
			"employer": "New York City Department of Transportation",
			"title": "City Planner",
			"location":"New York",
			"dates":"2009 - Present",
			"description" : "Manage a team of analysts working with GIS and relational data sets<br>Design and build quantitative analysis tools using GIS, SQL and Python<br>Collect, create, manage, and analyze  data for projects, programs, policies, and reports<br>Develop and maintain geospatial and relational databases for agency-wide use<br>Manage the design and implementation of production level geospatial databases and applications<br>Coordinate with outside agencies and organizations on research projects"
		},
		{
			"employer": "New York City Department of City Planning",
			"title": "City Planner",
			"location":"New York",
			"dates":"2007 - 2009",
			"description" : "Managed transportation planning projects and studies<br>Developed geodatabase of the New York City bicycle network<br>Performed geospatial analysis and researched for planning studies and zoning changes"
		},
		{
			"employer": "New York City Department of City Planning",
			"title": "College Aid",
			"location":"New York",
			"dates":"2004 - 2006",
			"description" : "Deputy Project Manager for Bicycle Lane and Trail Inventory Study<br>Maintained geodatabases, conducted research, and made recommendations for agency projects<br>Performed geospatial analysis"
		}
		]
	},
	projects:{
		"project": [
		{
			"pjctID": "project3",
			"label": "Commuting Patterns Map",
			"img": "images/workFlowsImg.PNG",
			"about": "This map of short non-Manhattan commute trips was used for targeting new projects where they would be most beneficial. This map was created as part of an analysis of the health benefits of an expanded bicycle network. Non-Manhattan trips make up a significant share of total transportation demand and are often poorly served by transit. To provide greater choice in travel mode for these trips, bicycle infrastructure can be targeted at the most heavily used non-CBD commuting patterns that are within a reasonable biking distance.",
			"data": "Nam accumsan ut diam in tempus. Sed imperdiet dignissim ornare. Donec mattis est id magna dictum gravida. Nunc faucibus, ante nec ultrices fermentum, sapien sapien accumsan sem",
			"code": "Aliquam erat volutpat. Proin eget volutpat metus, feugiat hendrerit purus. Aliquam magna nulla, condimentum id porttitor vitae, pellentesque et erat."
		},
		{
			"pjctID": "project1",
			"label": "Vision Zero Priority Areas",
			"img": "images/vzImg.PNG",
			"about": "<p>The combined map of Priority Corridors, Intersections, and Areas covers 72% of pedestrians killed or severely injured (KSI) in Brooklyn, and shows where DOT and NYPD interventions are needed most. This map will serve as a guide to where engineering, enforcement, and education measures will be most effective at reducing pedestrian fatalities and severe injuries. A priority map was created for each of the five boroughs of New York City.<p>To determine the Priority Corridors, all corridors in Brooklyn were ranked on a pedestrian KSI per-mile basis. Corridors were selected from the top of this list until the cumulative number of pedestrian KSI reached half of the borough&#39;s total. Together, Brooklyn&#39;s 49 Priority Corridors constitute 9% of Brooklyn&#39;s total street network but account for 50% of the borough&#39;s total pedestrian KSI. <p>The same process was applied to intersections, using 15% as the target to account for the differing distribution of crashes at intersection. This methodology yielded 91 Priority Intersections with a minimum of three pedestrian KSI in the five-year data. Together, these intersections account for 15% of Brooklyn&#39;s pedestrian KSI but represent just 1% of all its intersections.<p>Some of the safety issues throughout Brooklyn occur systematically at an area-wide level and are not confined to a single intersection or street. To account for this, a kernel density map of the pedestrian KSI was generated and the Priority Areas were determined by identifying the &#39;hottest&#39; areas on the map that, when combined, account for half of all of pedestrian KSI in the borough. In total there are 18 square miles of Priority Areas. Although these contain 50% of all pedestrian KSI in Brooklyn, they constitute just 25% of the borough&#39;s land area.",
			//"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan et dolor quis volutpat. Etiam condimentum elementum enim, non pharetra elit interdum sit amet. Aenean lorem nulla, dignissim eu tortor sed, convallis mattis purus. Sed vehicula turpis sit amet mauris auctor, tempor elementum quam tempus. ",
			"data": "The data used for calculating the severe injuries and fatal used in the analysis is provided annually by NYSDOT. The crash data is re-mapped to a simplified street network. Each crash is assigned an intersection or a segment and that relationship can be used to quickly analyze corridors. Corridor and intersection analysis can be done in GIS or in SQL.",
			"code": "Crash data relationships are defined using Python and PostGIS to determine the best fit portion of the street network for each crash given the available attributes. The priority areas are calculated by selecting the areas, intersections and corridors with the highest density of crashes itterativly adding new locations until the desired threshold is met.",
			"link": ["http://www.nyc.gov/html/dot/html/pedestrians/ped-safety-action-plan.shtml"],
			"linkTxt": ["Full Report"]
		},
		{
			"pjctID": "project2",
			"label": "Speed Cameras and Crashes",
			"img": "images/camerasImg.PNG",
			"about": "<p>This map presenting the insufficiency in the speed camera program was used to illustrate the need for a more widespread rollout of the program to the New York State Legislature. The crash data used in generating the killed or severely injured (KSI) was given a relationship to either a street segment or an intersection. Pedestrian KSI data was then given an additional indicator to reflect whether  the street(s) relating to the crash were in the list of permissible street segments. <p>Permissible streets are those that are within 1/4 mile of the school and adjacent to the school building's street frontage. This will include any pedestrian KSI crash where its intersection has at least one leg in the permissible list, or in the case of a mid-block crash its street segment is in the permissible list. For the Pedestrian KSI crashes that occurred on a street where cameras are permitted, if the crash occurred outside of the camera&#39;s allowed operation time (Monday &ndash; Friday 7am &ndash; 4pm) it was re-categorized as prohibited.",
			"data": "Crash data are related to the street network, this analysis related each school to the streets where speed cameras are legally permissible. Each crash can then be identified as either on a permissible street or not.",
			"code": "This project used Python and GIS to determine for each school, the streets that were within 1/4 mile of the school and adjacent to the school building's street frontage. This allows each crash to be assigned to a school if permissible."
		},
		{
			"pjctID": "project4",
			"label": "Public Engagement",
			"img": "images/bivariateImg.PNG",
			"about": "<p>The Vision Zero Public Input Map is an online interactive map allowing New Yorkers the opportunity to identify pedestrian safety issues and the locations where the issues occur. Nearly 12,000 pedestrian safety issues were shared and mapped. However, the majority of them were outside of the most dangerous areas relative to pedestrian safety.<p>This map compares two discrete groupings of public requests relating to traffic safety. The first set is the public input on safety concerns via the Vision Zero Input site. The second set is public requests for common safety interventions such as speed humps. The data was aggregated for both sets based on the density of the requests per location and stored in raster data.  ArcGIS Map Algebra was used to combine features and generate a new raster value based on the overlap of the two groups of requests.<p>The map was developed to determine if this was a due to a lack of access to technology or a lack of public engagement that led to the disparity between location with pedestrian injuries and locations identified as problematic.  The map shows clear areas of disengagement as well as areas of high levels of engagement. This also illustrates that some communities are engaged, but not with the Vision Zero Public Input process.",
			//"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan et dolor quis volutpat. Etiam condimentum elementum enim, non pharetra elit interdum sit amet. Aenean lorem nulla, dignissim eu tortor sed, convallis mattis purus. Sed vehicula turpis sit amet mauris auctor, tempor elementum quam tempus. ",
			"data": "Uses two descrete groupings of community requests. The first set is the public input on safety concerns via Vision Zero Input site. The second set is public requests for common safety interventions such as speed humps. The data was agregated for both sets based on the density of the requests per location and stored in raster data.",
			"code": "Uses ArcGIS Map Algebra to combine features and generate a new raster value based on the overlap of the two groups of requests.",
			"link": ["http://www.nyc.gov/html/visionzero/pages/maps-and-data/vz-input-map.shtml"],
			"linkTxt": ["Vision Zero Input"]
		},
		{
			"pjctID": "project5",
			"label": "Bike Share Proposal",
			"img": "images/bikeshareImg.PNG",
			"about": "This map was developed as a recommended service area for a bike-share program in NYC. The analysis that drove the proposal looked to ensure that initial program coverage included highly trafficked areas, major origin and destination points for commuters, and covered neighborhoods in multiple boroughs that are currently characterized by large numbers of existing bicyclists and a high degree of bike lane coverage. The analysis took into consideration funding sources and the implications on the program area.  The existing program area is nearly identical to the proposal and the on-going plans for expansion are similar to the recommendations. ",
			"data": "Nam accumsan ut diam in tempus. Sed imperdiet dignissim ornare. Donec mattis est id magna dictum gravida. Nunc faucibus, ante nec ultrices fermentum, sapien sapien accumsan sem",
			"code": "Aliquam erat volutpat. Proin eget volutpat metus, feugiat hendrerit purus. Aliquam magna nulla, condimentum id porttitor vitae, pellentesque et erat.",
			"link": ["https://www.citibikenyc.com", "http://www.nyc.gov/html/dcp/pdf/transportation/bike_share_complete.pdf"],
			"linkTxt": ["Current Bike Share website", "Bike Share Feasibility Study"]
		},
		{
			"pjctID": "project6",
			"label": "Vision Zero View Web Map",
			"img": "images/vzvImg.PNG",
			"about":"Vision Zero View is an interactive map of traffic crashes, transportation safety projects, and outreach locations. VZV maps injury and fatal crashes based on the latest available data, updated monthly, and includes some historic data for context. The data can be sorted by month and year or by NYPD precinct, City Council district, and Community Board district. The map allows users to view transportation safety interventions and filter by type. The data used comes from the NYPD crash database, and is re-mapped to a simplified street network  to more accurately represent the precision of the available data (using similar methods to the Intersection Simplification Code linked below). The data is aggregated by location, month and year and available to the public in ESRI Shapefile and geoJSON formats.",
			//"about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan et dolor quis volutpat. Etiam condimentum elementum enim, non pharetra elit interdum sit amet. Aenean lorem nulla, dignissim eu tortor sed, convallis mattis purus. Sed vehicula turpis sit amet mauris auctor, tempor elementum quam tempus. ",
			"data": "The data comes from the NYPD crash database, and is re-geocoded for improved accuracy and agregated by location, month and year. The crash data and the project data are stored in SQL databases in live and monthly static versions. The agregated data is available to the public in ESRI Shapefile and geoJSON formats.",
			"code": "Once a month the live data is collected, transfered to a static database, then processed, geocoded and agregated with a Python script allowing for continued updates without requiring technical staff. The crash data are re-mapped to a simplified street network to more accuratly represent the precision of the availible data (using similar methods to the Intersection Simplification Code linked below).",
			"link": ["http://www.vzv.nyc","https://github.com/hotpepper/ALIS_Network_Simplify"],
			"linkTxt": ["Vision Zero View", "Intersection Simplification Code"]
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
			"dates": "2005 - 2007",
			"url": "http://www.columbia.edu/"
     	},
     	{
     		"name": "State University of New York, University at Buffalo",
     		"location": "Buffalo, NY",
     		"degree": "Bachelor of Arts",
     		"majors": "Environmental Design",
     		"minors": ["Spanish"," Japanese"],
     		"dates": "2000 - 2004",
     		"url": "http://www.buffalo.edu/"
     	}
     	],
     	"onlineCourses":
     	[
     	{
	     	"title": "Full Stack Foundations",
	        "school": "Udacity",
	        "date": 2015,
	        "url": "https://www.udacity.com/course/ud088"
	     },
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
	     },
	     {
	     	"title": "Maps and the Geospatial Revolution",
	     	"school": "Corsera",
	     	"date": 0,
	     	"url": "https://www.coursera.org/course/maps"
	     },
	     {
	     	"title": "Writing Queries Using Microsoft SQL Server 2008 Transact-SQL",
	     	"school": "Microsoft Learning",
	     	"date": 0,
	     	"url": "https://www.microsoft.com/learning/en-us/course.aspx?id=2778a"
	     },
	     {
	     	"title": "Implementing a Microsoft SQL Server 2008 R2 Database ",
	     	"school": "Microsoft Learning",
	     	"date": 0,
	     	"url": "https://www.microsoft.com/learning/en-us/course.aspx?id=6232b"
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
			HTMLworkDates.replace("%data%", model.work.jobs[job].dates)+
			//HTMLworkLocation.replace("%data%", model.work.jobs[job].location)+
			HTMLworkDescription.replace("%data%", model.work.jobs[job].description)
	},
	schoolLength: function(){
		return	model.education.schools.length;
	},
	formatSchool: function(school){
		console.log("adding school: "+  model.education.schools[school].name)
		var formattedSchool = HTMLschoolName.replace("%data%", model.education.schools[school].name) +
			HTMLschoolDegree.replace("%data%", model.education.schools[school].degree)+
			HTMLschoolDates.replace("%data%", model.education.schools[school].dates)+
			HTMLschoolLocation.replace("%data%", model.education.schools[school].location)+
			HTMLschoolMajor.replace("%data%", model.education.schools[school].majors)
		if (model.education.schools[school].minors){
			formattedSchool+=HTMLschoolMinor.replace("%data%", model.education.schools[school].minors)
		}
		return formattedSchool
			
	},

	onlineLength: function(){
		return	model.education.onlineCourses.length;
	},
	formatOnline: function(c){
		console.log("adding class: "+  model.education.onlineCourses[c].title)
		if (this.onlineLength()-1 ==c ) {
			return HTMLonlineTitle.replace("%data%", model.education.onlineCourses[c].title).replace("#", model.education.onlineCourses[c].url)	
		} else {
			return HTMLonlineTitle.replace("%data%", model.education.onlineCourses[c].title).replace("#", model.education.onlineCourses[c].url)
			+" | "
		}
		//HTMLonlineSchool.replace("%data%", model.education.onlineCourses[c].school)
			//HTMLonlineDates.replace("%data%","-")
			//+HTMLonlineURL.replace("%data%", model.education.onlineCourses[c].url)
	},
	projectLength: function(){
		return model.projects.project.length
	},
	linkLength: function(p) {
		return model.projects.project[p].link.length
	},
	formatProject: function(p){
		//add new code for Modals here
		var output =  HTMLmodalPjct.replace("%data%", model.projects.project[p].pjctID)+
		HTMLmodalLbl.replace("%data%", model.projects.project[p].label)+
		HTMLmodalImg.replace("%data%", model.projects.project[p].img)+
		HTMLmodalAbt.replace("%data%", model.projects.project[p].about)
		//+HTMLmodalDta.replace("%data%", model.projects.project[p].data)+
		//HTMLmodalCde.replace("%data%", model.projects.project[p].code)
		//check for link
		if (model.projects.project[p].link){
			//get all links
			//console.log(this.linkLength(p))
			for (linkout=0;linkout<this.linkLength(p); linkout++) {
				//console.log("out")
				output = output + HTMLmodalLnk.replace("%data%", model.projects.project[p].link[linkout])+
				HTMLmodalLnkTxt.replace("%data%", model.projects.project[p].linkTxt[linkout])+"<br>"
			}
		};
		return output+HTMLmodalEnd
	}
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
	showProjectModals: function(){
		for (i=0; i<controller.projectLength(); i++) {
			$("body").append(controller.formatProject(i))
		}
	},
	showRows: function() {
		var rows;
		if (controller.projectLength() % 3 == 0) {
			//3 will work change default
			rows = 3
		} else	{
			rows = 2
		};
		console.log(rows)
		for (r=0; r< controller.projectLength() / rows; r++){
			//add row 
			console.log("Adding row "+ r.toString())
			$("body").append('<div class="row text-center">')
			for (p=0; p < rows * r+1; p++){
				//add number projects to row depeding on the number rows
				console.log(p)

			}
			$("body").append('</div>')
			
		}
	},
	render: function(){
		this.showWork();
		this.showSchool();
		this.showOnline();
		this.showProjectModals();
	}
};

view.render();
