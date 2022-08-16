# PCLUB secy task no 5
I had zero idea about backend development ,I only knew little bit about MySQL(from school) so in the past 3 days I have learnt some parts of nodejs and how to develop a backend.<br/>
First I installed MySQL for database and Xampp Control Panel and thunder client extension in VS Code.<br/>
Added json package to my project folder using powershell window<br/>
![001](https://user-images.githubusercontent.com/97836807/184943987-d04bb592-aa82-48bd-baee-fe9c544bb0d2.png)
## Installed packages
Installed mysql,express,body-parser and nodemon packages using terminal </br>
## started local server
## app.js file code
Require all the packages at top of the file and set the listening port to be 5000
![002](https://user-images.githubusercontent.com/97836807/184944042-1107b677-2221-4e54-91d9-5118b4deee5e.png)

## Started Xampp control panel to start MySql and then opened phpMyAdmin
![003](https://user-images.githubusercontent.com/97836807/184944089-147f139c-f0b7-45d7-b451-33ab6dae1f64.png)

## created database using phpMyAdmin ss_pclub and table student_data with following structure
![004](https://user-images.githubusercontent.com/97836807/184944139-abbaa775-74cb-4766-806a-4197cf4d3fba.png)

## Connected Node.js with MySQL
![005](https://user-images.githubusercontent.com/97836807/184944187-a0c5d3ec-4987-46a4-a4ff-ae6508fe8372.png)

Entered some records data through phpMyAdmin<br/>
## Code for displaying whole data
![006](https://user-images.githubusercontent.com/97836807/184944233-12d250e8-8c7e-43aa-844a-f82ef4ac1c48.png)

# Filtering Data
I could not find way to filter using multiple parameters so I have used only single parameters for filtering<br/>
![007](https://user-images.githubusercontent.com/97836807/184944290-496587da-ce11-4b79-847c-43f497dfb457.png)
![008](https://user-images.githubusercontent.com/97836807/184944316-58638fbf-bc5d-4dae-b32f-5f451aa8aeae.png)
![009](https://user-images.githubusercontent.com/97836807/184944334-4ee3087f-43d8-4437-9556-e6a66eadc2b9.png)
![010](https://user-images.githubusercontent.com/97836807/184944351-6166c4d4-8b65-4a42-bb4c-86ca5c7e3f52.png)

#Deleting a record
I have written query just to delete a record on the basis of RollNo</br>
![011](https://user-images.githubusercontent.com/97836807/184944418-abaf1d2f-6e39-4d4f-8339-40dc2e1a403f.png)

# Adding a Record
Using Post method</br>
![12](https://user-images.githubusercontent.com/97836807/184944455-36329785-48a3-4afe-8b61-a06791e56d7d.png)

# Updating a Record
I have kept only branch and name to be updatable</br>
![013](https://user-images.githubusercontent.com/97836807/184944499-6de34cd8-f6cd-4d82-9ea2-89188de1173b.png)





