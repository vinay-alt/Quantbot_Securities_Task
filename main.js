let a = {
"Punjab": ["Abohar",
 "Amritsar",
 "Haripur",
 "Ludhiana",
 "Pathankot",
 "Patiala"],
 "Telangana": ["Adilabad",
 "Hyderabad",
 "Karimnagar",
 "Khammam",
 "Mahabubnagar",
 "Nalgonda",
 "Nizamabad",
 "Ramagundam",
 "Warangal"],
 "Tripura": ["Agartala"],
 "Uttar Pradesh": ["Agra",
 "Aligarh",
 "Allahabad",
 "Bakshpur",
 "Bamanpuri",
 "Bareilly",
 "Bharauri",
 "Budaun",
 "Bulandshahr",
 "Firozabad",
 "Fyzabad",
 "Ghaziabad",
 "Gopalpur",
 "Hapur",
 "Hata",
 "Jhansi",
 "Lucknow",
 "Mathura",
 "Meerut",
 "Mirzapur",
 "Moradabad",
 "Muzaffarnagar",
 "Pilibhit",
 "Saharanpur",
 "Saidapur",
 "Shahbazpur",
 "Tharati Etawah",
 "Varanasi"],
 "Maharashtra": ["Ahmadnagar",
 "Akola",
 "Amaravati",
 "Aurangabad",
 "Bhiwandi",
 "Bhusaval",
 "Chanda",
 "Kalyan",
 "Khanapur",
 "Kolhapur",
 "Latur",
 "Malegaon Camp",
 "Mumbai",
 "Nanded",
 "Nasik",
 "Parbhani",
 "Pune",
 "Sangli"],
 "Gujarat": ["Ahmedabad",
 "Bhavnagar",
 "Bhuj",
 "Ghandinagar",
 "Navsari",
 "Porbandar",
 "Rajkot",
 "Surat",
 "Vadodara"],
 "Mizoram": ["Aizawl  "],
 "Rajasthan": ["Ajmer",
 "Alwar",
 "Bharatpur",
 "Bhilwara",
 "Bikaner",
 "Jaipur",
 "Jodhpur",
 "Kota",
 "Pali",
 "Rampura",
 "Sikar",
 "Tonk",
 "Udaipur"],
 "Kerala": ["Alappuzha",
 "Calicut",
 "Kochi",
 "Kollam",
 "Thiruvananthapuram"],
 "West Bengal": ["Alipurduar",
 "Asansol",
 "Barddhaman",
 "Bhatpara",
 "Haldia",
 "Haora",
 "Kolkata ",
 "Krishnanagar",
 "Shiliguri"],
 "Haryana": ["Ambala",
 "Bhiwani",
 "Faridabad",
 "Gurugram",
 "Hisar",
 "Karnal",
 "Panchkula",
 "Panipat",
 "Rohtak",
 "Sirsa",
 "Sonipat"],
 "Bihar": ["Aurangabad",
 "Bhagalpur",
 "Gaya",
 "Muzaffarpur",
 "Patna",
 "Purnea"],
 "Jammu and Kashmir": ["Baramula",
 "Jammu",
 "Saidpur",
 "Srinagar"],
 "Karnataka": ["Belgaum",
 "Bellary",
 "Bengaluru",
 "Bidar",
 "Bijapur",
 "Chikka Mandya",
 "Davangere",
 "Gulbarga",
 "Hospet",
 "Hubli",
 "Kolar",
 "Mangalore",
 "Mysore",
 "Raichur",
 "Shimoga"],
 "Chhattisgarh": ["Bhilai",
 "Bilaspur",
 "Raipur"],
 "Madhya Pradesh": ["Bhopal ",
 "Gwalior",
 "Indore",
 "Jabalpur",
 "Ratlam",
 "Saugor",
 "Ujjain"],
 "Odisha": ["Bhubaneshwar",
 "Brahmapur",
 "Cuttack",
 "Puri",
 "Raurkela",
 "Samlaipadar",
 "Brajrajnagar",
 "Talcher"],
 "Chandigarh": ["Chandigarh "],
 "Tamil Nadu ": ["Chennai",
 "Coimbatore",
 "Cuddalore",
 "Dindigul",
 "Karur",
 "Krishnapuram",
 "Kumbakonam",
 "Madurai",
 "Nagercoil",
 "Rajapalaiyam",
 "Salem",
 "Thanjavur",
 "Tiruchchirappalli",
 "Tirunelveli",
 "Tiruvannamalai",
 "Tuticorin",
 "Valparai",
 "Vellore"],
 "Andhra Pradesh": ["Chirala",
 "Guntur",
 "Hindupur",
 "Kagaznagar",
 "Kakinada",
 "Kurnool",
 "Machilipatnam",
 "Nandyal",
 "Nellore",
 "Ongole",
 "Proddatur",
 "Rajahmundry",
 "Tirupati",
 "Vishakhapatnam",
 "Vizianagaram"],
 "Daman and Diu": ["Daman",
 "Diu"],
 "Uttarakhand": ["DehraDun"],
 "Delhi": ["Delhi",
 "New Delhi"],
 "Jharkhand": ["Dhanbad",
 "Jamshedpur",
 "Ranchi",
 "Jorapokhar"],
 "Assam": ["Dibrugarh",
 "Dispur",
 "Guwahati",
 "Jorhat",
 "Silchar",
 "Tezpur"],
 "Sikkim": ["Gangtok"],
 "Manipur": ["Imphal"],
 "Arunachal Pradesh": ["Itanagar"],
 "Lakshadweep": ["Kavaratti"],
 "Nagaland": ["Kohima"],
 "Goa": ["Panaji"],
 "Andaman and Nicobar Islands": ["Port Blair"],
 "Puducherry": ["Puducherry"],
 "Meghalaya": ["Shillong "],
 "Himachal Pradesh": ["Shimla"],
 "Dadra and Nagar Haveli": ["Silvassa"]};


