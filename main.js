let count = 2; 

function displayText(){
	count += 1;
	let buttonDiv = document.getElementById("moreText");
	if (count % 2 == 0){
		buttonDiv.innerHTML = "Visualization made using employee attrition dataset from Kaggle. \
			Using Python to clean up dataset and split the dataset based on age-categories: Young, Middle, \
			Senior, attrition rate for each group was calculated. Putting the calculated data into a dataframe, the dataframe\
			was exported as a .csv file. The .csv file was imported into Tableau and a bar chart was created.";
	}
	else 
		{buttonDiv.innerHTML = ""};
}
