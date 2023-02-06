// set global variable for count
let count = 2; 

// function for displaying desired text
function displayText(){

	// select element to be modified
	let buttonDiv = document.getElementById("moreText");

	// conditional statement - execute "if" if the condition is true, else execute the "else"
	if (count % 2 == 0){
		buttonDiv.innerHTML = "Visualization made using employee attrition dataset from Kaggle. \
			Using Python to clean up dataset and split the dataset based on age-categories: Young, Middle, \
			Senior, attrition rate for each group was calculated. Putting the calculated data into a dataframe, the dataframe\
			was exported as a .csv file. The .csv file was imported into Tableau and a bar chart was created.";
	}
	else 
		{buttonDiv.innerHTML = ""};

	// add one to the count variable everytime the function is executed
	count += 1;
}
