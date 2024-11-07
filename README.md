**eServe**

eServe is a data-driven inventory and waste management solution designed specifically for airlines to optimize in-flight meal stocking, reduce waste, and enhance passenger satisfaction. By leveraging AI-driven demand predictions, real-time waste tracking, and actionable meal recommendations, eServe enables airlines to make smarter, more sustainable meal planning decisions, ultimately improving efficiency and cutting costs.

Features

	1.	Flight and Meal Management:
	•	Create a new flight entry with flight date and flight number.
	•	Add pre-flight meal information, including meal types, quantities, and nutritional labels (e.g., high protein, low carb).

	2.	Post-Flight Image Upload:
	•	Upload images of trays after each flight, capturing visual data on meal consumption and waste.
	•	Drag-and-drop functionality for easy upload and a preview section to view uploaded images.

	3.	AI-Powered Image Processing:
	•	Automatically processes uploaded images to analyze leftover food on trays.
	•	Generates waste data per meal item, identifying which meals or types of food were left untouched.

	4.	Route-Based Waste Analysis:
	•	Displays waste data for each route, organized by meal service and food category (e.g., high protein, high carb).
	•	Visual charts allow for easy analysis of waste trends on specific routes.

	5.	Meal Recommendations:
	•	AI-generated recommendations for future flights based on historical demand and real-time waste data.
	•	Suggests portion adjustments and alternative meal options to reduce waste.

	6.	Inventory Recommendations:
	•	Provides optimized stock recommendations for each meal, helping airlines manage inventory efficiently and avoid overstocking.

Technical Architecture

eServe uses a modern, scalable architecture that incorporates cloud services for data storage, machine learning, and real-time processing:

	1.	Frontend: Built with React, providing an intuitive interface for airline admins to manage flights, add meal information, and view waste analysis.

	2.	Backend: Node.js API that connects the frontend with the database and AI models, managing data flow and processing.

	3.	Data Storage:
	•	Azure Cosmos DB: Stores structured flight and meal data, including waste analysis results.
	•	Azure Blob Storage: Manages large files, such as uploaded tray images, for scalability.

	4.	AI & Machine Learning:
	•	Azure Computer Vision: Processes images of meal trays to analyze leftover food and generate waste data.
	•	Azure Machine Learning: Hosts the demand prediction model, which uses historical and real-time waste data to forecast future meal requirements.

	5.	Hosting: Deployed on Azure App Services for reliable, scalable hosting with built-in load balancing and redundancy.

Usage

	1.	Add a New Flight:
	•	Navigate to the “Add New Flight” page, enter the flight date and flight number, then click “Create Flight.”

	2.	Input Pre-Flight Meal Information:
	•	In the Pre-Flight Meals section, add meal details, including meal types, quantities, and nutritional information.

	3.	Upload Post-Flight Tray Images:
	•	After the flight, go to the Post-Flight Meals section, upload images of trays, and verify the uploads in the preview area.

	4.	Process Images:
	•	Click “Process Images” to trigger AI analysis. The system will analyze tray images and generate waste data.

	5.	View Analysis and Recommendations:
	•	On the Analysis Page, review flight overview data, waste analysis charts, and AI-generated meal recommendations.

	6.	Inventory and Stock Recommendations:
	•	Click “Inventory Recommendation” to access tailored stock suggestions for future flights.
