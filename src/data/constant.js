
import youro3 from '../assets/Projectpics/youro-3.jpg';
import sales from '../assets/Projectpics/sales.jpg';
 


export const web_projects= [
    {
      projectname:"youro.",
      gitlink:'https://github.com/sricharan18/youro-frontend',
      imglink1:youro3,
      description:"A TeleHealth platform",
     Wholedescription: `
The telehealth platform is a sophisticated system designed to provide comprehensive virtual healthcare services. It leverages Spring Boot to power robust RESTful APIs, ensuring a reliable and scalable backend infrastructure. The integration with MySQL allows for efficient database management, with JPA (Java Persistence API) used for handling complex entity relationships, ensuring data consistency and integrity.

### Core Features:

1. **Appointment Management**:
   - **Booking**: Users can easily book appointments with healthcare professionals. The system provides a user-friendly interface for selecting available time slots and confirming appointments.
   - **Cancellation**: If necessary, users can cancel appointments, with the system updating availability in real-time to allow other patients to book.
   - **Rescheduling**: Users have the flexibility to reschedule appointments, ensuring they can find convenient times for their consultations.

2. **Appointment Notes**:
   - During or after appointments, healthcare professionals can create detailed notes about the consultation. These notes are accessible to patients, providing a clear record of their medical interactions and advice received.

3. **Personalized Care Plans**:
   - Following appointments, the system facilitates the development of personalized care plans. These plans can include detailed information such as prescribed medications, dosage instructions, and lifestyle recommendations. This ensures that patients receive tailored care suited to their individual needs.

4. **Secure Chat Application**:
   - To enhance communication, the platform includes an integrated secure chat application. This feature allows for real-time messaging between patients and healthcare providers, enabling quick consultations and follow-ups. The chat application uses advanced encryption protocols to ensure privacy and confidentiality.

5. **User Profiles**:
   - The platform maintains meticulous user profiles, which include personal information, medical history, and appointment records. This ensures a seamless and personalized experience for each user, as healthcare providers can quickly access relevant information during consultations.

6. **Administrative Module**:
   - The platform includes a robust administrative module that empowers administrators to oversee and manage the entire system. Administrators can:
     - **Manage Healthcare Professionals**: Add, update, and remove healthcare providers, ensuring that the platform always has an up-to-date list of available professionals.
     - **Manage Patients**: Monitor patient profiles and activities, ensuring that their needs are being met efficiently.
     - **System Oversight**: Perform system-wide checks and updates to maintain smooth operation and address any issues that arise promptly.

### Technical Details:

- **Spring Boot**: Utilized for creating the backend services, ensuring a scalable and maintainable architecture.
- **RESTful APIs**: Implemented for seamless communication between the frontend and backend, enabling efficient data exchange.
- **MySQL**: Chosen for its robust database management capabilities, allowing for reliable data storage and retrieval.
- **JPA (Java Persistence API)**: Used for managing complex entity relationships within the database, ensuring data consistency and reducing redundancy.
- **React.js**: Frontend framework for building user interfaces, providing a dynamic and interactive experience.
- **HTML/CSS**: Used for structuring and styling the frontend components, ensuring a visually appealing and responsive design.
- **Secure Chat Integration**: Incorporates encryption protocols to safeguard user communications, maintaining high levels of privacy and security.

### User Experience:

The platform is designed with a focus on providing a seamless and intuitive user experience. Whether patients are booking an appointment, chatting with their healthcare provider, or accessing their personalized care plans, the system ensures ease of use and accessibility. Administrators also benefit from a streamlined interface that makes managing the platform's various aspects straightforward and efficient.

Overall, this telehealth platform represents a significant advancement in virtual healthcare delivery, combining robust technical infrastructure with a comprehensive suite of features to meet the needs of patients, healthcare providers, and administrators alike.
    `
    },
   {
     projectname:"Prediction of Sales",
     description:"Predictive Sales Tool",
     gitlink:'https://github.com/jamalpurvamshi12/Prediction-of-Sales/tree/master',
     imglink1:sales,
     Wholedescription: `

### Problem Statement
Retail stores face the constant challenge of managing their inventory efficiently. Thousands of products are sold daily, and purchasing decisions must be cost-effective to maximize profits. Misjudging demand—either by buying unwanted items or overstocking—can lead to significant financial losses, pushing retailers into debt. A robust understanding of customer demand and effective purchasing strategies are crucial for retailers to increase sales and profits.

### Project Objective
To address these challenges, we propose developing a predictive model that forecasts product sales using various influencing factors. This model aims to provide retail store owners with insights into customer demand, helping them make informed purchasing decisions, optimize inventory levels, and ultimately enhance profitability.

### Potential Impact
By predicting sales based on factors such as store location, product type, and store characteristics, the model will enable:
- Improved inventory management, reducing overstock and understock situations.
- Enhanced understanding of product demand variations across different geographical locations.
- Better decision-making for new markets and store expansions.
- Tailored purchasing strategies based on store size and type.

### Data Source
The project utilizes the Big Mart sales dataset, obtained from Kaggle. This dataset includes sales data for various products across different stores.

### Data Cleaning and Preprocessing
The data cleaning and preprocessing steps include:
1. Loading the dataset.
2. Identifying data types (numerical, categorical, etc.).
3. Removing duplicate entries.
4. Handling missing values by:
   - Replacing null values in the "Item Weight" column with the mean.
   - Imputing "Outlet Size" based on the mode of the related "Outlet Type."
5. Standardizing categorical values (e.g., "Item Fat Content").
6. Converting object types to categorical types.
7. Rounding numerical values for consistency.
8. Encoding categorical variables.
9. Identifying and handling outliers using the Interquartile Range (IQR) method.
10. Normalizing non-numerical variables.

### Exploratory Data Analysis (EDA)
The EDA process involves:
1. Descriptive statistics and data visualization to understand data distributions and relationships.
2. Univariate analysis to observe individual feature distributions.
3. Bivariate analysis to explore relationships between pairs of features.
4. Multivariate analysis to examine interactions among multiple features.

Key observations include:
- High correlation between "Item MRP" and "Item Outlet Sales."
- Most products fall within specific ranges for weight and visibility.
- The majority of products are low fat, and small stores dominate the dataset.

### Algorithms and Evaluation
We employed multiple algorithms to predict sales, including:
1. Linear Regression
2. Random Forest
3. K-Nearest Neighbors (KNN)
4. LASSO Regression
5. Ridge Regression
6. Decision Tree Regression

Each algorithm was evaluated using:
- Root Mean Squared Error (RMSE)
- Mean Absolute Error (MAE)
- R-squared Score (R²)

### Results
After evaluating the performance of each model, the Random Forest algorithm demonstrated the highest accuracy in predicting sales. The results for the Random Forest model were as follows:
- **Root Mean Squared Error (RMSE):** 1094.33
- **Mean Absolute Error (MAE):** 734.94
- **R-squared Score (R²):** 0.591

The Random Forest model outperformed other models due to its ability to handle non-linear relationships and interactions between features effectively.

## User Interface
The project includes a user-friendly interface built with Streamlit, allowing stakeholders to interactively explore and understand the insights derived from the predictive model for optimizing inventory management. Streamlit facilitates intuitive data visualization and exploration, enhancing accessibility and usability for decision-makers.

### Conclusion
Our predictive model, particularly the Random Forest algorithm, provides valuable insights into sales patterns, enabling retailers to make data-driven decisions for inventory management. This solution aims to enhance operational efficiency, reduce financial risks, and increase profitability for retail stores.
`
   },
   {
    projectname:"Blood Bank Management System",
    description:"A database managment solution ",
    Wholedescription: `
## Overview
The Blood Bank Management System is a comprehensive solution designed to facilitate efficient communication and management between hospitals and the blood bank. It leverages PostgreSQL for robust database management, ensuring seamless operations and enhanced traceability in the blood supply chain.

## Features

### Seamless Database Management with PostgreSQL
- Utilizes PostgreSQL to maintain a centralized and secure database.
- Ensures efficient storage and retrieval of blood inventory data, donor records, and hospital requests.
- Supports complex queries and transactions for real-time updates and reporting.

### Blood Requests Management
- Facilitates streamlined blood requests from hospitals, ensuring timely responses and allocations.
- Provides a user-friendly interface for hospitals to submit blood requests based on specific blood types and quantities needed.
- Automatically updates inventory levels and notifies hospitals of request statuses.

### Inventory Management
- Enables effective management of blood inventory across multiple blood types and storage conditions.
- Monitors blood stock levels in real-time and generates alerts for low inventory or expiring blood units.
- Optimizes distribution logistics to minimize wastage and maximize usage efficiency.

### Enhanced Traceability
- Implements robust tracking mechanisms to trace blood units from donation to transfusion.
- Maintains detailed records of donor information, blood testing results, and transfusion histories.
- Enhances transparency and accountability in the blood supply chain, ensuring compliance with regulatory standards.

## User Interface (UI) Development
The Blood Bank Management System includes a modern and intuitive user interface developed with React, HTML, and CSS:
- **React Framework**: Provides a responsive and interactive frontend interface for users to interact with the system seamlessly.
- **HTML and CSS**: Ensures consistent and user-friendly design across different devices and browsers.
- **Dynamic Features**: Allows users to perform actions such as submitting blood requests, viewing inventory status, and accessing detailed reports.

## Benefits
- **Optimized Blood Supply Chain**: Improves operational efficiency by reducing response times and optimizing blood distribution.
- **Enhanced Patient Care**: Ensures timely access to blood units, contributing to better patient outcomes and healthcare delivery.
- **Regulatory Compliance**: Adheres to regulatory requirements by maintaining accurate records and traceability of blood units.
- **Cost Efficiency**: Minimizes wastage and ensures judicious use of blood resources, leading to cost savings for hospitals and blood banks.

## Future Enhancements
- Integration with external systems for automated blood testing and donation scheduling.
- Implementation of predictive analytics to forecast blood demand and optimize inventory levels dynamically.

## Conclusion
The Blood Bank Management System provides a robust platform for efficient blood inventory management, enhancing communication between hospitals and the blood bank. Leveraging PostgreSQL for database management and a modern UI developed with React, the system ensures streamlined operations, improved traceability, and optimized blood supply chain logistics.

`
   },
   {
     projectname:"Prediction of Diabetes",
     description:"Diabetes Predictor Web App",
     Wholedescription: `

### Overview
The project aimed to predict diabetes using machine learning, specifically leveraging the Random Forest algorithm. The system incorporated a Flask backend to connect the frontend inputs with the predictive model. The frontend was developed using HTML, CSS, and JavaScript, providing users with an intuitive interface to input relevant health data for prediction.

### Machine Learning Algorithm
- **Random Forest**: Chosen for its ability to handle complex relationships in data and provide accurate predictions for diabetes based on multiple input features such as glucose levels, BMI, age, and blood pressure.

### Flask Backend Integration
- **Flask Framework**: Implemented as the backend server to handle requests from the frontend and communicate with the machine learning model.
- **API Endpoints**: Created to receive input data from the frontend, process requests, and return the predicted outcomes.

### Frontend Development
- **HTML/CSS/JavaScript**: Developed a user-friendly interface where users can input their health parameters.
- **Form Submission**: Integrated with Flask backend to send user inputs for prediction and display the predicted diabetes status.

### User Experience
- **Interactive Interface**: Allows users to input their health metrics and receive real-time predictions on their diabetes risk.
- **Feedback Mechanism**: Provides immediate feedback on the likelihood of diabetes based on the entered data, helping users understand their health status.

### Conclusion
The project successfully integrated a Random Forest model for predicting diabetes with a Flask backend and HTML/CSS/JS frontend. This approach not only provided accurate predictions but also ensured a seamless user experience through an intuitive and responsive web interface. By leveraging machine learning and web technologies, the project aimed to empower users with actionable insights into their health risks related to diabetes.

 `
   }
]
export const experiences = [
  {
  bgcolor: "white",
  company: "S2Global Solutions",
  role: "Software Engineer",
  img: "https://www.s2globalsolutions.com/assets/images/logonew.png",
  date: "Jul 2024 – Present",
  clients: [
    {
      name: "Fiserv",
      description: `
• Standardized fraud validation across Spring Boot APIs and Spring Batch layers, improving reporting accuracy across 5 payment networks.
• Enhanced Dispute Service APIs and Angular UI, enabling faster investigation for 500K+ disputes per month.
• Implemented in-memory caching for exception responses, reducing request latency by 15%.
• Built a Python + Streamlit tool to generate validated batch files, cutting setup time from hours to seconds.
      `
    },
    {
      name: "Barclays",
      description: `
• Developed audit-logging REST APIs for a centralized Security Service across Hadoop platforms.
• Built an event-driven support triage system using Java, Kafka, and LLM-based AI, processing 10K+ messages/day.
• Redesigned Ambari UI using HTML, CSS, and JavaScript to improve cluster management usability.
• Improved CI/CD pipelines and containerized services using Docker and Kubernetes.
      `
    }
  ]
},
  {
    bgcolor:"black",
    id: 0,
    img: "data:image/jpeg;base64,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",
    role: "Associate Software Engineer",
    company: "Legato Health Technologies",
    date: "Nov 2021- May 2022",
    description: `
    • Developed a secure and scalable Agent Account Service using Spring Boot, REST APIs, and MySQL to manage agent account creation and updates.
    • Integrated Redis caching with TTL-based policies to optimize high-frequency account lookups, reducing database load and improving API response times by 12%.
    • Deployed backend services on AWS (EC2, S3, RDS) using GitHub Actions and configured CloudWatch monitoring and alerts for production reliability.
    `
  },
  {
    bgcolor:"orange",
    id: 0,
    img: "data:image/png;base64,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",
    role: "Software Engineer",
    company: "Phygital24",
    date: "Dec 2020 - Aug 2021",
    description: `
• Built product listing and creation workflows using React with structured state management and validation, integrated with Java APIs and MongoDB to support 1,000+ daily users.
• Integrated 10+ GraphQL APIs across Producer and Consumer platform modules, optimizing data fetching through schema-driven queries and client-side validation.
• Designed and implemented a producer-controlled store availability feature, enforcing order placement rules across 150+ stores based on real-time availability.
`
  },
];