loadStates();

function loadStates() {

	for (key in a) {
		var opt = document.createElement("option");
		opt.setAttribute("value", key);
		opt.innerText = key;
		document.getElementById("state").append(opt);
        document.getElementById("pincode").value = "";
        document.getElementById("remark").value = "";
	}
}

function PopulateCities() {

	var state = document.getElementById("state").value;
    document.getElementById("pincode").value = "";
    document.getElementById("remark").value = "";

	if (state == "Delhi") {
		document.getElementById("remark").style.visibility = "visible";
	} else {
        document.getElementById("remark").style.visibility = "hidden";
    }

    document.getElementById("city").innerHTML = "";
	a[state].forEach(function(ele) {
		var opt = document.createElement("option");
		opt.setAttribute("value", ele);
		opt.innerText = ele;
		document.getElementById("city").append(opt);
	});

}

function Submit() {
	var state = document.getElementById("state").value;
	var city = document.getElementById("city").value;
	var pincode = document.getElementById("pincode").value;
	var remark = document.getElementById("remark").value;
	if (state == "" || city == "" || pincode == "" || (state == "Delhi" && remark == "")) {
        document.getElementById("stateout").innerText = `Incomplete data`;
        document.getElementById("cityout").innerText = ``;
        document.getElementById("pincodeout").innerText = ``;
        document.getElementById("remarkout").innerText = ``;
    } else {
        document.getElementById("stateout").innerText = `State : ${state}`;
        document.getElementById("cityout").innerText = `City : ${city}`;
        document.getElementById("pincodeout").innerText = `Pincode : ${pincode}`;
        console.log(remark);
        if (remark!="") {
            document.getElementById("remarkout").innerText = `Remark : ${remark}`;
            document.getElementById("remarkout").style.display="block";
        } else {
            document.getElementById("remarkout").innerText = ``;
            document.getElementById("remarkout").style.display="none";
        }
    }
	// console.log(state, city, pincode, remark);

	document.getElementById("modalwrap").style.display="block";
	document.getElementById("modal").style.display="block";
	document.getElementById("CloseButton").style.display="block";
}

function Close() {
	document.getElementById("modalwrap").style.display="none";
	document.getElementById("modal").style.display="none";
	document.getElementById("CloseButton").style.display="none";
}