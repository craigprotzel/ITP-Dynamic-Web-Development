

var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
	
	
	// retrieve all the entries, set them to variables
	
	// get the new title
	var newTitle = document.getElementById("newTitle").value;
	
	
	//get the content type
	var contentIndex = document.getElementById("contentType").selectedIndex;
	//var con = $("#contentType.selectedIndex");
	var contentType = document.getElementById("contentType").options;
	var contentTxt = contentType[contentIndex].text;
	
	
	//get the checkboxes
	var topics = document.getElementsByName("topics");
	var topicsTxt = "";
	var i;
	
	for (i = 0; i < topics.length; i++){
		if(topics[i].checked){
			topicsTxt = topicsTxt + topics[i].value + "   ";
		}
	}	
			

	
	// insert all of the new HTML values
	
	var newExercise = document.getElementById("newExercise");
	newExercise.innerHTML = "This exercise is called: " + newTitle;
	
	var newContentType = document.getElementById("newContentType");
	newContentType.innerHTML = "It will include " + contentTxt + " on the following topics:" 
	
	
	var newTopicsList = document.getElementById("newTopicsList");
	newTopicsList.innerHTML = "";
	var topicsTxtItem = document.createElement("li");
	topicsTxtItem.innerHTML = topicsTxt;
	//$(topicsTxtItem).html(topicsTxt);
	
	newTopicsList.appendChild(topicsTxtItem);
	
	
});
	
	
