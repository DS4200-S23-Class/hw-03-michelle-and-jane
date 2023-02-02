function displayText(){

	let buttonDiv = document.getElementById("moreText");
	buttonDiv.innerHTML = "Visualization made using employee attrition dataset from Kaggle. \
		Using Python to clean up dataset and split the dataset based on age-categories: Young, Middle, \
		Senior, attrition rate for each group was calculated. Putting the calculated data into a dataframe, the dataframe\
		was exported as a .csv file. The .csv file was imported into Tableau and a bar chart was created.";

}