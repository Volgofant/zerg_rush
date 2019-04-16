let age = document.getElementById('age'),
    name1 = document.getElementById("name"),
    surname1 = document.getElementById("surname");


    
            function showUser(surname, name) {
	        alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
            }
            showUser(surname1.value, name1.value);



