const fourTable = "https://drive.google.com/uc?id=1ei4XYzvz0SuUhEKeiILWfFo5nfq00fVC";
const sixTable = "https://drive.google.com/uc?id=1V_N4-p18kObIChBtebHCNwulndVkA9Gd";
const eightTable = "https://drive.google.com/uc?id=1TwyXMEtjibyWxIbFPZJAjwLQD74gI_yA";

for (let i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        document.getElementById("even-four").innerHTML += `
        <img class="w-100" src="` + fourTable + `">
        <p>Table-`+ i + `</p>
        <button id="`+ i + `" type="button" class="btn" onclick="booked(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;
    }
    else {
        document.getElementById("odd-four").innerHTML += `
        <img class="w-100" src="` + fourTable + `">
        <p>Table-`+ i + `</p>
        <button id="`+ i + `" type="button" class="btn"  onclick="booked(${i})"data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;
    }
}

for (let i = 7; i <= 10;i++) {
    if (i % 2 == 0) {
        document.getElementById("even-six").innerHTML += `
        <img class="w-100" src="` + sixTable + `">
        <p>Table-`+ i + `</p>
        <button id="`+ i + `" type="button" class="btn"  onclick="booked(${i})"data-bs-toggle="modal" data-bs-target="#exampleModal" ">
        Book
        </button>`;
    }
    else {
        document.getElementById("odd-six").innerHTML += `
        <img class="w-100" src="` + sixTable + `">
        <p>Table-`+ i + `</p>
        <button id="`+ i + `" type="button" class="btn"  onclick="booked(${i})"data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;

    }
}

for (let i = 11; i <= 12; i++) {
    if (i % 2 == 0) {
        document.getElementById("even-eight").innerHTML += `
        <img class="w-100" src="` + eightTable + `">
        <p>Table-`+ i + `</p>
        <button id="`+ i + `" type="button" class="btn"  onclick="booked(${i})"data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Book
        </button>`;
    }
    else {
        document.getElementById("odd-eight").innerHTML += `
        <img class="w-100" src="` + eightTable + `">
        <p>Table-`+ i + `</p>
        <button id="`+ i + `" type="button" class="btn"  onclick="booked(${i})"data-bs-toggle="modal" data-bs-target="#exampleModal">
        Book
        </button>`;
    }
}

const book = [1,4,5,6,8,9,11];
function booking(){
    for (let table of book) {
        document.getElementById(table).classList.add("active","disabled");
    }
}
booking();

function booked(table){
    // let id = document.getElementById('exampleModal').parentNode.id;
    book.push(table);
    booking();
}

function confirmTable(id){
    document.getElementById(id).innerHTML += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body ">
                <p>Do you want to book the table?</p>
                <p>Anything special?</p>
                <ul>
                    <li>
                        <input type="checkbox" name="birthday" id=""> Birthday
                    </li>
                    <li>
                        <input type="checkbox" name="anniversary" id=""> Anniversary
                        </li>
                    <li>
                        <input type="checkbox" name="other" id=""> Other
                    </li>
                </ul>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn"  onclick="booked(${i})"data-bs-dismiss="modal">No</button>
                <button type="button" class="btn"  onclick="booked(${i})"data-bs-dismiss="modal" onclick="booked()">Yes</button>
            </div>
        </div>
    </div>
    </div>`;
}
