// let table = new DataTable('#tableID'); 
let currentPage = 1;

function goToPage(pageNumber) {
    // Update current page
    currentPage = pageNumber;

    // Update DataTable with new page data
    contactData();
}
$('#tableID_previous').on('click', '.prev', function() {
    console.log('prev');
if (currentPage > 1) {
    goToPage(currentPage - 1);
    }
});

$('#tableID_next').on('click', '.next', function() {
    goToPage(currentPage + 1);
});


let limit = 12;
let skip = 0;
let searchText = '';
let sortBy = '';
let sortOrder = ''

$(document).ready(function(){ 
 contactData();
});

$('#tableID_filter input').on('input', function () { 
    searchText = this.value;
    contactData();
});

let contactData = () => {
// let limit = isset($request->SHOW_ENTRIES) ? '&limit=' . $request->input('SHOW_ENTRIES') : '&limit=10';  

    $.ajax({
        url : 'api/v1/contact/search?name='+searchText+'&skip='+skip+'&limit='+limit+'&sort_by='+sortBy+'&sort_order='+sortOrder,
        method : 'get',
        // data : data,
        contentType: "application/json", 
        dataType: 'json',
        beforeSend: function(){ 
            $('#contactDataTBody').html('');
        },
        success : function(res){ 
            let dynamicData = appendInContactDataTBody(res);
            $('#contactDataTBody').html(dynamicData);
            new DataTable('#tableID')
        }

    });
}

let appendInContactDataTBody = (res) => { 
    let html = '';

    res.map(function (value, index) { 
    index ++;
    html += '<tr><th scope="row">' + index + '</th>';
    html += '<td>' + value.name + '</td>';
    html += '<td>' + value.email + '</td>';
    html += '<td> +91 ' + value.phone + '</td>';
    html += '</tr>'; 
});

return html;
}